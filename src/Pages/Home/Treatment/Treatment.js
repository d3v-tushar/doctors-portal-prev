import React from 'react';
import treatment from '../../../assets/images/treatment.png';

const Treatment = () => {
    return (
        <div className="hero lg:grid-cols-2">
        <div className="hero-content flex-col lg:flex-row">
            <img src={treatment} alt='' className="w-1/4 rounded-lg shadow-2xl" />
            <div>
            <h1 className="text-5xl font-bold">Exceptional Dental <br /> Care, on Your Terms</h1>
            <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it</p>
            <button className="btn btn-primary">Get Started</button>
            </div>
        </div>
        </div>
    );
};

export default Treatment;