import "./App.css";
import ProductBar from "./components/ProductBar/ProductBar";
import CarousalRendering from "./components/carousal/CarousalRendering";
import Fotter from "./components/footer/Footer";
import LowerFooter from "./components/footer/LowerFooter";
import Header from "./components/header/Header";
import MainNav from "./components/mainNavbar/MainNav";
import Navbar from "./components/navbar/Navbar";
import NewsSletter from "./components/newsSletter/NewsSletter";
import ProductCard from "./components/productCard/ProductCard";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <MainNav />
      <CarousalRendering />
      <ProductBar />
      <ProductCard/>
      <NewsSletter/>
      <Fotter />
      <LowerFooter />
    </div>
  );
}

export default App;
