import React from 'react';
import { Card } from 'react-bootstrap';

function TextCard({ title, text }) {
  return (
    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 text-col ">
      <Card className="text-center text-card">
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default TextCard;
