import { useEffect, useState } from 'react';
import './LongSlider.css';

import { dataLongSlaider } from '../../utils/constants';

function LongSlaider() {
  const [sliders, setSliders] = useState([]);
  const [koordination, setKoordination] = useState(0);
  const [animation, setAnimation] = useState(false);
  const [btnDisabled, setBtnDisabled] = useState(false);
  let styleKo = {
    transform: `translateX(${koordination}px)`,
  };

  // готово
  function backSlide() {
    setBtnDisabled(true);
    setAnimation(true);
    setKoordination(-960);

    setTimeout(() => {
      let partSlide = sliders.slice(0, 4);
      let partSlideTwo = sliders.slice(4, 8);

      setAnimation(false);
      setSliders(partSlideTwo.concat(partSlide));
      setKoordination(0);
      setBtnDisabled(false);
    }, 1500);
  }

  function nextSlide() {
    setBtnDisabled(true);
    setAnimation(false);
    setKoordination(-960);

    let partSlide = sliders.slice(0, 4);
    let partSlideTwo = sliders.slice(4, 8);
    setSliders(partSlideTwo.concat(partSlide));

    setTimeout(() => {
      setAnimation(true);
      setKoordination(0)
    }, 1);

    setTimeout(() => {
      setAnimation(false);
      setBtnDisabled(false);
    }, 1500);
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
