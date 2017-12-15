import { Link } from 'react-router-dom';
import React from 'react';
import HomePage from '../HomePage/HomePage';
import './Header.css';

const Header = () => {
  return (
    <div className='links'>
      <ul className='title_bar'>
        <li><Link to='/' component={HomePage}>Home</Link></li>
        <li><Link to='/articles'>Articles</Link></li>
        <li><Link to='/about'>About</Link></li>
      </ul>
    </div>
  );
};

export default Header;
