import React, {useState } from 'react'
import { Container, Nav,  Navbar } from 'react-bootstrap'
import NavButton from './NavButton'
import classes from './Navbarheader.module.css'
import  {NavLink}  from 'react-router-dom'
import Summary from './Summary'


const Navbarheader = (props) => {
  const [navState, setNavState] = useState(true)

  const NavigateSummary =()=>{
    setNavState(false)
    console.log('rener state')
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
                      <NavLink to='home' className='nav-link mx-5' onClick={NavigateSummary}>HOME</NavLink>
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
     
        <div>
           <Summary onNavstate={navState}/>
        </div>
    </>
  )
}

export default Navbarheader;
