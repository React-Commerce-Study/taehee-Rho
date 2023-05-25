import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import searchBtn from '../../assets/images/search.svg';
import cartIcon from '../../assets/images/icon-shopping-cart.svg';
import loginIcon from '../../assets/images/icon-user.svg';

const StyledLink = styled(Link)``;


//* 반응형 추가
const HeaderStyle = styled.header`
    position: sticky;
    top: 0;
    z-index: 999;
    display: flex;
    padding: 22px 320px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.05);
    align-items: center;
    background-color: white;
`;


//* 인풋창 활성화 되면 컬러변경
const SearchInput = styled.div`
    width: 512px;
    margin-left: 50px;
    border: 3px solid var(--gray600);
    border-radius: 50px;
    padding: 10px 20px;

    form {
        display: flex;
    }

    input {
        font-size: 16px;
    }

    input::placeholder {
        font-family: var(--font--Regular);
        color: var(--gray700);
    }

    button {
        width: 28px;
        cursor: pointer;
        display: inline-block;
        margin-left: auto;
    }

`

const IconBtn = styled.div`
    margin-left: auto;
    display: flex;
    gap: 32px;
`

const CartBtn = styled(StyledLink) `
    width: 60px;
    display: block;
    font-size: 12px;
    text-align: center;
    text-decoration: none;
    color: var(--black);

    p {
        margin-top : 4px;
    }
`

const LoginBtn = styled(CartBtn)`
`

export default function Header() {
    return (
        <HeaderStyle>
            <h1 className="logo">
                <StyledLink to="/home"><img src={logo} alt="logo 이미지 추가" /></StyledLink>
            </h1>

            <SearchInput>
                <form>
                    <input type='text' placeholder="상품을 검색해보세요!"></input>
                    <button type='submit'>
                        <img src={searchBtn} alt="search버튼" />
                    </button>
                </form>
            </SearchInput>

            <IconBtn>
                <CartBtn to="/home">
                    <img  src={cartIcon} alt="장바구니 아이콘" />
                    <p>장바구니</p>
                </CartBtn>

                <LoginBtn to="/home">
                    <img  src={loginIcon} alt="유저 아이콘" />
                    <p>장바구니</p>
                </LoginBtn>
            </IconBtn>

        

        </HeaderStyle>
    )
}
