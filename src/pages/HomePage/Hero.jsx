import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  height: 580px;
  background: url('https://api.builder.io/api/v1/image/assets/TEMP/14585158b6f5ee76652d70acedab7b443cb46d7f?width=2880') center/cover;
  background-blend-mode: normal, darken, normal;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 480px) {
    background: url('/mobileHeroImg.svg') center/cover;
    height: 480px;
  }
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: 100%;
  text-align: center;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const HeroTitle = styled.h1`
  color: #FFF;
  font-family: 'SF Pro Rounded', -apple-system, BlinkMacSystemFont, Roboto, Helvetica, sans-serif;
  font-size: 32px;
  font-weight: 600;
  line-height: normal;
  width: 100%;
  margin: 0;
  @media (max-width: 480px) {
    font-size: 20px;
  }
  @media (max-width: 300px) {
    font-size: 17px;  
  }
`;

const ExploreButton = styled.button`
  display:flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 10px;
  border-radius: 40px;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: -1px -1px 4px 0 rgba(255, 255, 255, 0.20) inset,1px 1px 4px 0 rgba(255, 255, 255, 0.20) inset;
  backdrop-filter: blur(10px);
  border: none;
  color: white;
  font-family: 'SF Pro Rounded', -apple-system, BlinkMacSystemFont, Roboto, Helvetica, sans-serif;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 157px;
  height: 43px;

  &:hover {
    background: rgba(255, 255, 255, 0.06);
  }
`;

function HeroSection() {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroTitle>Shop Every Item in the Look,<br/> Outfits made shoppable.</HeroTitle>
        <Link to={"alloutfits"} style={{ textDecoration: 'none' }}>
          <ExploreButton >
            Men & Women
            <img src="/arrow-up-right.svg" alt="arrow icon" style={{ width: '14px', height: '14px' }} loading='lazy' />
          </ExploreButton>
        </Link>
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection;
