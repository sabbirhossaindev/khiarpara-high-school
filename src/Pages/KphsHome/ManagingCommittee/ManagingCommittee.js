import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import './ManagingCommittee.css';
import { BsEyeFill, BsGithub } from 'react-icons/bs';

const ManagingCommittee = () => {
    const [project, setProject] = useState([])

    useEffect(() => {
        fetch('https://dev-sabbir-server.vercel.app/projectsCollections')
            .then(res => res.json())
            .then(data =>setProject(data))
    }, [])
    return (
        <div className='mt-5 my-5' id='managingCommittee'>
            <Container>
                <h1 className='text-center'>Our <span className='text-primary'>Managing Committee</span></h1>
                <hr className='hr1'/>
                <hr className='hr2'/>
                <Row className='mx-auto gap'>
                    {
                        project?.map(pro =><Col md='6'sm='12' lg='4' className='text-center' key={pro?._id}>
                        <div className='my-4 mx-2 text-center' data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                            <Card className='shadow-lg'>
                                <img variant="top" src={pro?.img} className='p-3 project-img text-center rounded' alt='img'/>
                                <Card.Body>
                                    <h4 className='text-center'>{pro?.title}</h4>
                                    <p className='text-center fs-5 p-2 text-secondary'>{pro?.description.slice(0, 100) + " ... more"}</p>
                                    <div className='d-flex justify-content-around text-center'>
                                        <a href={pro?.gitLink}><Button variant='outline-secondary' size="sm"><BsGithub /> GitHub</Button></a>

                                        <a href={pro?.liveSide}><Button variant='secondary' size="sm"><BsEyeFill /> LiveSite</Button></a>
                                    </div>
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

export default ManagingCommittee;