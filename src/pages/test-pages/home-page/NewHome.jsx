import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import OutfitSection from './OutfitSection';
import ShopSection from './ShopSection';
import HeroSection from './Hero';
import FooterSection from './Footer';

// const AppContainer = styled.div`
//   width: 99.4vw;
//   min-height: 100vh;
//   overflow: hidden;
//   background: #fff;
//   font-family: 'SF Pro Rounded', -apple-system, BlinkMacSystemFont, Roboto, Helvetica, sans-serif;
// `;

function NewHome() {
  return (
    <>
      <Header />
      <HeroSection />
      <OutfitSection />
      <ShopSection />
      <FooterSection />
    </>
  );
}

export default NewHome;
