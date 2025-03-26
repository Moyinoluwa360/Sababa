import React from 'react';
import styled from 'styled-components';

export function likeBtn() {
  return (
      <LikeButton aria-label={`Like outfit ${id}`}>
        <LikeIcon src="https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/c44b90513fc161d45e980628189af31a658fae5fc05b1e5e4b6050dd361f8626?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&" alt="" />
      </LikeButton>
  );
}


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