import './FlexSlider.css';

import devushka from '../../images/devushka.jpg';
import derevia from '../../images/derevia.jpg';
import bereg from '../../images/bereg.jpg';
import gorod from '../../images/gorod.jpg';

function Flexslider() {
  return(
    <div className='flex-slider'>
      <h2 className='title flex-slider__section-title'>Панорама</h2>
      <p className='description flex-slider__section-description'>При наведение на изображение, оно раскроется вместе с описанием.</p>
      <div className='flex-slider__container'>
        <article className='flex-slider__slaid'>
          <img className='flex-slider__img' src={devushka} alt='devushka'></img>
          <h3 className='flex-slider__title'>Звёздапад</h3>
          <p className='flex-slider__description'>Ночное небо прекрасно при свете звёзд.</p>
        </article>
        <article className='flex-slider__slaid'>
          <img className='flex-slider__img' src={derevia} alt='derevia'></img>
          <h3 className='flex-slider__title'>Деревья по берегам реки</h3>
          <p className='flex-slider__description'>Они играют важную роль в экологии реки.</p>
        </article>
        <article className='flex-slider__slaid'>
          <img className='flex-slider__img' src={bereg} alt='bereg'></img>
          <h3 className='flex-slider__title'>Забытый причал</h3>
          <p className='flex-slider__description'>Некоторые вещи со временем становятся только лучше.</p>
        </article>
        <article className='flex-slider__slaid'>
          <img className='flex-slider__img' src={gorod} alt='gorod'></img>
          <h3 className='flex-slider__title'>Огни большого города</h3>
          <p className='flex-slider__description'>Место где жизнь не останавливается.</p>
        </article>
      </div>
    </div>
  );
}

export default Flexslider;
