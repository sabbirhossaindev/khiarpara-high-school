import React from 'react';
import Slider from "react-slick";
import fream from '../../../Images/logo/fream.jpg'
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import './Introduction.css';

const Introduction = () => {
    return (
        <div className='p-1 introduction-container' id='introduction'>
            <h2>Introduction</h2>
        </div>
    );
};

export default Introduction;