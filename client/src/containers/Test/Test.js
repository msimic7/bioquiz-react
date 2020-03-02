import React, { useEffect, useState } from 'react';
import Quiz from '../Quiz/Quiz';

const Test = ({ type }) => {
  const [questions, setQuestions] = useState();

  useEffect(() => {
    const url = `http://localhost:5000/questions/${type}`;

    const getQuestions = async url => {
      await fetch(url)
        .then(response => response.json())
        .then(json => setQuestions(json));
    };
    getQuestions(url);
  }, []);

  if (typeof questions !== 'undefined')
    return (
      <div>
        <Quiz questions={questions} />
      </div>
    );
  else {
    return <div>LOADING...</div>;
  }
};

export default Test;
