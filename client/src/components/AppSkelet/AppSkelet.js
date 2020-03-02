import React from 'react';
import './AppSkelet.css';

const AppSkelet = props => {
  return (
    <div className="AppSkelet">
      <div className="content__left">{props.content__left}</div>
      <div className="content">
        <div className="content__header">{props.content__header}</div>
        <div className="content__main">{props.content__main}</div>
      </div>
      <div className="btn__action">{props.btn__action}</div>
    </div>
  );
};

export default AppSkelet;
