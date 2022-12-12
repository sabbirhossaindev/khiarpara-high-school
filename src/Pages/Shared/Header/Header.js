import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsBook, BsFillPersonLinesFill } from 'react-icons/bs';
import { FcBusinessman, FcSmartphoneTablet, FcStatistics, FcGraduationCap, FcServices,  } from "react-icons/fc";
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
      <div id='home'>
        <Navbar className='nav-ber' collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand><Link className=' nav-link' to='/'><h2 className='text-success'><strong>KPHS  <BsBook /></strong></h2></Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto my-nav">
                <a className='menu-link' href="#home"><span className='mx-2 nav-link text-secondary'><FcGraduationCap />Home</span>
                </a>

                <a className='menu-link' href="#about"><span className='mx-2 nav-link text-secondary'><FcServices />About</span>
                </a>
                
                <a className='menu-link' href="#notice"><span className='mx-2 nav-link text-secondary'><FcStatistics />Notice</span>
                </a>

                <a className='menu-link' href="#teachers"><span className='mx-2 nav-link text-secondary'><FcBusinessman />Teachers</span>
                </a>

                <a className='menu-link' href="#managingCommittee"><span className='mx-2 nav-link text-secondary'><BsFillPersonLinesFill className='text-success'/>ManagingCommittee</span>
                </a>
                
                <a className='menu-link' href="#contact"><span className='mx-2 nav-link text-secondary'><FcSmartphoneTablet className='text-success'/>Contact</span>
                </a>
            </Nav>  
          </Navbar.Collapse>
        </Container>
        </Navbar>
      </div>
    );
};

export default Header;