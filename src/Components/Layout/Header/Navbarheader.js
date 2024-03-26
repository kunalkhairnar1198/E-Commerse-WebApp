import React from 'react'
import { Container, Nav,  Navbar } from 'react-bootstrap'
import NavButton from './NavButton'
import classes from './Navbarheader.module.css'

const Navbarheader = () => {
  return (
    <>
        <Navbar bg='dark' expand='sm' variant='dark' sticky="top" className={classes.height}>
            <Container>
                <Navbar.Brand href='/' className='justify-content-left'>
                    React-Ecomerse
                </Navbar.Brand>
                <Nav className='mx-auto '>
                  <Nav.Link className='mx-5'>HOME</Nav.Link>
                  <Nav.Link className='mx-5'>STORE</Nav.Link>
                  <Nav.Link className='mx-5'>ABOUTUS</Nav.Link>
                </Nav>
            </Container>
          <NavButton/>
        </Navbar>
        <div className='bg-info-subtle p-5'>
          <Container className='text-center pb-5' >
            <h1 className={classes.bodyheader}>The Generics</h1>
          </Container>
        </div>
    </>
  )
}

export default Navbarheader;
