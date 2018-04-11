import React from 'react';
import Menu from '../Menu';
import logo from '../../assets/logo.png';
import './styles.scss';

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="WWE logo" />
      <Menu />
    </div>
  );
};

export default Header;
