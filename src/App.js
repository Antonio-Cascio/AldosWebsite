import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // Home page
import Menu from './pages/Menu';
import About from './pages/About';
import Events from './pages/Events';
import Navbar from './Components/Navbar';
import PaneVino from './pages/PaneVino';
import Footer from './Components/Footer';
import BarMenu from './pages/BarMenu';
import CocktailMenu from './pages/CocktailMenu';
import GiftCards from './pages/GiftCards.jsx';
import EventDinner from './pages/EventDinner';
import EventLunch from './pages/EventLunch';
import WineList from './pages/WineList';
import DessertDrinks from './pages/DessertDrinks';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/PaneVino" element={<PaneVino />} />
        <Route path="/GiftCards" element={<GiftCards />} />
        <Route path="/EventDinner" element={<EventDinner />} /> 
        <Route path="/EventLunch" element={<EventLunch />} />
        <Route path="/WineList" element={<WineList />} />
        <Route path="/BarMenu" element={<BarMenu />} />
        <Route path="/CocktailMenu" element={<CocktailMenu />} />
        <Route path="/DessertDrinks" element={<DessertDrinks />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;   