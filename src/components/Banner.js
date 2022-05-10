import React from 'react';
import coffeeBarImg from '../assets/coffee-bar.jpg';

// Need to resize the banner image's height so it doesn't take up as much room on the page.

function Banner() {
  return (
    <div className="jumbotron custom-jumbotron">
      <img
        src={coffeeBarImg}
        className="banner-img custom-banner"
        alt="banner"
      />
    </div>
  );
}

export default Banner;
