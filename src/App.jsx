

import { Route, Routes } from 'react-router-dom';
import './App.css'
import RootLayout from './components/layout/RootLayout';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import About from './components/pages/About';

function App() {
 

  return (
    <>
    <Routes>
      <Route path="/" element={<RootLayout/>}>
      <Route index element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/about" element={<About/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App;
