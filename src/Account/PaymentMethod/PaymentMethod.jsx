"use client";
import React from "react";
import styled from "styled-components";

export function MainContent() {
  return (
    <ContentContainer>
      <AddPaymentButton>
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="40" height="40" rx="8" fill="#1C1C1C" />
          <path
            d="M84.8462 15.5H73.1538C71.9643 15.5 71 16.5186 71 17.775V26.225C71 27.4814 71.9643 28.5 73.1538 28.5H84.8462C86.0357 28.5 87 27.4814 87 26.225V17.775C87 16.5186 86.0357 15.5 84.8462 15.5Z"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Add new payment method
      </AddPaymentButton>

      <Divider />

      <PaymentCardContainer>
        <CardDetails>
          <CardInfo>Debit Mastercard (5628)</CardInfo>
          <CardInfo>Exp: 10/27</CardInfo>
          <CardInfo>Eminokanju Vwegba</CardInfo>
          <DefaultText>This is your default payment method</DefaultText>
        </CardDetails>
        <DeleteButton>Delete</DeleteButton>
      </PaymentCardContainer>
    </ContentContainer>
  );
}

const ContentContainer = styled.section`
  width: 713px;
  height: 317px;
  position: absolute;
  left: 559px;
  top: 174px;
  border-radius: 8px;
  box-shadow: 1px 1px 15px 0px rgba(0, 0, 0, 0.15);
  padding: 40px;
  background-color: #fff;

  @media (max-width: 991px) {
    position: relative;
    left: 0;
    top: 0;
    width: 100%;
    margin-bottom: 40px;
  }

  @media (max-width: 640px) {
    padding: 20px;
  }
`;

const AddPaymentButton = styled.button`
  width: 100%;
  height: 44px;
  border-radius: 8px;
  background-color: #1c1c1c;
  border: none;
  cursor: pointer;
  color: white;
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 16px;
`;

const Divider = styled.hr`
  width: 100%;
  height: 8px;
  margin: 40px 0;
  background-color: #f4f4f4;
  border: none;
`;

const PaymentCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const CardInfo = styled.p`
  color: #1c1c1c;
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-weight: 500;
  margin: 0;
`;

const DefaultText = styled.p`
  color: #545454;
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-weight: 500;
  margin-top: 24px;
`;

const DeleteButton = styled.button`
  color: #545454;
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
`;