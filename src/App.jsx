import React from 'react';
import reactImg from './images/react-img.jpg';

const App = ({ title }) => {
  return (
    <div>
    <div className="bg__img"></div>
      <h1>{title}</h1>
      <img src={reactImg} alt="React Img" width="250"/> 
    </div>
  );
};

export default App;