import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/footer';
import Navbar from './components/navbar/navbar';

import { Home, Games, News, About } from './pages'

function App() {
  return (
    <div className="App">
      <nav>
        <Navbar/>
      </nav>
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path='games' element={<Games/>} />
          <Route path='news' element={<News/>} />
          <Route path='about' element={<About/>} />
        </Routes> 
      </main>
      <Footer/>
    </div>
  );
}

export default App;
