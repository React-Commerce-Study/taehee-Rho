import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import searchBtn from '../../images/search.svg';

const StyledLink = styled(Link)``;
const HeaderStyle = styled.header`
    display: flex;
    padding: 12px 20px;
`;

const SearchInput = styled.div`
    background-color: red;
    border: 1px solid var(--gray600);

    input {
        border: none;
    }

    button {
        cursor: pointer;
    }
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

        </HeaderStyle>
    )
}
