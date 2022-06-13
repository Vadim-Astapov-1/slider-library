import './App.css';
import Main from '../Main/Main';
import FlexSlider from '../FlexSlaider/FlexSlider';
import SlowSlider from '../SlowSlaider/SlowSlider';
import LongSlider from '../LongSlaider/LongSlider';

function App() {
  return (
    <div className="app">
      <header className='header'></header>
      <Main>
        <FlexSlider />
        <SlowSlider />
        <LongSlider />
      </Main>
    </div>
  );
}

export default App;
