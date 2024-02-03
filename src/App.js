import './App.css';
import ProductBar from './components/ProductBar/ProductBar';
import CarousalRendering from './components/carousal/CarousalRendering';
import Header from './components/header/Header';
import MainNav from './components/mainNavbar/MainNav';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <MainNav />
      <CarousalRendering />
      <ProductBar/>
    </div>
  );
}

export default App;
