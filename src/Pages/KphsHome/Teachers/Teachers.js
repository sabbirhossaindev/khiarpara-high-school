import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Teachers.css';
import { BsCheckCircleFill, BsStarFill } from 'react-icons/bs';

const Teachers = () => {
    const [skills, setSkills] = useState([])
    useEffect(() => {
        fetch(`https://dev-sabbir-server.vercel.app/skills`)
            .then(res => res.json())
            .then(data => setSkills(data))
    },[])
    return (
        <div className='p-1 skill-banner' id='teachers'>
            <Container className='mt-5 my-3' data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                <h1 className='text-center'>Our <span className='text-primary'>Teachers</span></h1>
                <hr className='hr1'/>
                <hr className='hr2'/>
                
                <Row className='mx-auto gap'>
                    
                    {
                        skills?.map(skill =><Col md='6'sm='12' lg='4' className='text-center' key={skill?._id}>
                        <div className='my-4 mx-2 text-center' data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                            <Card className='shadow-lg'>
                                <Row className=''>
                                    <Col md='5'>
                                        <img variant="top" src={skill?.img} className='p-3 project-img text-center rounded' alt='img'/>
                                    </Col>
                                    <Col md='7'>
                                        <Card.Body>
                                            <h4 className='card-title'>{skill?.title}</h4>
                                            <hr className='hr2'/>
                                            <p className='card-text text-start fs-5'><BsCheckCircleFill className='mx-2 text-success'/>{skill?.one}</p>
                                            <p className='card-text text-start fs-5'><BsCheckCircleFill className='mx-2 text-success'/> {skill?.two}</p>
                                            <p className='card-text text-start fs-5'><BsCheckCircleFill className='mx-2 text-success'/> {skill?.three}</p>

                                            <div className='text-start ms-3'>
                                                <BsStarFill className='text-center text-warning mx-1'/>
                                                <BsStarFill className='text-center text-warning mx-1'/>
                                                <BsStarFill className='text-center text-warning mx-1'/>
                                                <BsStarFill className='text-center text-warning mx-1'/>
                                            </div>
                                            <p class="card-text text-start my-4"><small class="text-muted text-star">Last updated 3 mins ago</small></p>
                                        </Card.Body>
                                    </Col>
                                </Row>
                            </Card>
                        </div>
                    </Col>)
                    }

                </Row>           
            </Container>
        </div>
    );
};

export default Teachers;