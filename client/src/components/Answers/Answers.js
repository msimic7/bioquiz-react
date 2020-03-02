import React from 'react';
import './Answers.css';

const Answers = ({ answers, checkAnswer, questionId }) => {
  return (
    <>
      {answers.map((answer, i) => {
        return (
          <div className="answer">
            <input
              id={`answer${questionId}${i}`}
              type="radio"
              value={i}
              className="answer__radio"
              name={`rad${questionId}`}
              onChange={e => checkAnswer(e.target.value)}
            />
            <label htmlFor={`answer${questionId}${i}`}>{answer}</label>
          </div>
        );
      })}
    </>
  );
};

export default Answers;
