"use client";
import React from "react";
import styled from "styled-components";

export function OutfitGallery() {
  return (
    <GallerySection>
      <div id="div">
        <NextShow id={"toTheLeft"} >
          <img src="/lessThan.svg" alt="to the left arrow" />
        </NextShow>
        <MainBreakdown>
          <CardContainer>
            <OutfitImage src={"/dummyImg/shirtDummy.svg"} alt={"dummy for the real"}/>
            <LikeButton>
              <LikeIcon src="/heart.svg" alt="" />
            </LikeButton>
          </CardContainer>
          <CardContainer>
            <OutfitImage src={"/dummyImg/pantsDummy.svg"} alt={"dummy for the real"}/>
            <LikeButton>
              <LikeIcon src="/heart.svg" alt="" />
            </LikeButton>
          </CardContainer>
          <CardContainer>
            <OutfitImage src={"/dummyImg/shoeDummy.svg"} alt={"dummy for the real"}/>
            <LikeButton>
              <LikeIcon src="/heart.svg" alt="" />
            </LikeButton>
          </CardContainer>
        </MainBreakdown>
        <NextShow id={"toTheRight"} >
          <img src="/greaterThan.svg" alt="to the right arrow" />
        </NextShow>
      </div>
      <ImageNav>
        <NavDot active />
        <NavDot />
      </ImageNav>
    </GallerySection>
  );
}

const GallerySection = styled.section`
  width: 70%;
  height: 402px;
  display: flex;
  flex-direction: column;
  @media (max-width: 1050px) {
    width: 100%;
  }
  #div{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const NextShow = styled.div`
  display: flex;
  align-items: center;
`

const MainBreakdown = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
  background-color: aquamarine;
  margin: 0 5px 0 5px;
  `
;
  

const CardContainer = styled.div`
  position: relative;
  border-radius: 4px;
  min-width: 30%;
  height: 402px;
  overflow: hidden;
  background-color: aqua;
`;

const OutfitImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  
  @media (max-width: 480px) {
    height: 196px;
  }
`;

const LikeButton = styled.button`
  position: absolute;
  bottom: 20px;
  right: 12px;
  width: 40px;
  height: 40px;
  cursor: pointer;
  border: none;
  background-color: white;
  
  @media (max-width:480px){
    width: 24px;
    height: 24px;
    bottom: 25px;
  }
`;

const LikeIcon = styled.img`
  width: 100%;
  height: 100%;
  margin-top: 2.5px;
  @media (max-width:480px){
    width: 13px;
    height: 12px;
  }
`;

const ImageNav = styled.div`
  display: flex;
  margin-top: 7px;
  justify-content: center;
  gap: 8px;
`;

const NavDot = styled.div`
  background-color: ${(props) =>
    props.active ? "rgba(0, 0, 0, 1)" : "rgba(217, 217, 217, 1)"};
  border-radius: 50%;
  width: 8px;
  height: 8px;
`;