import './App.css';
import Footer from "./components/Footer";
import Hero from './components/Hero';
//import Team from './components/Team'
import Contact from './components/Contact';
import Reviews from './components/Reviews';

function App() {
  return (
    <main>
      <Hero/> 
      <Reviews/>
      <Contact/>
      <Footer/>
    </main>
  );
}

export default App;
