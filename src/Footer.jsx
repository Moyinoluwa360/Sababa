import React from 'react'
import styled from 'styled-components'


export default function Footer(){
  return (
    <FooterDiv>
        <div className="leftSideDiv">
          <div className="quickLink">
            QUICK LINK
          </div>
          <div className="ourSocialPages">
            <img src="instagramLogo.svg" alt="instagram logo" />
            <img src="pinterestLogo.svg" alt="pinterest logo" />
            <img src="tiktokLogo.svg" alt="tiktok logo" />
          </div>
          <div className="outfitCache">
            Outfit Cache
          </div>
          <div className="productByCategories">
            Product by Categories
          </div>
          <div className="productByBrands">
            Product by brands
          </div>
          <div className="styleGuide">
            Style guide
          </div>
          <div className="copyright">
            Copyright @ 2024 Sababa
          </div>
        </div>
        <div className="rightSideDiv">
          <div className="contact">
            CONTACT
          </div>
          <div className="email">
            thesababacommunity@gmail.com
          </div>
          <div className="whatsappNo">
            <img src="whatsappLogo.svg" alt="whatsapp Logo" />
            +2347042265102
          </div>
          <span>Powered by sababa</span>
        </div>
    </FooterDiv>
  )
}

const FooterDiv = styled.div`
    background-color: #000000;
    width: 100%;
    min-height: 473px;
    margin-top: 106px;
    padding: 87px 53px 21px 53px;
    color: white;
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    div{
      height: 100%;
      display: flex;
      flex-direction: column;
      margin: 0;
      gap: 24px;
      img{
        height: 24px;
        width: 24px;
      }
      :first-child{
        font-weight: bold;
      }
    }
    .leftSideDiv{
      width: 205px;
      .ourSocialPages{
        display: flex;
        flex-direction: row;
        gap: 48px;
        width: 100%;
        height: auto;
      }
      .copyright{
        font-size: 14px;
        justify-content: flex-end;
      }
    }
    .rightSideDiv{
      width: 260px;
      display: flex;
      div{
        height: auto;
      }
      .whatsappNo{
        display: flex;
        flex-direction: row;
        gap: 8px;
      }
      span{
        font-size: 14px;
        margin-top: auto;
        align-self: flex-end;
      }
    }
`

