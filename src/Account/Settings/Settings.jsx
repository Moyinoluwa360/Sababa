"use client";
import React from "react";
import styled from "styled-components";

export const Settings = () => {
  return (
    <FormContainer>
      <FormContent>
        <FormGroup>
          <Label>Region</Label>
          <SelectWrapper>
            <Select defaultValue="Nigeria">
              <option value="Nigeria">Nigeria</option>
            </Select>
          </SelectWrapper>
        </FormGroup>

        <FormGroup>
          <Label>Language</Label>
          <SelectWrapper>
            <Select defaultValue="English (UK)">
              <option value="English (UK)">English (UK)</option>
            </Select>
          </SelectWrapper>
        </FormGroup>

        <FormGroup>
          <Label>Currency</Label>
          <SelectWrapper>
            <Select defaultValue="USD">
              <option value="USD">$ US Dollar (USD)</option>
            </Select>
          </SelectWrapper>
        </FormGroup>

        <SaveButton>Save settings</SaveButton>
      </FormContent>
    </FormContainer>
  );
};

const FormContainer = styled.section`
  width: 713px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 1px 1px 15px 0px rgba(0, 0, 0, 0.15);
  padding: 40px;

  @media (max-width: 991px) {
    width: 100%;
  }

  @media (max-width: 640px) {
    padding: 20px;
  }
  @media (max-width: 730px){
    width: 100%;
  }
  @media (max-width: 480px){
    padding:16px;
  }
`;

const FormContent = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 370px;
  @media (max-width: 430px){
    width: 100%;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Label = styled.label`
  color: #545454;
  font-size: 14px;
  @media (max-width: 480px){
    font-size: 12px;
  }
`;

const SelectWrapper = styled.div`
  position: relative;
`;

const Select = styled.select`
  width: 100%;
  height: 44px;
  padding-left: 12px;
  padding-right: 12px;
  color: #1c1c1c;
  font-size: 16px;
  font-weight: 500;
  border-radius: 4px;
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.1);
  background-color: transparent;
  appearance: none;

  &:focus {
    outline: none;
    border-color: #1c1c1c;
  }
  @media (max-width: 480px){
    font-size: 14px;
  }
`;

const SaveButton = styled.button`
  width: 100%;
  height: 44px;
  background-color: #1c1c1c;
  color: #fff;
  font-size: 16px;
  border-radius: 8px;
  margin-top: 16px;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
  @media (max-width: 480px){
    font-size: 14px;
  }
`;
