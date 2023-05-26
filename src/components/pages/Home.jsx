import React from 'react';
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import EventBanner from '../common/EventBanner'
import Product from '../common/Product'
import TopButton from '../common/TopButton';
import styled from 'styled-components'

const Products = styled.div`
    width: 1280px;
    margin: 0 auto;
`

function Home() {
    return(
        <>
            <Header />
            <EventBanner />
            <Products>
                <Product />
            </Products>
            <Footer />
            <TopButton />
        </>
    )
}


export default Home;
