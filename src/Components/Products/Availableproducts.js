import React, { Fragment } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const Availableproducts = () => {
  const dummyProducts = [
    {
      title: 'Colors',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },
    {
      title: 'Black and white Colors',
      price: 50,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },
    {
      title: 'Yellow and Black Colors',
      price: 70,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },
    {
      title: 'Blue Color',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    },
    {
        title: 'Blue Color',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
      },
  ];

  const listOfProducts = dummyProducts.map((item, index) => (
    <Col key={index} >
      <Card style={{width:'18rem'}} className='mx-5'>
        <Card.Img variant='top' src={item.imageUrl} />
        <Card.Body className='text-center'>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>Price: {item.price}</Card.Text>
        </Card.Body>
        <Button>AddToCart</Button>
      </Card>
    </Col>
  ));

  return (
    <Fragment>
        <Container>
    
          <h1>Music</h1>

            <Row xs={1} md={2} className='g-4 justify-content-center'>
                {listOfProducts}
            </Row>
            <Button>SeeTheCart</Button>
        </Container>
      
    </Fragment>
  );
};

export default Availableproducts;
