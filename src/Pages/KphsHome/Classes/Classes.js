import React, { useEffect, useState } from 'react';
import './Classes.css';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Classes = () => {
    const [classes, setClasses] = useState([])

    useEffect(() => {
        fetch('classes.json')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])
    return (
        <div className='p-1' id='classes'>
            <Container className='mt-5 my-3' data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
            <h1 className='text-center my-4'>আমাদের <span className='text-success'>শিক্ষার্থীরা</span></h1>
                <hr className='hr1'/>
            <hr className='hr2' />
                <Row className='mx-auto gap'>
                    {
                        classes?.map(classe =><Col md='6'sm='12' lg='4' className='text-center'>
                        <div className='my-4 mx-2 text-center' data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                            <Card className='shadow-lg'>
                                <img variant="top" src={classe?.img} className='p-1 project-img text-center rounded' alt={classe?.name}/>
                                <Card.Body>
                                        <h5 className='text-center text-success'><span>নামঃ</span> {classe?.class}</h5>
                                        <hr />
                                    <h6 className='text-center'>সম্পূর্ণ ছাত্র-ছাত্রী: {classe?.totalStn}</h6>
                                    <h6 className='text-center'>সর্বোচ্চ উপস্থিত: {classe?.presentStn}</h6>
                                    <h6 className='text-center'>সর্বোচ্চ অনুপস্থিত: {classe?.absent}</h6>
                                    <p className='text-justify-content-around p-2 text-secondary'>{classe?.details.slice(0, 130) + " ... আরো জানতে"}</p>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>)
                }   
                </Row>           
            </Container>
        </div>
    );
};

export default Classes;