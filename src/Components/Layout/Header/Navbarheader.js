import React from 'react'
import { Container, Nav,  Navbar } from 'react-bootstrap'
import NavButton from './NavButton'
import classes from './Navbarheader.module.css'
import  {NavLink}  from 'react-router-dom'


const Navbarheader = (props) => {
  // console.log(props)
  return (
    <>
        <Navbar bg='dark' expand='sm' variant='dark' sticky="top" className={classes.height}>
            <Container>
                <Navbar.Brand href='/' className='justify-content-left'>
                    React-Ecomerse
                </Navbar.Brand>
                  <Nav className='mx-auto '>
                    <Nav.Item>
                      <NavLink to='home' className='nav-link mx-5'>HOME</NavLink>
                    </Nav.Item> 
                    <Nav.Item>
                      <NavLink to='store' className='nav-link mx-5'>STORE</NavLink>
                      </Nav.Item>
                    <Nav.Item>
                      <NavLink to='about' className='nav-link mx-5'>ABOUTUS</NavLink>
                    </Nav.Item>
                  </Nav>
            </Container>
          <NavButton onOpenHandle={props.onOpenCart}/>
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
