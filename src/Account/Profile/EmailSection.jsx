"use client";
import React from "react";
import styled from "styled-components";

export function EmailSection() {
  return (
    <>
      <Section>
        <SectionTitle>Email</SectionTitle>
        <EmailInfo>
          <Label>Current email</Label>
          <Value>vwegbaeminokanju@gmail.com</Value>
        </EmailInfo>
        <StatusInfo>
          <Label>Status</Label>
          <Value>Unconfirmed</Value>
        </StatusInfo>
        <ResendButton>Resend confirmation email</ResendButton>
      </Section>

      <ChangeEmailSection>
        <SectionTitle>Change email</SectionTitle>
        <Form>
          <FormGroup>
            <Label>New email</Label>
            <Input type="email" />
          </FormGroup>
          <FormGroup>
            <Label>Confirm new email</Label>
            <Input type="email" />
          </FormGroup>
          <FormGroup>
            <Label>Your Sababa password</Label>
            <PasswordInputWrapper>
              <Input type="password" />
              <ShowButton>Show</ShowButton>
            </PasswordInputWrapper>
          </FormGroup>
          <SubmitButton>Change email</SubmitButton>
          <HelpText>
            Your email address will not change until you confirm it via email.
          </HelpText>
        </Form>
      </ChangeEmailSection>
    </>
  );
}

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ChangeEmailSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-top: 24px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h3`
  color: #545454;
  font-size: 16px;
`;

const EmailInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const StatusInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Label = styled.label`
  color: #545454;
  font-size: 14px;
`;

const Value = styled.p`
  color: #1c1c1c;
  font-size: 16px;
  margin: 0;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Input = styled.input`
  width: 370px;
  height: 44px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0 12px;

  @media (max-width: 640px) {
    width: 100%;
  }
`;

const PasswordInputWrapper = styled.div`
  position: relative;
  width: 370px;

  @media (max-width: 640px) {
    width: 100%;
  }
`;

const ShowButton = styled.button`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: #545454;
  font-size: 12px;
  text-decoration: underline;
  background: none;
  border: none;
  cursor: pointer;
`;

const ResendButton = styled.button`
  width: 370px;
  height: 40px;
  border: 1px solid #1c1c1c;
  border-radius: 8px;
  color: #1c1c1c;
  font-size: 16px;
  background: none;
  cursor: pointer;

  @media (max-width: 640px) {
    width: 100%;
  }
`;

const SubmitButton = styled.button`
  width: 370px;
  height: 44px;
  background-color: #1c1c1c;
  color: #fff;
  border-radius: 8px;
  font-size: 16px;
  border: none;
  cursor: pointer;

  @media (max-width: 640px) {
    width: 100%;
  }
`;

const HelpText = styled.p`
  color: #545454;
  font-size: 12px;
  margin: 0;
`;
