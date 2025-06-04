"use client";
import React from "react";
import styled from "styled-components";
import ProductImages from "./ProductImages";
import AmazonProDet from "./AmazonProDet";
import EtsyProDet from "./EtsyProDet";

const ProductSection = () => {
  return (
    <SectionContainer>
      <StoreSelector>
        <StoreOptions>
          <AmazonOption>
            Amazon <strong>$52.99</strong>
          </AmazonOption>
          <EtsyOption>
            Etsy <strong>$50.00</strong>
          </EtsyOption>
          {/*<ThriftsOption>
            Thrifts <span className="thrift-price">$15.00</span>
          </ThriftsOption>*/}
        </StoreOptions>
        <BuyDirectLink>Buy direct from the site</BuyDirectLink>
      </StoreSelector>

      <ProductContent>
        <ContentWrapper>
          <ProductImages />
          <EtsyProDet/>
        </ContentWrapper>
      </ProductContent>
    </SectionContainer>
  );
};

const SectionContainer = styled.section`
  display: flex;
  margin-top: 40px;
  width: 100%;
  flex-direction: column;
  margin-bottom: 0%;
  padding: 0 20px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
  @media (max-width: 480px) {
    margin-top: 10px;
  }
  @media (max-width: 310px) {
    padding:0 5px;
  }
`;

const StoreSelector = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 40px;
  font-family:
    Inter,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 16px;
  font-weight: 500;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 991px) {
    max-width: 100%;
  }
  @media (max-width: 650px) {
    gap: 20px;
  }
  @media (max-width: 480px) {
    gap: 5px;
  }
`;

const StoreOptions = styled.div`
  align-self: stretch;
  display: flex;
  min-width: 240px;
  margin-top: auto;
  margin-bottom: auto;
  align-items: center;
  gap: 12px;
  color: rgba(84, 84, 84, 1);
  justify-content: start;
  @media (max-width: 650px) {
    font-size: 16px;
  }
  @media (max-width: 480px) {
    min-width: 122px;
    margin-top: 0%;
  }
  @media (max-width: 360px) {
    gap: 5px;
    min-width: auto;
  }
`;

const AmazonOption = styled.button`
  align-self: stretch;
  border: none;
  background: none;
  border-bottom: 2px solid rgba(0, 0, 0, 1);
  margin-top: auto;
  margin-bottom: auto;
  padding: 8px;
  gap: 10px;
  font-size: 20px;
  color: rgba(0, 0, 0, 1);
  font-family: inherit;
  font-weight: inherit;
  cursor: pointer;
  @media (max-width: 660px) {
    font-size: 16px;
  }
  @media (max-width: 510px) {
    font-size: 14px;
  }
  @media (max-width: 480px) {
    strong{
      display: none;
    }
  }
  @media (max-width: 360px) {
    font-size: 12px;
  }
  
`;

const EtsyOption = styled.button`
  align-self: stretch;
  border: none;
  background: none;
  margin-top: auto;
  margin-bottom: auto;
  padding: 8px;
  gap: 10px;
  font-weight: 600;
  font-family: inherit;
  font-size: 18px;
  color: inherit;
  cursor: pointer;
  @media (max-width: 660px) {
    font-size: 16px;
  }
  @media (max-width: 510px) {
    font-size: 14px;
  }
  @media (max-width: 480px) {
    strong{
      display: none;
    }
    font-size: 12px;
  }
`;


const BuyDirectLink = styled.a`
  color: rgba(0, 0, 0, 1);
  text-decoration: underline;
  cursor: pointer;
  font-size: 19px;
  @media (max-width: 660px) {
    font-size: 15px;
  }
  @media (max-width: 510px) {
    font-size: 14px;
  }
  @media (max-width: 480px) {
    margin-top: 0%;
    font-size: 12px;
  }
  @media (max-width: 275px) {
    font-size: 10px;
  }
`;

const ProductContent = styled.div`
  align-self: center;
  margin-top: 20px;
  width: 100%;
  max-width: 1104px;
`;

const ContentWrapper = styled.div`
  gap: 20px;
  display: flex;
  @media (max-width: 700px){
    flex-direction: column;
  }
`;

export default ProductSection;
