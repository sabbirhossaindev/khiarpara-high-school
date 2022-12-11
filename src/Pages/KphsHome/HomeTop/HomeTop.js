import React from 'react';
import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import './HomeTop.css';
import banner1 from '../../../Images/banner/1.jpg';
import banner2 from '../../../Images/banner/2.jpg';
import banner3 from '../../../Images/banner/3.jpg';
import banner4 from '../../../Images/banner/4.jpg';
import banner5 from '../../../Images/banner/5.jpg';
import banner6 from '../../../Images/banner/6.jpg';
import banner7 from '../../../Images/banner/7.jpg';
import banner8 from '../../../Images/banner/8.jpg';

const HomeTop = () => {
    return (
        <div className=' mt-1 home-Banner rounded' id='home'>
            <Container>
                <div className="position-fixed fixed-bottom text-end me-4 mb-4">
                    <a href="#home">
                        <img className='img-fluid go-to-top-icon' src='https://icon-library.com/images/back-to-top-icon-png/back-to-top-icon-png-7.jpg' alt="back-to-top-icon" />
                    </a>
                </div>
                <Carousel>
                    <Carousel.Item>
                        <div className='carousel-img'>
                            <img
                            className="d-block w-100 img-fluid rounded"
                            src={banner1}
                            alt="First slide"
                            />
                        </div>
                        <Carousel.Caption className='mt-4 my-3 text-center'>
                        <h1 className=''>We do <span className='text-warning'>Phone Selling</span> <br /> all over Bangladesh.</h1>
                        <p className=''>Phone Sell is one of the most reliable wholesale and retail mobile phone stores. If you are looking for a trusted shop, you can come to us. You are always invited!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    
                    <Carousel.Item>
                        <div className='carousel-img'>
                            <img
                            className="d-block w-100 img-fluid rounded"
                            src={banner2}
                            alt="First slide"
                            />
                        </div>
                        <Carousel.Caption className='mt-4 my-3 text-center'>
                        <h1 className=''>We do <span className='text-warning'>Phone Selling</span> <br /> all over Bangladesh.</h1>
                        <p className=''>Phone Sell is one of the most reliable wholesale and retail mobile phone stores. If you are looking for a trusted shop, you can come to us. You are always invited!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                        
                    <Carousel.Item>
                        <div className='carousel-img'>
                            <img
                            className="d-block w-100 img-fluid rounded"
                            src={banner3}
                            alt="First slide"
                            />
                        </div>
                        <Carousel.Caption className='mt-4 my-3 text-center'>
                        <h1 className=''>We do <span className='text-warning'>Phone Selling</span> <br /> all over Bangladesh.</h1>
                        <p className=''>Phone Sell is one of the most reliable wholesale and retail mobile phone stores. If you are looking for a trusted shop, you can come to us. You are always invited!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='carousel-img'>
                            <img
                            className="d-block w-100 img-fluid rounded"
                            src={banner4}
                            alt="First slide"
                            />
                        </div>
                        <Carousel.Caption className='mt-4 my-3 text-center'>
                        <h1 className=''>We do <span className='text-warning'>Phone Selling</span> <br /> all over Bangladesh.</h1>
                        <p className=''>Phone Sell is one of the most reliable wholesale and retail mobile phone stores. If you are looking for a trusted shop, you can come to us. You are always invited!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='carousel-img'>
                            <img
                            className="d-block w-100 img-fluid rounded"
                            src={banner5}
                            alt="First slide"
                            />
                        </div>
                        <Carousel.Caption className='mt-4 my-3 text-center'>
                        <h1 className=''>We do <span className='text-warning'>Phone Selling</span> <br /> all over Bangladesh.</h1>
                        <p className=''>Phone Sell is one of the most reliable wholesale and retail mobile phone stores. If you are looking for a trusted shop, you can come to us. You are always invited!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='carousel-img'>
                            <img
                            className="d-block w-100 img-fluid rounded"
                            src={banner6}
                            alt="First slide"
                            />
                        </div>
                        <Carousel.Caption className='mt-4 my-3 text-center'>
                        <h1 className=''>We do <span className='text-warning'>Phone Selling</span> <br /> all over Bangladesh.</h1>
                        <p className=''>Phone Sell is one of the most reliable wholesale and retail mobile phone stores. If you are looking for a trusted shop, you can come to us. You are always invited!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='carousel-img'>
                            <img
                            className="d-block w-100 img-fluid rounded"
                            src={banner7}
                            alt="First slide"
                            />
                        </div>
                        <Carousel.Caption className='mt-4 my-3 text-center'>
                        <h1 className=''>We do <span className='text-warning'>Phone Selling</span> <br /> all over Bangladesh.</h1>
                        <p className=''>Phone Sell is one of the most reliable wholesale and retail mobile phone stores. If you are looking for a trusted shop, you can come to us. You are always invited!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='carousel-img'>
                            <img
                            className="d-block w-100 img-fluid rounded"
                            src={banner8}
                            alt="First slide"
                            />
                        </div>
                        <Carousel.Caption className='mt-4 my-3 text-center'>
                        <h1 className=''>We do <span className='text-warning'>Phone Selling</span> <br /> all over Bangladesh.</h1>
                        <p className=''>Phone Sell is one of the most reliable wholesale and retail mobile phone stores. If you are looking for a trusted shop, you can come to us. You are always invited!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </div>
    );
};

export default HomeTop;