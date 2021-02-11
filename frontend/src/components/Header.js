import React from 'react'
import {LinkContainer } from 'react-router-bootstrap';
import {Nav,Navbar,Container} from 'react-bootstrap';
const Header = () => {
  const email = localStorage.getItem("userId") !== null ? localStorage.getItem('userId').split("@",1):"Unidentified";
// var email="";
//   const nameShown=()=>{
//     if(email != null){
//     email = localStorage.getItem('userId').split("@",1);

//     }else{
//       email ="local"
//     }
//   }
//  email= nameShown();
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

    <LinkContainer to="/login">
      <Nav.Link ><i className='fas fa-user'></i> Sign In</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/user">
      <Nav.Link ><i className='fas fa-user'></i> {email}</Nav.Link>
      </LinkContainer>
      </Nav>
    
  </Navbar.Collapse>
  </Container>
</Navbar>
        </header>
    )
}

export default Header
