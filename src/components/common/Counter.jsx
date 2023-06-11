import React, { useState } from "react";
import styled from "styled-components";
import PlusIcon from "../../assets/icon-plus-line.svg";
import MinusIcon from "../../assets/icon-minus-line.svg";

export default function Counter({
  getPrice,
  getCount,
  productPrice,
  productStock,
  totalPrice,
  count,
}) {
  console.log(productPrice, productStock, totalPrice);

  const plusHandler = () => {
    if (productStock === 0) {
      alert("재고가 없는 상품입니다");
      return;
    }
    if (count < productStock) {
      getCount(count + 1);
      getPrice(totalPrice + productPrice);
    }
  };

  const minusHandler = () => {
    if (count > 1) {
      getCount(count - 1);
      getPrice(totalPrice - productPrice);
    }
  };

  return (
    <CounterWrap>
      <MinusButton
        type="button"
        onClick={() => {
          minusHandler();
        }}
      ></MinusButton>
      <p>{count}</p>
      <PlusButton
        type="button"
        onClick={() => {
          plusHandler();
        }}
      ></PlusButton>
    </CounterWrap>
  );
}

const CounterWrap = styled.section`
  display: flex;
  justify-content: space-between;
  width: 150px;
  border-radius: 5px;
  border: 1px solid var(--gray700);
  box-sizing: border-box;
  align-items: center;
  margin: 30px 0;

  p {
    text-align: center;
  }

  button {
    width: 48px;
    height: 48px;
    cursor: pointer;
  }
`;
const PlusButton = styled.button`
  border-left: 1px solid var(--gray700);
  &::before {
    content: "";
    display: block;
    width: 20px;
    height: 20px;
    background: url(${PlusIcon}) no-repeat center/cover;
    margin: 0 auto;
  }
`;
const MinusButton = styled.button`
  border-right: 1px solid var(--gray700);
  &::before {
    content: "";
    display: block;
    width: 20px;
    height: 20px;
    background: url(${MinusIcon}) no-repeat center/cover;
    margin: 0 auto;
  }
`;
