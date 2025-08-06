"use client";
import React from "react";
import styled from "styled-components";
import PieceCard from "./PieceCard";
import LikeButton from "../../components/likeButton";
import { useLocation} from "react-router-dom";
// slider package react slick

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, A11y } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';
import useWindowWidth from "../../components/useWindowWidth";

export function OutfitGallery({outfit}) {
  let width = useWindowWidth()
  let location = useLocation();
  const { outfitNumber } = location.state || {};
  return (
    <GallerySection>
      <MainImageColumn>
        <ImageContainer>
          <MainImage
            loading="lazy"
            src={outfit.outfitImage}
            alt="Main outfit"
          />
          <LikeButton
            outfit = {outfit}
            ariaLabel={`Like ${outfit.id}`}
            bottom="12px"
            right="12px"
            OOTDNUM={outfitNumber}
          />
        </ImageContainer>
      </MainImageColumn>
      <BreakdownSection>
        <div className="mobileHeader">
          <h2>Piece</h2>
        </div>
        <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={20}
        slidesPerView={Math.min(outfit.pieces.length, width < 610 ? (width < 420 ? 1 : 2) : 3)}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className="swiper"
        >
              {
                outfit.pieces.map((piece, index) => (
                  <SwiperSlide key={piece.id || index}>
                    <PieceCard
                      key={piece.id}
                      piece = {piece}
                    />   
                  </SwiperSlide>          
                ))
              }
          </Swiper>
      </BreakdownSection>
    </GallerySection>
  );
}

const GallerySection = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  
  @media (max-width: 1270px) {
    flex-direction: column;
    gap: 20px;
    align-items: center;
    margin-bottom: 25px;
  }
`
const MainImageColumn = styled.div`
  height: 402px;
  width: 288px;
  flex-shrink: 0;
  
  @media (max-width: 750px) {
    height: 300px;
    width: 220px;
  }
  
  @media (max-width: 300px) {
    height: 250px;
    width: 170px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  position: relative;
  align-items: flex-end;
  height: 100%;
  width: 100%;
  overflow: hidden;
  
  .mainLikeButton {
    @media (max-width: 300px) {
      height: 27px;
      width: 27px;
    }
  }
`;

const MainImage = styled.img`
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 4px;
`;

const BreakdownSection = styled.section` 
  width: 75%;
  height: 460px;
  .mobileHeader{
    text-align: center;
    display: none;
    @media (max-width: 1270px) {
      display: block;
      margin-bottom: 10px;
    }
  }
  @media (max-width: 1270px) {
    width: 100%;
    height: 430px;
    margin-left: 0;
  }
  
  @media (max-width: 1000px) {
    height: 330px;
  }
  .swiper{
    height:100%;
    .swiper-pagination {
    bottom: 1px !important; /* Reset top position */
    left: 50% !important; /* Horizontal center */
    transform: translateX(-50%) !important; /* Perfect centering */
    .swiper-pagination-bullet {
      background: #000000 !important;
      width: 8px !important;
      height: 8px !important;
      margin: 0 4px !important;
      opacity: 0.4 !important;
      
      &.swiper-pagination-bullet-active {
        opacity: 1 !important;
        transform: scale(1.2);
        transition: all 0.3s ease;
      }
    }
  }
    .swiper-button-next,
    .swiper-button-prev {
      top: 50% !important; /* Vertical center */
      margin-top: -22px !important; /* Half of button height */
      color: #000000 !important;
      background: rgba(255, 255, 255, 0.9) !important;
      width: 40px !important;
      height: 40px !important;
      border-radius: 50% !important;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15) !important;
      transition: all 0.3s ease !important;
      
      &:after {
        font-size: 20px !important;
        font-weight: bold !important;
      }
      &:hover {
        background: rgba(255, 255, 255, 1) !important;
        transform: scale(1.1);
      }
      }

    .swiper-button-next {
      right: 1px !important; /* Distance from right edge */
    }

    .swiper-button-prev {
      left: 1px !important; /* Distance from left edge */
    }
  }
`;
