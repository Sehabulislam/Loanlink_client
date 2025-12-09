import React from 'react';
import Banner from './Banner';
import Features from './Features';
import FAQ from './FAQ';
import WorkProcess from './WorkProcess';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div className='space-y-10'>
            <Banner></Banner>
            <Features></Features>
            <FAQ></FAQ>
            <WorkProcess></WorkProcess>
            <Reviews></Reviews>
            </div>
    );
};

export default Home;