import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import EventBanner from '../common/EventBanner'
import Product from '../common/Product'
import TopButton from '../common/TopButton';
import Filter from '../common/Filter';
import styled from 'styled-components';

const Products = styled.div`
    width: 1280px;
    margin: 80px auto;
`

function Home() {

    const [products, setProducts] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchProducts = async () => {
        try {
            setProducts(null);
            setLoading(true);
            setError(null);

            const response = await axios.get("https://openmarket.weniv.co.kr/products/");
            setProducts(response.data.results)

        } catch(e) {
            setError(e);
        }
        setLoading(false);
    }


    useEffect(() => {
        fetchProducts();
    }, []);

    if(loading) return <div>로딩중</div>;
    if(error) return <div>에러발생!</div>;
    if(!products) return null;


    return(
        <>
            <Header />
            <EventBanner />
            <Products>
                <Filter />
                <Product productApi={products}/>
            </Products>
            <Footer />
            <TopButton />
        </>
    )
}


export default Home;
