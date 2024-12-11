import React from 'react';
import logo from '../assets/image.png'; // Adjust the path based on your project structure

function Logo({ width = '200px' }) {
  return (
    <div>
      <img src={logo} alt="logo" style={{ width }} />
    </div>
  );
}

export default Logo;