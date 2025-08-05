import React from 'react';
import styled from 'styled-components';

const PieceCard = ({piece}) => {
  return (
      <CardWrapper>
        <CardImageContainer>
          <CardImage loading="lazy" src={piece.image} alt={`${piece.description}`} />
        </CardImageContainer>
        <BuyPieceBtn className='buyBtn' href={piece.productLink} target={"_blank"} rel={"noopener noreferrer"} >Buy from {piece.websiteName}</BuyPieceBtn>
      </CardWrapper>
  );
};

const CardWrapper = styled.article`
  display: flex;
  flex-direction: column;
  height: 402px;
  width: 288px;
  @media (max-width: 1000px) {
    height: 302px;
    width:188px;
  }
  @media (max-width: 420px){
    width:100%;
  }
`;

const CardImageContainer = styled.div`
  flex: 1; /* Takes up all available space except button */
  width: 100%;
  border-radius: 4px;
  overflow: hidden; /* Ensures image doesn't overflow the container */
  position: relative;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain; /* This ensures the image covers the entire container */
  object-position: center; /* Centers the image within the container */
  display: block; /* Removes any default spacing */
`;

const BuyPieceBtn = styled.a`
  color: rgb(255, 255, 255);
  transition: background-color 0.3s ease;
  background-color: black;
  font-size: 15px;
  font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
  height: 50px;
  width: 100%;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  
  &:hover {
    background-color: rgb(26, 26, 26);
  }
  
  @media (max-width: 480px) {
    font-size: 12px;
    height: 45px;
  }
`;

export default PieceCard;