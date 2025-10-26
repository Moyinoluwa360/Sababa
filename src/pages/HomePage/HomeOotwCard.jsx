import React from 'react'
import styled from 'styled-components'

function HomeOotwCard({img, day, position}) {
  return (
    <CardContainer position={position}>
      <ImgCardContainer>
        <img src={img} alt={`Outfit for the ${day}`}/>
        <span>{day}</span>
      </ImgCardContainer>
    </CardContainer>
  )
}

const CardContainer = styled.div`
  width: 240px;
  height: 100%;
  display: flex;
  align-items: ${props => props.position === 'top' ? 'flex-start' :'flex-end'};
  @media (max-width: 480px) {
    height: auto;
  }
`

const ImgCardContainer = styled.div`  
  width: 100%;
  height: 85%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  text-align: center;
  color: #787C7F;
  
  img{
    height: 360px;
    width: 100%;
    border-radius: 20px;
    object-fit: cover;
    object-position: center;
  }
  
  @media (max-width: 480px) {
    height: auto;
    
    img{
      height: 300px;
    }
    
    span{
      display: none;
    }
  }
`

export default HomeOotwCard