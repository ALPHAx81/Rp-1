import React from 'react';

const Navigation = () => {
  return (
    <nav className='container'>
      <div className='logo'>
        <img src="public/brand_logo.png" alt="Brand Logo" />
      </div>
      <ul>
        <li><a href="#">Menu</a></li> 
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Services</a></li>
      </ul>
      <button>Login</button>
    </nav>
  );
};

export default Navigation;
