import React from 'react';
import './Achievement.css';
import { Col, Container, Row } from 'react-bootstrap';

const Achievement = () => {
    return (
        <div className='p-1' id='achievement'>
            <Container className='mt-5 my-3' data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
            <h1 className='text-center my-4'>আমাদের <span className='text-success'>অর্জন</span></h1>
                <hr className='hr1'/>
                <hr className='hr2' />
                <Row>
                    <Col>
                        <h3 className='text-center'>আমাদের সমস্ত অর্জন সম্পর্কে বিস্তারিত</h3>
                    </Col>
                </Row>     
            </Container>
        </div>
    );
};

export default Achievement;