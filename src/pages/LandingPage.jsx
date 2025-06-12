import React from 'react'
import Header from '../components/Header';
import MainContent from '../components/MainContent';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';

const LandingPage = () => {



    return (
        
       <div className='landing-page'>
        <Header/>
        <HeroSection/>
        <MainContent/>
        <Footer/>
       </div>
    )
}

export default LandingPage;