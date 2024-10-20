import React from 'react';
import './App.css';
// import Firstpage from './Firstpage';
// import Secondpage from './Secondpage';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navi from './Navi';
import Home from './page.components/Home';
import Servise from './page.components/Servise';
import About from './page.components/About';
// import Contact from './page.components/Chanttele';
import Footer from './Footer';
import Shawls from './page.components/Shawls';
import Chanttele from './page.components/Chanttele';
import Dupattas from './page.components/Dupattas';
import Bottoms from './page.components/Bottoms';
import Product from './page.components/Product';
import Celeberity from './page.components/Celeberity';
import Styleposted from './page.components/Styleposted';
import Special from './page.components/Special';
import Form1 from './Form1';
import Form2 from './Form2';
import Unstitched2 from './page.components/Unstitched2';

function App() {
  return (
<>

 <BrowserRouter>
  {/* <Navi /> */}
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/About" element={<About />} />
    <Route path="/Shawls" element={<Shawls />} />
    <Route path="/Servise" element={<Servise />} />
    <Route path="/Chanttele" element={<Chanttele />} />
    <Route path="/Bottoms" element={<Bottoms /> } />
    <Route path="/Dupattas" element={<Dupattas />} />
    <Route path="/Product" element={<Product />} />
    <Route path="/Celeberity" element={<Celeberity />} />
    <Route path="/Styleposted" element={<Styleposted />} />
    <Route path="/Special" element={<Special />} />
    <Route path="/Form1" element={<Form1 />} />
    <Route path="/Form2" element={<Form2 />} />
    <Route path="/Unstitched2" element={<Unstitched2 />} />

  </Routes>
  {/* <Footer /> */}
</BrowserRouter> 

</>
  );
}

export default App;

