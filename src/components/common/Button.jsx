import React from "react";
import styled, { css } from "styled-components";

export default function Button({ text, ...props }) {
  return <ButtonStyled {...props}>{text}</ButtonStyled>;
}

const ButtonStyled = styled.button`
  width: 100%;
  background-color: ${(props) => props.color || "var(--primaryColor)"};
  color: white;
  padding: 19px 0;
  border-radius: 5px;
  text-align: center;
  font-family: var(--font--Bold);
  font-size: 18px;
  cursor: pointer;
`;
