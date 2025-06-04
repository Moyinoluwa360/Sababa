import React from "react";
import styled from "styled-components";

function CheckoutSteps() {
  return (
    <StepsContainer>
      <StepActive>
        <StepNumberActive>1</StepNumberActive>
        <StepText>Personal Details</StepText>
      </StepActive>
      <StepDivider />
      <Step>
        <StepNumber>2</StepNumber>
        <StepText>Payment Details</StepText>
      </Step>
      <StepDivider />
      <Step>
        <StepNumber>3</StepNumber>
        <StepText>Complete</StepText>
      </Step>
    </StepsContainer>
  );
}

const StepsContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin: 40px 0;
`;

const Step = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const StepActive = styled(Step)``;

const StepNumber = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  color: #545454;
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StepNumberActive = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 20px;
  border: none;
  color: #fff;
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-weight: 600;
  background-color: #146eb4;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StepText = styled.div`
  color: #000;
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-weight: 500;
`;

const StepDivider = styled.div`
  width: 72px;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.1);
`;

export default CheckoutSteps;
