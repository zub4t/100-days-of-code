import React from 'react'
//
export default ({ question, verify }) => {
  return (
    <>
      {console.log(question)}
      {question ? (
        <>
          <h4>{question.question}</h4>
          <ul id="possibleAnwsers">
            {Object.keys(question.answers).map((key) => (
              <>
                <div
                  className="row"
                  style={{
                    display: question.answers[key] ? 'flex' : 'none',
                  }}
                >
                  <li key={key}>{question.answers[key]}</li>
                  <input key={`${key}_checkbox`} type={'checkbox'}></input>
                </div>
              </>
            ))}
          </ul>
          <button onClick={() => verify()}>Validate Answer</button>
        </>
      ) : (
        <h4>Waiting</h4>
      )}
    </>
  )
}
