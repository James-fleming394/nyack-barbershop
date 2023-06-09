import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Services from './pages/services/Services';
import Staff from './pages/staff/Staff';
import Gallery from './pages/gallery/Gallery';


const App = () => {
  return (
    <div className="App">
      <Header />
      <Navbar />
        <div className='App-pages'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/services' element={<Services />} />
            <Route path='/staff' element={<Staff />} />
            <Route path='/gallery' element={<Gallery />} />
          </Routes>
        </div>
      <Footer />  
    </div>
  );
}

export default App;
