import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import leftBtn from '../../assets/images/icon-swiper-1.svg'
import rightBtn from '../../assets/images/icon-swiper-2.svg'
import EventArrow from '../../assets/images/icon-arrow-left.svg'


const StyledLink = styled(Link)``;


//* 방향버튼, dot, 일정시간이 지나면 배너 이미지 넘어감
//* 각 이미지마다 이동 링크가 다름
const EventImg = styled(StyledLink)`
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    height: 500px;
    background-color: var(--gray600);

    .arrow-btn-wrap {
        display: flex;
        margin: 0 30px;
        justify-content: space-between;
    }

    button {
        width: 60px;
        height: 124px;
        cursor: pointer;
    }

    //* 클릭시 전이나 후 배너로 이동

    .left-btn {
        background: url(${leftBtn}) no-repeat center/cover;
    }

    .right-btn {
        background: url(${rightBtn}) no-repeat center/cover;
    }
`
//* 배너 넘어갈때 같이 넘어감/ 해당 dot을 클릭해도 그 위치에 있는 배너로 이동
const Pagenation = styled.section`
    display: flex;
    gap: 12px;
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);

    .dot {
        width: 10px;
        height: 10px;
        background-color: var(--white);
        border-radius: 50px;
    }

    .dot-active {
        background-color: var(--black);
    }
`
//* 클릭시 현재 떠있는 이벤트 페이지로 넘어감
const EventPage = styled(StyledLink) `
    width: 100px;
    height: 100px;
    background-color: var(--primaryColor);
    position: absolute;
    bottom: -32px;
    right: 240px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;


    p {
        /* background-color: red; */
        color: var(--white);
        text-decoration: none;
        position: absolute;
        bottom: 10px;
        font-size: 14px;
    }

    &::before {
        content: '';
        display: block;
        width: 32px;
        height: 32px;
        background: url(${EventArrow}) no-repeat center / cover;
    }

`

export default function EventBanner() {
    return (
        <EventImg to="/home">
            <div className="arrow-btn-wrap">
                <button className="left-btn" type="button"></button>

                <button className="right-btn" type="button"></button>
            </div>

            <Pagenation>
                <div className="dot dot-active"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </Pagenation>

            <EventPage to="/home">
                <p>자세히 보기</p>
            </EventPage>

        </EventImg>
    )
}
