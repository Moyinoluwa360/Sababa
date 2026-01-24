// ...existing code...
import React, { useState } from 'react';
import styled from 'styled-components';
import LikeButton from '../../components/likeButton';
import SignInModal from '../../components/SignInModal';

function HomeOotwCard({ img, day, position, outfitData, onClick }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <CardWrapper onClick={(e) => { e.stopPropagation(); onClick?.(); }} role="button" tabIndex={0}>
        <ImgCardContainer>
          <CardImage src={img} alt={day ? `Outfit for ${day}` : 'Outfit'} loading="lazy" />
          <DayLabel>{day ? String(day).charAt(0).toUpperCase() + String(day).slice(1) : ''}</DayLabel>

          {/* Desktop-only like button; stopPropagation so clicking like does not trigger card navigation */}
          <LikeWrapper onClick={(e) => e.stopPropagation()} data-like-for={outfitData?.id}>
            <LikeButton
              outfit={outfitData}
              OOTDNUM={outfitData?.id}
              ariaLabel={`Like ${outfitData?.id}`}
              bottom="12px"
              right="12px"
              onShowModal={() => setShowModal(true)}
            />
          </LikeWrapper>
        </ImgCardContainer>
      </CardWrapper>

      {showModal && <SignInModal open={showModal} setShowModal={setShowModal} />}
    </>
  );
}

/* Desktop-first styling that matches the OutfitCard visuals; mobile adjustments kept smaller */
const CardWrapper = styled.div`
  width: 240px;
  height: 100%;
  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  @media (max-width: 480px) {
    width: 100%;
    height: auto;
  }
`;

const ImgCardContainer = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  gap: 12px;
  @media (max-width: 991px) {
    height: 300px;
  }
  @media (max-width: 480px) {
    height: 340px;
    border-radius: 16px;
  }
`;

/* Desktop: large block image with fixed height and rounded corners.
   Mobile: shorter image height to fit compact layout. */
const CardImage = styled.img`
  width: 100%;
  height: auto;
  flex: 1 1 auto;
  min-height: 0;
  border-radius: 20px;
  object-fit: cover;
  object-position: center;
  display: block;
  pointer-events: none;
`;

const DayLabel = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: #1C1C1C;
  text-transform: capitalize;
  width: 100%;
  text-align: center;
  padding: 0 8px;

  @media (max-width: 480px) {
    display: none; /* keep mobile simpler as before */
  }
`;

/* Like button is positioned absolute top-right on desktop and hidden on mobile.
   This preserves your desktop visual and moves wishlist control to the bottom Controls on mobile. */
const LikeWrapper = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 6;
  display: block;

  /* ensure inner like button receives pointer events */
  button { pointer-events: auto; }

  @media (max-width: 480px) {
    display: none; /* hide per-card like on mobile; mobile Controls handle wishlist */
  }
`;

export default HomeOotwCard;
// ...existing code...