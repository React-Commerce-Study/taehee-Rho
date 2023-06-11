import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import EventBanner from "../common/EventBanner";
import Product from "../common/Product";
import TopButton from "../common/TopButton";
import Filter from "../common/Filter";
import styled from "styled-components";

function Home() {
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [hasNext, setHasNext] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //초기 데이터 가져오기
  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(
        `https://openmarket.weniv.co.kr/products/?page=${page}`
      );
      return response.data;
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  // 다음 페이지가 있을 경우에만 데이터 가져오기
  useEffect(() => {
    if (hasNext) {
      (async () => {
        await fetchProducts().then((res) => {
          setProducts((prevProducts) => [...prevProducts, ...res.results]);
          setHasNext(page + 1 <= Math.ceil(res.count / 15));
        });
      })();
    }
  }, [page, hasNext]);

  // 스크롤 이벤트 핸들러 등록
  const scrollHandle = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollHeight <= scrollTop + clientHeight && hasNext) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandle);

    return () => window.removeEventListener("scroll", scrollHandle);
  }, [hasNext]);

  return (
    <>
      <Header />
      <EventBanner />
      <Filter />
      <Product productApi={products} />
      <Footer />
      <TopButton />
    </>
  );
}

export default Home;
