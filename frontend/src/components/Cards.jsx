import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Cards = () => {
  return (
    <div>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://hesolutions.com.pk/wp-content/uploads/2019/01/picture-not-available.jpg" />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
            <Button className='bg-success border-0' variant="primary">Buy Now!</Button>
        </Card.Body>
    </Card>
    </div>
  )
}

export default Cards
