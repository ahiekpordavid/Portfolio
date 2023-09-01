import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Portfoilo from './pages/Portfoilo/Portfoilo';
import Services from './pages/Services/Services';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Services/>
      <Portfoilo/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
