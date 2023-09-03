import React from 'react';
import './Classes.css';
import { Container } from 'react-bootstrap';

const Classes = () => {
    return (
        <div className='p-1' id='classes'>
            <h1 className='text-center my-4'><span className='text-success'>শিক্ষার্থীরা</span></h1>
                <hr className='hr1'/>
            <hr className='hr2' />
            <Container className='my-5'>
                <h1>শিক্ষার্থীরা details </h1>
            </Container>
        </div>
    );
};

export default Classes;