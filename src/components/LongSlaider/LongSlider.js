import { useEffect, useState } from 'react';
import './LongSlider.css';

import { dataLongSlaider } from '../../utils/constants';

function LongSlaider() {
  const [sliders, setSliders] = useState([]);
  const [coordinates, setСoordinates] = useState(0);
  const [isAnimationActive, setIsAnimationActive] = useState(false);
  // Защита при перелистывании
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);

  const partSlider = sliders.slice(0, 4);
  const partSliderTwo = sliders.slice(4, 8);

  function backSlide() {
    setIsBtnDisabled(true);
    setIsAnimationActive(true);
    setСoordinates(-960);

    // После анимации перестроится массив и вернутся начальные координаты.
    setTimeout(() => {
      setIsBtnDisabled(false);
      setIsAnimationActive(false);
      setSliders(partSliderTwo.concat(partSlider));
      setСoordinates(0);
    }, 1500);
  }

  // Сначало перестраиваем массив, потом смотрим анимацию.
  function nextSlide() {
    setIsBtnDisabled(true);
    setIsAnimationActive(false);
    setSliders(partSliderTwo.concat(partSlider));
    setСoordinates(-960)

    // fix: bug что при очень быстрых кликах на правый скролл, слайды переключались без анимации.
    setTimeout(() => {
      setIsAnimationActive(true);
      setСoordinates(0)
    }, 0);

    setTimeout(() => {
      setIsBtnDisabled(false);
      setIsAnimationActive(false);
    }, 1500);
  }

  // Первая версия с bug.
  //function nextSlide() {
    //const promise = new Promise((resolve, reject) => {
      //setIsBtnDisabled(true);
      //setIsAnimationActive(false);

      //setSliders(partSliderTwo.concat(partSlider));

      //setСoordinates(-960)

      //resolve();
    //});

    //promise
    //.then(() => {
      //setIsAnimationActive(true);
      //setСoordinates(0)
    //}).then(() => {
      //setTimeout(() => {
        //setIsBtnDisabled(false);
        //setIsAnimationActive(false);
      //}, 1500);
    //})
  //}

  useEffect(() => {
    setSliders(dataLongSlaider);
  }, []);

  return(
    <div className='long-slider'>
      <h2 className='title long-slider__section-title'>Слайдер - карусель</h2>
      <p className='description long-slider__section-description'>Бесконечная прокрутка изображений.</p>
      <div className='long-slider__container'>
        <div className='long-slider__display'>
          <div className={`long-slider__list-img ${isAnimationActive ? 'long-slider__list-img_transform_active' : ''}`} style={{transform: `translateX(${coordinates}px)`}}>
            {sliders.map((item) => {
              return <img className='long-slider__img' key={item.name} src={item.img} alt={item.name}></img>
            })}
          </div>
        </div>
        <button className='long-slider__btn long-slider__btn_postion_left' onClick={backSlide} disabled={isBtnDisabled}></button>
        <button className='long-slider__btn long-slider__btn_postion_right' onClick={nextSlide} disabled={isBtnDisabled}></button>
      </div>
    </div>
  );
}

export default LongSlaider;
