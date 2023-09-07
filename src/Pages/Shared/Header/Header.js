import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import kphs from '../../../Images/logo/kphs.png'
import { FcReadingEbook, FcHome, FcStatistics, FcConferenceCall, FcBusinessman } from "react-icons/fc";
import { Link } from 'react-router-dom';
import './Header.css';
import { BsFillTelephoneFill, BsBuilding, BsFillTrophyFill } from 'react-icons/bs';

const Header = () => {
    return (
      <div id='home'>
        <Navbar className='nav-ber' collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand><Link className=' nav-link' to='/'><h2 className='text-success'><strong><img src={kphs} alt="kphs" className='kphs'/> KPHS</strong></h2></Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto my-nav">
                <a className='menu-link' href="#home"><span className='mx-2 nav-link text-secondary'><FcHome />হোম</span>
                </a>

                <a className='menu-link' href="#about"><span className='mx-2 nav-link text-secondary'><BsBuilding className='text-success'/> স্কুল সম্পর্কে</span>
                </a>
                
                <a className='menu-link' href="#notice"><span className='mx-2 nav-link text-secondary'><FcStatistics />নোটিশ</span>
                </a>

                <a className='menu-link' href="#teachers"><span className='mx-2 nav-link text-secondary'><FcBusinessman className='me-1' />শিক্ষকরা</span>
                </a>

                <a className='menu-link' href="#classes"><span className='mx-2 nav-link text-secondary'><FcConferenceCall className='me-1 text-warning'/>শিক্ষার্থীরা</span>
                </a>

                <a className='menu-link' href="#achievement"><span className='mx-2 nav-link text-secondary'><BsFillTrophyFill className='me-1 text-warning'/>আমাদের অর্জন</span>
                </a>
                
                <a className='menu-link' href="#contact"><span className='mx-2 nav-link text-secondary'><BsFillTelephoneFill className='text-success'/>যোগাযোগ</span>
                </a>
            </Nav>  
          </Navbar.Collapse>
        </Container>
        </Navbar>
      </div>
    );
};

export default Header;