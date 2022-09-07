import React from 'react'
import { Meteor } from 'meteor/meteor'

export const LoginWithGithub = () => {
  const handleGithubLogin = () => {
    Meteor.loginWithGithub({
      requestPermissions: ['user'],
      loginStyle: 'popup',
    })
  }

  return (
    <button type="button" className="w-full " onClick={handleGithubLogin}>
      <img
        alt="GithubLogin"
        src="https://img.shields.io/badge/-Login%20With%20Github-black?style=flat-square&logo=github&amp;logoColor=white"
        className='w-full'
      />
    </button>
  )
}
