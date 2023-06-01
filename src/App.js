import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';


const App = () => {
  return (
    <div className="App">
      <Header />
      <Navbar />
        <div className='App-pages'>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
      <Footer />  
    </div>
  );
}

export default App;
