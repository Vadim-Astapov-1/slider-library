import { useEffect, useState } from 'react';
import './LongSlider.css';

import { dataLongSlaider } from '../../utils/constants';

function LongSlaider() {
  const [sliders, setSliders] = useState([]);
  const [coordinates, setСoordinates] = useState(0);
  const [isAnimationActive, setIsAnimationActive] = useState(false);
  // Защита при перелистывании
  const [btnDisabled, setBtnDisabled] = useState(false);

  const partSlider = sliders.slice(0, 4);
  const partSliderTwo = sliders.slice(4, 8);

  function backSlide() {
    setBtnDisabled(true);
    setIsAnimationActive(true);
    setСoordinates(-960);

    // После анимации перестроится массив и вернутся начальные координаты.
    setTimeout(() => {
      setBtnDisabled(false);
      setIsAnimationActive(false);
      setSliders(partSliderTwo.concat(partSlider));
      setСoordinates(0);
    }, 1500);
  }

  // Сначало перестраиваем массив, потом смотрим анимацию.
  function nextSlide() {
    const promise = new Promise((resolve, reject) => {
      setBtnDisabled(true);
      setIsAnimationActive(false);

      setSliders(partSliderTwo.concat(partSlider));

      setСoordinates(-960)

      resolve();
    });

    promise
    .then(() => {
      // Асинхронный код ради этих двух строк, чтобы после перестройки массива произошло перелистывание.
      setIsAnimationActive(true);
      setСoordinates(0)
    }).then(() => {
      setTimeout(() => {
        setBtnDisabled(false);
        setIsAnimationActive(false);
      }, 1500);
    })
  }

  useEffect(() => {
    setSliders(dataLongSlaider);
  }, []);

  return(
    <div className='long-slider'>
      <h2 className='title long-slider__section-title'>Слайдер - карусель</h2>
      <p className='description long-slider__section-description'>Бесконечная прокрутка изображений.</p>
      <div className='long-slider__container'>
        <div className={`long-slider__list-img ${isAnimationActive ? 'long-slider__list-img_transform_active' : ''}`} style={{transform: `translateX(${coordinates}px)`}}>
          {sliders.map((item) => {
            return <img className='long-slider__img' key={item.name} src={item.img} alt={item.name}></img>
          })}
        </div>
        <button className='long-slider__btn long-slider__btn_postion_left' onClick={backSlide} disabled={btnDisabled}></button>
        <button className='long-slider__btn long-slider__btn_postion_right' onClick={nextSlide} disabled={btnDisabled}></button>
      </div>
    </div>
  );
}

export default LongSlaider;
