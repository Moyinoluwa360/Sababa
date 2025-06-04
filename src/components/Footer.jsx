import React from 'react'
import styled from 'styled-components'


export default function Footer(){
  return (
    <FooterDiv>
        <div className="leftSideDiv div">
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
        <div className="rightSideDiv div">
          <div className="contactDiv">
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
          </div>
          <span>Powered by sababa</span>
        </div>
    </FooterDiv>
  )
}

const FooterDiv = styled.div`
    background-color: #000000;
    width: 100%;
    height: 473px;
    padding: 87px 53px 21px 53px;
    color: white;
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    margin-top: 40px;
    .div{
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
        @media (max-width: 480px) {
          gap: 10px;
          width: 50%;
        }
      }
      .copyright{
        font-size: 14px;
        justify-content: flex-end;
      }
    }
    .rightSideDiv{
      width: 260px;
      display: flex;
      height: auto;
      .contactDiv{
        display: flex;
        flex-direction: column;
        gap: 24px;
        div{
          height: auto;
        }
        .whatsappNo{
          display: flex;
          flex-direction: row;
          gap: 8px;
        }
      }
      span{
        font-size: 14px;
        margin-top: auto;
        align-self: flex-end;
      }
      @media (max-width: 720px) {
        align-items: flex-end;
      }
    }
    @media (max-width: 600px) {
      padding-left: 16px;
      padding-right: 16px;
      padding-bottom: 5px;
    }
    @media (max-width: 480px) {
      height: 321px;
      padding-top: 16px;
      font-size: 11px;
      .leftSideDiv{
        width: 150px;
        font-size: 10px;
        .ourSocialPages{
          img{
            height: 15px;
            width: 15px;
          }
        }
        .copyright{
          font-size: 11px;
        }
      }
      .div{
        gap: 24px;
      }
      .rightSideDiv{
        .contactDiv{
          gap: 12px;
          font-size: 10px;
          .whatsappNo{
            font-size: 10px;
            img{
              height: 15px;
              width: 15px;
            }
          }
        }
        span{
          font-size: 10px;
        }
      }
      
    }
    @media (max-width:320px){
      padding-left: 5px;
      padding-right: 5px;
      .leftSideDiv{
        font-size: 9px;
        .copyright{
          font-size: 9px;
        }
      }
      .ourSocialPages{
        img{
          height: 13px;
          width: 13px;
        }
      }
      .contactDiv{
        gap: 12px;
        font-size: 9px;
        .whatsappNo{
          font-size: 9px;
          img{
            height: 13px;
            width: 13px;
          }
        }
      }
    }
    @media (max-width:300px){
      .rightSideDiv{
        width: 150px;
        word-break: break-all;
      }
    }
`

