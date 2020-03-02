import React, { useState, useEffect } from 'react';
import './Categories.css';
import AppSkelet from '../../components/AppSkelet/AppSkelet';
import CategoryList from '../../components/CategoryList/CategoryList';
import Test from '../Test/Test';

const Categories = () => {
  const [categoryClicked, setCategoryClicked] = useState(false);
  const [testType, setTestType] = useState(0);
  const [categories, setCategories] = useState();

  useEffect(() => {
    const getQuestions = async type => {
      await fetch('http://localhost:5000/category')
        .then(response => response.json())
        .then(json => setCategories(json));
    };
    getQuestions();
  }, []);

  const runTest = type => {
    setCategoryClicked(true);
    setTestType(type);
  };

  if (typeof categories === 'undefined') return <div>LOADING...</div>;
  else {
    if (!categoryClicked)
      return (
        <>
          <AppSkelet
            content__header={<div>CATEGORIES</div>}
            content__main={
              <div className="category__list">
                <CategoryList categories={categories} runTest={runTest} />
              </div>
            }
          />
        </>
      );
    else
      return (
        <>
          <Test type={testType} />
        </>
      );
  }
};

export default Categories;
