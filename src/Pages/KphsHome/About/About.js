import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './About.css';
import school from '../../../Images/logo/logo.png'
import fream1 from '../../../Images/logo/fream1.jpg';

const About = () => {
    return (
        <div className='p-1' id='about'
        style={{
            background: `url(${fream1})`,
            backgroundSize: 'cover',
            width: '100%'
        }}>
            <Container>
                <h1 className='text-center my-4'><span className='text-primary'>About</span> Our School</h1>
                <hr className='hr1'/>
                <hr className='hr2'/>
                <Row>
                    <Col md='4'>
                        <div data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                            <img src={school} alt="school pic" className='rounded img-fluid p-2' />
                        </div>
                    </Col>
                    <Col md='8'>
                        <div className='mt-4'>
                            <p className='fs-5'>Lorem ipsum dolor sit amet consectetur    adipisicing elit. Ut commodi voluptas obcaecati fugiat quibusdam sint pariatur dolorem perspiciatis libero similique excepturi labore illum delectus, alias quas maxime natus mollitia inventore laboriosam ab unde quisquam ex. Reiciendis a quae eligendi esse aperiam et, libero quam optio expedita repudiandae harum itaque iste, quibusdam mollitia provident eum alias facilis. Voluptate quam totam quaerat architecto ullam laborum delectus quo illo aut dolores, hic tempore voluptates quos, eligendi voluptatibus. Dolorem sapiente cumque iure nam doloremque! <br />
                            <br />
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero quo dolore mollitia aliquid quas ducimus, aliquam exercitationem ipsum dolor culpa impedit alias quisquam inventore eaque. Corrupti, aspernatur cum consequatur sint dolorum quaerat illum cupiditate eos aliquid a, non enim delectus optio soluta quam repellendus distinctio modi facere asperiores. Saepe, perspiciatis!
                        </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;