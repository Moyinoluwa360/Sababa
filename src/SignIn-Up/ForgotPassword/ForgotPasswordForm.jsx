"use client";
import React from "react";
import styled from "styled-components";

const ForgotPasswordForm = () => {
  return (
    <FormSection>
      <FormContainer>
        <IconWrapper>
          <LockIcon src="https://cdn.builder.io/api/v1/image/assets/001f261659df40119f6cb1a32a4e0f9f/1708f2cfbcaee4bcde10769edbb4817fbfe7b94b?placeholderIfAbsent=true" alt="Lock icon" />
        </IconWrapper>
        <FormHeader>
          <Title>Forgot Password</Title>
          <Subtitle>Enter your email for instructions</Subtitle>
        </FormHeader>
      </FormContainer>
      <FormGroup>
        <Label>Enter your email</Label>
        <Input type="email" />
      </FormGroup>
      <SubmitButton>Send code</SubmitButton>
    </FormSection>
  );
};

const FormSection = styled.section`
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 1);
  align-self: center;
  display: flex;
  margin-top: 60px;
  width: 514px;
  max-width: 100%;
  padding: 40px 32px;
  flex-direction: column;
  align-items: stretch;
  @media (max-width: 991px) {
    padding: 40px 20px;
    margin-top: 40px;
  }
`;

const FormContainer = styled.div`
  align-self: center;
  display: flex;
  width: 184px;
  max-width: 100%;
  flex-direction: column;
  align-items: stretch;
`;

const IconWrapper = styled.div`
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  align-self: center;
  display: flex;
  min-height: 40px;
  width: 40px;
  padding: 11px;
  align-items: center;
  justify-content: center;
`;

const LockIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 18px;
`;

const FormHeader = styled.div`
  margin-top: 8px;
  width: 100%;
  font-family:
    Inter,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-weight: 500;
`;

const Title = styled.h1`
  color: rgba(28, 28, 28, 1);
  font-size: 16px;
  text-align: center;
  margin: 0;
  @media (max-width: 500px){
    font-size: 14px;
  }
`;

const Subtitle = styled.p`
  color: rgba(114, 114, 114, 1);
  font-size: 12px;
  margin: 4px 0 0;
`;

const FormGroup = styled.div`
  margin-top: 60px;
  font-family:
    Inter,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 14px;
  color: rgba(28, 28, 28, 1);
  font-weight: 500;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
  @media (max-width: 500px){
    font-size: 14px;
    margin-top: 16px;
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  @media (max-width: 500px){
    font-size: 12px;
  }
`;

const Input = styled.input`
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  min-height: 48px;
  width: 100%;
  padding: 8px 12px;
  @media (max-width: 500px){
    min-height: 44px;
  }
`;

const SubmitButton = styled.button`
  border-radius: 4px;
  background-color: rgba(28, 28, 28, 1);
  margin-top: 20px;
  min-height: 48px;
  padding: 15px;
  font-family:
    Inter,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 16px;
  color: rgba(255, 255, 255, 1);
  font-weight: 500;
  border: none;
  cursor: pointer;
  width: 100%;
  &:hover {
    opacity: 0.9;
  }
  @media (max-width: 991px) {
    padding: 15px 20px;
  }
  @media (max-width: 500px){
    font-size: 14px;
  }
`;

export default ForgotPasswordForm;
