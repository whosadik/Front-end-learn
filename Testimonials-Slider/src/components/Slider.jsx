import React, { useState } from "react";
import './Slider.css';
import sliders from './sliders.js';
import Next from '../images/icon-next.svg';
import Prev from '../images/icon-prev.svg';
import Bg from '../images/pattern-bg.svg';
import Curve from '../images/pattern-curve.svg';
import Quotes from '../images/pattern-quotes.svg';

function Slider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState('next');

  const total = sliders.length;

  const next = () => {
    setDirection('next');
    setCurrent((prev) => (prev + 1) % total);
  };

  const prev = () => {
    setDirection('prev');
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  return (
    <div className="slider-background">
      <img src={Curve} className="bg-img curve" alt="" />
      <img src={Bg} className="bg-img dots" alt="" />
      <img src={Quotes} className="bg-img quotes" alt="" />

      <div className={`slider-content slide-${direction}`} key={current}>
        <img src={sliders[current].img} alt={sliders[current].description} className="user-photo" />
        <p className="image-text">“ {sliders[current].text} ”</p>
        <p className="name">{sliders[current].name}</p>
        <p className="prof">{sliders[current].prof}</p>

        <div className="btns">
          <button onClick={prev}><img src={Prev} alt="Previous" /></button>
          <button onClick={next}><img src={Next} alt="Next" /></button>
        </div>
      </div>
    </div>
  );
}

export default Slider;
