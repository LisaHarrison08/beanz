import React from 'react';
import { Card } from 'react-bootstrap';

function MenuCard({ name, description, price }) {
  return (
    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 text-col">
      <Card className="text-center">
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>{price}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default MenuCard;
