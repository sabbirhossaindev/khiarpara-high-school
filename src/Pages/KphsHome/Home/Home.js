import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import HomeTop from '../HomeTop/HomeTop';
import Notice from '../Notice/Notice';
import Teachers from '../Teachers/Teachers';
import Classes from '../Classes/Classes';

const Home = () => {
    return (
        <div>
            <HomeTop></HomeTop>
            <About></About>
            <Notice></Notice>
            <Teachers></Teachers>
            <Classes></Classes>
            <Contact></Contact>
        </div>
    );
};

export default Home;