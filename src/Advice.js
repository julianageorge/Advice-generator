import React, { useState } from 'react';
import dice from './icon-dice.svg';
import dvidor from './pattern-divider-desktop.svg';
import './Master.css';

const Advice = () => {
  const [advice, setAdvice] = useState('Click dice to get advice!');
  const [adviceId, setAdviceId] = useState('');

  const fetchAdvice = () => {
    fetch('https://api.adviceslip.com/advice')
      .then((response) => response.json())
      .then((data) => {
        const id = data.slip.id;
        const adviceText = data.slip.advice;
        setAdviceId(`Advice #${id}`);
        setAdvice(`"${adviceText}"`);
      })
      .catch((error) => console.error('Error fetching advice:', error));
  };

  return (
    <div className="container">
      <div id="advice-box">
        <h3 id="id">{adviceId}</h3>
        <h1 id="advice">{advice}</h1>
        <div id="bottom">
        <img src={dvidor} id='dvidimg'/>
      <button id="dice" onClick={fetchAdvice}><img src={dice}/></button></div>
      </div>
    </div>
  );
};

export default Advice;
