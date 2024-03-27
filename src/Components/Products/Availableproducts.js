import React, { Fragment,  useContext } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { CartContext } from '../Store/Cart-context';

const Availableproducts = (props) => {
  const dummyProducts = [
    {
      title: 'Colors',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
      quantity:30
    },
    {
      title: 'Black and white Colors',
      price: 50,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
      quantity:20
    },
    {
      title: 'Yellow and Black Colors',
      price: 70,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
      quantity:10
    },
    {
      title: 'Blue Color',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
      quantity: 5,

    },
    {
        title: 'Blue Color',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
        quantity: 1,

      },
  ];

  const {addCartItem} = useContext(CartContext)

  const AddToCartItemHandler =(item)=>{
    // console.log(item)
    addCartItem(item)
  }


  const listOfProducts = dummyProducts.map((item, index) => (
    <Col key={index} >
      <Card style={{width:'18rem'}} className='justify-content-flex'>
        <Card.Img variant='top' src={item.imageUrl} />
          <Card.Body className='text-center'>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>Price: {item.price}</Card.Text>
          </Card.Body>
        <Button onClick={()=>AddToCartItemHandler(item)}>AddToCart</Button>
      </Card>
    </Col>
  ));

  return (
    <Fragment>
        <Container className='mt-3'>
    
          <h1>Music</h1>

            <Row xs={1} md={2} className='g-4 justify-content-center'>
                {listOfProducts}
            </Row>
            <Button onClick={props.onOpenCarthandle}>SeeTheCart</Button>
        </Container>
      
    </Fragment>
  );
};

export default Availableproducts;
