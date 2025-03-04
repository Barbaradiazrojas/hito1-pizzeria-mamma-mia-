import React from 'react';
import Navbar from './assets/components/Navbar';
import Footer from './assets/components/Footer';
import Register from './assets/components/Register';
import Login from './assets/components/Login';
import './index.css'; // Estilos globales
import './main.css'; // Estilos específicos

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="form-container">
        <Register />
        {/* <Login /> */}
      </div>
      <Footer />
    </div>
  );
};

export default App;
