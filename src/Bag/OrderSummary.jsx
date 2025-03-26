"use client";
import React from "react";
import styled from "styled-components";

const OrderSummary = () => {
  return (
    <OrderSummaryContainer>
      <SummaryRow>
        <span>Sub Total:</span>
        <Amount>$104.99</Amount>
      </SummaryRow>
      <SummaryRow>
        <span>Delivery:</span>
        <div>null</div>
      </SummaryRow>
      <hr />
      <CheckoutBtn>Proceed to checkout (3 items)</CheckoutBtn>
      <PaymentInfo>
        <PaymentLabel>We Accept:</PaymentLabel>
        <PaymentMethods>
          <div className="paymentMethod">
            <img src="/paymentsIcons/applepayIcon.svg" alt="apple pay" className="applePay" />
          </div>
          <div className="paymentMethod">
            <img src="/paymentsIcons/mastercardIcon.svg" alt="master card" className="masterCard" />
          </div>
          <div className="paymentMethod">
            <img src="/paymentsIcons/visaIcon.svg" alt="Visa card" className="visaCard"/>
          </div>
          <div className="paymentMethod">
            <img src="/paymentsIcons/paypalIcon.svg" alt="pay pal" className="paypal"/>
          </div>
        </PaymentMethods>
        <DiscountText>
          Got a discount code? Add it in the next step
        </DiscountText>
      </PaymentInfo>
    </OrderSummaryContainer>
  );
};

const OrderSummaryContainer = styled.aside`
  width: 415px;
  height: fit-content;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 20px;
  font-family: Inter, sans-serif;
  @media (max-width: 620px){
    width: 343px;
  }
  @media (max-width: 370px){
    width: 260px;
  }
  @media (max-width: 280px){
    width: 220px;
  }
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  font-size: 16px;
  span{
    font-weight:600;
  }
  @media (max-width: 620px){
    font-size: 12px;
  }
`;

const Amount = styled.span`
  color: #000;
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-weight: 600;
  @media (max-width: 620px){
    font-size: 12px;
  }
`;

const CheckoutBtn = styled.button`
  width: 100%;
  padding: 12px;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin: 24px 0;
  background-color: #4caf50;
  @media (max-width: 620px){
    font-size: 12px;
  }
`;

const PaymentInfo = styled.div`
  margin-top: 0px;
`;

const PaymentLabel = styled.div`
  color: #545454;
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 12px;
  @media (max-width: 620px){
    font-size: 12px;
  }
`;

const PaymentMethods = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  div{
    .applePay{
      width: 35px;
      height: 16px;
    }
    .masterCard{
      width: 20px;
      height: 16px;
    }
    .visaCard{
      width: 32px;
      height: 16px;
    }
    .paypal{
      width: 14px;
      height: 16px;
    }
  }
`;

const DiscountText = styled.p`
  color: #545454;
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-weight: 600;
  @media (max-width: 620px){
    font-size: 12px;
  }
`;

export default OrderSummary;
