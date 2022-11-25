import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Navigationbar from './components/Navigationbar/Navigationbar';
import Sale from './components/Sale/Sale';

function App() {
  return (
    <div className="App">
    <Navigationbar />
    <Banner />
    <Sale />
    <Footer />
    </div>
  );
}

export default App;
