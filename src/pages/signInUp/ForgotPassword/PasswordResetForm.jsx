"use client";
import React from "react";
import styled from "styled-components";

export const PasswordResetForm = () => {
  return (
    <FormSection>
      <FormContainer>
        <FormHeader>
          <IconWrapper
            dangerouslySetInnerHTML={{
              __html:
                '<svg id="6737:3254" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[40px] h-[40px]"> <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="black" stroke-opacity="0.2"></rect> <path d="M26 16.6667H28C28.2652 16.6667 28.5196 16.767 28.7071 16.9456C28.8946 17.1242 29 17.3665 29 17.619V29.0476C29 29.3002 28.8946 29.5424 28.7071 29.7211C28.5196 29.8997 28.2652 30 28 30H12C11.7348 30 11.4804 29.8997 11.2929 29.7211C11.1054 29.5424 11 29.3002 11 29.0476V17.619C11 17.3665 11.1054 17.1242 11.2929 16.9456C11.4804 16.767 11.7348 16.6667 12 16.6667H14V15.7143C14 14.1988 14.6321 12.7453 15.7574 11.6737C16.8826 10.602 18.4087 10 20 10C21.5913 10 23.1174 10.602 24.2426 11.6737C25.3679 12.7453 26 14.1988 26 15.7143V16.6667ZM13 18.5714V28.0952H27V18.5714H13ZM19 22.381H21V24.2857H19V22.381ZM15 22.381H17V24.2857H15V22.381ZM23 22.381H25V24.2857H23V22.381ZM24 16.6667V15.7143C24 14.7039 23.5786 13.735 22.8284 13.0205C22.0783 12.3061 21.0609 11.9048 20 11.9048C18.9391 11.9048 17.9217 12.3061 17.1716 13.0205C16.4214 13.735 16 14.7039 16 15.7143V16.6667H24Z" fill="#1C1C1C"></path> </svg>',
            }}
          />
          <FormHeaderText>
            <FormTitle>Set new password</FormTitle>
            <FormSubtitle>Must be 10 or more characters</FormSubtitle>
          </FormHeaderText>
        </FormHeader>

        <FormFields>
          <FormGroup>
            <Label htmlFor="password">Password</Label>
            <Input type="password" id="password" />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="confirmPassword">Confirm new password</Label>
            <Input type="password" id="confirmPassword" />
          </FormGroup>

          <SubmitButton type="submit">Set new passsword</SubmitButton>
        </FormFields>
      </FormContainer>
    </FormSection>
  );
};

const FormSection = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
  padding-bottom: 100px;
  @media (max-width: 500%){
    padding-top: 0px;
    padding-bottom: 50px;
  }
`;

const FormContainer = styled.form`
  width: 514px;
  background-color: #fff;
  border-radius: 8px;
  padding: 40px;
  @media (max-width: 500px){
    width: 100%;
    padding: 16px;
  }
`;

const FormHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-bottom: 40px;
  @media (max-width: 500px){
    margin-bottom: 10px;
  }
`;

const IconWrapper = styled.div``;

const FormHeaderText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

const FormTitle = styled.h2`
  color: #1c1c1c;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  margin: 0;
  @media (max-width: 500px){
    font-size: 14px;
  }
`;

const FormSubtitle = styled.p`
  color: #727272;
  font-size: 12px;
  font-weight: 500;
  margin: 0;
  @media (max-width: 500px){
    font-size: 10px;
  }
`;

const FormFields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (max-width: 500px){
    gap:8px ;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  @media (max-width: 500px){
    gap: 4px;
  }
`;

const Label = styled.label`
  color: #1c1c1c;
  font-size: 14px;
  font-weight: 500;
  @media (max-width: 500px){
    font-size: 12px;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 48px;
  border-radius: 4px;
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.2);
  padding-left: 12px;
  padding-right: 12px;
  @media (max-width: 500px){
    height: 40px;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  height: 51px;
  background-color: #1c1c1c;
  border-radius: 4px;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  margin-top: 24px;
  border: none;
  cursor: pointer;
  @media (max-width: 500px){
    margin-top: 10px;
    font-size: 14px;
    height: 40px;
  }
`;
