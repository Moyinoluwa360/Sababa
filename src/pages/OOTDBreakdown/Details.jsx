"use client";
import React from "react";
import styled from "styled-components";

export function Details({outfit}) {

  const fits = outfit.pieces.filter(piece => piece.category == "Fit")
  const accessoriess = outfit.pieces.filter(piece => piece.category == "Accessories")
  const footwear = outfit.pieces.filter(piece => piece.category == "Footwear")

  return (
    <DetailsSection>
      <MainContent>
        <StyleInfo>
          <DetailGroup>
            <Label>Style</Label>
            <Value>{outfit.category}</Value>
          </DetailGroup>
          {/* for fits  */}
          {
            fits?
            <DetailGroup>
              <Label>Fit</Label>
              {
                fits.map(fit => (
                  <Value key={fit.description}>{fit.description}.</Value>
                ))
              }
            </DetailGroup>
            : ""
          }
          {/* for accessoriess */}
          {
            accessoriess?
            <DetailGroup>
              <Label>Accesories</Label>
              {
                accessoriess.map(accessories => (
                  <Value key={accessories.description}>{accessories.description}.</Value>
                ))
              }
            </DetailGroup>
            : ""
          }
          {
            footwear?
            <DetailGroup>
              <Label>Footwear</Label>
              {
                footwear.map(footwear => (
                  <Value key={footwear.description}>{footwear.description}</Value>
                ))
              }
            </DetailGroup>
            : ""
          }
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
  margin-top:auto;
  padding: 0 40px 0 40px;
  @media (max-width: 680px) {
    padding: 0 16px 0 16px;
  }
  @media (max-width: 360px) {
    padding: 0 8px 0 8px;
  }
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
  color:rgb(0, 0, 0);
  font-family: Inter;
  font-weight:bold;
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const Value = styled.p`
  font-size: 13px;
  color:rgb(74, 74, 74);
  font-family: Inter;
  @media (max-width: 480px) {
    font-size: 11px;
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

