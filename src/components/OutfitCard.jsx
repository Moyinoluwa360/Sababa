import React from 'react';
import styled from 'styled-components';
// like buttton imports
import LikeButton from './likeButton';

const OutfitCard = ({outfit}) => {
  return (
    <CardWrapper>
      <CardImageContainer>
        <CardImage loading="lazy" src={outfit.image} alt={`OOTD ${outfit.id}`} />
        <LikeButton
          outfit = {outfit}
          ariaLabel={`Like ${outfit.id}`}
          bottom="12px"
          right="12px"
        />
      </CardImageContainer>
      <OutfitTitle>OOTD {outfit.id}</OutfitTitle>
    </CardWrapper>
  );
};

const CardWrapper = styled.article`
  display: flex;
  flex-direction: column;
  width: 218px; /* Will fill grid cell */ /* Keeps card from getting too big */
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

const CardImageContainer = styled.div`
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

const CardImage = styled.img`
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 5px;
`;



const OutfitTitle = styled.h3`
  color: rgba(0, 0, 0, 1);
  font-size: 16px;
  font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
  font-weight: 500;
  align-self: center;
  margin-top: 4px;
  @media (max-width: 480px){
    font-size: 12px;
  }
`;

export default OutfitCard;