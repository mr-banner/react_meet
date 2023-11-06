import './App.css';
import {Navbar} from './components/Navbar';
import { Header } from "./components/Header";
import { Hero } from './components/Hero';
import { Subfooter } from './components/Subfooter';
import { Footer } from './components/Footer';
function App() {
  return (
    <>
    <Navbar/>
    <Header/>
    <Hero/>
    <Subfooter/>
    <Footer/>
    </>
  );
}

export default App;
