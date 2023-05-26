import React from 'react'
import styled from 'styled-components'
import arrowTop from '../../assets/images/icon-arrow-top.svg'

const ScrollTop = styled.button `
    position: fixed;
    bottom: 56px;
    right: 80px;
    width: 80px;
    height: 80px;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 50px;

    &::after {
        content: "";
        display: block;
        width: 32px;
        height: 32px;
        background: url(${arrowTop}) no-repeat center / cover;
        margin: auto;
    }
`

export default function TopButton() {
  return (
    <ScrollTop></ScrollTop>
  )
}
