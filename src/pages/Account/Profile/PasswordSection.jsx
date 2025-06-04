"use client";
import React from "react";
import styled from "styled-components";

export function PasswordSection() {
  return (
    <Section>
      <SectionTitle>Password</SectionTitle>
      <Form>
        <FormGroup>
          <Label>Current password</Label>
          <Input type="password" />
        </FormGroup>
        <FormGroup>
          <Label>New password</Label>
          <PasswordInputWrapper>
            <Input type="password" />
            <ShowButton>Show</ShowButton>
          </PasswordInputWrapper>
        </FormGroup>
        <FormGroup>
          <Label>Confirm new password</Label>
          <PasswordInputWrapper>
            <Input type="password" />
            <ShowButton>Show</ShowButton>
          </PasswordInputWrapper>
        </FormGroup>
        <SubmitButton>Change password</SubmitButton>
      </Form>
    </Section>
  );
}

const Section = styled.div`
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

const Label = styled.label`
  color: #545454;
  font-size: 14px;
`;

const Input = styled.input`
  width: 370px;
  height: 44px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0 12px;

  @media (max-width: 780px) {
    width: 100%;
  }
`;

const PasswordInputWrapper = styled.div`
  position: relative;
  width: 370px;

  @media (max-width: 780px) {
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

const SubmitButton = styled.button`
  width: 370px;
  height: 44px;
  background-color: #1c1c1c;
  color: #fff;
  border-radius: 8px;
  font-size: 16px;
  border: none;
  cursor: pointer;

  @media (max-width: 780px) {
    width: 100%;
  }
  @media (max-width: 480px){
    font-size: 14px;
  }
`;
