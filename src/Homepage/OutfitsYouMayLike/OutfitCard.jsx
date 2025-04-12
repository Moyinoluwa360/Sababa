// this component is temporarily not used in the app may even be removed
import React from 'react';
import styled from 'styled-components';

export function OutfitCard({ image, likes, id }) {
  return (
    <CardContainer>
      <OutfitImage src={image} alt={`Outfit of the day ${id}`} loading="lazy" />
      <LikeButton aria-label={`Like outfit ${id}`}>
        <LikeIcon src="https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/c44b90513fc161d45e980628189af31a658fae5fc05b1e5e4b6050dd361f8626?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&" alt="" />
      </LikeButton>
      <OutfitLabels>
        <OutfitLabel>OOTD {id}</OutfitLabel>
      </OutfitLabels>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  position: relative;
  border-radius: 4px;
  width: 217px;
  height: 335px;
  overflow: hidden;
  @media (max-width: 480px) {
    width: 119px;
    height: 215px;
  }
`;

const OutfitImage = styled.img`
  width: 100%;
  height: 304px;
  object-fit: cover;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
  @media (max-width: 480px) {
    height: 196px;
  }
`;

const LikeButton = styled.button`
  position: absolute;
  bottom: 40px;
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
    bottom: 25px;
  }
`;

const LikeIcon = styled.img`
  width: 22px;
  height: 22px;
  margin-top: 2.5px;
  @media (max-width:480px){
    width: 13px;
    height: 12px;
  }
`;
const OutfitLabels = styled.div`
  margin-top: 4px;
`;

const OutfitLabel = styled.div`
  color: rgba(0, 0, 0, 1);
  font: 500 16px Inter, sans-serif;
  text-align: center;
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;