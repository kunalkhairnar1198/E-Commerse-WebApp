import React, { Fragment,  useContext } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { CartContext } from '../Store/Cart-context';
import Title from '../UI/Title';

const Availableproducts = (props) => {
  const dummyProducts = [
    {
      id: 1,
      title: 'Colors',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
      quantity:30
    },
    {
      id:2,
      title: 'Black and white Colors',
      price: 50,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
      quantity:20
    },
    {
      id:3,
      title: 'Yellow and Black Colors',
      price: 70,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
      quantity:10
    },
    {
      id:4,
      title: 'Blue Color',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
      quantity: 5,

    },
    {
      id:5,
      title: 'Blue Color',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
      quantity: 5,

    },
    {
      id:6,
      title: 'Blue Color',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
      quantity: 5,

    },
    {
      id:7,
      title: 'Blue Color',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
      quantity: 5,

    },
    {
      id:8,
      title: 'Blue Color',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
      quantity: 5,

    },
  
  ];

  const {addCartItem} = useContext(CartContext)

  const AddToCartItemHandler =(item)=>{
    // console.log(item)
    addCartItem(item)
  }


  const listOfProducts = dummyProducts.map((item) => (
    <Col  className='p-4 col-md-3' key={item.id} >
      <Card className='d-flex flex-column shadow'>
        <Card.Img variant='top' src={item.imageUrl} />
          <Card.Body className='flex-grow-2'>
            <Card.Title>
               <span>{item.title}</span> 
              </Card.Title>
            <Card.Text className='fw-bold'>
              <span>Price: ${item.price}</span>
              </Card.Text>
              <div className='d-flex justify-content-end align-item-center'>
                <Button variant="primary" className="flex-grow-2" onClick={()=>AddToCartItemHandler(item)}>AddToCart</Button>
              </div>
          </Card.Body>
      </Card>
    </Col>
  ));

  return (
    <Fragment>
     
        <Title>Music</Title>
  
        <Container className="d-flex p-10">
            <Row>
                {listOfProducts}
            </Row>
            
        </Container>
        <div className='mx-auto text-center '>
          <Button className='btn m-5 b-1' onClick={props.onOpenCarthandler}>SeeTheCart</Button>
        </div>
    </Fragment>
  );
};

export default Availableproducts;
