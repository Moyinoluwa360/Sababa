"use client";
import React from "react";
import styled from "styled-components";
import { EmailSection } from "./EmailSection";

export function ProfileContent() {
  return (
    <ContentContainer>
      <ContentWrapper>
        <EmailSection />
      </ContentWrapper>
    </ContentContainer>
  );
}

const ContentContainer = styled.section`
  background-color: #fff;
  width: 713px;
  border: 0cqh;
  border-radius: 8px;
  box-shadow: 1px 1px 15px 0px rgba(0, 0, 0, 0.15);
  padding: 32px;
  @media (max-width: 730px){
    width: 100%;
  }
  @media (max-width: 480px){
    padding: 16px;
  }
  @media (max-width: 300px){
    font-size: 6px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
