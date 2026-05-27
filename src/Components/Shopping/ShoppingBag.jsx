import React from 'react';
// import ShoppingHeader from './Header/ShoppingHeader';
import Hero from './HeroSection/Hero';
import CardItems from './CardItems/CardItems';
import Footer from '../HomePage/Footer/Footer';
import Header from '../HomePage/Header/Header';
// import Header from './Header/ShoppingHeader';

function ShoppingBag() {
    return (
        <>
            {/* <ShoppingHeader/>   */}
            <Header/>
            <Hero/> 
            <CardItems/>
            <hr />
            <Footer/>
        </>
    );
}

export default ShoppingBag;
