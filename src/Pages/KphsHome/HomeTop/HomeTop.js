import React from 'react';
import './HomeTop.css';
import banner1 from '../../../Images/banner/1.jpg';
import banner2 from '../../../Images/banner/2.jpg';
import banner3 from '../../../Images/banner/3.jpg';
import banner4 from '../../../Images/banner/4.jpg';
import banner5 from '../../../Images/banner/5.jpg';
import banner6 from '../../../Images/banner/6.jpg';
import banner7 from '../../../Images/banner/7.jpg';
import banner8 from '../../../Images/banner/8.jpg';
import Slider from 'react-slick';
import { Container} from 'react-bootstrap';

const HomeTop = () => {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
    };
    return (
        <div className='m-1 home-Banner rounded' id='home'>
            <div className="position-fixed fixed-bottom text-end me-4 mb-4">
                  <a href="#home">
                      <img className='img-fluid go-to-top-icon' src='https://icon-library.com/images/back-to-top-icon-png/back-to-top-icon-png-7.jpg' alt="back-to-top-icon" />
                  </a>
              </div>
        <Container className='rounded'>
            <Slider {...settings}>
            <div className='carousel-img rounded'>
                <img className="d-block w-100 img-fluid carousel-top-img rounded" src={banner1} alt="First slide" />
            </div>
            <div className='carousel-img rounded'>
                <img className="d-block w-100 img-fluid carousel-top-img rounded" src={banner2} alt="First slide" />
            </div>
            <div className='carousel-img rounded'>
                <img className="d-block w-100 img-fluid carousel-top-img rounded" src={banner3} alt="First slide" />
            </div>
            <div className='carousel-img rounded'>
                <img className="d-block w-100 img-fluid carousel-top-img rounded" src={banner4} alt="First slide" />
            </div>
            <div className='carousel-img rounded'>
                <img className="d-block w-100 img-fluid carousel-top-img rounded" src={banner5} alt="First slide" />
            </div>
            <div className='carousel-img rounded'>
                <img className="d-block w-100 img-fluid carousel-top-img rounded" src={banner6} alt="First slide" />
            </div>
            <div className='carousel-img rounded'>
                <img className="d-block w-100 img-fluid carousel-top-img rounded" src={banner7} alt="First slide" />
            </div>
            <div className='carousel-img rounded'>
                <img className="d-block w-100 img-fluid carousel-top-img rounded" src={banner8} alt="First slide" />
            </div>
            </Slider>
        </Container>
        </div>
    );
};

export default HomeTop;