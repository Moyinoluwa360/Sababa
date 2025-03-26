import React from 'react';
import styled from 'styled-components';

const OutfitCard = ({ imageUrl, outfitNumber }) => {
  return (
    <CardWrapper>
      <CardImageContainer>
        <CardImage loading="lazy" src={imageUrl} alt={`OOTD ${outfitNumber}`} />
        <HeartIconWrapper>
          <HeartIcon loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/4d257a64c4fd431196f0bd5355e29fdb/c44b90513fc161d45e980628189af31a658fae5fc05b1e5e4b6050dd361f8626?placeholderIfAbsent=true" alt="Like" />
        </HeartIconWrapper>
      </CardImageContainer>
      <OutfitTitle>OOTD {outfitNumber}</OutfitTitle>
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
`;


const HeartIcon = styled.img`
  object-fit: contain;
  object-position: center;
  width: 100%;
  @media (max-width: 340px){
    width: 120%;
  }
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