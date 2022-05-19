import React from 'react';
import coffeeBarBanner from '../assets/coffee-bar-banner.jpg';


function Banner() {
  return (
    <div className="jumbotron custom-jumbotron">
      <img
        src={coffeeBarBanner}
        className="banner-img custom-banner"
        alt="banner"
      />
    </div>
  );
}

export default Banner;
