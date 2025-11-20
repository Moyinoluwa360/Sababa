import React from 'react';
import styled from 'styled-components';

function HomeOotwCard({ img, day, position, outfitData, onClick }) {
  return (
    <CardButton onClick={onClick} aria-label={`Open outfit ${day}`}>
      {/* pass transient prop $position instead of position to avoid forwarding to DOM */}
      <CardContainer $position={position}>
        <ImgCardContainer>
          <img src={img} alt={`Outfit for ${day}`} loading="lazy" />
          <DayLabel>{day ? String(day).charAt(0).toUpperCase() + String(day).slice(1) : ''}</DayLabel>
        </ImgCardContainer>
      </CardContainer>
    </CardButton>
  );
}

const CardButton = styled.button`
  display: block;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  border: 0;
  background: transparent;
  text-align: left;
  cursor: pointer;
  color: inherit;
  font: inherit;
  -webkit-tap-highlight-color: transparent;
  &:focus { outline: none; }
`;

const CardContainer = styled.div`
  width: 240px;
  height: 100%;
  display: flex;
  /* read transient prop here */
  align-items: ${props => props.$position === 'top' ? 'flex-start' : 'flex-end'};
  @media (max-width: 480px) {
    height: auto;
  }
`;

const ImgCardContainer = styled.div`
  width: 100%;
  height: 85%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  text-align: center;
  color: #787C7F;

  img{
    height: 360px;
    width: 100%;
    border-radius: 20px;
    object-fit: cover;
    object-position: center;
    display: block;
    pointer-events: none;
  }

  @media (max-width: 480px) {
    height: auto;

    img{
      height: 300px;
    }
  }
`;

const DayLabel = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: #1C1C1C;
  text-transform: capitalize;
  width: 100%;

  @media (max-width: 480px) {
    display: none;
  }
`;

export default HomeOotwCard;