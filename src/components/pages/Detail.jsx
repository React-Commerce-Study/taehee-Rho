import React from "react";
import styled from "styled-components";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Counter from "../common/Counter";
import Button from "../common/Button";

export default function Detail() {
  return (
    <>
      <Header />
      <DetailWrap>
        <div className="product-img">...</div>
        <div className="product-detail">
          <DetailTop>
            <p>백엔드 글로벌</p>
            <h2>딥러닝 개발자 무릎 담요</h2>
            <p>
              <strong>17,500</strong>원
            </p>
          </DetailTop>
          <DetailBottom>
            <p className="fee-text">택배배송 / 무료배송</p>
            <hr />
            <Counter />
            <hr />
            <ProductPrice>
              <p className="total-product-price">총 상품 금액</p>
              <div className="product-price-wrap">
                <span>
                  총 수량 <strong>1</strong> 개
                </span>
                <span></span>
                <span>
                  <strong>20,500</strong>원
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

  & div {
    width: 100%;
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

  p:last-child {
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
  justify-content: space-between;
  // 왜 안먹니..
  margin-top: 32px;

  .total-product-price {
    width: 100%;
    font-size: 18px;
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

  button:first-child {
    flex-grow: 2;
  }
  // 왜 안먹니...

  button:last-child {
    flex-grow: 1;
  }
`;
