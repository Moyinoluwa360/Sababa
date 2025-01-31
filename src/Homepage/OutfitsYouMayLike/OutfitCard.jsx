import React from 'react';
import styled from 'styled-components';

export function OutfitCard({ image, likes, id }) {
  return (
    <CardContainer>
      <OutfitImage src={image} alt={`Outfit of the day ${id}`} loading="lazy" />
      <LikeButton aria-label={`Like outfit ${id}`}>
        <LikeIcon src="https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/c44b90513fc161d45e980628189af31a658fae5fc05b1e5e4b6050dd361f8626?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&" alt="" />
      </LikeButton>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  position: relative;
  border-radius: 4px;
  aspect-ratio: 0.717;
  overflow: hidden;
`;

const OutfitImage = styled.img`
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
  border-radius: 16px;
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  width: 32px;
  height: 32px;
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
`;

const LikeIcon = styled.img`
  width: 16px;
  height: 16px;
`;