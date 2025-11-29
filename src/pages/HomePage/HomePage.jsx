import React from 'react';
import OutfitSection from './OutfitSection';
import ShopSection from './ShopSection';
import HeroSection from './Hero';
import styled from 'styled-components';

const HomeContainer = styled.div`
  background: #D9D9D9;
`;

function HomePage() {
  return (
    <HomeContainer>
      <HeroSection />
      <OutfitSection />
      <ShopSection />
    </HomeContainer>
  );
}

export default HomePage;
