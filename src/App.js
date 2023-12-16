import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header.jsx';
import StandWithUkraine from './components/StandWithUkraine/StandWithUkraine';
import TradeNow from './components/TradeNow/TradeNow';
import AboutUs from './components/AboutUs/AboutUs';
import AboutMarketPlace from './components/AboutMarketPlace/AboutMarketPlace';
import FaceToFace from './components/FaceToFace/FaceToFace';
import MobileApp from './components/MobileApp/MobileApp';
import CashOutAndDeposit from './components/CashoutAndDeposit/CashOutAndDeposit';
import TradingApi from './components/TradingApi/TradingApi';
import MythicalSaga from './components/MythicalSaga/MythicalSaga';
import GameDevs from './components/GameDevs/GameDevs';
import Quote from './components/Quote/Quote';
import Founders from './components/Founders/Founders';
import News from './components/News/News';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <div className='content-wrapper'>
      <StandWithUkraine />
      <TradeNow />
      <AboutUs />
      <AboutMarketPlace />
      <FaceToFace />
      <MobileApp />
      <CashOutAndDeposit />
      <TradingApi />
      <MythicalSaga />
      <GameDevs />
      <Quote />
      <Founders />
      <News />
      <Footer />
      </div>
    </div>
  );
}

export default App;
