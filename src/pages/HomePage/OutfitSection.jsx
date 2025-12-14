import React, { useState, useRef, useMemo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import HomeOotwCard from './HomeOotwCard';
import { useNavigate } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y, EffectCards, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';
import 'swiper/css/effect-cards';
import useWindowWidth from './useWindowWidth';
import { toggleWishlist } from '../../redux/slices/wishlistSlice';
import SignInModal from '../../components/SignInModal';

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
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
  const menOutfits = useSelector(state => state.outfits?.menOOTW || []);
  const womenOutfits = useSelector(state => state.outfits?.womenOOTW || []);
  
  const screenWidth = useWindowWidth();
  const swiperInstance = useRef(null);

  // track current centered slide
  const [activeIndex, setActiveIndex] = useState(0);
  const [showSignInModal, setShowSignInModal] = useState(false);
  // State
  const [currentGender, setCurrentGender] = useState('men');
  const [currentDayDisplay, setCurrentDayDisplay] = useState('');

  // choose source by gender and sort by day
  const outfitsList = useMemo(() => {
    const source = currentGender === 'men' ? menOutfits : womenOutfits;
    return [...(source || [])].sort((a, b) => {
      const dayA = dayOrder[(a?.day || '').toLowerCase()] ?? 999;
      const dayB = dayOrder[(b?.day || '').toLowerCase()] ?? 999;
      return dayA - dayB;
    });
  }, [menOutfits, womenOutfits, currentGender]);
 
  // Initialize / update day display and reset swiper when gender or list changes
  useEffect(() => {
    if (outfitsList.length > 0) {
      // prefer Monday as the starting slide; fall back to first item
      const mondayIndex = outfitsList.findIndex(
        (o) => (o?.day || '').toString().toLowerCase() === 'monday'
      );
      const startIndex = mondayIndex >= 0 ? mondayIndex : 0;
      setCurrentDayDisplay(outfitsList[startIndex].day || '');
      // move swiper to the startIndex when swapping gender/list
      requestAnimationFrame(() => {
        try {
          swiperInstance.current?.slideTo?.(startIndex);
          setActiveIndex(startIndex);
        } catch (e) {}
      });
    } else {
      setCurrentDayDisplay('');
    }
  }, [outfitsList, currentGender]);
 
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
    setActiveIndex(currentIndex);
    const currentOutfit = outfitsList[currentIndex];
    if (currentOutfit?.day) setCurrentDayDisplay(currentOutfit.day);
  };

  const onSwiperReady = (swiper) => {
    swiperInstance.current = swiper;
    // If outfitsList already contains a Monday entry, prefer that as active index.
    const mondayIndex = outfitsList.findIndex(
      (o) => (o?.day || '').toString().toLowerCase() === 'monday'
    );
    const idx = typeof mondayIndex === 'number' && mondayIndex >= 0
      ? mondayIndex
      : (swiper.realIndex ?? swiper.activeIndex ?? 0);
    setActiveIndex(idx);
    const outfit = outfitsList[idx];
    if (outfit?.day) setCurrentDayDisplay(outfit.day);
  };

  // mobile controls -> dispatch wishlist action for active outfit
  const handleAddCurrentToWishlist = (e) => {
    // defensive: prevent navigation / bubbling
    e?.preventDefault?.();
    e?.stopPropagation?.();

    console.log('mobile wishlist clicked, activeIndex:', activeIndex);
    const outfit = outfitsList[activeIndex];
    if (!outfit) {
      console.warn('No outfit at activeIndex', activeIndex);
      return;
    }

    try {
      if (user && user.uid) {
        // same shape as LikeButton: include OOTDNUM if your flow expects it
        console.log('dispatching toggleWishlist for', outfit.id);
        dispatch(toggleWishlist({ ...outfit, OOTDNUM: outfit.id }));
      } else {
        console.log('not authed — opening sign-in modal');
        setShowSignInModal(true);
      }
    } catch (err) {
      console.error('Error dispatching wishlist action', err);
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
          // include currentGender in key so Swiper remounts when gender changes (keeps visual state correct)
          key={`${isMobileMode ? 'mobile' : 'desktop'}-${currentGender}`}
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
          <ArrowButton onClick={() => swiperInstance.current?.slidePrev()} aria-label="Previous outfit">
            <img src="/arrow-left.svg" alt="" style={{ width: '15px', height: '15px' }} />
          </ArrowButton>

          <WishlistButton onClick={handleAddCurrentToWishlist}>Add to Wishlist</WishlistButton>

          <ArrowButton onClick={() => swiperInstance.current?.slideNext()} aria-label="Next outfit">
            <img src="/arrow-right.svg" alt="" style={{ width: '15px', height: '15px' }} />
          </ArrowButton>
        </ControlGroup>
      </Controls>

     {/* Sign in modal for mobile control fallback */}
     {showSignInModal && (
       <SignInModal open={showSignInModal} setShowModal={setShowSignInModal} />
     )}
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

  /* show swiper native arrows only on desktop (hide on mobile) */
  .swiper-button-next,
  .swiper-button-prev { display: none; }
  @media (min-width: 481px) {
    .swiper-button-next,
    .swiper-button-prev {
      display: block;
      color: #000;
      /* position tweaks if needed */
    }
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

/* Controls visible only on mobile (Add to Wishlist + small arrow buttons) */
const Controls = styled.div`
  width: 100%;
  display: none; /* hide on desktop */
  justify-content: center;
  margin-top: 44px;
  @media (max-width: 480px) {
    display: flex; /* show only on mobile */
  }
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

const WishlistButton = styled.button.attrs({ type: 'button' })`
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