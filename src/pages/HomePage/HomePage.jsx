import React from 'react';
import styled from 'styled-components';
import { StyleCategories } from './StyleCategories';
import { ProductGallery } from './ProductYouMayLike/ProductGallery';
import { Link } from 'react-router-dom';


export default function HomePage() {
  return (
    <HomeContainer>
      <HeroBanner>
        <div className="segregatedImages">
          <div className="sec a">
            <img src="hmp1.svg" alt="segregated image 1" />
            <img src="hmp2.svg" alt="segregated image 2" />
          </div>
          <div className="sec b">
            <img src="hmp3.svg" alt="segregated image 3" className='hmp3' />
            <img src="hmp4.svg" alt="segregated image 4" />
          </div>
        </div>
        <div className="heroBannerTitle">
          Discover Outfits, Click to Buy
        </div>
      </HeroBanner>
      <GenderSection>
        <Link 
          to={`/home/alloutfits/`}
          state={{gender:"male"}}
          style={{textDecoration:"none", color:"black", width:"50%", height:"100%"}}
        >
          <div id="maleSec">
            <img src="/hmp1.svg" alt="male section Image"/>
            <span className="title">
              Men
            </span>
          </div>
        </Link>
        <Link 
          to={`/home/alloutfits`}
          state={{gender:"female"}}
          style={{textDecoration:"none", color:"black", width:"50%", height:"100%"}}
        >
          <div id="femaleSec">
            <img src="/hmp3.svg" alt="female section Image"/>
            <span className="title">
              Women
            </span>
          </div>
        </Link>
      </GenderSection>
      <StyleCategories />
      <ProductGallery title="Products you may like" />
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  background-color: rgba(252, 252, 252, 1);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  align-items: center;
  font-style: Inter;
`;

const GenderSection = styled.div`
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  margin-top: 7px;
  width: 95%;
  height: 383px;
  gap: 5px;
  div{
    height: inherit;
    width: 100%;
    border: 4px solid rgba(0, 0, 0, 1);
    display: flex;
    flex-direction: column;
    &:hover{
      opacity: 0.9;
    }
    img{
      width: 335px;
      height: 90%;
      margin: auto;
      align-items: center;
    }
    .title{
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      font-size: 20px;
      height: 10%;
    }
    @media (max-width: 710px) {
      padding: 0 5px 0 5px;
      img{
        width: 100%;
      }
      .title{
        font-weight: 600;
        font-size: 14px;
      }
    }
  }
  @media (max-width: 500px) {
    height: 200px;
  }
  @media (max-width: 310px) {
  }
`

const HeroBanner = styled.div`
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  margin-top: 7px;
  width: 95%;
  max-width: 100%;
  height: 450px;
  border: 4px solid rgba(0, 0, 0, 1);
  flex-direction: column;
  .segregatedImages{
    display: flex;
    width: 100%;
    height: 90%;
    flex: 1;
    .sec{
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .a{
      padding: 0 0 0 15px;
    }
    .b{
      padding: 0 15px 0 0;
    }
    img{
      height: 85%;
      flex: 1;
      width: 50%;
    }
    .hmp3{
      height: 100%;
    }
  }
  .heroBannerTitle{
    display: flex;
    justify-content: center;
    font-size: 24px;
    font-weight: 600;
    height: 10%;
    font-family: inter;
    align-items: center;
    margin-bottom: 15px;
  }
  @media (max-width: 768px) {
   .segregatedImages{
    flex-direction: column;
    .sec{
      width: 100%;
      height: 50%;
      padding-left: 0%;
      margin: 0%;
      img{
        height: 95%;
      }
      .hmp3{
        height: 100%;
      }
    }
   }
   .heroBannerTitle{
    font-size: 17px;
    text-align: center;
    margin-bottom: 0%;
   }
  }
  @media (max-width: 500px) {
    height: 371px;
    font-size: 14px;
   .segregatedImages{
    .sec{
      img{
        width: 138px;
      }
      .hmp3{
        height: 100%;
      }
    }
   }
   .heroBannerTitle{
    font-size: 15px;
    text-align: center;
   }
  }
  @media (max-width: 310px) {
      img{
        min-width: 100px;
      }
  }
`