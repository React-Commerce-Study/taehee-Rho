import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import instaIcon from '../../assets/images/icon-insta.svg'
import faceIcon from '../../assets/images/icon-fb.svg'
import ytIcon from '../../assets/images/icon-yt.svg'

const StyledLink = styled(Link)`
    text-decoration: none;
`;

const FooterWrap = styled.div`
    width: 100%;
    background-color: var(--gray600);
    margin-top: 230px;
`

const FooterStyle = styled.footer`
    width: 1280px;
    margin: 0 auto;
    padding: 60px 0;
`

const FooterLinkWrap = styled.section`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid var(--gray700);
    padding-bottom: 30px;

    .footer-link-left {
        display: flex;
    }

    .left-link + .left-link{
        margin-left: 14px;
    }

    .strong {
        font-family: var(--font--Bold);
    }

    .sns-icon + .sns-icon {
        margin-left: 14px;
    }
`

const FooterLeftLink = styled(StyledLink)`
    font-size: 14px;
    color: var(--black);
`

const FooterRightLink = styled(StyledLink)`

`

const FooterText = styled.p`
    margin-top: 30px;
    line-height: 1.6;
    font-size: 14px;
    color: var(--gray800);

    strong {
        font-family: var(--font--Bold);
    }
`

export default function Footer() {
    return (
        <FooterWrap>
        <FooterStyle>
            <FooterLinkWrap>
                <div className="footer-link-left">
                    <FooterLeftLink className="left-link" to="/">호두샵 소개</FooterLeftLink>
                    <FooterLeftLink className="left-link" to="/">이용약관</FooterLeftLink>
                    <FooterLeftLink className="left-link strong" to="/">정보처리방침</FooterLeftLink>
                    <FooterLeftLink className="left-link" to="/">전자금융거래약관</FooterLeftLink>
                    <FooterLeftLink className="left-link" to="/">청소년보호정책</FooterLeftLink>
                    <FooterLeftLink className="left-link" to="/">제휴문의</FooterLeftLink>
                </div>



                <div className="footer-link-right">
                    <FooterRightLink className="sns-icon" to="/"> 
                        <img src={instaIcon} alt="인스타 아이콘"></img>
                    </FooterRightLink>

                    <FooterRightLink className="sns-icon" to="/"> 
                        <img src={faceIcon} alt="페이스북 아이콘"></img>
                    </FooterRightLink>

                    <FooterRightLink className="sns-icon" to="/"> 
                        <img src={ytIcon} alt="유튜브 아이콘"></img>
                    </FooterRightLink>
                </div>
            </FooterLinkWrap>

            <FooterText>
                <strong>(주)HODU SHOP</strong> <br />
                제주특별자치도 제주시 동광고 137 제주코딩베이스캠프 <br />
                사업자 번호 : 000-0000-0000 | 통신판매업 <br />
                대표 : 김호두 <br />
            </FooterText>
        </FooterStyle>
        </FooterWrap>
    )
}
