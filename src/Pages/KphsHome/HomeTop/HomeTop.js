import React from 'react';
import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import './HomeTop.css';
import banner1 from '../../../Images/logo/aws.png';

const HomeTop = () => {
    return (
        <div className=' mt-1 my-5 home-Banner rounded' id='home'>
            <Container>
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
                        src={banner1}
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