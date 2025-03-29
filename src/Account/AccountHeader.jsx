"use client";
import React from "react";
import styled from "styled-components";

export function AccountHeader() {
  return (
    <Header>
      <LogoContainer>
        <img src="/fullSababaLogo.svg" alt="Logo" />
      </LogoContainer>
      <PageTitle>Your Profile</PageTitle>
    </Header>
  );
}

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px;

  @media (max-width: 991px) {
    padding: 20px;
  }

  @media (max-width: 640px) {
    padding: 16px;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const PageTitle = styled.h2`
  color: #1c1c1c;
  font-weight: 600;
  font-size: 20px;
`;
