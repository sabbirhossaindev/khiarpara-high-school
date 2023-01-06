import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import { BsBook } from 'react-icons/bs';
import kphs from '../../../Images/logo/kphs.png'
import { FcReadingEbook, FcHome, FcStatistics, FcConferenceCall } from "react-icons/fc";
import { Link } from 'react-router-dom';
import './Header.css';
import { BsFillTelephoneFill, BsBuilding } from 'react-icons/bs';

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

                <a className='menu-link' href="#about"><span className='mx-2 nav-link text-secondary'><BsBuilding className='text-success'/> স্কুল</span>
                </a>
                
                <a className='menu-link' href="#notice"><span className='mx-2 nav-link text-secondary'><FcStatistics />নোটিশ</span>
                </a>
                
                <a className='menu-link' href="#introduction"><span className='mx-2 nav-link text-secondary'><FcStatistics />স্কুল পরিচিতি</span>
                </a>

                <a className='menu-link' href="#teachers"><span className='mx-2 nav-link text-secondary'><FcReadingEbook />শিক্ষকরা</span>
                </a>

                <a className='menu-link' href="#managingCommittee"><span className='mx-2 nav-link text-secondary'><FcConferenceCall />ম্যানেজিং কমিটি</span>
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