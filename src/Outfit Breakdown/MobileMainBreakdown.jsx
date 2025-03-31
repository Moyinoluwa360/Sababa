import React from 'react'
import styled from 'styled-components'
function MobileMainBreakdown() {
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
    </MobileMainBreakdown>
  )
}

const MobileMainBreakdown = styled.div`
  display: none;  
  @media (max-width: 520px) {
    display: flex;
  }
`

const CardContainer = styled.div`
  position: relative;
  border-radius: 4px;
  min-width: 30%;
  height: 402px;
  overflow: hidden;
  background-color: aqua;
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


export default MobileMainBreakdown
