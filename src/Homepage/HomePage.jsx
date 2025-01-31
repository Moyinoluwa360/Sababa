import React from 'react';
import styled from 'styled-components';
import { Header } from '../Header/Header';
import { StyleCategories } from './StyleCategories';
import { OutfitGallery } from './OutfitGallery';
import { ProductGallery } from './ProductGallery';
import Footer from '../Footer';

export default function HomePage() {
  return (
    <HomeContainer>
      <Header/>
      <HeroBanner />
      <StyleCategories />
      <OutfitGallery title="Outfits you may like" />
      <ProductGallery title="Products you may like" />
      <Footer/>
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  background-color: rgba(252, 252, 252, 1);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  align-items: center;
`;

const HeroBanner = styled.div`
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  margin-top: 7px;
  width: 1360px;
  max-width: 100%;
  height: 444px;
  border: 2px solid rgba(0, 0, 0, 1);
`