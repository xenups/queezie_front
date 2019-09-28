import React from 'react'

const Questions = ({ questions }) => {
  return (
    <div className="container">
        <div className="col-xs-8">
        <h1>Questions Cards</h1>
        {questions.map((questions) => (
          <div className="card">
           <div className="card-body">
               <h5 className="card-title">{questions.question_context}</h5>
              <h6 className="card-subtitle mb-2 text-muted">
              {questions.userId}             
              </h6>
            </div>
          </div>
        ))}
        </div>
       </div>
  )
};

export default Questions