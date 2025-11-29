import React, { useState, useRef, useMemo, useEffect } from 'react';
import styled from 'styled-components';
import HomeOotwCard from './HomeOotwCard';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y, EffectCards, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';
import 'swiper/css/effect-cards';
import useWindowWidth from './useWindowWidth';

// Pagination dynamic

const dayOrder = {
  monday: 0,
  tuesday: 1,
  wednesday: 2,
  thursday: 3,
  friday: 4,
  saturday: 5,
  sunday: 6
};

export default function OutfitSection() {
  const navigate = useNavigate();
  const outfits = useSelector(state => state.outfits?.ootw || []);
  const screenWidth = useWindowWidth();
  const swiperInstance = useRef(null);

  // State
  const [currentGender, setCurrentGender] = useState('men');
  const [currentDayDisplay, setCurrentDayDisplay] = useState('');

  // Sort outfits by day
  const outfitsList = useMemo(() => {
    return [...outfits].sort((a, b) => {
      const dayA = dayOrder[(a.day || '').toLowerCase()] ?? 999;
      const dayB = dayOrder[(b.day || '').toLowerCase()] ?? 999;
      return dayA - dayB;
    });
  }, [outfits]);

  // Initialize day display
  useEffect(() => {
    if (outfitsList.length > 0) {
      setCurrentDayDisplay(outfitsList[0].day || '');
    }
  }, [outfitsList]);

  // Determine layout mode
  const isMobileMode = screenWidth <= 480;
  const swiperModules = isMobileMode ? [Pagination] : [Navigation, A11y];

  // Swiper configuration
  const config = isMobileMode
    ? {
        effect: 'cards',
        grabCursor: true,
        slidesPerView: 1,
        centeredSlides: true,
        loop : true,
        // cardsEffect: { perSlideOffset: 6, perSlideRotate: 2 },
        // initialSlide: 0,
      }
    : {
        spaceBetween: 20,
        slidesPerView: 'auto',
        centeredSlides: screenWidth <= 600,
        navigation: true,
        scrollbar: { draggable: true },
      };

  // Event handlers
  const onNavigateToOutfit = (outfit) => {
    navigate(`/home/ootw/${outfit.day}`, {
      state: { ootwData: outfit, ootdType: 'ootw' }
    });
  };

  const onSlideChanged = (swiper) => {
    const currentIndex = swiper.realIndex ?? swiper.activeIndex ?? 0;
    const currentOutfit = outfitsList[currentIndex];
    if (currentOutfit?.day) {
      setCurrentDayDisplay(currentOutfit.day);
    }
  };

  const onSwiperReady = (swiper) => {
    swiperInstance.current = swiper;
    const idx = swiper.realIndex ?? swiper.activeIndex ?? 0;
    const outfit = outfitsList[idx];
    if (outfit?.day) {
      setCurrentDayDisplay(outfit.day);
    }
  };

  return (
    <Container id='for_inspiration_btn_header' >
      <Header>
        <HeaderContent>
          <Title>Outfit of the Week - Summer Essentials</Title>
          <Subtitle>Your go-to fit for effortless summer days.</Subtitle>
        </HeaderContent>

        <GenderSelector>
          <GenderOption
            isActive={currentGender === 'men'}
            onClick={() => setCurrentGender('men')}
          >
            Men
          </GenderOption>
          <GenderOption
            isActive={currentGender === 'women'}
            onClick={() => setCurrentGender('women')}
          >
            Women
          </GenderOption>
        </GenderSelector>
      </Header>

      <Gallery>
        <Swiper
          key={isMobileMode ? 'mobile' : 'desktop'}
          modules={swiperModules}
          {...config}
          onSwiper={onSwiperReady}
          pagination={{
            dynamicBullets: true,
          }}
          onSlideChange={onSlideChanged}
          className="outfit-swiper"
        >
          {outfitsList.map((outfit, idx) => {
            const alignment = idx % 2 === 0 ? 'bottom' : 'top';
            return (
              <SwiperSlide key={`outfit-${outfit.id || idx}`}>
                <HomeOotwCard
                  img={outfit.outfitImage}
                  day={outfit.day}
                  position={alignment}
                  outfitData={outfit}
                  onClick={() => onNavigateToOutfit(outfit)}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>

        <MobileDayIndicator>
          {currentDayDisplay
            ? currentDayDisplay.charAt(0).toUpperCase() + currentDayDisplay.slice(1)
            : ''}
        </MobileDayIndicator>
      </Gallery>

      <Controls>
        <ControlGroup>
          <ArrowButton
            className="prev"
            onClick={() => swiperInstance.current?.slidePrev()}
            aria-label="Previous outfit"
          >
            <img src="/arrow-left.svg" alt="" style={{ width: '15px', height: '15px' }} />
          </ArrowButton>

          <WishlistButton>Add to Wishlist</WishlistButton>

          <ArrowButton
            className="next"
            onClick={() => swiperInstance.current?.slideNext()}
            aria-label="Next outfit"
          >
            <img src="/arrow-right.svg" alt="" style={{ width: '15px', height: '15px' }} />
          </ArrowButton>
        </ControlGroup>
      </Controls>
    </Container>
  );
}

// ========== STYLED COMPONENTS ==========

const Container = styled.div`
  width: 100%;
  padding: 0 40px;
  margin: 80px 0 0 0;

  @media (max-width: 850px) {
    margin-top: 48px;
    padding: 0 16px;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 60px;

  @media (max-width: 850px) {
    flex-direction: column;
    gap: 20px;
    margin-bottom: 40px;
  }
`;

const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  text-align: left;

  @media (max-width: 850px) {
    align-items: center;
    gap: 4px;
  }
`;

const Title = styled.h2`
  color: #1C1C1C;
  font-family: 'SF Pro Rounded', -apple-system, BlinkMacSystemFont, Roboto, Helvetica, sans-serif;
  font-size: 32px;
  font-weight: 600;
  line-height: normal;
  margin: 0;

  @media (max-width: 635px) {
    font-size: 23px;
  }
  @media (max-width: 480px) {
    font-size: 18px;
  }
  @media (max-width: 375px) {
    font-size: 16px;
  }
  @media (max-width: 335px) {
    font-size: 14px;
  }
`;

const Subtitle = styled.p`
  color: #787C7F;
  font-family: 'SF Pro Rounded', -apple-system, BlinkMacSystemFont, Roboto, Helvetica, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 375px) {
    font-size: 12px;
  }
`;

const GenderSelector = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;

  @media (max-width: 850px) {
    width: 160px;
    height: 40px;
    gap: 0;
    border: 1px solid #C4C4C4;
    border-radius: 25px;
  }
`;

const GenderOption = styled.div`
  color: grey;
  font-weight: 550;
  font-size: 16px;
  cursor: pointer;

  @media (max-width: 850px) {
    height: 100%;
    flex: 1;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.isActive ? 'white' : '#787C7F'};
    background-color: ${props => props.isActive ? 'black' : '#ffffffff'};

    &:first-child {
      border-top-left-radius: 25px;
      border-bottom-left-radius: 25px;
    }
    &:last-child {
      border-top-right-radius: 25px;
      border-bottom-right-radius: 25px;
    }
  }
`;

const Gallery = styled.div`
  width: 100%;
  height: 456px;
  position: relative;

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 360px;
  }

  .outfit-swiper {
    width: 100%;
    height: 100%;
    padding: 0;

    @media (max-width: 480px) {
      width: 250px;
    }
  }

  .swiper-slide {
    height: 100%;
    width: 240px;
    pointer-events: auto;

    @media (max-width: 480px) {
      width: 100% !important;
      /* min-width: 0 !important;
      max-width: 100% !important; */
    }
  }

  .swiper-button-next,
  .swiper-button-prev {
    display: none;
  }
  .swiper-pagination-bullet-active {
    background-color: black !important;
  }
`;

const MobileDayIndicator = styled.div`
  display: none;

  @media (max-width: 480px) {
    display: block;
    margin-top: 12px;
    font-size: 16px;
    font-weight: 600;
    color: #1C1C1C;
    text-transform: capitalize;
    text-align: center;
  }
`;

const Controls = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 44px;
`;

const ControlGroup = styled.div`
  width: 324px;
  height: 43px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ArrowButton = styled.button`
  width: 40px;
  height: 40px;
  padding: 0;
  border: 0;
  background-color: #252525ff;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background 0.2s, transform 0.2s;

  &:hover {
    background: rgba(53, 53, 53, 1);
    transform: scale(1.1);
  }

  img {
    display: block;
  }
`;

const WishlistButton = styled.div`
  width: 180px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'SF Pro Rounded', -apple-system, BlinkMacSystemFont, Roboto, Helvetica, sans-serif;
  font-size: 14px;
  font-weight: 550;
  border: 2px solid #1C1C1C;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s;

  &:hover {
    background-color: #1C1C1C;
    color: white;
  }
`;