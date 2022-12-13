import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './About.css';
import school from '../../../Images/logo/logo.png'
import fream1 from '../../../Images/logo/fream1.jpg';
import { BsChatSquareDotsFill, BsDownload } from 'react-icons/bs';

const About = () => {
    return (
        <div className='p-1' id='about'
        style={{
            background: `url(${fream1})`,
            backgroundSize: 'cover',
            width: '100%'
        }}>
            <Container>
                <h1 className='text-center my-4'>আমাদের <span className='text-success'> স্কুল </span>সম্পর্কে </h1>
                <hr className='hr1'/>
                <hr className='hr2'/>
                <Row className='my-5'>
                    <Col md='4'>
                        <div data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                            <img src={school} alt="school pic" className='rounded img-fluid p-2' />
                        </div>
                    </Col>
                    <Col md='8'>
                        <div className='my-3'>
                            <p className='fs-6'>খিয়ারপাড়া উচ্চ বিদ্যালয় Ut commodi voluptas obcaecati fugiat quibusdam sint pariatur dolorem perspiciatis libero similique excepturi labore illum delectus, alias quas maxime natus mollitia inventore laboriosam ab unde quisquam ex. Reiciendis a quae eligendi esse aperiam et, libero quam optio expedita repudiandae harum itaque iste, quibusdam mollitia provident eum alias facilis. Voluptate quam totam quaerat architecto ullam laborum delectus quo illo aut dolores, hic tempore voluptates quos, eligendi voluptatibus. Dolorem sapiente cumque iure nam doloremque! <br />
                            <br />
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero quo dolore mollitia aliquid quas ducimus, aliquam exercitationem ipsum dolor culpa impedit alias quisquam inventore eaque. Corrupti, aspernatur cum consequatur sint.
                        </p>
                            <div className='d-flex justify-content-start text-center'>
                                    <Button size="sm" variant="warning" className='mt-4'><a href="#contact" className='text-black github'>Contact Us  <BsChatSquareDotsFill /></a></Button>
                                    <a className='resume mx-4' href="sabbir-hossain.pdf" download='sabbir-hossain.pdf'><Button variant="outline-primary" size="sm" className='mt-4'>Download About <BsDownload /></Button></a> 
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;