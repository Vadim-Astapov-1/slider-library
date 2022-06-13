import './App.css';
import Main from '../Main/Main';
import FlexSlaider from '../FlexSlaider/FlexSlaider';
import SlowSlaider from '../SlowSlaider/SlowSlaider';
import LongSlaider from '../LongSlaider/LongSlaider';

function App() {
  return (
    <div className="app">
      <header className='header'></header>
      <Main>
        <FlexSlaider />
        <SlowSlaider />
        <LongSlaider />
      </Main>
    </div>
  );
}

export default App;
