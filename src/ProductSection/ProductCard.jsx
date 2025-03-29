import * as React from "react";
import styled from "styled-components";

export default function ProductCard(props) {
  return (
    <CardWrapper>
      <ImageContainer>
        <ProductImage loading="lazy" src={props.product?.product_photos?.[0] || "https://via.placeholder.com/300"} alt={props.product.product_title} />
        <WishlistButton>
          <img src="/heart.svg" alt="like button" />
        </WishlistButton>
      </ImageContainer>
      <ProductInfo>
        <ProductName>{props.product.product_title}</ProductName>
        <PriceInfo>
          <PriceLabel>Price from:</PriceLabel>
          <PriceRange>{props.product?.typical_price_range?.[0] - props.product?.typical_price_range?.[1]}</PriceRange>
        </PriceInfo>
      </ProductInfo>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  min-height: 366px;
  min-width: 218px;
`;

const ImageContainer = styled.div`
  height: 304px;
`;

const ProductImage = styled.img`
  height: 304px;
  width: 100%;
  border-radius: 5px;
`;

const WishlistButton = styled.button`
  position: relative;
  border-radius: 24px;
  background-color: rgba(255, 255, 255, 0.5);
  height: 32px;
  width: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  left: 180px;
  bottom: 60px;
  img{
    height: 100%;
    width: 100%;
  }
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProductName = styled.div`
  color: rgba(0, 0, 0, 1);
  font: 600 16px Inter;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const PriceInfo = styled.div`
  font-family: Inter;
`;

const PriceLabel = styled.span`
  font-size: 12px;
  color: rgba(114, 114, 114, 1);
`;

const PriceRange = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: rgba(0, 0, 0, 1);
`;