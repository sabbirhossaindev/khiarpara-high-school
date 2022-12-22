import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './About.css';
import school from '../../../Images/logo/logo.png'
import fream1 from '../../../Images/logo/fream1.jpg';
import { BsChatSquareDotsFill} from 'react-icons/bs';

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
                        <div>
                        <p><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d40688.68590910029!2d89.01422881211505!3d25.657842279053696!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fcb5fc2d217507%3A0xefadb112e2be5a6e!2skhiar%20para%20high%20school!5e0!3m2!1sen!2sbd!4v1671590268648!5m2!1sen!2sbd" width="100%" height="150" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
                        </div>
                            <div className='d-flex justify-content-start text-center'>
                                    <Button size="sm" variant="warning" className='mt-1'><a href="#contact" className='text-black github'>যোগাযোগ করুন  <BsChatSquareDotsFill /></a></Button> 
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;