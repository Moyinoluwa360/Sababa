"use client";
import React from "react";
import styled from "styled-components";

const AmazonProDet = () => {
  return (
    <DetailsColumn>
      <DetailsContainer>
        <ProductTitle>Men's Pleated Button-up Shirt</ProductTitle>
        <PriceLabel>Price:</PriceLabel>
        <PriceValue>$52.99</PriceValue>

        <ListPriceContainer>
          <ListPrice>
            List price: <span className="strikethrough">$59.00</span>
          </ListPrice>
          <InfoIcon
            src="https://cdn.builder.io/api/v1/image/assets/08bf16d58b0d4aa28fefd3a671be5059/4b0ea99c36dd7dbf7179a8ad4074f683d4e9a7acc1857b2e3e34cea679e43dbe?placeholderIfAbsent=true"
            alt="Info"
          />
        </ListPriceContainer>

        <ShippingInfo>
          <span className="shipping-text">
            $53.62 Shipping & import fees deposit to Nigeria
          </span>{" "}
          <span className="details-link">Details</span>
        </ShippingInfo>

        <ColorSizeSection>
          <ColorSizeInfo>
            <TaxInfo>
              <TaxIcon
                src="https://cdn.builder.io/api/v1/image/assets/08bf16d58b0d4aa28fefd3a671be5059/e9fc487287afa941d05fc14fb7401c6f7cdd22525bd0c3ad80058addcfbaa5b3?placeholderIfAbsent=true"
                alt="Tax info"
              />
              <TaxText>Sales taxes may apply at checkout</TaxText>
            </TaxInfo>

            <ColorInfo>
              <span className="label">Color:</span>{" "}
              <span className="value">Black</span>
            </ColorInfo>

            <ColorOptions>
              <ColorOption
                src="https://cdn.builder.io/api/v1/image/assets/08bf16d58b0d4aa28fefd3a671be5059/b555383675306454621ab2d9c120ff927c1bcf9a18357d0bdc89f4e1075d9924?placeholderIfAbsent=true"
                alt="Black"
              />
              <ColorOption
                src="https://cdn.builder.io/api/v1/image/assets/08bf16d58b0d4aa28fefd3a671be5059/63fffe63f9180d847abb1b772bc16d333ae2f0a614286070efad5a8cb81e43ae?placeholderIfAbsent=true"
                alt="Color option"
              />
              <ColorOption
                src="https://cdn.builder.io/api/v1/image/assets/08bf16d58b0d4aa28fefd3a671be5059/63fffe63f9180d847abb1b772bc16d333ae2f0a614286070efad5a8cb81e43ae?placeholderIfAbsent=true"
                alt="Color option"
              />
              <ColorOption
                src="https://cdn.builder.io/api/v1/image/assets/08bf16d58b0d4aa28fefd3a671be5059/63fffe63f9180d847abb1b772bc16d333ae2f0a614286070efad5a8cb81e43ae?placeholderIfAbsent=true"
                alt="Color option"
              />
            </ColorOptions>
          </ColorSizeInfo>
          
        </ColorSizeSection>

        <SizeHeader>
          <SizeLabel>Size</SizeLabel>
          <SizeGuideLink>Size guide</SizeGuideLink>
        </SizeHeader>
        <SizeSelector>
          <SelectorContent>
            <SelectorText>Please select</SelectorText>
            <DropdownIcon
              src="https://cdn.builder.io/api/v1/image/assets/08bf16d58b0d4aa28fefd3a671be5059/00137e01846ce8cec7f02cbfc42e98d0f1a0df370cd97d59f735b58b0653d955?placeholderIfAbsent=true"
              alt="Dropdown"
            />
          </SelectorContent>
        </SizeSelector>

        <QuantityLabel>Quantity</QuantityLabel>
        <QuantitySelector>
          <QuantitySelectorContent>
            <SelectorText>Please select</SelectorText>
            <DropdownIcon
              src="https://cdn.builder.io/api/v1/image/assets/08bf16d58b0d4aa28fefd3a671be5059/00137e01846ce8cec7f02cbfc42e98d0f1a0df370cd97d59f735b58b0653d955?placeholderIfAbsent=true"
              alt="Dropdown"
            />
          </QuantitySelectorContent>
        </QuantitySelector>

        <AddToBagButton>Add to Bag</AddToBagButton>
        <BuyNowButton>Buy now</BuyNowButton>

        <ShippingDetailsContainer>
          <DeliveryInfo>
            <DeliveryIcon
              src="https://cdn.builder.io/api/v1/image/assets/08bf16d58b0d4aa28fefd3a671be5059/ada3bc11edc30a112acf888d99ee25ce6563aedd23bcd2d4e22c80978e34a60f?placeholderIfAbsent=true"
              alt="Delivery"
            />
            <DeliveryText>
              Delivery:
              <strong> Tuesday February 11</strong>{" "}
            </DeliveryText>
          </DeliveryInfo>

          <FastDeliveryText>
            Fastest Delivery: <strong>Thursday January 31</strong>{" "}
          </FastDeliveryText>

          <OrderTimeText>
            Order within <span className="time-remaining">12hrs 45 min</span>
          </OrderTimeText>

          <LocationInfo>
            <LocationIcon
              src="https://cdn.builder.io/api/v1/image/assets/08bf16d58b0d4aa28fefd3a671be5059/51951d51f968561051f11af332b2b0b230dfba9746e0204ab068a2ec9d70d75e?placeholderIfAbsent=true"
              alt="Location"
            />
            <LocationText>Deliver to Eminokanju- Warri 330102</LocationText>
          </LocationInfo>

          <ShippingDetail>
            <DetailLabel>Ships from</DetailLabel>
            <DetailValue>Amazon</DetailValue>
          </ShippingDetail>

          <ShippingDetail>
            <DetailLabel>Sold by</DetailLabel>
            <SellerLink>Dnzzs</SellerLink>
          </ShippingDetail>

          <ShippingDetail>
            <DetailLabel>Returns</DetailLabel>
            <ReturnPolicy>30 days refund/replacement</ReturnPolicy>
          </ShippingDetail>

          <ShippingDetail>
            <DetailLabel>Customer service</DetailLabel>
            <DetailValue>Sababa/Amazon</DetailValue>
          </ShippingDetail>

          <SeeMoreLink>see more</SeeMoreLink>

          <GiftReceiptOption>
            <CheckboxInput />
            <GiftReceiptText>
              Add a gift receipt for easy returns
            </GiftReceiptText>
          </GiftReceiptOption>
        </ShippingDetailsContainer>

        <ProductDetailsSection>
          <SectionTitle>Product details</SectionTitle>
          <ExpandIcon
            src="https://cdn.builder.io/api/v1/image/assets/08bf16d58b0d4aa28fefd3a671be5059/261211ea004c4ffd201003acee74e5c2b5179e9a8991abc05274dcf9b8299579?placeholderIfAbsent=true"
            alt="Expand"
          />
        </ProductDetailsSection>

        <Divider />

        <AboutItemSection>
          <SectionTitle>About this item</SectionTitle>
          <ExpandIcon
            src="https://cdn.builder.io/api/v1/image/assets/08bf16d58b0d4aa28fefd3a671be5059/261211ea004c4ffd201003acee74e5c2b5179e9a8991abc05274dcf9b8299579?placeholderIfAbsent=true"
            alt="Expand"
          />
        </AboutItemSection>

        <Divider />

        <StylingSection>
          <SectionTitle>Styling ideas</SectionTitle>
          <ExpandIcon
            src="https://cdn.builder.io/api/v1/image/assets/08bf16d58b0d4aa28fefd3a671be5059/261211ea004c4ffd201003acee74e5c2b5179e9a8991abc05274dcf9b8299579?placeholderIfAbsent=true"
            alt="Expand"
          />
        </StylingSection>

        <Divider />
      </DetailsContainer>
    </DetailsColumn>
  );
};

const DetailsColumn = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 38%;
  padding: 5px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const DetailsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: stretch;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const ProductTitle = styled.h2`
  color: rgba(0, 0, 0, 1);
  font-size: 20px;
  font-family:
    Inter,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-weight: 500;
  align-self: start;
  @media (max-width:480px){
    font-size: 14px;
  }
`;

const PriceLabel = styled.span`
  color: rgba(84, 84, 84, 1);
  font-size: 12px;
  font-family:
    Inter,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-weight: 500;
  align-self: start;
  margin-top: 12px;
`;

const PriceValue = styled.span`
  color: rgba(0, 0, 0, 1);
  font-size: 20px;
  font-family:
    Inter,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-weight: 600;
  align-self: start;
  margin-top: 4px;
  @media (max-width:480px){
    font-size: 18px;
  }
`;

const ListPriceContainer = styled.div`
  align-self: start;
  display: flex;
  margin-top: 12px;
  align-items: end;
  gap: 4px;
  font-family:
    Inter,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 12px;
  color: rgba(84, 84, 84, 1);
  font-weight: 500;
  justify-content: start;
`;

const ListPrice = styled.span`
  width: 101px;

  .strikethrough {
    text-decoration: line-through;
    color: rgba(84, 84, 84, 1);
  }
`;

const InfoIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 12px;
  flex-shrink: 0;
`;

const ShippingInfo = styled.p`
  color: rgba(114, 114, 114, 1);
  font-size: 14px;
  font-family:
    Inter,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-weight: 500;
  margin-top: 12px;

  .shipping-text {
    color: rgba(84, 84, 84, 1);
  }

  .details-link {
    text-decoration: underline;
    color: rgba(20, 110, 180, 1);
  }
  @media (max-width:480px){
    font-size: 12px;
  }
`;

const ColorSizeSection = styled.div`
  display: flex;
  margin-top: 12px;
  align-items: stretch;
  gap: 25px;
  @media (max-width: 991px) {
    margin-right: 5px;
  }
`;

const ColorSizeInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 0;
  width: fit-content;
`;

const TaxInfo = styled.div`
  align-self: stretch;
  display: flex;
  align-items: start;
  gap: 4px;
  font-family:
    Inter,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 14px;
  color: rgba(84, 84, 84, 1);
  font-weight: 500;
  justify-content: start;
  @media (max-width:480px){
    font-size: 12px;
  }
`;

const TaxIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 18px;
  flex-shrink: 0;
`;

const TaxText = styled.span`
  width: 268px;
`;

const ColorInfo = styled.p`
  color: rgba(114, 114, 114, 1);
  font-size: 14px;
  font-family:
    Inter,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-weight: 500;
  margin-top: 12px;

  .label {
    color: rgba(84, 84, 84, 1);
  }

  .value {
    color: rgba(0, 0, 0, 1);
  }
  @media (max-width:480px){
    font-size: 12px;
  }
`;

const ColorOptions = styled.div`
  display: flex;
  margin-top: 8px;
  align-items: center;
  gap: 8px;
  justify-content: start;
`;

const ColorOption = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 40px;
  border-radius: 50%;
  align-self: stretch;
  margin-top: auto;
  margin-bottom: auto;
  flex-shrink: 0;
`;

const SizeHeader = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-top: 12px;
`

const SizeLabel = styled.span`
  color: rgba(84, 84, 84, 1);
  font-size: 14px;
  font-family:
    Inter,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-weight: 500;
  align-self: start;
  margin-top: 12px;
  margin: 0%;
  @media (max-width:480px){
    font-size: 12px;
  }
`;

const SizeGuideLink = styled.a`
  color: rgba(0, 0, 0, 1);
  font-size: 12px;
  margin-top: 0;
  font-family:
    Inter,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-weight: 500;
  text-decoration: underline;
  align-self: end;
  cursor: pointer;
`;

const SizeSelector = styled.div`
  border-radius: 8px;
  background-color: rgba(217, 217, 217, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  margin-top: 4px;
  min-height: 44px;
  width: 100%;
  padding: 14px 12px;
  flex-direction: column;
  align-items: stretch;
  font-family:
    Inter,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 14px;
  color: rgba(0, 0, 0, 1);
  font-weight: 500;
  justify-content: center;
`;

const SelectorContent = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const SelectorText = styled.span`
  @media (max-width:480px){
    font-size: 14px;
  }
`;

const DropdownIcon = styled.img`
  width: 10px;
  margin-right: 5px;
  flex-shrink: 0;
`;

const QuantityLabel = styled.span`
  color: rgba(84, 84, 84, 1);
  font-size: 14px;
  font-family:
    Inter,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-weight: 500;
  align-self: start;
  margin-top: 12px;
`;

const QuantitySelector = styled.div`
  border-radius: 8px;
  background-color: rgba(217, 217, 217, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  margin-top: 4px;
  min-height: 44px;
  width: 100%;
  padding: 14px 12px;
  flex-direction: column;
  align-items: stretch;
  font-family:
    Inter,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 14px;
  color: rgba(0, 0, 0, 1);
  font-weight: 500;
  justify-content: center;
`;

const QuantitySelectorContent = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 40px 100px;
  justify-content: space-between;
`;

const AddToBagButton = styled.button`
  border-radius: 8px;
  background-color: rgba(20, 110, 180, 1);
  margin-top: 14px;
  min-height: 44px;
  gap: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family:
    Inter,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 14px;
  color: rgba(255, 255, 255, 1);
  font-weight: 600;
  border: none;
  cursor: pointer;
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
  gap: 10px;
  font-family:
    Inter,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 14px;
  color: rgba(255, 255, 255, 1);
  font-weight: 600;
  border: none;
  cursor: pointer;
`;

const ShippingDetailsContainer = styled.div`
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  margin-top: 26px;
  width: 100%;
  padding: 16px;
  flex-direction: column;
  align-items: start;
  font-family:
    Inter,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 12px;
  font-weight: 500;
`;

const DeliveryInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  color: rgba(0, 0, 0, 1);
  justify-content: start;
  width: 100%;
  @media (max-width: 480px){
    font-size: 14px;
  }
`;

const DeliveryIcon = styled.img`
  aspect-ratio: 1.14;
  object-fit: contain;
  object-position: center;
  width: 16px;
  align-self: stretch;
  margin-top: auto;
  margin-bottom: auto;
  flex-shrink: 0;
`;

const DeliveryText = styled.span`
  align-self: stretch;
  margin-top: auto;
  margin-bottom: auto;
  word-break: normal;
  @media (max-width: 480px){
    font-size: 14px;
  }
`;

const FastDeliveryText = styled.p`
  align-self: stretch;
  margin-top: 12px;
  gap: 4px;
  font-size: 14px;
  color: rgba(0, 0, 0, 1);
`;

const OrderTimeText = styled.p`
  color: rgba(0, 0, 0, 1);
  font-size: 14px;
  margin-top: 4px;

  .time-remaining {
    text-decoration: underline;
    color: rgba(49, 159, 67, 1);
  }
`;

const LocationInfo = styled.div`
  display: flex;
  margin-top: 16px;
  align-items: start;
  gap: 4px;
  color: rgba(20, 110, 180, 1);
  justify-content: start;
`;

const LocationIcon = styled.img`
  aspect-ratio: 0.79;
  object-fit: contain;
  object-position: center;
  width: 11px;
  flex-shrink: 0;
`;

const LocationText = styled.span`
  width: 245px;
  @media (max-width: 480px){
    font-size: 11px;
  }
`;

const ShippingDetail = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  @media (max-width: 480px){
    font-size: 12px;
  }
`;

const DetailLabel = styled.span`
  color: rgba(84, 84, 84, 1);
  align-self: stretch;
  margin-top: auto;
  margin-bottom: auto;
`;

const DetailValue = styled.span`
  color: rgba(0, 0, 0, 1);
  align-self: stretch;
  margin-top: auto;
  margin-bottom: auto;
`;

const SellerLink = styled.a`
  color: rgba(20, 110, 180, 1);
  align-self: stretch;
  margin-top: auto;
  margin-bottom: auto;
  cursor: pointer;
  @media (max-width: 480px){
    font-size: 11px;
  }
`;

const ReturnPolicy = styled.span`
  color: rgba(20, 110, 180, 1);
  align-self: stretch;
  margin-top: auto;
  margin-bottom: auto;
  @media (max-width: 480px){
    font-size: 11px;
  }
`;

const SeeMoreLink = styled.a`
  color: rgba(20, 110, 180, 1);
  text-decoration: underline;
  cursor: pointer;
  @media (max-width: 480px){
    font-size: 11px;
  }
`;

const GiftReceiptOption = styled.div`
  display: flex;
  margin-top: 16px;
  align-items: start;
  gap: 4px;
  color: rgba(0, 0, 0, 1);
  justify-content: start;
`;

const CheckboxInput = styled.div`
  border-radius: 4px;
  border: 1px solid rgba(84, 84, 84, 1);
  display: flex;
  width: 16px;
  flex-shrink: 0;
  height: 16px;
`;

const GiftReceiptText = styled.span`
  flex-grow: 1;
`;

const ProductDetailsSection = styled.div`
  display: flex;
  margin-top: 16px;
  align-items: center;
  gap: 40px 100px;
  font-family:
    Inter,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 14px;
  color: rgba(0, 0, 0, 1);
  font-weight: 600;
  justify-content: space-between;
`;

const StylingSection = styled.div`
  display: flex;
  margin-top: 16px;
  align-items: center;
  font-family:
    Inter,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 14px;
  color: rgba(0, 0, 0, 1);
  font-weight: 600;
  justify-content: space-between;
`;

const SectionTitle = styled.h3`
  align-self: stretch;
  margin-top: auto;
  margin-bottom: auto;
  @media (max-width: 480px){
    font-size: 14px;
  }
`;

const ExpandIcon = styled.img`
  aspect-ratio: 1.67;
  object-fit: contain;
  object-position: center;
  width: 10px;
  align-self: stretch;
  margin-top: auto;
  margin-bottom: auto;
  flex-shrink: 0;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-width: 1.5px;
  margin-top: 15px;
  width: 100%;
  flex-shrink: 0;
  max-width: 100%;
`;

const AboutItemSection = styled.div`
  display: flex;
  margin-top: 16px;
  align-items: center;
  gap: 40px 100px;
  font-family:
    Inter,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 14px;
  color: rgba(0, 0, 0, 1);
  font-weight: 600;
  justify-content: space-between;
`;

export default AmazonProDet;
