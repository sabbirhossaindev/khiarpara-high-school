import React from 'react';
import About from '../About/About';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import HomeTop from '../HomeTop/HomeTop';
import ManagingCommittee from '../ManagingCommittee/ManagingCommittee';
import Notice from '../Notice/Notice';
import Teachers from '../Teachers/Teachers';

const Home = () => {
    return (
        <div>
            <HomeTop></HomeTop>
            <About></About>
            <Notice></Notice>
            <Teachers></Teachers>
            <ManagingCommittee></ManagingCommittee>
            <Blogs></Blogs>
            <Contact></Contact>
        </div>
    );
};

export default Home;