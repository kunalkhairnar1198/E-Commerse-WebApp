import React, { useContext } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { CartContext } from '../Store/Cart-context'
import Title from '../UI/Title'
import {Row, Col ,Button, Card,  Container} from 'react-bootstrap';
import classes from './ProductDetail.module.css';

 //   {
  //     id:8,
  //     title: 'Blue Color',
  //     price: 100,
  //     imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  //     quantity: 5,

  //   },

const ProductDetail = (props) => {
    const params = useParams()
    const cartCtx = useContext(CartContext)
    console.log(cartCtx)
    console.log('params', params.productId)

    const ProductDetail = cartCtx.dummyItem.find(p => p.id === parseInt(params.productId));
    // console.log(findSpecificProduct)
    const AddToCart=(item)=>{
      cartCtx.addCartItem(item)
    }
  return (
    <>
      <Container>
      <h1>Product Details</h1>
      <Card className='mb-3'>
        <Row>
          <Col xs={12} sm={6}>
            <img src={ProductDetail.imageUrl} className="img-fluid" style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }} alt="Product" />
          </Col>
          <Col xs={12} sm={6}>
            <Card.Body>
              <Card.Title>{ProductDetail.title}</Card.Title>
              <Card.Text className='fw-bold position-absolute m-2'>
                <span className='m-4 text-danger'>Price: ${ProductDetail.price}</span>
                <span className='gap-10'>Quantity: {ProductDetail.quantity}</span>
              </Card.Text>
              <div className='btn'>
                <Button className='btn m-1' onClick={() => AddToCart(ProductDetail)}>Add to Cart</Button>
                <Button className='btn m-1'>Buy Now</Button>
              </div>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
    </>
  )
}

export default ProductDetail
