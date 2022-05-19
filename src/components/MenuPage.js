import React from 'react';
import Menu from './Menu';
import Nav from './Navigation2';
import Header from './Header2';

function MenuPage() {
  return (
    <div className="container-fluid primary-container">
      <Nav />
      <Header />
      <Menu />
    </div>
  );
}

export default MenuPage;
