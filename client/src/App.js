import React from 'react';
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home';
import Test from './containers/Test/Test';
import Categories from './containers/Categories/Categories';
import AllScores from './containers/AllScores/AllScores';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/test60">
          <Test type={''} />
        </Route>
        <Route path="/categories">
          <Categories />
        </Route>
        <Route path="/allscores">
          <AllScores />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
