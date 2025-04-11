"use client";
import React from "react";
import styled from "styled-components";

export function PaymentMethod() {
  return (
    <ContentContainer>
      <AddPaymentButton>
        <img src="/cardIcon.svg" alt="" />
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
        <DeleteButton><div className="deleteText">Delete</div><img src="/trash.svg" alt="" /></DeleteButton>
      </PaymentCardContainer>
    </ContentContainer>
  );
}

const ContentContainer = styled.section`
  width: 713px;
  height: 317px;
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
  @media (max-width: 730px){
    width: 100%;
  }
  @media (max-width: 640px) {
    padding: 20px;
  }
`;

const AddPaymentButton = styled.button`
  width: 370px;
  height: 44px;
  display: flex;
  justify-content: center;
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
  img {
    filter: brightness(0) invert(1);
  }
  @media (max-width: 480px){
    width: 100%;
    font-size: 12px;
  }
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
  @media (max-width: 480px){
    font-size: 12px;
  }
`;

const DefaultText = styled.p`
  color: #545454;
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-weight: 500;
  margin-top: 24px;
  @media (max-width: 480px){
    font-size: 12px;
  }
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
  display: flex;
  align-items: center;
  gap: 8px;
  .deleteText{
    @media (max-width: 480px){
    display: none;
  }
  }
  @media (max-width: 480px){
    font-size: 12px;
  }
`;