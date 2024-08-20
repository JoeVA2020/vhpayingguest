import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/navbar/nav'
import Hero from './components/Hero/hero'
import About from './components/About/about'
import Contact from './components/Contact/contact';
function App() {

  return (
    <>
    <Navbar/>      
    <About/>
    <Hero/>
    <Contact/>
    </>
  )
}

export default App
