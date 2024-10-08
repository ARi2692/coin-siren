import React from 'react';
import Nav from '../molecules/Nav';

const Header: React.FC = () => (
    <header className="bg-gradient-to-b from-cyan-500 to-blue-600 shadow-md"> 
    <div className="container mx-auto h-full flex justify-between items-center">
      <Nav />
    </div>
  </header>
);

export default Header;
