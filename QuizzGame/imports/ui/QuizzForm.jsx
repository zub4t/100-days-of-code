import React, { useState, useEffect } from 'react'
import Question from './Question.jsx'
const getQuestion = (callback) => {
  const data = {
    apiKey: 'CrcdCxipK6RXIGzg8hVanqi9Z1JTTcdIpYGMYeID',
    limit: '1',
    category: 'Linux',
  }
  let FormBody = []
  for (key in data) {
    let encodeKey = encodeURIComponent(key)
    let encodeData = encodeURIComponent(data[key])
    FormBody.push(`${encodeKey}=${encodeData}`)
  }

  fetch(`https://quizapi.io/api/v1/questions?${FormBody.join('&')}`, {
    method: 'GET',
  })
    .then((response) => {
      return response.json()
    })
    .then((JSONQuestion) => {
      callback(JSONQuestion[0])
    })
}

export const QuizzForm = ({ setR, setW }) => {
  window.document.addEventListener('onload', () => {})
  useEffect(() => {
    if (!question) getQuestion(setQuestion)
 
  })
  const [question, setQuestion] = useState(undefined)
  const [validate, setValidate] = useState(false)
  verify = () => {
    let correct = true
    let template = []
    Object.keys(question.correct_answers).forEach((element) => {
      template.push(question.correct_answers[element])
    })
    document
      .querySelectorAll('#possibleAnwsers input[type=checkbox]')
      .forEach((element, index) => {
        correct = element.checked === eval(template[index]) && correct
        element.checked = false
      })

    if (correct) {
      //alert('You are correct !! 🎊🎉✨')
      getQuestion(setQuestion)
      setR()
    } else {
      setW()
    }
  }

  return (
    <div>
      <Question className="container" question={question} verify={verify} />
    </div>
  )
}
