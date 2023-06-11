import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Counter from "../common/Counter";
import Button from "../common/Button";

export default function Detail() {
  const { product_id } = useParams();
  const [detailProduct, setDetailProduct] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
  const [count, setCount] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProductDetail = async () => {
    try {
      const response = await axios.get(
        `https://openmarket.weniv.co.kr/products/${product_id}`
      );
      setTotalPrice(response.data.price + response.data.shipping_fee);
      return setDetailProduct(response.data);
    } catch (e) {
      setError(e);
    }
  };

  useEffect(() => {
    fetchProductDetail();
  }, []);

  const getPrice = (price) => {
    setTotalPrice(price);
  };

  const getCount = (prevcount) => {
    setCount(prevcount);
  };

  return (
    <>
      <Header />
      <DetailWrap>
        <img src={detailProduct?.image} alt="상품 이미지" />
        <div className="product-detail">
          <DetailTop>
            <p>{detailProduct?.store_name}</p>
            <h2>{detailProduct?.product_name}</h2>
            <p>
              <strong>{detailProduct?.price}</strong> 원
            </p>
          </DetailTop>
          <DetailBottom>
            <p className="fee-text">{`택배배송 / ${detailProduct?.shipping_fee}`}</p>
            <hr />
            <Counter
              getPrice={getPrice}
              totalPrice={totalPrice}
              count={count}
              getCount={getCount}
              productPrice={detailProduct.price}
              productStock={detailProduct.stock}
            />
            <hr />
            <ProductPrice>
              <p className="total-product-price">총 상품 금액</p>
              <div className="product-price-wrap">
                <span>
                  총 수량 <strong>{count}</strong> 개
                </span>
                <span></span>
                <span>
                  <strong>{totalPrice}</strong>원
                </span>
              </div>
            </ProductPrice>
            <ButtonWrap>
              <Button text="바로 구매"></Button>
              <Button text="장바구니 담기" color="var(--gray900)"></Button>
            </ButtonWrap>
          </DetailBottom>
        </div>
      </DetailWrap>
      <Footer />
    </>
  );
}

const DetailWrap = styled.article`
  width: 1280px;
  margin: 40px auto;
  display: flex;
  gap: 50px;

  .product-detail,
  & img {
    width: 100%;
  }

  img {
    aspect-ratio: 1 / 1;
    object-fit: cover;
  }

  .product-img {
    background-color: #e2e2e2;
  }
`;

const DetailTop = styled.div`
  margin-bottom: 120px;

  p:first-child {
    color: var(--primaryColor);
    font-size: 18px;
  }

  h2 {
    font-size: 36px;
    margin: 16px 0 20px 0;
  }

  p:last-child strong {
    font-size: 36px;
    font-family: var(--font--Bold);
  }
`;

const DetailBottom = styled.div`
  .fee-text {
    margin-bottom: 20px;
  }

  hr {
    margin: 0;
    border: 1px solid var(--gray600);
  }
`;

const ProductPrice = styled.section`
  display: flex;
  margin-top: 32px;
  align-items: center;
  justify-content: space-between;

  .total-product-price {
    font-size: 18px;
    flex-shrink: 0;
    font-family: var(--font--Medium);
  }

  .product-price-wrap {
    display: flex;
    align-items: center;
  }

  div span:first-child {
    font-size: 18px;
    color: var(--gray800);
  }

  div span:first-child strong {
    color: var(--primaryColor);
    font-family: var(--font--Bold);
  }

  div span:last-child strong {
    color: var(--primaryColor);
    font-size: 36px;
    font-family: var(--font--Bold);
  }

  div span:last-child {
    font-size: 18px;
    color: var(--primaryColor);
  }

  div span:nth-child(2) {
    width: 1px;
    height: 20px;
    background-color: var(--gray700);
    margin: 0 12px;
  }
`;

const ButtonWrap = styled.div`
  margin-top: 32px;
  display: flex;
  gap: 14px;

  button:last-child {
    flex-basis: 45%;
    flex-grow: 1;
  }
`;
