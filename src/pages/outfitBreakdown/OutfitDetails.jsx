"use client";
import React from "react";
import styled from "styled-components";

export function OutfitDetails() {
  return (
    <DetailsSection>
      <MainContent>
        <StyleInfo>
          <DetailGroup>
            <Label>Style</Label>
            <Value>Casual Wears</Value>
          </DetailGroup>
          <DetailGroup>
            <Label>Fit</Label>
            <Value>White top, white denim pant</Value>
          </DetailGroup>
          <DetailGroup>
            <Label>Accessories</Label>
            <Value>Diesel belt, 2 silver rings, sunglasses, keyholder</Value>
          </DetailGroup>
          <DetailGroup>
            <Label>Footwear</Label>
            <Value>Brown Penny Loafers</Value>
          </DetailGroup>
          <SocialSection>
            <Label>Creator's Socials</Label>
            <SocialIcons>
              <SocialIcon
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/4d257a64c4fd431196f0bd5355e29fdb/a31ecaed872c51106ad9eae599833f539704c35aa84a408ec2387b997ab87f53"
                alt="Social media"
              />
              <SocialIcon
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/4d257a64c4fd431196f0bd5355e29fdb/778d2835d205d5650af8581e4c4b094cf03708f0de47fced94b94899c20c0270"
                alt="Social media"
              />
              <SocialIcon
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/4d257a64c4fd431196f0bd5355e29fdb/698326fe512eb8a34bbdafbe845ed18424249f56dba5eefd7d05a9b5359ac892"
                alt="Social media"
              />
            </SocialIcons>
            <Disclaimer>
              (please contact @sababacommunity for removal or other social media
              links)
            </Disclaimer>
          </SocialSection>
        </StyleInfo>
      </MainContent>
    </DetailsSection>
  );
}

const DetailsSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const StyleInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-family:
    Inter,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  color: #000000;
  font-weight: 500;
`;

const DetailGroup = styled.div`
  max-width: 100%;
`;

const Label = styled.div`
  font-size: 14px;
  margin-bottom: 4px;
  color: #545454;
  font-family: Inter;
  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

const Value = styled.p`
  font-size: 16px;
  color: #1C1C1C;
  font-family: Inter;
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const SocialSection = styled.div`
  align-self: stretch;
  width: 100%;
`;

const SocialIcons = styled.div`
  display: flex;
  margin-top: 8px;
  align-items: center;
  gap: 20px;
`;

const SocialIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  width: 24px;
`;

const Disclaimer = styled.p`
  font-size: 12px;
  margin-top: 8px;
  white-space: nowrap; /* Prevents text from wrapping */
  overflow: visible;  
  color: #545454;
  @media (max-width: 480px) {
    display: none;
  }
`;

