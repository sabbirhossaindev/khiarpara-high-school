import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../../../Images/logo/logo.png';
import footer from '../../../Images/logo/footer.png'
import './Footer.css';
import { BsBook } from 'react-icons/bs';
import { FcReadingEbook, FcContacts, FcHome, FcStatistics, FcServices, FcConferenceCall} from "react-icons/fc";


const Footer = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    
    return (
        <div className='bg-dark text-light p-1' style={{
            background: `url(${footer})`,
            backgroundSize: 'cover'
        }}>
            <Container className='py-5 px-5'>
                <Row className='mx-auto'>
                    <Col md="3">
                        <h2 className='mx-auto text-center fs-3'>দ্রুত লিঙ্ক</h2>
                            <hr className='hr2'/>
                        <div className='mx-auto text-center'>
                            <a className='menu-link' href="#home"><span className='mx-2 nav-link text-secondary'><FcHome /> হোম</span>
                            </a>

                            <a className='menu-link' href="#about"><span className='mx-2 nav-link text-secondary'><FcServices />স্কুল</span>
                            </a>

                            <a className='menu-link' href="#notice"><span className='mx-2 nav-link text-secondary'><FcStatistics />নোটিশ</span>
                            </a>

                            <a className='menu-link' href="#teachers"><span className='mx-2 nav-link text-secondary'><FcReadingEbook />শিক্ষকরা</span>
                            </a>

                            <a className='menu-link' href="#students"><span className='mx-2 nav-link text-secondary'><FcReadingEbook />শিক্ষার্থীরা</span>
                            </a>
                            
                            <a className='menu-link' href="#contact"><span className='mx-2 nav-link text-secondary'><FcContacts />যোগাযোগ</span>          
                            </a>
                        </div>      
                    </Col>

                    <Col md="3">
                        <h2 className='mx-auto text-center fs-3'>যোগাযোগ করুন</h2>
                        <hr className='hr2'/>
                        <div className='mx-auto text-center'>
                            <p className='fs-5 text-secondary'>০১৭২৪-০৮৫৮৫৫</p>
                            <p className='fs-5 text-secondary'>hmzakir1972@gmail.com</p>
                            <p className='fs-5 text-secondary'>বিদ্যালয় কোড- ৫৬৭৮</p>
                            <p className='fs-5 text-secondary'>আইডি নং ৯১০১১৫১৩০৩</p>
                            <p className='fs-5 text-secondary'>ডাকঃ রহমতপুর মাদ্রাসা <br /> বদরগঞ্জ, রংপুর।</p>
                        </div>
                    </Col>

                    <Col md="3">
                        <div>
                            <h4 className='mx-auto text-center fs-3'>আমরা প্রদান করি</h4>
                            <hr className='hr2'/>
                            <div className='mx-auto text-center'>
                                <a className='menu-link text-secondary' href="#six"><h3 className='fs-3'>ষষ্ঠ শ্রেণির</h3></a>
                                <a className='menu-link text-secondary' href="#seven"><h3 className='fs-3'>সপ্তম শ্রেণির</h3></a>
                                <a className='menu-link text-secondary' href="#eight"><h3 className='fs-3'>অষ্টম শ্রেণি</h3></a>
                                <a className='menu-link text-secondary' href="#nine"><h3 className='fs-3'>নবম শ্রেণির</h3></a>
                                <a className='menu-link text-secondary' href="#ten"><h3 className='fs-3'>দশম শ্রেণির</h3></a>
                                
                            </div>
                        </div>
                    </Col>

                    <Col md="3" className='mx-auto text-center'>
                        <h2 className='mx-auto text-center'>KPHS <BsBook className='text-success'/></h2>
                        <hr className='hr2'/>
                        <img src={logo} alt="aws" className='img-fluid rounded' data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000"/>
                    </Col>
                </Row>
                <div className='text-light text-center mt-5'>
                    <h5>&copy; 2000-2023 খিয়ারপাড়া উচ্চ বিদ্যালয় <span className='text-primary mx-2'><a className='sabbir' href="http://dev-sabbir.wev.app/">Develop by Sabbir</a></span>  সমস্ত অধিকার সংরক্ষিত {new Date().getFullYear()}. &trade;</h5>
                </div>
            </Container>
        </div>
    );
};

export default Footer;