"use client";
import React from "react";
import styled from "styled-components";
import MobileBreakdown from "./MobileDetails";
export function OutfitGallery() {
  return (
    <GallerySection>
      <MainImageColumn>
        <ImageContainer>
          <MainImage
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/4d257a64c4fd431196f0bd5355e29fdb/4eadd821fbca46f1ee8093782c91ab061b8046c73bb458dea6ff63910dbdc06a"
            alt="Main outfit"
          />
          <LikeButton className="mainLikeButton">
              <LikeIcon src="/heart.svg" alt="" />
          </LikeButton>
        </ImageContainer>
      </MainImageColumn>
      <MobileBreakdown />
      <BreakdownSection>
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
      </BreakdownSection>
    </GallerySection>
  );
}

const GallerySection = styled.section`
  width: 100%;
  height: 402px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1270px) {
    flex-direction: column;
    height: fit-content;
    gap: 10px;
    align-items: center;
  }
  #div{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const MainImageColumn = styled.div`
  height: 402px;
  width: 288px;
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
  align-items: end;
  height: 100%;
  width: 100%;
  .mainLikeButton{
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
`;

const BreakdownSection = styled.section`
  display: flex;
  flex-direction: column; 
  width: 75%;
  @media (max-width: 1270px) {
    width: 100%;
  }
  @media (max-width: 1000px) {
    height: 300px;
  }
  @media (max-width: 750px) {
    height: 200px;
  }
  @media (max-width: 520px) {
    display: none;
  }
`

const NextShow = styled.div`
  display: flex;
  align-items: center;
`

const MainBreakdown = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
  margin: 0 5px 0 5px;
  `
;
  

const CardContainer = styled.div`
  position: relative;
  border-radius: 4px;
  min-width: 30%;
  height: 402px;
  overflow: hidden;
  @media (max-width: 1000px) {
    min-width: 25%;
    height: 300px;
  }
  @media (max-width: 750px) {
    height: 200px;
    min-width: 30%;
  }
  @media (max-width: 520px) {
    display: block;
  }
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
  bottom: 10px;
  right: 12px;
  width: 35px;
  height: 35px;
  cursor: pointer;
  border: none;
  background: none;
`;

const LikeIcon = styled.img`
  width: 100%;
  height: 100%;
  margin-top: 2.5px;
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