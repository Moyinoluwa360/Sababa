import React from "react";
import styled from "styled-components";

const PaymentDetailsSummary = () => {
  return (
    <OrderSummaryContainer>
      <SectionTitle>Summary</SectionTitle>
      <ShippingInfo>
        <InfoTitle>Shipping information</InfoTitle>
        <InfoValue>Delivery</InfoValue>
      </ShippingInfo>
      <CustomerDetails>
        <DetailRow>
          <DetailLabel>Full name</DetailLabel>
          <DetailValue>Eminokanju Oghenevwegba</DetailValue>
        </DetailRow>
        <DetailRow>
          <DetailLabel>Email</DetailLabel>
          <DetailValue>vwegbaeminokanju@gmail.com</DetailValue>
        </DetailRow>
        <DetailRow>
          <DetailLabel>Phone number</DetailLabel>
          <DetailValue>+2349024076853</DetailValue>
        </DetailRow>
      </CustomerDetails>
      <Divider />
      <DeliveryDetails>
        <SectionTitle>Delivery Details</SectionTitle>
        <DetailRow>
          <DetailLabel>Country</DetailLabel>
          <DetailValue>Nigeria</DetailValue>
        </DetailRow>
        <DetailRow>
          <DetailLabel>State</DetailLabel>
          <DetailValue>Delta</DetailValue>
        </DetailRow>
        <DetailRow>
          <DetailLabel>City</DetailLabel>
          <DetailValue>Warri</DetailValue>
        </DetailRow>
        <DetailRow>
          <DetailLabel>Zip code</DetailLabel>
          <DetailValue>330201</DetailValue>
        </DetailRow>
        <DetailRow>
          <DetailLabel>Address</DetailLabel>
          <DetailValue>Off enakeyhare street off bendel estate</DetailValue>
        </DetailRow>
      </DeliveryDetails>
      <PayButton>Pay now</PayButton>
    </OrderSummaryContainer>
  );
};

const OrderSummaryContainer = styled.section`
  width: 540px;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.15);
  background-color: #fff;
  @media (max-width: 991px) {
    width: 100%;
  }
  @media (max-width: 640px) {
    padding: 15px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 16px;
  font-weight: 600;
  color: #000;
  margin-bottom: 20px;
`;

const ShippingInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  font-size: 14px;
`;

const InfoTitle = styled.span`
  color: #545454;
`;

const InfoValue = styled.span`
  color: #000;
`;

const CustomerDetails = styled.div`
  margin-bottom: 20px;
`;

const DetailRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  font-size: 14px;
`;

const DetailLabel = styled.span`
  color: #545454;
`;

const DetailValue = styled.span`
  color: #000;
`;

const Divider = styled.hr`
  height: 1px;
  margin: 20px 0;
  background-color: rgba(0, 0, 0, 0.1);
  border: none;
`;

const DeliveryDetails = styled.div`
  margin-bottom: 20px;
`;

const PayButton = styled.button`
  width: 100%;
  height: 48px;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  background-color: #4caf50;
`;

export default PaymentDetailsSummary;
