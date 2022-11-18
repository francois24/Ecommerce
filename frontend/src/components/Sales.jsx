import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Cards from './Cards';

const Sales = () => {
  return (
    <div>
    <h1 className='text-center mb-4'>Sales</h1>
    <Container>
      <Row className='text-center'>
        <Col><Cards /></Col>
        <Col><Cards /></Col>
        <Col><Cards /></Col>
      </Row>
      <Row className='text-center mt-5'>
        <Col><Cards /></Col>
        <Col><Cards /></Col>
        <Col><Cards /></Col>
      </Row>
    </Container>
    </div>
  )
}

export default Sales
