import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Furniture from './components/Furniture/Furniture';
import HotDeals from './components/HotDeals/HotDeals';
import Navigationbar from './components/Navigationbar/Navigationbar';
import Review from './components/Review/Review';
import Sale from './components/Sale/Sale';
import SearchedItems from './components/SearchedItems/SearchedItems';
import SpecialOffer from './components/SpecialOffer/SpecialOffer';

function App() {
  return (
    <div className="App">
    <Navigationbar />
    <Banner />
    <Sale />
    <HotDeals />
    <SearchedItems />
    <SpecialOffer />
    <Furniture />
    <Review />
    <Footer />
    </div>
  );
}

export default App;
