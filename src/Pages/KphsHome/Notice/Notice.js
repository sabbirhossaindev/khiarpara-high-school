import React, { useEffect, useState } from 'react';
import { Card, Col, Container} from 'react-bootstrap';
import './Notice.css';
import Slider from "react-slick";
import fream from '../../../Images/logo/fream.jpg'
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const Notice = () => {
    const [notices, setNotices] = useState([])

    useEffect(() => {
        fetch('notice.json')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setNotices(data)
            })
    }, [])
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <div className='p-1 notice' id='notice'
        style={{
            background: `url(${fream})`,
            backgroundSize: 'cover',
            width: '100%'
        }}>
            <Container>
                <h1 className='text-center my-3'><span className='text-success'>নোটিশ </span>বোর্ড</h1>
                <hr className='hr2' />
                
                <Slider {...settings} className='my-3'>
                    {
                        notices.map(not =><Col md='6'sm='12' lg='4' className='text-center' key=''>
                        <div className='mx-3 text-center'>
                            <Card className=''>
                                <PhotoProvider>
                                    <PhotoView src={not?.img}>
                                        <img variant="top" src={not?.img} alt="img" className='p-2 h-100 notice-img text-center rounded'/>
                                    </PhotoView>
                                </PhotoProvider>
                                <Card.Body>
                                    <p className='text-center fs-5'>{not?.title}</p>
                                    <small class="text-muted">বিস্তারিত জানতে ছবিতে ক্লিক করুন</small>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>)
                    }
                </Slider>
                
            </Container>
        </div>
    );
};

export default Notice;