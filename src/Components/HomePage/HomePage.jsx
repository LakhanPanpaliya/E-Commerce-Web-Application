import React from 'react';
import Header from './Header/Header'
import HeroSection from './HeroSection/HeroSection';
import ProductCard from './Cards/ProductCard';
import './HomePage.css'
import NewsLetterSection from './NewsLetterSection/NewsLetterSection';
import Footer from './Footer/Footer'; 

function HomePage() {
    return (
        <div className='mainBody'>
            <Header/> 
            <HeroSection/>
            <ProductCard/>
            <NewsLetterSection/>
            <hr />
            <Footer/>
        </div>
    );
}

export default HomePage;
