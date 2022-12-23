import React from 'react';
import { Link } from 'react-router-dom';
import logo from './journalLogo.png'

const Navbar = () => {
  return (<nav>
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/about'>About</Link>
      </li>
      <li>
        <Link to='/entries'>Entries</Link>
      </li>
    </ul>
    <img src={logo} style={{width: 300}}/>
  </nav>);
};

export default Navbar;
