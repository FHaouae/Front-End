import './App.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/Footer';
import Menu from './components/Menu';
import MainRoutes from './routes/MainRoutes';

function App() {
  return (
    <div className='App' >
      <Router>
        <Menu></Menu>
        <MainRoutes></MainRoutes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
