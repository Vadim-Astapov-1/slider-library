import './FlexSlaider.css';

import devushka from '../../images/devushka.jpg';
import derevia from '../../images/derevia.jpg';
import bereg from '../../images/bereg.jpg';
import gorod from '../../images/gorod.jpg';

function FlexSlaider() {
  return(
    <div className='flex-slaider'>
      <h2 className='flex-slaider__section-title'>Панорама</h2>
      <p className='flex-slaider__section-description'>При наведение на изображение, оно раскроется вместе с описанием.</p>
      <div className='flex-slaider__container'>
        <article className='flex-slaider__slaid'>
          <img className='flex-slaider__img' src={devushka} alt='devushka'></img>
          <h3 className='flex-slaider__title'>Звёздапад</h3>
          <p className='flex-slaider__description'>Ночное небо прекрасно при свете звёзд.</p>
        </article>
        <article className='flex-slaider__slaid'>
          <img className='flex-slaider__img' src={derevia} alt='derevia'></img>
          <h3 className='flex-slaider__title'>Деревья по берегам реки</h3>
          <p className='flex-slaider__description'>Они играют важную роль в экологии реки.</p>
        </article>
        <article className='flex-slaider__slaid'>
          <img className='flex-slaider__img' src={bereg} alt='bereg'></img>
          <h3 className='flex-slaider__title'>Забытый причал</h3>
          <p className='flex-slaider__description'>Некоторые вещи со временем становятся только лучше.</p>
        </article>
        <article className='flex-slaider__slaid'>
          <img className='flex-slaider__img' src={gorod} alt='gorod'></img>
          <h3 className='flex-slaider__title'>Огни большого города</h3>
          <p className='flex-slaider__description'>Место где жизнь не останавливается.</p>
        </article>
      </div>
    </div>
  );
}

export default FlexSlaider;
