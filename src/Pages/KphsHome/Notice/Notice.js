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
        autoplaySpeed: 2000,
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
                <h1 className='text-center my-4'><span className='text-primary'>Notice</span> Board</h1>
                <hr className='hr1'/>
                <hr className='hr2' />
                
                <Slider {...settings}>
                    {
                        notices.map(not =><Col md='6'sm='12' lg='4' className='text-center' key=''>
                        <div className='my-4 mx-2 text-center'>
                            <Card className=''>
                            <PhotoProvider>
                                <PhotoView src={not?.img}>
                                    <img variant="top" src={not?.img} alt="img" className='p-3 project-img text-center rounded'/>
                                </PhotoView>
                            </PhotoProvider>
                                <Card.Body>
                                    <h4 className='text-center text-success'>{not?.title}</h4>
                                    {/* <p className='text-center fs-5 p-2 text-secondary'>{pro?.description.slice(0, 100) + " ... more"}</p> */}
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