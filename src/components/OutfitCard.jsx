import React, { useState } from 'react';
import styled from 'styled-components';
import LikeButton from './likeButton';
import SignInModal from './SignInModal';
import { Link } from 'react-router-dom';

const OutfitCard = ({outfit, OOTDNUM}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Link 
        to={`/home/alloutfits/${outfit.gender}/${outfit.id}`}
        key={outfit.id}
        state={{outfitNumber: OOTDNUM}}
        style={{textDecoration:"none"}}
      >
        <CardWrapper>
          <CardImageContainer>
            <CardImage loading="lazy" src={outfit.outfitImage} alt={`OOTD ${outfit.id}`} />
            <LikeButton
              outfit={outfit}
              OOTDNUM={OOTDNUM}
              ariaLabel={`Like ${outfit.id}`}
              bottom="12px"
              right="12px"
              onShowModal={() => setShowModal(true)}
            />
          </CardImageContainer>
          {<OutfitTitle>OOTD {OOTDNUM}</OutfitTitle>}
        </CardWrapper>
      </Link>

      {/* Modal rendered outside Link */}
      {showModal && (
        <SignInModal 
          open={showModal} 
          setShowModal={setShowModal} 
        />
      )}
    </>
  );
};

const CardWrapper = styled.article`
  display: flex;
  flex-direction: column;
  min-width: 240px;
  max-width: 240px;
  height: 391px;
  border-radius: 20px;
  @media (max-width: 550px){
    height: 307px;
    min-width: 172px;
    max-width: 172px;
  }
  @media (max-width: 480px){
    height: 297px;
    min-width: 172px;
    max-width: 172px;
  }
  @media (max-width: 410px){
    height: 277px;
    min-width: 162px;
    max-width: 162px;
  }
  @media (max-width: 390px){
    height: 237px;
    min-width: 142px;
    max-width: 142px;
  }
  @media (max-width: 355px){
    height: 197px;
    min-width: 122px;
    max-width: 122px;
  }
  @media (max-width: 310px){
    height: 147px;
    min-width: 92px;
    max-width: 92px;
  }
`;

const CardImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  position: relative;
  width: inherit;
  height: 90%;
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
  border-radius: 20px;
`;

const OutfitTitle = styled.h3`
  color: #1C1C1C;
  font-size: 15px;
  font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
  font-weight: 550;
  align-self: center;
  margin-top: 4px;
  @media (max-width: 480px){
    font-size: 12px;
  }
`;

export default OutfitCard;