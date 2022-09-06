import React from 'react'
import { QuizzForm } from './QuizzForm.jsx'
import Board from './Board.jsx'
import { LoginWithGithub } from './LoginWithGithub.jsx'
import { useTracker } from 'meteor/react-meteor-data'
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
  const user = useTracker(() => Meteor.user())
  console.log(user)
  return (
    <>{user ? <Board QuizzForm={main}  /> : <LoginWithGithub />}</>
  )
}
