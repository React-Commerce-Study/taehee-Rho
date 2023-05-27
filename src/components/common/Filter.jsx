import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledLink = styled(Link)``

const Filters = styled.div`
    display: flex;
    width: 1280px;
    margin: 80px auto 0 auto;
    gap: 20px;

    .filter-active {
        font-family: var(--font--Bold);
        color: var(--black);
    }

    .divided {
        width: 1px;
        height: 18px;
        background-color: var(--gray700);
    }
`
const FilterBtn = styled.button`
    font-size: 18px;
    color: var(--gray800);
    cursor: pointer;
`

export default function Filter() {
    return (
        <Filters>
            <FilterBtn className="filter-active">
                최신순
            </FilterBtn>

            <div className="divided"></div>

            <FilterBtn>
                높은 가격
            </FilterBtn>

            <div className="divided"></div>

            <FilterBtn>
                낮은 가격
            </FilterBtn>


        </Filters>
    )
}
