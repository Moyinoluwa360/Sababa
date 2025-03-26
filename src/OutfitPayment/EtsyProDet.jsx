"use client";
import React, { useState } from "react";
import styled from "styled-components";

function EtsyProDet() {
  return (
    <Container>
      {/* Product Header Section */}
      <ProductTitle>
        Mens pleated shirt Chunky knit light gray alpaca wool sweater for men,
        grey cable knitted men's jumper, handmade thick winter minimalist
        pullover, gift for man
      </ProductTitle>
      <PriceLabel>Price:</PriceLabel>
      <PriceAmount>$52.99</PriceAmount>
      <TaxInfo>
        Local taxes included (where applicable),{" "}
        <UnderlinedText>plus stopage</UnderlinedText>
      </TaxInfo>
      <ReturnInfo>
        <ReturnIcon
          src="https://cdn.builder.io/api/v1/image/assets/08bf16d58b0d4aa28fefd3a671be5059/f39761ea30d7edb8b9cadf417d92bf1bb7274a8ea51e39a6ef0717725c580f6f?placeholderIfAbsent=true"
          alt="Return policy icon"
        />
        <ReturnText>Returns and exchanges accepted</ReturnText>
      </ReturnInfo>
      <SellerName>
        <SellerNameText>Knotowear</SellerNameText>
        <VerifiedIcon
          src="https://cdn.builder.io/api/v1/image/assets/08bf16d58b0d4aa28fefd3a671be5059/d1426e98c18df4dd4d467c5f448cd7939c9bbeed3ab8aeb0ea6dbed377b5ba1b?placeholderIfAbsent=true"
          alt="Verified seller icon"
        />
      </SellerName>
      <PromotionContainer>
        <PromotionIcon
          src="https://cdn.builder.io/api/v1/image/assets/08bf16d58b0d4aa28fefd3a671be5059/b2305787b1a7b9242f85614dc03005d7e795ab70f4533e9e102d1136320ad5ec?placeholderIfAbsent=true"
          alt="Promotion icon"
        />
        <PromotionInfo>
          <GreenText>Save 10% when you buy two items at this shop</GreenText>
          <br />
          <GreenTextBold>Shop the sale</GreenTextBold>
        </PromotionInfo>
      </PromotionContainer>

      {/* Product Options Section */}
      <OptionLabel>Color</OptionLabel>
      <DropdownContainer>
        <DropdownContent>
          <PlaceholderText>Please select</PlaceholderText>
          <DropdownIcon
            src="https://cdn.builder.io/api/v1/image/assets/08bf16d58b0d4aa28fefd3a671be5059/00137e01846ce8cec7f02cbfc42e98d0f1a0df370cd97d59f735b58b0653d955?placeholderIfAbsent=true"
            alt="Dropdown icon"
          />
        </DropdownContent>
      </DropdownContainer>

      <SizeContainer>
        <OptionLabel>Size</OptionLabel>
        <SizeGuideLink>Size guide</SizeGuideLink>
      </SizeContainer>
      <DropdownContainer>
        <DropdownContent>
          <PlaceholderText>Please select</PlaceholderText>
          <DropdownIcon
            src="https://cdn.builder.io/api/v1/image/assets/08bf16d58b0d4aa28fefd3a671be5059/00137e01846ce8cec7f02cbfc42e98d0f1a0df370cd97d59f735b58b0653d955?placeholderIfAbsent=true"
            alt="Dropdown icon"
          />
        </DropdownContent>
      </DropdownContainer>

      <OptionLabel>Quantity</OptionLabel>
      <DropdownContainer>
        <DropdownContent>
          <PlaceholderText>Please select</PlaceholderText>
          <DropdownIcon
            src="https://cdn.builder.io/api/v1/image/assets/08bf16d58b0d4aa28fefd3a671be5059/00137e01846ce8cec7f02cbfc42e98d0f1a0df370cd97d59f735b58b0653d955?placeholderIfAbsent=true"
            alt="Dropdown icon"
          />
        </DropdownContent>
      </DropdownContainer>

      <LegalText>Must be 18+, credit subject to status. T&Cs apply.</LegalText>

      {/* Action Buttons */}
      <AddToBagButton>Add to Bag</AddToBagButton>
      <BuyNowButton>Buy now</BuyNowButton>

      <StarSellerInfo>
        <StarIcon
          src="https://cdn.builder.io/api/v1/image/assets/08bf16d58b0d4aa28fefd3a671be5059/ec3a2a3335b2fff9967fbff5c152232a653b5db214d0a2c218c3120beb40e2c0?placeholderIfAbsent=true"
          alt="Star seller icon"
        />
        <StarSellerText>
          <strong>Star Seller. </strong>This seller consistently earned 5-star
          reviews, dispatched on time, and replied quickly to any messages they
          received.
        </StarSellerText>
      </StarSellerInfo>

      {/* Shipping Information */}
      <ShippingContainer>
        <DeliveryInfo>
          <CalendarIcon
            src="https://cdn.builder.io/api/v1/image/assets/08bf16d58b0d4aa28fefd3a671be5059/f11fcb3b2d0995a435bb124adcc73ff7cde03dcedddfafdebee43167e156c05d?placeholderIfAbsent=true"
            alt="Calendar icon"
          />
          <DeliveryText>
            Order today to get by <strong>03-02-2025</strong>
          </DeliveryText>
        </DeliveryInfo>

        <ReturnPolicy>
          <ReturnPolicyIcon
            src="https://cdn.builder.io/api/v1/image/assets/08bf16d58b0d4aa28fefd3a671be5059/14f7f4e3ba8ca66b4d29acc2858848cbbf48a7a6cbb91d8e222a85bf0223fcbf?placeholderIfAbsent=true"
            alt="Return policy icon"
          />
          <ReturnPolicyText>
            <UnderlinedText>Returns and exchanges accepted</UnderlinedText>{" "}
            within 14 days
          </ReturnPolicyText>
        </ReturnPolicy>

        <FreeDeliveryText>Free delivery</FreeDeliveryText>

        <DispatchInfo>
          <LocationIcon
            src="https://cdn.builder.io/api/v1/image/assets/08bf16d58b0d4aa28fefd3a671be5059/197a364ee97ff8d3e4c2d3e8edf958f3eadc625d8a7f2378e539ad820fd4ff9d?placeholderIfAbsent=true"
            alt="Location icon"
          />
          <DispatchText>
            Dispatched from: <strong>Lithuania</strong>
          </DispatchText>
        </DispatchInfo>

        <DeliveryLocation>
          <DeliveryLocationText>Deliver to Nigeria</DeliveryLocationText>
          <FlagIcon
            src="https://cdn.builder.io/api/v1/image/assets/08bf16d58b0d4aa28fefd3a671be5059/1a6177f4bfc611d9fa8577d7215c6d1df62b70419d62b3e4463d4f0c0b628e52?placeholderIfAbsent=true"
            alt="Nigeria flag"
          />
        </DeliveryLocation>
      </ShippingContainer>

      {/* Collapsible Sections */}
      <CollapsibleSection title="Item details" />
      <Divider />
      <CollapsibleSection title="Did you know" />
      <Divider />
      <CollapsibleSection title="Meet your seller" />
      <Divider />
      <CollapsibleSection title="Customer reviews" />
      <Divider />
    </Container>
  );
}

// Collapsible Section Component
function CollapsibleSection({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SectionContainer>
      <SectionHeader onClick={() => setIsOpen(!isOpen)}>
        <SectionTitle>{title}</SectionTitle>
        <ToggleIcon
          src="https://cdn.builder.io/api/v1/image/assets/08bf16d58b0d4aa28fefd3a671be5059/261211ea004c4ffd201003acee74e5c2b5179e9a8991abc05274dcf9b8299579?placeholderIfAbsent=true"
          alt="Toggle icon"
        />
      </SectionHeader>
      {isOpen && children && <SectionContent>{children}</SectionContent>}
    </SectionContainer>
  );
}

// Styled Components
const Container = styled.main`
  border-radius: 0px 0px 0px 0px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  max-width: 480px;
  width: 100%;
  flex-direction: column;
  align-items: start;
  font-family:
    Inter,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-weight: 500;
  padding: 5px;
`;

// Product Header Styles
const ProductTitle = styled.h1`
  color: rgba(0, 0, 0, 1);
  font-size: 20px;
  margin-top: -4px;
  font-weight: 500;
  @media (max-width: 480px){
    font-size: 14px;
  }
`;

const PriceLabel = styled.p`
  color: rgba(84, 84, 84, 1);
  font-size: 12px;
  margin-top: 12px;
`;

const PriceAmount = styled.p`
  color: rgba(0, 0, 0, 1);
  font-size: 20px;
  font-weight: 600;
  margin-top: 4px;
  @media (max-width: 480px){
    font-size: 18px;
  }
`;

const TaxInfo = styled.p`
  color: rgba(84, 84, 84, 1);
  font-size: 14px;
  align-self: stretch;
  margin-top: 12px;
  @media (max-width: 480px){
    font-size: 12px;
  }
`;

const UnderlinedText = styled.span`
  text-decoration: underline;
`;

const ReturnInfo = styled.div`
  display: flex;
  margin-top: 12px;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  color: rgba(84, 84, 84, 1);
  justify-content: start;
  @media (max-width: 480px){
    font-size: 12px;
  }
`;

const ReturnIcon = styled.img`
  aspect-ratio: 1.42;
  object-fit: contain;
  object-position: center;
  width: 17px;
  align-self: stretch;
  margin-top: auto;
  margin-bottom: auto;
  flex-shrink: 0;
`;

const ReturnText = styled.p`
  align-self: stretch;
  margin-top: auto;
  margin-bottom: auto;
  @media (max-width: 480px){
    font-size: 12px;
  }
`;

const SellerName = styled.div`
  display: flex;
  margin-top: 12px;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  color: rgba(0, 0, 0, 1);
  font-weight: 600;
  white-space: nowrap;
  justify-content: start;

`;

const SellerNameText = styled.p`
  align-self: stretch;
  margin-top: auto;
  margin-bottom: auto;
`;

const VerifiedIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 12px;
  align-self: stretch;
  margin-top: auto;
  margin-bottom: auto;
  flex-shrink: 0;
`;

const PromotionContainer = styled.div`
  display: flex;
  margin-top: 12px;
  align-items: start;
  gap: 4px;
  font-size: 14px;
  color: rgba(0, 0, 0, 1);
  justify-content: start;
`;

const PromotionIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 18px;
  flex-shrink: 0;
`;

const PromotionInfo = styled.div``;

const GreenText = styled.span`
  color: rgba(76, 175, 80, 1);
  @media (max-width: 480px){
    font-size: 12px;
  }
`;

const GreenTextBold = styled.span`
  font-weight: 600;
  text-decoration: underline;
  color: rgba(76, 175, 80, 1);
  @media (max-width: 480px){
    font-size: 12px;
  }
`;

// Product Options Styles
const OptionLabel = styled.label`
  color: rgba(84, 84, 84, 1);
  font-size: 14px;
  margin-top: 12px;
  @media (max-width: 480px){
    font-size: 12px;
  }
`;

const SizeContainer = styled.div`
  display: flex;
  margin-top: 12px;
  width: 100%;
  justify-content: space-between;
  align-items: flex-end;
`;

const SizeGuideLink = styled.a`
  color: rgba(0, 0, 0, 1);
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const DropdownContainer = styled.div`
  border-radius: 8px;
  background-color: rgba(217, 217, 217, 0.1);
  border-color: rgba(0, 0, 0, 0.1);
  border-style: solid;
  border-width: 1px;
  display: flex;
  margin-top: 4px;
  min-height: 40px;
  width: 100%;
  padding: 14px 12px;
  flex-direction: column;
  align-items: start;
  font-size: 14px;
  color: rgba(0, 0, 0, 1);
  justify-content: center;
  cursor: pointer;
`;

const DropdownContent = styled.div`
  display: flex;
  max-width: 100%;
  width: 347px;
  align-items: center;
  gap: 40px 100px;
  justify-content: space-between;
`;

const PlaceholderText = styled.span`
  align-self: stretch;
  margin-top: auto;
  margin-bottom: auto;
  @media (max-width: 480px){
    font-size: 12px;
  }
`;

const DropdownIcon = styled.img`
  aspect-ratio: 1.67;
  object-fit: contain;
  object-position: center;
  width: 10px;
  align-self: stretch;
  margin-top: auto;
  margin-bottom: auto;
  flex-shrink: 0;
`;

// Legal Text and Action Buttons
const LegalText = styled.p`
  color: rgba(84, 84, 84, 1);
  font-size: 14px;
  margin-top: 12px;
  @media (max-width: 480px){
    font-size: 12px;
  }
`;

const AddToBagButton = styled.button`
  align-self: stretch;
  border-radius: 8px;
  background-color: rgba(245, 100, 0, 1);
  margin-top: 12px;
  min-height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: rgba(255, 255, 255, 1);
  font-weight: 600;
  border: none;
  cursor: pointer;
  @media (max-width: 480px){
    font-size: 12px;
  }
`;

const BuyNowButton = styled.button`
  align-self: stretch;
  border-radius: 8px;
  background-color: rgba(76, 175, 80, 1);
  margin-top: 4px;
  min-height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: rgba(255, 255, 255, 1);
  font-weight: 600;
  border: none;
  cursor: pointer;
  @media (max-width: 480px){
    font-size: 12px;
  }
`;

// Star Seller Info
const StarSellerInfo = styled.section`
  display: flex;
  margin-top: 12px;
  align-items: start;
  gap: 4px;
  font-size: 14px;
  color: rgba(0, 0, 0, 1);
  justify-content: start;
`;

const StarIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 18px;
  flex-shrink: 0;
`;

const StarSellerText = styled.p`
  @media (max-width: 480px){
    font-size: 12px;
  }
`;

// Shipping Information Styles
const ShippingContainer = styled.section`
  border-radius: 8px;
  border-color: rgba(0, 0, 0, 0.1);
  border-style: solid;
  border-width: 1px;
  display: flex;
  margin-top: 12px;
  width: 100%;
  padding: 16px;
  flex-direction: column;
  align-items: start;
  font-size: 14px;
  color: rgba(0, 0, 0, 1);
`;

const DeliveryInfo = styled.div`
  display: flex;
  min-height: 21px;
  align-items: start;
  gap: 8px;
  justify-content: start;
`;

const CalendarIcon = styled.img`
  aspect-ratio: 0.89;
  object-fit: contain;
  object-position: center;
  width: 16px;
  flex-shrink: 0;
`;

const DeliveryText = styled.p`
@media (max-width: 480px){
    font-size: 12px;
  }`;

const ReturnPolicy = styled.div`
  align-self: stretch;
  display: flex;
  margin-top: 16px;
  min-height: 21px;
  align-items: start;
  gap: 8px;
  justify-content: start;
`;

const ReturnPolicyIcon = styled.img`
  aspect-ratio: 0.89;
  object-fit: contain;
  object-position: center;
  width: 16px;
  flex-shrink: 0;
`;

const ReturnPolicyText = styled.p`
  @media (max-width: 480px){
    font-size: 12px;
  }
`;

const FreeDeliveryText = styled.p`
  align-self: stretch;
  margin-top: 16px;
  min-height: 21px;
  gap: 8px;
  @media (max-width: 480px){
    font-size: 12px;
  }
`;

const DispatchInfo = styled.div`
  display: flex;
  margin-top: 16px;
  min-height: 21px;
  align-items: center;
  gap: 8px;
  justify-content: start;
`;

const LocationIcon = styled.img`
  aspect-ratio: 0.81;
  object-fit: contain;
  object-position: center;
  width: 13px;
  align-self: stretch;
  margin-top: auto;
  margin-bottom: auto;
  flex-shrink: 0;
`;

const DispatchText = styled.p`
  align-self: stretch;
  margin-top: auto;
  margin-bottom: auto;
  @media (max-width: 480px){
    font-size: 12px;
  }
`;

const DeliveryLocation = styled.div`
  display: flex;
  margin-top: 16px;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  justify-content: start;
`;

const DeliveryLocationText = styled.p`
  align-self: stretch;
  margin-top: auto;
  margin-bottom: auto;
  @media (max-width: 480px){
    font-size: 12px;
  }
`;

const FlagIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 12px;
  align-self: stretch;
  margin-top: auto;
  margin-bottom: auto;
  flex-shrink: 0;
`;

// Collapsible Section Styles
const SectionContainer = styled.section`
  width: 100%;
`;

const SectionHeader = styled.div`
  display: flex;
  margin-top: 16px;
  align-items: center;
  gap: 40px 100px;
  font-size: 14px;
  color: rgba(0, 0, 0, 1);
  font-weight: 600;
  justify-content: space-between;
  cursor: pointer;
`;

const SectionTitle = styled.h2`
  align-self: stretch;
  margin-top: auto;
  margin-bottom: auto;
  font-size: 14px;
  font-weight: 600;
  @media (max-width: 480px){
    font-size: 12px;
  }
`;

const ToggleIcon = styled.img`
  aspect-ratio: 1.67;
  object-fit: contain;
  object-position: center;
  width: 10px;
  align-self: stretch;
  margin-top: auto;
  margin-bottom: auto;
  flex-shrink: 0;
`;

const SectionContent = styled.div`
  margin-top: 12px;
  padding: 0 16px;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  margin-top: 15px;
  width: 375px;
  flex-shrink: 0;
  max-width: 100%;
  height: 1px;
`;

export default EtsyProDet;
