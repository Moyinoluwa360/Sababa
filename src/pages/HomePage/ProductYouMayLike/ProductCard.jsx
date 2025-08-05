import React from 'react';
import styled from 'styled-components';

export function ProductCard({ product }) {
  const { name, image, price, storeCount } = product;
  
  
  return (
    <CardContainer >
      <ImageContainer>
        <ProductImage src={image} alt={name} loading="lazy" />
        <LikeButton aria-label={`Like ${name}`}>
          <LikeIcon src="https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/c44b90513fc161d45e980628189af31a658fae5fc05b1e5e4b6050dd361f8626?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&" alt="" />
        </LikeButton>
      </ImageContainer>
      <ProductInfo>
        <ProductName>{name}</ProductName>
        <PriceInfo>
          <PriceLabel>Price from:</PriceLabel>
          <PriceDetails>
            <Price>${price.toFixed(2)}</Price>
            <StoreCount>- Available at {storeCount} stores</StoreCount>
          </PriceDetails>
        </PriceInfo>
      </ProductInfo>
    </CardContainer>
  );
}

const CardContainer = styled.article`
  display: flex;
  flex-direction: column;
  width: 218px;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
  
  @media (max-width: 480px) {
    width: 119px;
    height: 260px;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  border-radius: 4px;
  height: 304px;
  overflow: hidden;
  @media (max-width: 480px) {
    height: 196px;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`;

const LikeButton = styled.button`
  position: absolute;
  bottom: 12px;
  right: 12px;
  border-radius: 25px;
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  width: 40px;
  height: 40px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.8);
  }
  
  &:focus {
    outline: 2px solid #000;
    outline-offset: 2px;
  }
  @media (max-width:480px){
    width: 24px;
    height: 24px;
  }
`;

const LikeIcon = styled.img`
  width: 25px;
  height: 25px;
  margin-top: 2.5px;
  @media (max-width:480px){
    width: 15px;
    height: 15px;
  }
`;

const ProductInfo = styled.div`
  margin-top: 4px;
  font-family: Inter;
`;

const ProductName = styled.h3`
  color: rgba(0, 0, 0, 1);
  font: 500 16px Inter, sans-serif;
  margin: 0;
  @media (max-width: 480px) {
    font-size: 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const PriceInfo = styled.div`
  margin-top: 1px;
`;

const PriceLabel = styled.span`
  color: rgba(84, 84, 84, 1);
  font-size: 12px;
  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

const PriceDetails = styled.div`
  gap: 4px;
  font-size: 16px;
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const Price = styled.span`
  font-weight: 600;
  font-size: 16px;
  color: rgba(0, 0, 0, 1);
  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

const StoreCount = styled.span`
  font-weight: 600;
  font-size: 14px;
  color: rgba(0, 0, 0, 1);
  @media (max-width: 480px) {
    font-size: 10px;
  }
`;