import './SlowSlider.css';

import most from '../../images/most.jpg';
import ozero from '../../images/ozero.jpg';
import auto from '../../images/auto.jpg';
import { useEffect, useState } from 'react';

function SlowSlaider() {
  const [positionSlide, setPositionSlide] = useState(2);

  function changingSlideOne(evt) {
    if(evt.target.checked) {
      setPositionSlide(1);
    }
  }

  function changingSlideTwo(evt) {
    if(evt.target.checked) {
      setPositionSlide(2);
    }
  }

  function changingSlideThree(evt) {
    if(evt.target.checked) {
      setPositionSlide(3);
    }
  }

  function handleOnClick() {
    if(positionSlide === 3) {
      return setPositionSlide(1);
    }

    setPositionSlide(positionSlide + 1);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      handleOnClick();
    }, 6000);

    return () => clearInterval(interval);
  });

  return(
    <div className='slow-slider'>
      <h2 className='title slow-slider__section-title'>Слайдер с точками</h2>
      <p className='description slow-slider__section-description'>Слайды переключаются путем нажатия на слайдер или чекбоксы ниже. Также они меняются со временем.</p>
      <div className='slow-slider__container' onClick={handleOnClick}>
        <div className={`slow-slider__list-img ${positionSlide === 1 ? 'slow-slider__list-img_position-one' : ''} ${positionSlide === 2 ? 'slow-slider__list-img_position-two' : ''} ${positionSlide === 3 ? 'slow-slider__list-img_position-three' : ''}`}>
          <img className='slow-slider__img' alt='ozero' src={ozero}></img>
          <img className='slow-slider__img' alt='most' src={most}></img>
        <img className='slow-slider__img' alt='auto' src={auto}></img>
        </div>
      </div>
      <div className='slow-slider__btns'>
        <input type='checkbox' className='slow-slider__btn' onChange={changingSlideOne} checked={true && positionSlide === 1}></input>
        <input type='checkbox' className='slow-slider__btn' onChange={changingSlideTwo} checked={true && positionSlide === 2}></input>
        <input type='checkbox' className='slow-slider__btn' onChange={changingSlideThree} checked={true && positionSlide === 3}></input>
      </div>
    </div>
  );
}

export default SlowSlaider;
