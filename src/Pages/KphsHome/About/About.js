import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './About.css';
import school from '../../../Images/logo/school.jpeg';
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
                            <p className='fs-6'>খিয়ারপাড়া উচ্চ বিদ্যালয় প্রথম স্থাপন হয় ১৯৯৪ খ্রিঃ এবং প্রতিষ্ঠার তারিখ ০১/০১/১৯৯৫ সনে । এটি রংপুর জেলার বদরগঞ্জ উপজেলার কিসমত ঘাটাবিল গ্রামে অবস্থিত। এটি নাম করণ করা হয়  খিয়ারপাড়া গ্রামের নামে। এটি প্রথম নিম্ন-মাধ্যমিক শুরু হয় ০১/০২/১৯৯৮ সালে , মাধ্যমিক চালু হয় ০১/০৫/২০০৪ সালে , নবম শ্রেণির অনুমোদনের তারিখ ০১/০১/১৯৯৯ সনে , বিজ্ঞান ও ব্যবসা শিক্ষা অনুমোদন করা হয় ০১/০১/১৯৯৯ সনে , দশম শ্রেণি অনুমোদন হয়  ০১/০১/২০২০ সনে , এবং কম্পিউটার শিক্ষা অনুমোদনের তারিখ ০১/০১/২০০৩ সনে । এটি  বঠতলি বাজার হতে পশ্চিম দিকে এক কিলোমিটার দূরে অবস্থিত। খিয়ারপাড়া উচ্চ বিদ্যালয় ১.২৯ একর জমিতে জায়গা নিয়ে  অবস্থিত।  <br />
                            <br />
                            বিদ্যালয়ে কক্ষ সংখ্যা - ০৯ টি ( ২৫২-বর্গ মিটার ) , ০৬ টি কক্ষ আছে ( ২০৬ বর্গ মিটারে )  এবং ০১ টি মসজিদ ( ৩৮ বর্গ মিটার ) । বিদ্যালয়ে লাইব্রেরী , খেলার মাঠ , বিজ্ঞানাগার  , মাল্টিমিডিয়া প্রজেক্টর সংখ্যা ০২ টি , ল্যাপটপ সংখ্যা (১৮ টি) এবং একটি শেখ রাসেল কম্পিউটার ল্যাব  আছে।
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