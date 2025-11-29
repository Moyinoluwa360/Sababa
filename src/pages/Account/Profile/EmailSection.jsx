"use client";
import React from "react";
import styled from "styled-components";

export function EmailSection() {
  return (
    <>
      <ProfileHeader>
        <div className="profileHeaderTitle">
          Profile
        </div>
        <div className="profileHeaderDes">
          Profile information will be displayed on your dashboard
        </div>
      </ProfileHeader>
      <ChangeEmailSection>
        <Form>
          <FormGroup>
            <Label>Username</Label>
            <Input type="name" />
          </FormGroup>
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
          <SubmitButton>Save</SubmitButton>
        </Form>
      </ChangeEmailSection>
    </>
  );
}

const ProfileHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  .profileHeaderTitle{
    font-family: Inter;
    font-weight: 550;
    font-size: 32px;
    @media(max-width:480px){
      font-size: 20px;
    }
  }
  .profileHeaderDes{
    color: #787C7F;
    font-size: 16px;
    font-weight: 500;
    @media(max-width:480px){
      font-size: 14px;
    }
  }
`;

const ChangeEmailSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  color: #545454;
  font-size: 14px;
  @media (max-width: 480px){
    font-size: 12px;
  }
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
  font-size: 14px;
  border: none;
  cursor: pointer;

  @media (max-width: 780px) {
    width: 100%;
  }
  @media (max-width: 480px){
    font-size: 14px;
  }
`;