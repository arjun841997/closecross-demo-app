import React, { Component } from 'react';
import {
  Navbar,
  NavbarBrand,
  Container
} from 'reactstrap';

class AppNavbar extends Component {
  
  render() {    
    return (
      <div>
        <Navbar >
          <Container>
            <NavbarBrand>CloseCross</NavbarBrand>          
          </Container>
        </Navbar>
      </div>
    );
  }
}


export default AppNavbar;