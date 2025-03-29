"use client";
import React from "react";
import styled from "styled-components";
import { EmailSection } from "./EmailSEction";
import { PasswordSection } from "./PasswordSection";

export function ProfileContent() {
  return (
    <ContentContainer>
      <ContentWrapper>
        <EmailSection />
        <PasswordSection />
      </ContentWrapper>
    </ContentContainer>
  );
}

const ContentContainer = styled.section`
  flex: 1;
  background-color: #fff;
  border: 0cqh;
  border-radius: 8px;
  box-shadow: 1px 1px 15px 0px rgba(0, 0, 0, 0.15);
  padding: 32px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
