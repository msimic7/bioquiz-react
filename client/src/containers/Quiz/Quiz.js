import React, { useState } from 'react';
import './Quiz.css';
import AppSkelet from '../../components/AppSkelet/AppSkelet';
import Answers from '../../components/Answers/Answers';
import WrongQuestionList from '../../components/WrongQuestionList/WrongQuestionList';

const Quiz = ({ questions }) => {
  const [questionId, setQuestionId] = useState(questions[0]._id);
  const [question, setQuestion] = useState(questions[0].question);
  const [answers, setAnswers] = useState(questions[0].answers);
  const [correctAnswer, setCorrectAnswer] = useState(
    questions[0].correctAnswer
  );

  const [currQuestion, setCurrQuestion] = useState(0);
  const [questionAmount] = useState(questions.length);

  const [answerSubmitted, setAnswerSubmitted] = useState(false);
  const [answer, setAnswer] = useState(-1);

  const [score, setScore] = useState(0);
  const [wrongQuestions, setWrongQuestions] = useState([]);

  const checkAnswer = e => {
    setAnswer(parseInt(e));
  };

  const submitAnswer = () => {
    if (answer > -1) {
      if (answer === correctAnswer) {
        setScore(score + 1);
      } else {
        setWrongQuestions(wrongQuestions => [...wrongQuestions, questionId]);
      }
      setAnswerSubmitted(true);
      //lock radio buttons TODO
    }
  };

  const nextQuestion = i => {
    if (i < questionAmount) {
      setQuestionId(questions[i]._id);
      setQuestion(questions[i].question);
      setAnswers(questions[i].answers);
      setCorrectAnswer(questions[i].correctAnswer);
    }
    setCurrQuestion(i);
    setAnswerSubmitted(false);
    setAnswer(-1);
  };

  if (currQuestion === questionAmount) {
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
  } else
    return (
      <>
        <AppSkelet
          content__left={<div className="question__number">1.</div>}
          content__header={<div className="question">{question}</div>}
          content__main={
            <div className="quiz__answers">
              <Answers
                answers={answers}
                checkAnswer={checkAnswer}
                questionId={questionId}
              />
            </div>
          }
          btn__action={
            answerSubmitted ? (
              <div
                className="btn__next"
                onClick={() => nextQuestion(currQuestion + 1)}
              >
                NEXT
              </div>
            ) : (
              <div className="btn__submit" onClick={() => submitAnswer()}>
                SUBMIT
              </div>
            )
          }
        />
      </>
    );
};

export default Quiz;
