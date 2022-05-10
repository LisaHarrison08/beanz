import React from 'react';
import { Card } from 'react-bootstrap';

function ImageCard({ img }) {
  return (
    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 img-col">
      <Card className="img-card">
        <Card.Img src={img} alt="coffee cup" />
        <Card.ImgOverlay>
          <Card.Text></Card.Text>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
}

export default ImageCard;
