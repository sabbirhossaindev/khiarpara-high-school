import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../../../Images/logo/logo.png'
import footer from '../../../Images/logo/footer.png'
import './Footer.css';
import { BsBook } from 'react-icons/bs';


const Footer = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    const formattedToday = dd + '/' + mm + '/' + yyyy;
    return (
        <div className='bg-dark text-light p-1' style={{
            background: `url(${footer})`,
            backgroundSize: 'cover'
        }}>
            <Container className='py-5 px-5'>
                <Row className='mx-auto'>
                    <Col md="3">
                        <h2 className='mx-auto text-center fs-3'>QUICK LINKS</h2>
                            <hr className='hr2'/>
                        <div className='mx-auto text-center'>
                            <a className='menu-link' href="#home"><h5 className='mx-2 nav-link text-secondary'>Home</h5>
                            </a>

                            <a className='menu-link' href="#about"><h5 className='mx-2 nav-link text-secondary'>About</h5>
                            </a>

                            <a className='menu-link' href="#notice"><h5 className='mx-2 nav-link text-secondary'>Notice</h5>
                            </a>

                            <a className='menu-link' href="#teachers"><h5 className='mx-2 nav-link text-secondary'>Teachers</h5>
                            </a>

                            <a className='menu-link' href="#managingCommittee"><h5 className='mx-2 nav-link text-secondary'>Managing Committee</h5>
                            </a>
                            
                            <a className='menu-link' href="#contact"><h5 className='mx-2 nav-link text-secondary'>Contact</h5>
                            </a>
                        </div>      
                    </Col>

                    <Col md="3">
                        <h2 className='mx-auto text-center fs-3'>CONTACT US</h2>
                        <hr className='hr2'/>
                        <div className='mx-auto text-center'>
                            <p className='fs-5 text-secondary'>+8801888559287</p>
                            <p className='fs-5 text-secondary'>+8801719228487</p>
                            <p className='fs-5 text-secondary'>kp-high-school@gmail.com</p>
                        </div>
                    </Col>

                    <Col md="3">
                        <div>
                            <h4 className='mx-auto text-center fs-3'>WE ARE PROVIDE</h4>
                            <hr className='hr2'/>
                            <div className='mx-auto text-center'>
                                <a className='menu-link text-secondary' href="https://dev-sabbir.web.app"><h3 className='fs-4'>JavasScript</h3></a>
                                <a className='menu-link text-secondary' href="https://dev-sabbir.web.app"><h3 className='fs-4'>UI Design</h3></a>
                                <a className='menu-link text-secondary' href="https://dev-sabbir.web.app"><h3 className='fs-4'>React</h3></a>
                                <a className='menu-link text-secondary' href="https://dev-sabbir.web.app"><h3 className='fs-4'>Node JS</h3></a>
                                <a className='menu-link text-secondary' href="https://dev-sabbir.web.app"><h3 className='fs-4'>MongoDB</h3></a>
                                <a className='menu-link text-secondary' href="https://dev-sabbir.web.app"><h3 className='fs-4'>Express</h3></a>
                            </div>
                        </div>
                    </Col>

                    <Col md="3" className='mx-auto text-center'>
                        <h2 className='mx-auto text-center'>KPHS</h2>
                        <hr className='hr2'/>
                        <img src={logo} alt="aws" className='img-fluid rounded kphs' data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000"/>
                    </Col>
                </Row>
                <div className='text-light text-center mt-5'>
                    <h5>&copy;  Khiarpara High School <BsBook className='text-success'/><span className='text-primary mx-2'>{formattedToday}</span>  All Rights Reserved {new Date().getFullYear()}. &trade;</h5>
                </div>
            </Container>
        </div>
    );
};

export default Footer;