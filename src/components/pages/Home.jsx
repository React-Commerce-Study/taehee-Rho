import React from 'react';
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import EventBanner from '../common/EventBanner'
import Product from '../common/Product'

function Home() {
    return(
        <div>
            <Header />
            <EventBanner />
            <Product />
            <Footer />
        </div>
    )
}


export default Home;
