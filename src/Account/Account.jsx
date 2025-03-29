"use client";
import React from "react";
import styled from "styled-components";
import {AccountHeader} from "./AccountHeader";
import { AccountNav } from "./AccountNav";
import { ProfileContent } from "./Profile/ProfileContent";
import { AccountFooter } from "./AccountFooter";

export function AccountPage() {
  return (
    <PageContainer>
      <AccountHeader />
      <MainContent>
        <AccountNav />
        <ProfileContent />
      </MainContent>
      <AccountFooter />
    </PageContainer>
  );}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #fff;
`;

const MainContent = styled.main`
  display: flex;
  gap: 16px;
  padding-left: 40px;
  padding-right: 40px;

  @media (max-width: 991px) {
    padding-left: 20px;
    padding-right: 20px;
    flex-direction: column;
  }

  @media (max-width: 640px) {
    padding-left: 16px;
    padding-right: 16px;
  }
`;
