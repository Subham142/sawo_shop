import React,{useEffect} from 'react'
import {LinkContainer } from 'react-router-bootstrap';
import {Nav,Navbar,Container,NavDropdown} from 'react-bootstrap';
const Header = () => {
  const email = localStorage.getItem("userId") !== null ? localStorage.getItem('userId').split("@",1):"Sign In";

 


    return (
        <header>
    <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
        <Container>
        <LinkContainer to="/">
  <Navbar.Brand >SawoShop</Navbar.Brand>
  </LinkContainer>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
    <LinkContainer to="/cart">
      <Nav.Link>
          <i className='fas fa-shopping-cart'></i> Cart</Nav.Link>
    </LinkContainer>
    {email === "Sign In" ?  
    <LinkContainer to="/login">
      <Nav.Link ><i className='fas fa-user'></i>{email}</Nav.Link>
      </LinkContainer>
      :
      <NavDropdown title={email} id='username'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
}
      </Nav>
    
  </Navbar.Collapse>
  </Container>
</Navbar>
        </header>
    )
}

export default Header
