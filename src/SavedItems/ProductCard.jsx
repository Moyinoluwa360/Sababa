import * as React from "react";
import styled from "styled-components";

export default function ProductCard(props) {
  return (
    <CardWrapper>
      <ImageContainer>
        <ProductImage loading="lazy" src={props.product?.product_photos?.[0] || "https://via.placeholder.com/300"} alt={props.product.product_title} />
        <HeartIconWrapper>
          <HeartIcon loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/4d257a64c4fd431196f0bd5355e29fdb/c44b90513fc161d45e980628189af31a658fae5fc05b1e5e4b6050dd361f8626?placeholderIfAbsent=true" alt="Like" />
        </HeartIconWrapper>
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
  flex-direction: column;
  width: 218px; 
  height: 327px;
  @media (max-width: 480px){
    height: 251px;
    width: 168px;
  }
  @media (max-width: 370px){
    height: 230px;
    width: 150px;
  }
  @media (max-width: 340px){
    height: 210px;
    width: 135px;
  }
  @media (max-width: 305px){
    height: 190px;
    width: 120px;
  }
  @media (max-width: 280px){
    height: 165px;
    width: 95px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  position: relative;
  width: inherit;
  height: 95%;
  padding: 260px 44px 12px;
  align-items: flex-end;
  
  @media (max-width: 991px){
    padding: 100px 20px 12px;
  }
`;

const ProductImage = styled.img`
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 5px;
`;

const HeartIconWrapper = styled.div`
  position: absolute; /* Absolute positioning inside CardImageContainer */
  bottom: 10px; /* Adjust this value as needed */
  right: 10px; /* Adjust this value as needed */
  border-radius: 22px;
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  height: 32px;
  width: 32px;
  padding: 0 7px 0 8px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 340px){
    height: 27px;
    width: 27px;
  }
  @media (max-width: 340px){
    height: 20px;
    width: 20px;
    bottom: 5px;
    right: 5px;
  }
`;


const HeartIcon = styled.img`
  object-fit: contain;
  object-position: center;
  width: 100%;
  @media (max-width: 340px){
    width: 225%;
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
  @media (max-width: 480px){
    font-size: 12px;
  }
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
  @media (max-width: 480px){
    font-size: 12px;
  }
`;