"use client";
import React from "react";
import styled from "styled-components";

function OrderSummary() {
  return (
    <OrderSummaryContainer>
      <SectionTitle>Review your bag</SectionTitle>
      <ProductList>
        <ProductItem>
          <ProductImage
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc4a2616ff884550c14ef0c012edc36bdf8d39d7"
            alt="Product"
          />
          <ProductDetails>
            <ProductName>
              Mens pleated shirt Chunky knit light gray alpaca wool...
            </ProductName>
            <ProductVariants>
              <VariantItem>Neon Green</VariantItem>
              <VariantDivider />
              <VariantItem>UK 10</VariantItem>
              <VariantDivider />
              <VariantItem>QTY: 1</VariantItem>
            </ProductVariants>
            <ProductPrice>$52.99</ProductPrice>
            <DeleteButton>
              <img src="trash.svg" alt="remove bag" />
            </DeleteButton>
          </ProductDetails>
        </ProductItem>
        <ProductItem>
          <ProductImage
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc4a2616ff884550c14ef0c012edc36bdf8d39d7"
            alt="Product"
          />
          <ProductDetails>
            <ProductName>
              Mens pleated shirt Chunky knit light gray alpaca wool...
            </ProductName>
            <ProductVariants>
              <VariantItem>Neon Green</VariantItem>
              <VariantDivider />
              <VariantItem>UK 10</VariantItem>
              <VariantDivider />
              <VariantItem>QTY: 1</VariantItem>
            </ProductVariants>
            <ProductPrice>$52.99</ProductPrice>
            <DeleteButton>
              <img src="trash.svg" alt="remove bag" />
            </DeleteButton>
          </ProductDetails>
        </ProductItem>
      </ProductList>

      <DiscountCode>
        <DiscountInput>
          <img src="/discount.svg" alt="" />
          <i className="ti ti-ticket" />
          <span>Discount code</span>
          <ApplyButton>Apply</ApplyButton>
        </DiscountInput>
      </DiscountCode>

      <OrderTotals>
        <TotalRow>
          <TotalLabel>Price:</TotalLabel>
          <TotalValue>$105.12</TotalValue>
        </TotalRow>
        <TotalRow>
          <TotalLabel>Shipping:</TotalLabel>
          <TotalValue>$5.12</TotalValue>
        </TotalRow>
        <TotalRow>
          <TotalLabel>Discount:</TotalLabel>
          <TotalValue>-$0.00</TotalValue>
        </TotalRow>
        <FinalTotalRow>
          <TotalLabel>Total:</TotalLabel>
          <TotalValue>$110.12</TotalValue>
        </FinalTotalRow>
      </OrderTotals>

      <TermsCheckbox>
        <Checkbox />
        <TermsText>I have read and agree to the Terms and Conditons</TermsText>
      </TermsCheckbox>

      <ContinueButton>Continue</ContinueButton>
    </OrderSummaryContainer>
  );
}

const OrderSummaryContainer = styled.section`
  width: 540px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.15);
  background-color: #fff;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const SectionTitle = styled.h2`
  color: #000;
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
`;

const ProductList = styled.div`
  margin-bottom: 20px;
`;

const ProductItem = styled.article`
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
  width: 350px;
`;

const ProductImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  object-fit: cover;
`;

const ProductDetails = styled.div`
  flex: 1;
  position: relative;
`;

const ProductName = styled.h3`
  color: #000;
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 8px;
`;

const ProductVariants = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const VariantItem = styled.span`
  color: #545454;
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-weight: 500;
`;

const VariantDivider = styled.span`
  width: 1px;
  height: 8px;
  background-color: rgba(0, 0, 0, 0.1);
`;

const ProductPrice = styled.div`
  color: #000;
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-weight: 600;
  margin-top: 8px;
`;

const DeleteButton = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  color: #000;
  cursor: pointer;
  background: none;
  border: none;
  font-size: 16px;
`;

const DiscountCode = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
`;

const DiscountInput = styled.div`
  flex: 1;
  height: 48px;
  padding: 0 16px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 3px;
  color: #545454;
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-weight: 500;
  img{
    width: 25px;
    height: 25px;
  }
`;

const ApplyButton = styled.button`
  color: #146eb4;
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  background: none;
  border: none;
  margin-left: auto;
`;

const OrderTotals = styled.div`
  margin-bottom: 24px;
`;

const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const TotalLabel = styled.span`
  color: #545454;
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-weight: 500;
`;

const TotalValue = styled.span`
  color: #545454;
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-weight: 500;
`;

const FinalTotalRow = styled(TotalRow)`
  font-weight: 600;
`;

const TermsCheckbox = styled.label`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 16px;
  cursor: pointer;
`;

const Checkbox = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 4px;
  border: 1px solid rgba(20, 110, 180, 0.1);
  background-color: rgba(20, 110, 180, 0.05);
`;

const TermsText = styled.span`
  color: #545454;
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-weight: 500;
`;

const ContinueButton = styled.button`
  width: 100%;
  height: 48px;
  color: #fff;
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #4caf50;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #43a047;
  }
`;

export default OrderSummary;
