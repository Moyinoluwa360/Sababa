"use client";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PieceCard from "./PieceCard";
import LikeButton from "../../components/likeButton";
import { useRef } from "react";
import SignInModal from '../../components/SignInModal';
// slider package react slick

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, A11y } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';
import useWindowWidth from "../../components/useWindowWidth";

export function OutfitGallery({outfit, outfitNumber}) {
  const swiperRef = useRef(null);
  const shareTimeoutRef = useRef(null);
  const [shareFeedback, setShareFeedback] = useState("");
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [isImageOpen, setIsImageOpen] = useState(false);
  let width = useWindowWidth()
  const isMobile = width < 610;

  const showShareFeedback = (message) => {
    setShareFeedback(message);
    if (shareTimeoutRef.current) {
      clearTimeout(shareTimeoutRef.current);
    }
    shareTimeoutRef.current = setTimeout(() => {
      setShareFeedback("");
      shareTimeoutRef.current = null;
    }, 2000);
  };

  useEffect(() => {
    return () => {
      if (shareTimeoutRef.current) {
        clearTimeout(shareTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isImageOpen) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsImageOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isImageOpen]);

  const copyToClipboard = async (text) => {
    if (!text) return false;
    if (navigator?.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(text);
        return true;
      } catch (error) {
        console.error("Clipboard write failed", error);
      }
    }

    try {
      const tempInput = document.createElement("textarea");
      tempInput.value = text;
      tempInput.setAttribute("readonly", "");
      tempInput.style.position = "absolute";
      tempInput.style.left = "-9999px";
      document.body.appendChild(tempInput);
      tempInput.select();
      const copied = document.execCommand("copy");
      document.body.removeChild(tempInput);
      return copied;
    } catch (error) {
      console.error("Clipboard fallback failed", error);
      return false;
    }
  };

  const handleShareOutfit = async () => {
    const shareUrl = typeof window !== "undefined" ? window.location.href : "";
    if (!shareUrl) return;

    const isMobileDevice =
      typeof navigator !== "undefined" &&
      (navigator.userAgentData?.mobile ||
        /Android|iPhone|iPad|iPod|IEMobile|BlackBerry|Opera Mini|Mobile/i.test(
          navigator.userAgent || ""
        ));

    if (isMobileDevice && navigator?.share) {
      try {
        await navigator.share({
          title: "Sababa Outfit",
          text: "Check out this outfit on Sababa.",
          url: shareUrl,
        });
        showShareFeedback("Shared!");
        return;
      } catch (error) {
        if (error?.name === "AbortError") {
          return;
        }
        console.error("Share failed, falling back to copy", error);
      }
    }

    const copied = await copyToClipboard(shareUrl);
    showShareFeedback(copied ? "Link copied!" : "Copy failed");
  };

  const shareLabel = shareFeedback || (isMobile ? "Share" : "Share this outfit");
  return (
    <GallerySection>
      <MainImageColumn>
        <ImageContainer
          onClick={() => setIsImageOpen(true)}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              setIsImageOpen(true);
            }
          }}
          role="button"
          tabIndex={0}
          aria-label="Open outfit image"
        >
          <MainImage
            loading="lazy"
            src={outfit.outfitImage}
            alt="Main outfit"
          />
          <LikeButtonWrapper onClick={(event) => event.stopPropagation()}>
            <LikeButton
              outfit = {outfit}
              ariaLabel={`Like ${outfit.id}`}
              bottom="12px"
              right="12px"
              OOTDNUM={outfitNumber}
              onShowModal={() => setShowSignInModal(true)}
            />
          </LikeButtonWrapper>
          {/* Modal rendered outside Link */}
            {showSignInModal && (
              <SignInModal 
                open={showSignInModal} 
                setShowModal={setShowSignInModal} 
              />
            )}
          <ShareOutfit
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              handleShareOutfit();
            }}
            aria-live="polite"
          >
            {shareLabel}
            <img src="/share.svg" alt="Share outfit" style={{ width: '16px', height: '16px' }} />
          </ShareOutfit>
        </ImageContainer>
      </MainImageColumn>
      <BreakdownSection>
        <div className="mobileHeader">
          <h2>Piece</h2>
        </div>
        {/* swiper custom navigation left */}
        <div className='swiper-prev swipe-arrows' onClick={() => swiperRef.current?.slidePrev()}>
          <img src="/arrow-left.svg" alt="previous" />
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
      {isImageOpen ? (
        <ImageOverlay
          role="dialog"
          aria-modal="true"
          aria-label="Outfit image"
          onClick={() => setIsImageOpen(false)}
        >
          <ImageModal onClick={(event) => event.stopPropagation()}>
            <FullImage
              src={outfit.outfitImage}
              alt="Full outfit"
              onClick={() => setIsImageOpen(false)}
            />
          </ImageModal>
        </ImageOverlay>
      ) : null}
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
const ShareOutfit = styled.button`
  background: rgba(209, 209, 209, 0.15);
  box-shadow: -1px -1px 4px 0 rgba(255, 255, 255, 0.20) inset,1px 1px 4px 0 rgba(255, 255, 255, 0.20) inset;
  backdrop-filter: blur(2px);
  border: none;
  position: absolute;
  left: 10px;
  top: 10px;
  z-index: 2;
  padding: 6px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 160px;
  color: #FFFFFF;
  font-size: 14px;
  font-family: Inter, sans-serif;
  border-radius: 20px;
  gap: 5px;
  cursor: pointer;
  @media (max-width: 610px) {
    width: 80px;
    height: 35px;
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
  border-radius: 20px;
  position: relative;
  align-items: flex-end;
  height: 100%;
  width: 100%;
  overflow: hidden;
  border: 1px solid #E0E0E0;
  cursor: zoom-in;
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
  object-fit: contain;
  object-position: center;
  @media (max-width: 750px) {
    border-radius: 20px;
  }
`;

const LikeButtonWrapper = styled.div`
  position: relative;
  z-index: 2;
`;

const ImageOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 24px;
`;

const ImageModal = styled.div`
  max-width: 90vw;
  max-height: 8cqmin;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 100px;
    position: relative;
`;

const FullImage = styled.img`
  max-width: 90vw;
  max-height: 80vh;
  width: auto;
  height: auto;
  border-radius: 16px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.45);
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


