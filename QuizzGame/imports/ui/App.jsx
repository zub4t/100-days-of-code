import React from 'react'
import { QuizzForm } from './QuizzForm.jsx'
import Board from './Board.jsx'
import { LoginWithGithub } from './LoginWithGithub.jsx'
import { useTracker } from 'meteor/react-meteor-data'
import LeaderBoard from '../collections/leaderboard'

const main = ({ setR, setW }) => {
  return (
    <>
      <h1 className="text-3xl text-indigo-800 text-center mb-8">
        Quizz Game #100DayOfCode-#01
      </h1>
      <QuizzForm setR={setR} setW={setW} />
    </>
  )
}
export const App = () => {
  const { user, data } = useTracker(() => {
    if (!Meteor.user()) {
      return { undefined, undefined }
    }
    const user = Meteor.user()
    const handler = Meteor.subscribe('board')

    if (!handler.ready()) {
      return { undefined, undefined }
    }
    let data
    if (LeaderBoard.find({ userId: user._id }).count() === 0) {
      data = { userId: user._id, rGuess: 0, wGuess: 0 }
      return { user, data }
    } else {
      data = LeaderBoard.find({ userId: user._id }).fetch()[0]
      return { user, data }
    }
  })
  return (
    <>{user ? <Board QuizzForm={main} data={data} /> : <LoginWithGithub />}</>
  )
}
