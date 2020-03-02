import React from 'react';
import { Link } from 'react-router-dom';
import AppSkelet from '../AppSkelet/AppSkelet';

const Home = () => {
  return (
    <div>
      <AppSkelet
        content__left={
          <>
            <Link to="/test60" className="btn">
              TEST60
            </Link>
            <Link to="/categories" className="btn">
              CATEGORIES
            </Link>
            <Link to="/allscores" className="btn">
              ALL SCORES
            </Link>
          </>
        }
      />
    </div>
  );
};

export default Home;
