import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import SampleImg from '../../assets/images/sample.png'
import cardCartIcon from '../../assets/images/icon-shopping-cart-white.svg'

const StyledLink = styled(Link)`
color: var(--black);`;

const Products = styled.div`
    width: 1280px;
    margin: 80px auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`

const ProductCardWrap = styled.li `
    width: 380px;
    margin-top: 48px;
    position: relative;
    color: var(--white);

`

const LabelCard = styled.div`
    position: absolute;
    padding: 10px 12px;
    background-color: var(--primaryColor);
    font-family: var(--font--Bold);
    border-radius: 12px 0 6px 0;
`

const CartBtn = styled.button `
    display: block;
    width: 56px;
    height: 56px;
    background-color: rgba(0,0,0, 0.5);
    border-radius: 50px;
    position: absolute;
    right: 20px;
    top: 304px;
    cursor: pointer;

    &::before {
        content: '';
        display: block;
        width: 32px;
        height: 32px;
        background: url(${cardCartIcon}) no-repeat center/cover;
        margin-top: auto;
        margin-left: 10px;
    }
`

const ProductCardLink = styled(StyledLink)`
    overflow: hidden;
    text-decoration: none;

    .product-img {
        width: 380px;
        height: 380px;
        border-radius: 12px;
        overflow: hidden;
    }

    .product-img img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }


    .product-card-saller {
        color: var(--primaryColor);
        font-family: var(--font--Medium);
        margin-top: 20px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .product-card-title {
        color: var(--gray900);
        font-family: var(--font--Medium);
        font-size: 18px;
        margin-top: 10px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .product-card-price {
        margin-top: 10px;
    }

    .product-card-price strong {
        color: var(--black);
        font-family: var(--font--Bold);
        font-size: 24px;
        margin-top: 10px;
        margin-right: 2px;
    }
`

export default function Product(props) {
    console.log(props.productApi)

    const priceDivide = (price) => {
        const n =  price.toString().slice(0, 3) + "," + price.toString().slice(3);
        return n
    }

    const num = props.productApi[0].price;
    console.log(num)

    console.log(priceDivide(num))

 
    return (
        <Products>
            {props.productApi.map(productCard => {
                return <ProductCardWrap key={productCard.product_id}>

            <LabelCard>
                HOT
            </LabelCard>

            <CartBtn type="button"></CartBtn>

            <ProductCardLink to="/home">
                <div className="product-img">
                    <img src={productCard.image} alt="상품 이미지" />
                </div>

                <p className="product-card-saller">{productCard.store_name}</p>
                <p className="product-card-title">{productCard.product_name}</p>
                <p className="product-card-price"><strong>{priceDivide(productCard.price)}</strong>원</p>
            </ProductCardLink>
                </ProductCardWrap>
            })}
        {/* <ProductCardWrap>
            <LabelCard>
                HOT
            </LabelCard>

            <CartBtn type="button"></CartBtn>

            <ProductCard to="/home">
                <div className="product-img">
                    <img src={SampleImg} alt="샘플 이미지" />
                </div>

                <p className="product-card-saller">제주코딩 베이스 캠프</p>
                <p className="product-card-title">버그잡는 개리 키링버그잡는 개리 키링버그잡는 개리 키링버그잡는 개리 키링</p>
                <p className="product-card-price"><strong>29,000</strong>원</p>
            </ProductCard>
        </ProductCardWrap> */}
        </Products>
    )
}
