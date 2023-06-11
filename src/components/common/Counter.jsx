import React from "react";
import styled from "styled-components";
import PlusIcon from "../../assets/icon-plus-line.svg";
import MinusIcon from "../../assets/icon-minus-line.svg";

export default function Counter() {
  return (
    <CounterWrap>
      <PlusButton type="button"></PlusButton>
      <p>1</p>
      <MinusButton type="button"></MinusButton>
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
  border-right: 1px solid var(--gray700);
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
  border-left: 1px solid var(--gray700);
  &::before {
    content: "";
    display: block;
    width: 20px;
    height: 20px;
    background: url(${MinusIcon}) no-repeat center/cover;
    margin: 0 auto;
  }
`;
