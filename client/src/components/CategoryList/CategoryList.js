import React from 'react';

const CategoryList = ({ categories, runTest }) => {
  return (
    <>
      {categories.map((category, i) => {
        return (
          <div className="btn" onClick={() => runTest(category._id)}>
            {category.name}
          </div>
        );
      })}
    </>
  );
};

export default CategoryList;
