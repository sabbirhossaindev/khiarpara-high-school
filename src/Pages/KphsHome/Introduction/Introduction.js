import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import './Introduction.css';
import { Card, Col, Container } from 'react-bootstrap';

const Introduction = () => {
    const [introduction, setIntroduction] = useState([])

    useEffect(() => {
        fetch('introduction.json')
            .then(res => res.json())
            .then(data => {
                console.log('data',data);
                setIntroduction(data)
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
        // <div className='p-1 introduction-container' id='introduction'>
        //     <h2>Introduction</h2>
        // </div>
        // <div className='p-1 introduction-container' id='introduction'>
        //     <h2>Introduction</h2>
        // </div>
        <div className='p-1 introduction' id='introduction'>
            <Container>
                <h1 className='text-center my-3'><span className='text-success'>স্কুল </span>পরিচিতি</h1>
                <hr className='hr2' />      
                <Slider {...settings} className='my-3'>
                    {
                        introduction.map(not =><Col md='6'sm='12' lg='4' className='text-center' key={not._id}>
                        <div className='mx-3 text-center notice-div'>
                            <Card>
                                <PhotoProvider>
                                    <PhotoView src={not?.img}>
                                        <img variant="top" src={not?.img} alt="img" className='p-2 notice-img text-center rounded'/>
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

export default Introduction;