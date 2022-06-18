import { useEffect, useState } from 'react';
import './LongSlider.css';

import { dataLongSlaider } from '../../utils/constants';

function LongSlaider() {
  const [sliders, setSliders] = useState([]);
  const [koordination, setKoordination] = useState(0);
  const [animation, setAnimation] = useState(false);
  // Защита при перелистывании
  const [btnDisabled, setBtnDisabled] = useState(false);

  let styleKo = {
    transform: `translateX(${koordination}px)`,
  };

  function backSlide() {
    setBtnDisabled(true);
    setAnimation(true);
    setKoordination(-960);

    // После анимации перестроится массив и вернутся начальные координаты.
    setTimeout(() => {
      let partSlide = sliders.slice(0, 4);
      let partSlideTwo = sliders.slice(4, 8);

      setAnimation(false);
      setSliders(partSlideTwo.concat(partSlide));
      setKoordination(0);
      setBtnDisabled(false);
    }, 1500);
  }

  // Сначало перестраиваем массив, потом смотрим анимацию.
  function nextSlide() {
    const promise = new Promise((resolve, reject) => {
      setBtnDisabled(true);
      setAnimation(false);
      setKoordination(-960);

      let partSlide = sliders.slice(0, 4);
      let partSlideTwo = sliders.slice(4, 8);
      setSliders(partSlideTwo.concat(partSlide));

      resolve();
    });

    promise
    .then(() => {
      // Асинхронный код ради этих двух строк, чтобы после перестройки массива произошло перелистывание.
      setAnimation(true);
      setKoordination(0)
    }).then(() => {
      setTimeout(() => {
        setAnimation(false);
        setBtnDisabled(false);
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
        <div className={`long-slider__list-img ${animation ? 'long-slider__list-img_transition_active' : ''}`} style={styleKo}>
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
