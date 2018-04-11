import React from 'react';
import Header from './Header';
import MainCard from './MainCard';
import Footer from './Footer';
import './main.scss';

const App = () => {
  return (
    <div className="App">
      <Header />
      <MainCard />
      <Footer />
    </div>
  );
};

export default App;
