"use client";
import React from "react";
import styled from "styled-components";
import PieceCard from "./PieceCard";
import LikeButton from "../../components/likeButton";
import { useLocation} from "react-router-dom";
import { useRef } from "react";
// slider package react slick

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, A11y } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';
import useWindowWidth from "../../components/useWindowWidth";

export function OutfitGallery({outfit}) {
  const swiperRef = useRef(null);
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
        {/* swiper custom navigation left */}
        <div className='swiper-prev swipe-arrows' onClick={() => swiperRef.current?.slidePrev()}>
          <img src="/arrow-left.svg" alt="previous" style={{ width: '15px', height: '15px' }} />
        </div>
        {/* swiper custom navigation right */}
        <div className='swiper-next swipe-arrows' onClick={() => swiperRef.current?.slideNext()}>
          <img src="/arrow-right.svg" alt="next" style={{ width: '15px', height: '15px' }} />
        </div>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={20}
          slidesPerView={Math.min(outfit.pieces.length, width < 610 ? (width < 480 ? 1 : 2) : 3)}
          navigation
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
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
  height: 452px;
  width: 338px;
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
  @media (max-width: 750px) {
    border-radius: 20px;
  }
`;

const BreakdownSection = styled.section` 
  width: 75%;
  height: 460px;
  position: relative;
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
      display: none; /* Hide default navigation buttons */
    }
  }
  .swipe-arrows {
      position: absolute;
      top: 40%;
      transform: translateY(-50%);
      z-index: 10;
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: rgba(0, 0, 0, 0.15);
      box-shadow: -1px -1px 4px 0 rgba(255, 255, 255, 0.20) inset,1px 1px 4px 0 rgba(255, 255, 255, 0.20) inset;
      backdrop-filter: blur(10px);
      border: none;
      border-radius: 50%;
      cursor: pointer;
      &:hover {
       background: rgba(43, 43, 43, 0.15);
      }
    }
    .swiper-prev {
      left: 10px;
    }
    .swiper-next {
      right: 10px;
    }
`;
