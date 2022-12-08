import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
      <div id='home'>
        <Navbar className='nav-ber' collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand><Link className='mx-3 nav-link' to='/'><h2 className='text-secondary'><strong>KPHS</strong></h2></Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <div className="position-fixed fixed-bottom text-end me-4 mb-4">
                  <a href="#home">
                      <img className='img-fluid go-to-top-icon' src='https://icon-library.com/images/back-to-top-icon-png/back-to-top-icon-png-7.jpg' alt="back-to-top-icon" />
                  </a>
              </div>
            <Nav className="ms-auto my-nav">
                <a className='menu-link' href="#home"><h5 className='mx-2 nav-link text-secondary'>Home</h5>
                </a>

                <a className='menu-link' href="#about"><h5 className='mx-2 nav-link text-secondary'>About</h5>
                </a>
                
                <a className='menu-link' href="#notice"><h5 className='mx-2 nav-link text-secondary'>Notice</h5>
                </a>

                <a className='menu-link' href="#teachers"><h5 className='mx-2 nav-link text-secondary'>Teachers</h5>
                </a>

                <a className='menu-link' href="#managingCommittee"><h5 className='mx-2 nav-link text-secondary'>ManagingCommittee</h5>
                </a>

                <a className='menu-link' href="#blogs"><h5 className='mx-2 nav-link text-secondary'>Blogs</h5>
                </a>
                
                <a className='menu-link' href="#contact"><h5 className='mx-2 nav-link text-secondary'>Contact</h5>
                </a>
            </Nav>  
          </Navbar.Collapse>
        </Container>
        </Navbar>
      </div>
    );
};

export default Header;