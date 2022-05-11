import React from 'react';
import Navigation from './Navigation';
import Banner from './Banner';

function NavContainer() {
  return (
    <div className="row nav-banner-row">
      <Navigation />
      <Banner />
    </div>
  );
}

export default NavContainer;
