import React from 'react';
import logo from '../img/regalon-logo.gif';

function AppHeader() {
  return (    
    <header className="AppHeader"> 
      <div> <img className="logo" src={logo} /> </div>
    </header>
  );
}

export default AppHeader;