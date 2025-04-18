"use client";
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export function AccountHeader() {
  return (
    <Header>
      <Link to={"/"}>
        <LogoContainer>
          <img src="/fullSababaLogo.svg" alt="Logo" />
        </LogoContainer>
      </Link>
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
  img{
    @media (max-width: 480px) {
      height: 30px;
      width: 100px;
    }
    @media (max-width: 480px) {
      height: 25px;
      width: 80px;
    }
  }
`;

const PageTitle = styled.h2`
  color: #1c1c1c;
  font-weight: 600;
  font-size: 20px;
  @media (max-width: 480px) {
      font-size: 14px;
    }
  @media (max-width: 240px) {
    font-size: 12px;
  }
`;
