import React from 'react'; 
import Hero from './HeroSection/Hero';
import CardItems from './CardItems/CardItems';
import Footer from '../HomePage/Footer/Footer';
import Header from '../HomePage/Header/Header'; 

function ShoppingBag() {
    return (
        <> 
            <Header/>
            <Hero/> 
            <CardItems/>
            <hr />
            <Footer/>
        </>
    );
}

export default ShoppingBag;
