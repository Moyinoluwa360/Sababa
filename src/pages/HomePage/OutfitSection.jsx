import React, { useState, useRef, useMemo } from 'react';
import styled from 'styled-components';
import HomeOotwCard from './HomeOotwCard';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y,EffectCards } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';
import 'swiper/css/effect-cards';
import useWindowWidth from './useWindowWidth';

const outfits = [
  { day: 'Monday', image: 'https://i.pinimg.com/736x/0a/9c/bb/0a9cbb6e735ee766458d353d994a2ece.jpg' },
  { day: 'Tuesday', image: 'https://cdn.shopify.com/s/files/1/0012/7339/7332/files/17_Vertical_Striped_Shirts_You_Should_Definitely_Own_Right_Now_2048x2048.jpg?v=1673224456' },
  { day: 'Wednesday', image: 'https://sfycdn.speedsize.com/2780c694-3419-4266-9652-d242439affeb/stateandliberty.com/cdn/shop/articles/unnamed_e0bb3512-7fea-4d26-8bb8-10eb92ff4c47.jpg?v=1675795862&width=1365' },
  { day: 'Thursday', image: 'https://westernrise.com/cdn/shop/articles/what_to_wear_in_60-degree_weather_for_men.jpg?v=1727901586&width=1500' },
  { day: 'Friday', image: 'https://sfycdn.speedsize.com/2780c694-3419-4266-9652-d242439affeb/stateandliberty.com/cdn/shop/articles/unnamed_e0bb3512-7fea-4d26-8bb8-10eb92ff4c47.jpg?v=1675795862&width=1365' },
  { day: 'Saturday', image: 'https://cdn.shopify.com/s/files/1/0012/7339/7332/files/17_Vertical_Striped_Shirts_You_Should_Definitely_Own_Right_Now_2048x2048.jpg?v=1673224456' },
  { day: 'Sunday', image: 'https://i.pinimg.com/736x/0a/9c/bb/0a9cbb6e735ee766458d353d994a2ece.jpg' }
];

function OutfitSection() {
  const [activeGender, setActiveGender] = useState('men');
  const [currentDay, setCurrentDay] = useState('');
  const swiperRef = useRef(null);
  const width = useWindowWidth();

  // Get current day name and index
  const { currentDayName, currentDayIndex } = useMemo(() => {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date().getDay();
    const dayName = daysOfWeek[today];
    // Convert Sunday (0) to index 6, Monday (1) to 0, etc.
    const dayIndex = today === 0 ? 6 : today - 1;
    return { currentDayName: dayName, currentDayIndex: dayIndex };
  }, []);

  // Determine Swiper settings based on width
  const isCardsEffect = width <= 480;
  const swiperModules = isCardsEffect ? [EffectCards] : [Navigation, A11y];
  const swiperProps = isCardsEffect
    ? {
        effect: 'cards',
        grabCursor: true,
        slidesPerView: 1,
        centeredSlides: true,
        cardsEffect: { perSlideOffset: 6, perSlideRotate: 2 },
        initialSlide: currentDayIndex,
      }
    : {
        spaceBetween: 20,
        slidesPerView: 'auto',
        centeredSlides: width <= 600,
        navigation: true,
        scrollbar: { draggable: true },
      };

  // Create a key that changes when switching between card/navigation modes
  const swiperKey = isCardsEffect ? 'cards' : 'navigation';

  // Update current day when slide changes
  const handleSlideChange = (swiper) => {
    const realIndex = swiper.realIndex;
    setCurrentDay(outfits[realIndex].day);
  };

  // Set initial day
  React.useEffect(() => {
    if (isCardsEffect) {
      setCurrentDay(outfits[currentDayIndex].day);
    }
  }, [isCardsEffect, currentDayIndex]);

  return (
    <SectionContainer>
      <Heading>
        <SectionHeader>
          <SectionTitle>Outfit of the Week - Summer Essentials</SectionTitle>
          <SectionSubtitle>Your go-to fit for effortless summer days.</SectionSubtitle>
        </SectionHeader>

        <GenderToggle>
          <GenderBtn
            active={activeGender === 'men'}
            onClick={() => setActiveGender('men')}
            aria-pressed={activeGender === 'men'}
          >
            Men
          </GenderBtn>
          <GenderBtn
            active={activeGender === 'women'}
            onClick={() => setActiveGender('women')}
            aria-pressed={activeGender === 'women'}
          >
            Women
          </GenderBtn>
        </GenderToggle>
      </Heading>

      <OutfitGallery>
        <Swiper
          key={swiperKey}
          modules={swiperModules}
          {...swiperProps}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            if (isCardsEffect) {
              setCurrentDay(outfits[swiper.realIndex].day);
            }
          }}
          onSlideChange={handleSlideChange}
          className={isCardsEffect ? 'swiper cards-effect' : 'swiper'}
        >
          {outfits.map((outfit, index) => {
            const position = index % 2 === 0 ? 'bottom' : 'top';
            return (
              <SwiperSlide key={index} className="swiper-slide">
                <HomeOotwCard
                  img={outfit.image}
                  day={outfit.day}
                  position={position}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className='mobileDay'>
          {currentDay || currentDayName}
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

// ================== Styled Components ==================

const SectionContainer = styled.div`
  max-width: 1440px;
  padding: 0 40px;
  margin: 80px 0 0 0;
   @media (max-width: 850px) {
    margin-top: 48px;
    padding: 0 16px 0 16px;
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
`

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

const SectionSubtitle = styled.p`
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
`

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
    &:first-child{
      border-top-left-radius: 25px;
      border-bottom-left-radius: 25px;
    }
    &:last-child{
      border-top-right-radius: 25px;
      border-bottom-right-radius: 25px;
    }
  }
`;

/*------------------------------------------------*/

const OutfitGallery = styled.div`
  width: 100%;
  height: 456px;
  .mobileDay {
    display: none;
    @media (max-width: 480px) {
      display: block;
      text-align: center;
      font-family: 'SF Pro Rounded', -apple-system, BlinkMacSystemFont, Roboto, Helvetica, sans-serif;
      font-size: 18px;
      font-weight: 600;
      color: #1C1C1C;
      margin-top: 12px;
    }
  }
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
    @media (max-width: 480px) {
      width: 250px;
      justify-self: center;
    }

    .swiper-slide {
      height: 100%;
      width: 240px;
      @media (max-width: 480px) {
        width: unset !important;
        min-width: 0 !important;
        max-width: 100% !important;
      }
    }

    .swiper-button-next,
    .swiper-button-prev {
      display: none;
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
      &:hover {
        background: rgba(53, 53, 53, 1);
        transform: scale(1.1);
      }
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
    &:hover {
      background-color: #1C1C1C;
      color: white;
    }
  }
`;

export default OutfitSection;