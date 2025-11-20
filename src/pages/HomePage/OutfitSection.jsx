import React, { useState, useRef, useMemo, useEffect } from 'react';
import styled from 'styled-components';
import HomeOotwCard from './HomeOotwCard';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y, EffectCards } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';
import 'swiper/css/effect-cards';
import useWindowWidth from './useWindowWidth';

const orderMap = {
  monday: 0,
  tuesday: 1,
  wednesday: 2,
  thursday: 3,
  friday: 4,
  saturday: 5,
  sunday: 6
};

function OutfitSection() {
  const navigate = useNavigate();
  const ootwData = useSelector((state) => state.outfits?.ootw || []);

  const sortedOotw = useMemo(() => {
    return [...ootwData].sort((a, b) => {
      const ia = orderMap[(a.day || '').toLowerCase()] ?? 7;
      const ib = orderMap[(b.day || '').toLowerCase()] ?? 7;
      return ia - ib;
    });
  }, [ootwData]);

  const [activeGender, setActiveGender] = useState('men');
  const [activeDay, setActiveDay] = useState('');
  const [pendingNavigation, setPendingNavigation] = useState(null); // queue navigation after slide becomes active
  const swiperRef = useRef(null);
  const width = useWindowWidth();

  useEffect(() => {
    if (sortedOotw.length > 0) setActiveDay(sortedOotw[0].day || '');
    else setActiveDay('');
  }, [sortedOotw]);

  const isCardsEffect = width <= 480;
  const swiperModules = isCardsEffect ? [EffectCards] : [Navigation, A11y];

  const swiperProps = isCardsEffect
    ? {
        effect: 'cards',
        grabCursor: true,
        slidesPerView: 1,
        centeredSlides: true,
        cardsEffect: { perSlideOffset: 6, perSlideRotate: 2 },
        initialSlide: 0,
        preventClicks: false,
        preventClicksPropagation: false,
        slideToClickedSlide: false, // we handle navigation manually
      }
    : {
        spaceBetween: 20,
        slidesPerView: 'auto',
        centeredSlides: width <= 600,
        navigation: true,
        scrollbar: { draggable: true },
        preventClicks: false,
        preventClicksPropagation: false,
        slideToClickedSlide: true,
      };

  const swiperKey = isCardsEffect ? 'cards' : 'navigation';

  const handleSlideChange = (swiper) => {
    const idx = swiper.realIndex ?? swiper.activeIndex ?? 0;
    const item = sortedOotw[idx];
    if (item && item.day) setActiveDay(item.day);

    // if pending navigation, execute it now that slide is active
    if (pendingNavigation) {
      navigate(pendingNavigation.path, { state: { outfitData: pendingNavigation.outfit } });
      setPendingNavigation(null);
    }
  };

  const handleCardClick = (outfit, slideIndex) => {
    if (isCardsEffect) {
      // on mobile (effect-cards): move to slide first, then navigate after it's active
      setPendingNavigation({
        path: `/home/ootw/${outfit.day}`,
        outfit: outfit,
      });
      swiperRef.current?.slideTo(slideIndex);
    } else {
      // on desktop: navigate immediately (slides are all visible)
      navigate(`/home/ootw/${outfit.day}`, { state: { outfitData: outfit } });
    }
  };

  return (
    <SectionContainer>
      <Heading>
        <SectionHeader>
          <SectionTitle>Outfit of the Week - Summer Essentials</SectionTitle>
          <SectionSubtitle>Your go-to fit for effortless summer days.</SectionSubtitle>
        </SectionHeader>

        <GenderToggle>
          <GenderBtn active={activeGender === 'men'} onClick={() => setActiveGender('men')} aria-pressed={activeGender === 'men'}>Men</GenderBtn>
          <GenderBtn active={activeGender === 'women'} onClick={() => setActiveGender('women')} aria-pressed={activeGender === 'women'}>Women</GenderBtn>
        </GenderToggle>
      </Heading>

      <OutfitGallery>
        <Swiper
          key={swiperKey}
          modules={swiperModules}
          {...swiperProps}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            const idx = swiper.realIndex ?? swiper.activeIndex ?? 0;
            const item = sortedOotw[idx];
            if (item && item.day) setActiveDay(item.day);
          }}
          onSlideChange={handleSlideChange}
          className={isCardsEffect ? 'swiper cards-effect' : 'swiper'}
        >
          {sortedOotw.map((outfit, index) => {
            const position = index % 2 === 0 ? 'bottom' : 'top';

            return (
              <SwiperSlide
                key={outfit.id || index}
                onClick={() => handleCardClick(outfit, index)}
                style={{ cursor: 'pointer', pointerEvents: 'auto' }}
              >
                <HomeOotwCard
                  img={outfit.outfitImage}
                  day={outfit.day}
                  $position={position}
                  outfitData={outfit}
                  onClick={() => handleCardClick(outfit, index)}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>

        <div className='mobileDay'>
          {activeDay ? String(activeDay).charAt(0).toUpperCase() + String(activeDay).slice(1) : ''}
        </div>
      </OutfitGallery>

      <OutfitGalleryController>
        <div className='OGCMain'>
          <div className='swiper-prev swipe-arrows' onClick={() => swiperRef.current?.slidePrev()}>
            <img src="/arrow-left.svg" alt="previous" style={{ width: '15px', height: '15px' }} />
          </div>
          <div className='addToWishlist'>Add to Wishlist</div>
          <div className='swiper-next swipe-arrows' onClick={() => swiperRef.current?.slideNext()}>
            <img src="/arrow-right.svg" alt="next" style={{ width: '15px', height: '15px' }} />
          </div>
        </div>
      </OutfitGalleryController>
    </SectionContainer>
  );
}

/* ========== Styled Components ========== */

const SectionContainer = styled.div`
  max-width: 1440px;
  padding: 0 40px;
  margin: 80px 0 0 0;
  @media (max-width: 850px) {
    margin-top: 48px;
    padding: 0 16px;
  }
`;

const Heading = styled.div`
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

const SectionHeader = styled.div`
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

const SectionTitle = styled.h2`
  color: #1C1C1C;
  font-family: 'SF Pro Rounded', -apple-system, BlinkMacSystemFont, Roboto, Helvetica, sans-serif;
  font-size: 32px;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  @media (max-width: 635px) { font-size: 23px; }
  @media (max-width: 480px) { font-size: 18px; }
  @media (max-width: 375px) { font-size: 16px; }
  @media (max-width: 335px) { font-size: 14px; }
`;

const SectionSubtitle = styled.p`
  color: #787C7F;
  font-family: 'SF Pro Rounded', -apple-system, BlinkMacSystemFont, Roboto, Helvetica, sans-serif;
  font-size: 16px;
  font-weight: 500;
  margin: 0;
  @media (max-width: 768px) { font-size: 14px; }
  @media (max-width: 375px) { font-size: 12px; }
`;

const GenderToggle = styled.div`
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

const GenderBtn = styled.div`
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
    color: ${(props) => (props.active ? 'white' : '#787C7F')};
    background-color: ${(props) => (props.active ? 'black' : '#ffffffff')};
    &:first-child{ border-top-left-radius: 25px; border-bottom-left-radius: 25px; }
    &:last-child{ border-top-right-radius: 25px; border-bottom-right-radius: 25px; }
  }
`;

const OutfitGallery = styled.div`
  width: 100%;
  height: 456px;
  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 360px;
  }

  .swiper {
    width: 100%;
    height: 100%;
    padding: 0;

    .swiper-wrapper { align-items: center; }

    .swiper-slide {
      height: 100%;
      width: 240px;
      pointer-events: auto !important;
      z-index: 1;
      backface-visibility: hidden;
      -webkit-backface-visibility: hidden;
      touch-action: pan-y;
      @media (max-width: 480px) {
        width: unset !important;
        min-width: 0 !important;
        max-width: 100% !important;
      }
    }

    .swiper-slide-active { z-index: 3; pointer-events: auto !important; }
    .swiper-slide-next,
    .swiper-slide-prev { z-index: 2; }

    .swiper-button-next,
    .swiper-button-prev { display: none; }
  }

  .mobileDay {
    display: none;
    @media (max-width: 480px) {
      display: block;
      margin-top: 12px;
      font-size: 16px;
      font-weight: 600;
      color: #1C1C1C;
      text-transform: capitalize;
    }
  }
`;

const OutfitGalleryController = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 44px;

  .OGCMain {
    width: 324px;
    height: 43px;
    display: flex;
    justify-content: space-between;

    .swipe-arrows {
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #252525ff;
      border-radius: 50%;
      cursor: pointer;
      &:hover { background: rgba(53, 53, 53, 1); transform: scale(1.1); }
    }
  }

  .addToWishlist {
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
    &:hover { background-color: #1C1C1C; color: white; }
  }
`;

export default OutfitSection;