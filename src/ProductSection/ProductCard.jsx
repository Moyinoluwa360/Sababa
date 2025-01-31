import * as React from "react";
import styled from "styled-components";

export default function ProductCard(props) {
  return (
    <CardWrapper>
      <ImageContainer>
        <ProductImage loading="lazy" src={props.product?.product_photos?.[0] || "https://via.placeholder.com/300"} alt={props.product.product_title} />
        <WishlistButton>
          <WishlistIcon loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/670b379f0fa29515974c756c5aa4f1421e137ca32aa6d9a4ba2a024fab47cac8?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&" />
        </WishlistButton>
      </ImageContainer>
      <ProductInfo>
        <ProductName>{props.product.product_title}</ProductName>
        <PriceInfo>
          <PriceLabel>Price range across stores:</PriceLabel>
          <PriceRange>{props.product?.typical_price_range?.[0] - props.product?.typical_price_range?.[1]}</PriceRange>
        </PriceInfo>
      </ProductInfo>
    </CardWrapper>
  );
}

const CardWrapper = styled.article`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  position: relative;
  aspect-ratio: 0.81;
  align-items: end;
  padding: 321px 62px 16px;
  @media (max-width: 991px) {
    margin-top: 16px;
    padding: 100px 0 0 20px;
  }
`;

const ProductImage = styled.img`
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const WishlistButton = styled.button`
  position: relative;
  border-radius: 24px;
  background-color: rgba(255, 255, 255, 0.5);
  min-height: 48px;
  width: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  left: 40px;
`;

const WishlistIcon = styled.img`
  aspect-ratio: 1.04;
  object-fit: contain;
  width: 27px;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
`;

const ProductName = styled.h3`
  color: rgba(0, 0, 0, 1);
  font: 500 20px Inter, sans-serif;
  margin: 0;
`;

const PriceInfo = styled.div`
  margin-top: 4px;
  font-family: Inter, sans-serif;
`;

const PriceLabel = styled.span`
  font-size: 16px;
  color: rgba(114, 114, 114, 1);
`;

const PriceRange = styled.div`
  font-weight: 600;
  font-size: 20px;
  color: rgba(0, 0, 0, 1);
  margin-top: 4px;
`;