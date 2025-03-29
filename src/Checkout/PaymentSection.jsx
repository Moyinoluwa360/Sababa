"use client";
import React from "react";
import styled from "styled-components";

const PaymentSection = () => {
  return (
    <PaymentSectionContainer>
      <CardInfoBox>
        <SectionTitle>Card Information</SectionTitle>
        <CardInput placeholder="Card Number"/>
        <CardRow>
          <ExpiryContainer>
            <InputLabel className="inputLabel">Expiry Date</InputLabel>
            <ExpiryInput placeholder="Expiry Date" />
          </ExpiryContainer>
          <CvvInputContainer>
            <InputLabel className="inputLabel">CVV</InputLabel>
            <CvvInput placeholder="CVV Number"/>
            <InfoIconWrapper>
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    d="M8 12C8.22666 12 8.4168 11.9232 8.5704 11.7696C8.724 11.616 8.80053 11.4261 8.8 11.2V8C8.8 7.77333 8.7232 7.58346 8.5696 7.4304C8.416 7.27733 8.22613 7.20053 8 7.2C7.77386 7.19946 7.584 7.27626 7.4304 7.4304C7.2768 7.58453 7.2 7.7744 7.2 8V11.2C7.2 11.4267 7.2768 11.6168 7.4304 11.7704C7.584 11.924 7.77386 12.0005 8 12ZM8 5.6C8.22666 5.6 8.4168 5.5232 8.5704 5.3696C8.724 5.216 8.80053 5.02613 8.8 4.8C8.79946 4.57387 8.72266 4.384 8.5696 4.2304C8.41653 4.0768 8.22666 4 8 4C7.77333 4 7.58346 4.0768 7.4304 4.2304C7.27733 4.384 7.20053 4.57387 7.2 4.8C7.19946 5.02613 7.27626 5.21627 7.4304 5.3704C7.58453 5.52453 7.7744 5.60107 8 5.6ZM8 16C6.89333 16 5.85333 15.7899 4.88 15.3696C3.90667 14.9493 3.06 14.3795 2.34 13.66C1.62 12.9405 1.05013 12.0939 0.630401 11.12C0.210668 10.1461 0.000534346 9.10613 1.01266e-06 8C-0.00053232 6.89386 0.209601 5.85387 0.630401 4.88C1.0512 3.90613 1.62107 3.05947 2.34 2.34C3.05893 1.62053 3.9056 1.05067 4.88 0.6304C5.8544 0.210133 6.8944 0 8 0C9.10559 0 10.1456 0.210133 11.12 0.6304C12.0944 1.05067 12.9411 1.62053 13.66 2.34C14.3789 3.05947 14.9491 3.90613 15.3704 4.88C15.7917 5.85387 16.0016 6.89386 16 8C15.9984 9.10613 15.7883 10.1461 15.3696 11.12C14.9509 12.0939 14.3811 12.9405 13.66 13.66C12.9389 14.3795 12.0923 14.9496 11.12 15.3704C10.1477 15.7912 9.10773 16.0011 8 16ZM8 14.4C9.78666 14.4 11.3 13.78 12.54 12.54C13.78 11.3 14.4 9.78666 14.4 8C14.4 6.21333 13.78 4.7 12.54 3.46C11.3 2.22 9.78666 1.6 8 1.6C6.21333 1.6 4.7 2.22 3.46 3.46C2.22 4.7 1.6 6.21333 1.6 8C1.6 9.78666 2.22 11.3 3.46 12.54C4.7 13.78 6.21333 14.4 8 14.4Z"
                    fill="#545454"
                    />
                </svg>
            </InfoIconWrapper>
          </CvvInputContainer>
        </CardRow>
        <CardholderName>
          <InputLabel>Cardholder name</InputLabel>
          <InputField placeholder="Eminokanju Oghenevwegba"/>
        </CardholderName>
        <DiscountCode>
          <InputLabel>Discount code</InputLabel>
          <InputField placeholder="DF13DFgRd" />
        </DiscountCode>
      </CardInfoBox>
      <PriceSummary>
        <SummaryRow>
          <SummaryLabel>Price:</SummaryLabel>
          <SummaryValue>$105.12</SummaryValue>
        </SummaryRow>
        <SummaryRow>
          <SummaryLabel>Shipping:</SummaryLabel>
          <SummaryValue>$5.12</SummaryValue>
        </SummaryRow>
        <SummaryRow>
          <SummaryLabel>Discount:</SummaryLabel>
          <SummaryValue>-$0.00</SummaryValue>
        </SummaryRow>
        <SummaryRowTotal>
          <SummaryLabel>Total:</SummaryLabel>
          <SummaryValue>$110.12</SummaryValue>
        </SummaryRowTotal>
      </PriceSummary>
    </PaymentSectionContainer>
  );
};

const PaymentSectionContainer = styled.section`
  width: 540px;
  @media (max-width: 991px) {
    width: 100%;
  }
  @media (max-width: 640px) {
    padding: 15px;
  }
`;

const CardInfoBox = styled.div`
  border-radius: 8px;
  padding: 20px;
  box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.15);
  background-color: #fff;
`;

const SectionTitle = styled.h2`
  font-size: 16px;
  font-weight: 600;
  color: #000;
  margin-bottom: 20px;
`;

const CardInput = styled.input`
  height: 48px;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  margin-bottom: 8px;
  padding: 0 16px;
`;

const CardRow = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 20px;
  .inputLabel{
    display: none;
  }
  @media (max-width: 630px){
    background-color: aqua;
    height: 65px;
  }
`;

const ExpiryContainer = styled.div`
  width: 50%;
  background-color: aquamarine;
  display: flex;
  flex-direction: column;
  gap: 0px;
  @media (max-width: 630px){
    .inputLabel{
      display: block;
      font-size: 12px;
      background-color: beige;
      margin: 0;
    }
  }
`

const ExpiryInput = styled.input`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 0 16px;
  width: 100%;
  height: 48px;
  @media (max-width: 630px){
    height: 95%;
  }
`;

const CvvInputContainer = styled.div`
  width: 50%;
  position: relative;
  display: flex;
  flex-direction: column;
  @media (max-width: 630px){
    .inputLabel{
      display: block;
      font-size: 12px;
      background-color: beige;
      margin: 0;
    }
  }
`;

const CvvInput = styled.input`
  height: 48px;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 0 16px;
  @media (max-width: 630px){
    height: 95%;
  }
  @media (max-width: 480px){
    ::placeholder{
      display: none;
      color: aqua;
    }
  }
`;

const InfoIconWrapper = styled.span`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  @media (max-width: 630px){
    top: 65%;
  }
`;

const CardholderName = styled.div`
  margin-bottom: 20px;
`;

const InputLabel = styled.label`
  display: block;
  color: #545454;
  font-size: 16px;
  margin-bottom: 8px;
`;

const InputField = styled.input`
  width: 100%;
  padding: 14.5px 16px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  font-size: 16px;
`;

const DiscountCode = styled.div`
  margin-bottom: 20px;
`;

const PriceSummary = styled.div`
  border-radius: 8px;
  padding: 20px;
  box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.15);
  margin-top: 20px;
  background-color: #fff;
  @media (max-width: 630px){
    display: none;
  }
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
  font-size: 16px;
`;

const SummaryRowTotal = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
  font-size: 16px;
  font-weight: 600;
`;

const SummaryLabel = styled.span`
  color: #545454;
`;

const SummaryValue = styled.span`
  color: #000;
`;

export default PaymentSection;
