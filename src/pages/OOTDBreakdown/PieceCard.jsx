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
  @media (max-width: 480px){
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
  align-self: center;
  color: rgb(0, 0, 0);
  transition: background-color 0.3s ease;
  background-color: #D9D9D9;
  border: 2px solid #000000;
  font-size: 15px;
  font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
  height: 43px;
  width: 220px;
  border-radius: 40px;
  cursor: pointer;
  text-decoration: none;
  
  &:hover {
    background-color: rgb(206, 206, 206);
  }
  
  @media (max-width: 480px) {
    font-size: 12px;
    width: fit-content;
    padding: 0 20px;
    height: 41px;
    border-radius: 12px;
  }
`;

export default PieceCard;