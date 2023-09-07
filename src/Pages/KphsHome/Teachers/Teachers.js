import React, { useEffect, useState } from 'react';
import {Card, Col, Container, Row } from 'react-bootstrap';
import './Teachers.css';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { BsArrowRightCircleFill, BsFillTelephoneFill, BsForwardFill, BsPersonFill, BsPinAngleFi} from 'react-icons/bs';

const Teachers = () => {
    const [text] = useTypewriter({
        words: ['মো: জাকির হোসাইন', 'মো: মিজানুর রহমান', 'মোছা: আনিসা খাতুন', 'মো: আব্দুল মালেক সরকার', 'মো: আউয়াল আলী', 'মো: শাফিকুর রহমান', 'মো: সাদেকুল ইসলাম', 'মো: আহসান হাবীব', 'মো: মোরশেদ আলী', 'মো: আব্দুস সালাম', 'মো: বাদশা আলমগীর', 'মানিক চন্দ্র রায়', 'মোছা: তানজিলা বানু', 'সন্তোষ কুমার রায়', 'মো: আসাদুজ্জামান আরিফ'],
        loop: Infinity,
        onLoopDone: () => console.log(`loop completed after Infinity runs.`)
    });
    const [teacher, setTeacher] = useState([])

    useEffect(() => {
        fetch('teachers.json')
            .then(res => res.json())
            .then(data => setTeacher(data))
    }, [])
    return (
        <div className='p-1 teacher-container' id='teachers'>
            <Container className='mt-5 my-3' data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                <h1 className='text-center'>আমাদের <span className='text-success'>শিক্ষকরা</span></h1>
                <hr className='hr1'/>
                <hr className='hr2'/>
                <Row className='mx-auto gap'>
                    <div>
                        <p className='text-center fs-6'>আমাদের শিক্ষকরা অনেক পরিশ্রমী । তারা তাদের সময়গুলো শিক্ষার্থীদের সাথে নিত্য নতুন জিনিস সম্পর্কে গভীর ভাবে আলোচলনা করে। খিয়ারপাড়া উচ্চ বিদ্যালয় এর শিক্ষকদের সম্পর্কে সংক্ষিপ্ত আকারে বিবরণ। উল্লেখযোগ্য আমাদের শিক্ষক গুলো হলো:- <br />
                        <span className='fs-4 mt-5 text-cursor text-center'><BsForwardFill className='text-danger'/><span style={{ color: 'green'}}>{text}</span></span>
                            <Cursor cursorColor='green' />
                        </p>
                        
                    </div>
                    {
                        teacher?.map(teach =><Col md='6'sm='12' lg='4' className='text-center'>
                        <div className='my-4 mx-2 text-center' data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                            <Card className='shadow-lg'>
                                <img variant="top" src={teach?.img} className='p-2 project-img text-center rounded' alt={teach?.name}/>
                                <Card.Body>
                                    <h5 className='text-center'>নামঃ {teach?.name}</h5>
                                    <h6 className='text-center text-danger'><span className='text-success'>পদবি</span><BsPersonFill className='text-success mx-1'/>{teach?.position}</h6>
                                    <p className='text-center'>ইনডেক্স নং<BsArrowRightCircleFill className='text-success mx-1'/>  {teach?.IndexNo}</p>
                                    <h6 className='text-center'>বিষয়<BsArrowRightCircleFill className='text-success mx-1'/>{teach?.title}</h6>
                                    <h5 className='text-center'><BsFillTelephoneFill className='text-success mx-1'/>{teach?.phone}</h5>
                                    <p className='text-justify-content-around fs-5 p-2 text-secondary'>{teach?.details.slice(0, 130) + " ... আরো জানতে"}</p>
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