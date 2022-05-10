import React from 'react';
import coffeeBarBanner from '../assets/coffee-bar-banner.jpg';

// Need to resize the banner image's height so it doesn't take up as much room on the page.

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
