import React from 'react'
//
export default ({ question, verify }) => {
  return (
    <>
      {question ? (
        <>
          <h4 className="mb-5 text-justify">{question.question}</h4>
          <div className=" flex  content-center justify-center mb-5">
            <div>
              <ul>
                {Object.keys(question.answers).map((key, index) => (
                  <div
                    key={`${key}_1_div`}
                    style={{
                      display: question.answers[key] ? 'flex' : 'none',
                      backgroundColor: index % 2 == 0 ? '#f2f2f2' : 'white',
                    }}
                  >
                    <li className="h-8 text-xs" key={`${key}_1_li`}>
                      {question.answers[key]}
                    </li>
                  </div>
                ))}
              </ul>
            </div>
            <div id="possibleAnwsers">
              {Object.keys(question.answers).map((key, index) => (
                <div
                  key={`${key}_2_div`}
                  className="flex flex-1 flex-row-reverse w-20"
                  style={{
                    display: question.answers[key] ? 'flex' : 'none',
                    backgroundColor: index % 2 == 0 ? '#f2f2f2' : 'white',
                  }}
                >
                  <input
                    className="h-8"
                    key={`${key}_2_checkbox`}
                    type={'checkbox'}
                  ></input>
                </div>
              ))}
            </div>
          </div>
          <button
            className="w-full bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
            onClick={() => verify()}
          >
            Validate Answer
          </button>
        </>
      ) : (
        <h4>Waiting</h4>
      )}
    </>
  )
}
