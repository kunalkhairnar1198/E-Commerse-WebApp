import React, { useEffect, useState } from 'react'
import { Container, Nav,  Navbar } from 'react-bootstrap'
import NavButton from './NavButton'
import classes from './Navbarheader.module.css'
import  {NavLink}  from 'react-router-dom'
import Home from '../Pages/Home'


const Navbarheader = (props) => {
  const [navState, setNavState] = useState(false)

  useEffect(() => {
    setNavState(false);
  }, []);

  const NavigateSummary =()=>{
    setNavState(false)
  }

  const isNavigate=()=>{
    setNavState(true)
  }


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
                      <NavLink to='/' className='nav-link mx-5' onClick={NavigateSummary}>HOME</NavLink>
                    </Nav.Item> 
                    <Nav.Item>
                      <NavLink to='store' className='nav-link mx-5' onClick={isNavigate}>STORE</NavLink>
                      </Nav.Item>
                    <Nav.Item>
                      <NavLink to='about' className='nav-link mx-5'  onClick={isNavigate}>ABOUTUS</NavLink>
                    </Nav.Item>
                  </Nav>
            </Container>
          <NavButton onOpenHandle={props.onOpenCart}/>
        </Navbar>
     
        <div>
         {navState &&  <Home onNavstate={navState}/>}
        </div>
    </>
  )
}

export default Navbarheader;
