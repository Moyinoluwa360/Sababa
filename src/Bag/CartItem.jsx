"use client";
import React from "react";
import styled from "styled-components";

const CartItem = ({
  image,
  title,
  currentPrice,
  originalPrice,
  color,
  size,
  quantity,
}) => {
  return (
    <CartItemContainer>
      <ProductImage src={image} alt="Product" />
      <ItemDetails>
        <PriceContainer>
          <CurrentPrice>{currentPrice}</CurrentPrice>
          <OriginalPrice>{originalPrice}</OriginalPrice>
        </PriceContainer>
        <ProductTitle>{title}</ProductTitle>
        <ProductOptions>
          <span>{color}</span>
          <Divider />
          <span>{size}</span>
          <Divider />
          <span>QTY: {quantity}</span>
        </ProductOptions>
        <SaveLater>
          <HeartIconContainer>
            <div>
              <img src="/heart.svg" alt="heart icon" />
            </div>
          </HeartIconContainer>
          <span>Save for later</span>
        </SaveLater>
      </ItemDetails>
      <RemoveItem>
        <img src="/x.svg" alt="cancel button" />
      </RemoveItem>
    </CartItemContainer>
  );
};

const CartItemContainer = styled.article`
  display: flex;
  padding: 16px;
  align-self: center;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin-bottom: 8px;
  width: 681px;
  height: 221px;
  @media (max-width: 710px){
    width: 600px;
    height: 200px;
  }
  @media (max-width: 620px){
    width: 343px;
    height: 195px;
  }
  @media (max-width: 370px){
    width: 260px;
    height: 160px;
  }
  @media (max-width: 280px){
    width: 220px;
    height: 145px;
    padding-left: 5px;
  }
`;

const ProductImage = styled.img`
  width: 209px;
  height: 189px;
  border-radius: 4px;
  object-fit: cover;
  @media (max-width: 620px){
    width: 129px;
    height: 160px;
  }
  @media (max-width: 370px){
    width: 100px;
    height: 130px;
  }
  @media (max-width: 280px){
    width: 70px;
    height: 90px;
  }
`;

const ItemDetails = styled.div`
  margin-left: 16px;
  flex: 1;
  @media (max-width: 370px){
    max-width: 105px;
  }
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
`;

const CurrentPrice = styled.span`
  color: #000;
  font-family: Inter, sans-serif;
  font-size: 18px;
  font-weight: 600;
  @media (max-width: 620px){
    font-size: 16px;
  }
  @media (max-width: 370px){
    font-size: 14px;
  }
`;

const OriginalPrice = styled.span`
  color: #545454;
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-weight: 600;
  text-decoration: line-through;
  @media (max-width: 620px){
    font-size: 12px;
  }
  @media (max-width: 370px){
    font-size: 10px;
  }
`;

const ProductTitle = styled.h3`
  color: #545454;
  font-family: Inter, sans-serif;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 16px;
  @media (max-width: 620px){
    font-size: 12px;
  }
  @media (max-width: 370px){
    font-size: 10px;
  }
`;

const ProductOptions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #545454;
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-weight: 500;
  width: 100%;
  @media (max-width: 620px){
    font-size: 11px;
    gap: 2px;
  }
  @media (max-width: 370px){
    overflow: auto;
    font-size: 9px;
    width: 120px;
  }
`;

const Divider = styled.span`
  width: 1px;
  height: 8px;
  background-color: rgba(0, 0, 0, 0.1);
`;

const SaveLater = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 32px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  font-family: Inter, sans-serif;
  font-size: 16px;
  color: #000;
  @media (max-width: 620px){
    font-size: 12px;
    margin-top: 12px;
  }
  @media (max-width: 370px){
    font-size: 10px;
    margin-top: 6px;
  }
`;

const HeartIconContainer = styled.div`
  img{
    height: 40px;
    width: 40px;
    @media (max-width: 710px){
      width: 27px;
      height: 27px;
    }
    @media (max-width: 370px){
      width: 20px;
      height: 20px;
    }
  }
`;

const RemoveItem = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  display: flex;
  align-items: flex-start;
  height: fit-content;
  @media (max-width: 620px){
    img{
      width: 15px;
      height: 15px;
    }
  }
  @media (max-width: 370px){
    margin: 3px;
    img{
      width: 12px;
      height: 12px;
    }
  }
`;

export default CartItem;
