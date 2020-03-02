import React from 'react';

const Score = ({ wrongQuestions, score, questionAmount }) => {
  return (
    <>
      <AppSkelet
        content__header={
          <div>
            YOUR SCORE IS {score} / {questionAmount}
          </div>
        }
        content__main={<WrongQuestionList wrongQuestions={wrongQuestions} />}
      />
    </>
  );
};

export default Score;
