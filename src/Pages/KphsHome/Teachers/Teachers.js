import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import './Teachers.css';
import { BsEyeFill, BsForwardFill, BsGithub} from 'react-icons/bs';
import { Cursor, useTypewriter } from 'react-simple-typewriter'

const Teachers = () => {
    const [text] = useTypewriter({
        words: ['মো: জাকির হোসাইন','মো: মিজানুর রহমান মিজান', 'মো: আহসান হাবীব', 'মো: সাদিকুল ইসলাম', 'শ্রী মানিক রায়', 'মোছা: আনিসা বেগম', 'মো: আব্দুল মালেক', 'মো: শফিকুর রহমান', 'মো: আরিফ রহমান', 'মোছা: তানজিলা বেগম', 'মো: আউয়াল রহমান', 'মো: মোরশেদ রহমান', 'শ্রী সন্তোষ রায়',],
        loop: Infinity,
        onLoopDone: () => console.log(`loop completed after Infinity runs.`)
    })
    const [project, setProject] = useState([])

    useEffect(() => {
        fetch('https://dev-sabbir-server.vercel.app/projectsCollections')
            .then(res => res.json())
            .then(data =>setProject(data))
    }, [])
    return (
        <div className='p-1 teacher-container' id='teachers'>
            <Container className='mt-5 my-3' data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                <h1 className='text-center'>আমাদের <span className='text-success'>শিক্ষকরা</span></h1>
                <hr className='hr1'/>
                <hr className='hr2'/>
                <Row className='mx-auto gap'>
                    <div>
                        <p className='text-center fs-5'>আমাদের শিক্ষকরা অনেক পরিশ্রমী । তারা তাদের সময়গুলো শিক্ষার্থীদের সাথে নিত্যনতুন জিনিসগুলো সম্পর্কে গভীরভাবে আলোচনা করে পড়াশোনার পাশাপাশি। খিয়ারপাড়া উচ্চ বিদ্যালয় এর শিক্ষকদের সম্পর্কে সংক্ষিপ্ত আকারে বিবরণ । উল্লেখযোগ্য আমাদের শিক্ষক গুলো হল:- <br />
                        <span className='fs-4 mt-5 text-cursor text-center'><BsForwardFill className='text-danger'/><span style={{ color: 'green'}}>{text}</span></span>
                            <Cursor cursorColor='green' />
                        </p>
                        
                    </div>
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

export default Teachers;