import React, { useState, useEffect } from 'react'
import '/imports/api/methods'
import { Meteor } from 'meteor/meteor'
import { mount } from 'react-mounter'

export default ({ QuizzForm, data }) => {
  const [rGuess, setRGuess] = useState(0)
  const [wGuess, setWGuess] = useState(0)
  useEffect(() => {
    if (!data.first) {
      setRGuess(data.rGuess)
      setWGuess(data.wGuess)
      data.first = 1
    } else {
      Meteor.call('leaderboard.action', { rGuess, wGuess })
    }
  })
  return (
    <>
      <div className=" text-5xl w-full container flex justify-between">
        <span style={{ color: 'red' }}>{wGuess}</span>
        <span style={{ color: 'blue' }}>{rGuess}</span>
      </div>
      {mount(QuizzForm, {
        setW: () => {
          setWGuess(wGuess + 1)
        },
        setR: () => {
          setRGuess(rGuess + 1)
        },
      })}
    </>
  )
}
