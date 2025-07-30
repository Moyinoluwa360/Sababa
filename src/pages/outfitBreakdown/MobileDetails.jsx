import React from 'react'
import styled from 'styled-components'
function MobileBreakdown() {
  return (
    <MobileMainBreakdown>
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
        <CardContainer>
            <OutfitImage src={"/dummyImg/shoeDummy.svg"} alt={"dummy for the real"}/>
            <LikeButton>
            <LikeIcon src="/heart.svg" alt="" />
            </LikeButton>
        </CardContainer>
    </MobileMainBreakdown>
  )
}

const MobileMainBreakdown = styled.div`
  display: none;  
  @media (max-width: 520px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    gap: 10px;
    padding-left: 40px;
    padding-right: 40px;
    @media (max-width: 472px) {
        padding-left: 15px;
        padding-right: 15px;
     }
     @media (max-width: 472px) {
        padding:0px;
        gap: 0px;
     }
  }
`

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
    height: 143px;
    width: 168px;
  }
  @media (max-width: 400px) {
    height: 120px;
    width: 140px;
  }
  @media (max-width: 340px) {
    height: 100px;
    width: 120px;
  }
  @media (max-width: 300px) {
    height: 80px;
    width: 100px;
  }
  @media (max-width: 262px) {
    height: 90px;
    width: 80px;
  }
`;

const OutfitImage = styled.img`
  width: 100%;
  height: 100%;
  transition: transform 0.3s ease;
`;

const LikeButton = styled.button`
  position: absolute;
  bottom: 10px;
  right: 12px;
  width: 25px;
  height: 25px;
  cursor: pointer;
  border: none;
  background: none;
  @media (max-width: 340px){
    width: 20px;
    height: 20px;
    bottom: 10px;
  }
  @media (max-width: 300px) {
    right: 6px;
  }
`;

const LikeIcon = styled.img`
  width: 100%;
  height: 100%;
  margin-top: 2.5px;
`;


export default MobileBreakdown
