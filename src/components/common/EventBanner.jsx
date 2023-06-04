import {useState, useEffect,  React} from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import leftBtn from '../../assets/images/icon-swiper-1.svg'
import rightBtn from '../../assets/images/icon-swiper-2.svg'
import EventArrow from '../../assets/images/icon-arrow-left.svg'
import carouselDate from '../../mock/carouselData'


const StyledLink = styled(Link)``;

const Banner = styled.article`
    width: 100vw;
    height: 450px;
    background-color: red;
    position: relative;

    .left-btn,
    .right-btn {
        width: 60px;
        height: 124px;
        cursor: pointer;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        display: block;
    }

    .left-btn {
        background: url(${leftBtn}) no-repeat center/cover;
        margin-left: 30px;
    }

    .right-btn {
        background: url(${rightBtn}) no-repeat center/cover;
        margin-right: 30px;
        right: 0;
    }
`
const BannerImg = styled(StyledLink)`
    background-color: blue;
    
    img {
        width: 100vw;
        height: 100%;
        object-fit: cover;
    }
`

const Indicator = styled.section`
    display: flex;
    gap: 12px;
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);

    .dot {
        width: 12px;
        height: 12px;
        background-color: var(--white);
        border-radius: 50px;
        cursor: pointer;
    }

    .active {
        background-color: var(--black);
    }
`


const EventPage = styled.div `
    width: 100px;
    height: 100px;
    background-color: var(--primaryColor);
    position: absolute;
    bottom: -50px;
    right: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;


    p {
        color: var(--white);
        width: 100%;
        text-align: center;
        text-decoration: none;
        position: absolute;
        bottom: 10px;
        font-size: 14px;
    }

    &::before {
        content: '';
        display: block;
        width: 24px;
        height: 24px;
        background: url(${EventArrow}) no-repeat center / cover;
    }

`

export default function EventBanner() {
    // 현재 index값 설정
    const [currentIndex, setCurrentIndex] = useState(0);

    // next 버튼 클릭시 이미지 index + 1
    const handlerNext = () => {
        setCurrentIndex((nextIndex) => nextIndex === carouselDate.length - 1 ? 0 : nextIndex + 1
        );
    }

    // prev 버튼 클릭시 이미지 index - 1
    const handlerPrevious = () => {
        setCurrentIndex((prevIndex) => prevIndex === 0 ? carouselDate.length - 1 : prevIndex - 1
        );
    }

    // 클릭한 index 로 변경
    const handleSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <Banner>
            <BannerImg to={carouselDate[currentIndex].src} key={carouselDate[currentIndex].id}>
                <img src={carouselDate[currentIndex].img_url} alt={carouselDate[currentIndex].img_name} />
                <EventPage>
                    <p>자세히 보기</p>
                </EventPage>
            </BannerImg>

            <Indicator>
                {carouselDate.map((slides, index) => {
                    return <button key={slides.id} type="button" className={`dot ${index === currentIndex ? 'active' : ''}`} onClick={() => handleSlide(index)}></button>
                })}
            </Indicator>

            <button className="left-btn" type="button" onClick={handlerNext}></button>
            <button className="right-btn" type="button" onClick={handlerPrevious}></button>
        </Banner>
    )
}
