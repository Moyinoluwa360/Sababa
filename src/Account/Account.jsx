"use client";
import React from "react";
import styled from "styled-components";
import {AccountHeader} from "./AccountHeader";
import { NavigationItems } from "./AccountNav";
import { ProfileContent } from "./Profile/ProfileContent";
import {Contact} from "./Contact/Contact"
import { Settings } from "./Settings/Settings";
import { PaymentMethod } from "./PaymentMethod/PaymentMethod";
import {YourOrder} from "./YourOrder/YourOrder"
import { AccountFooter } from "./AccountFooter";
import useWindowWidth from "../useWindowWidth";

export function AccountPage() {
  return (
    <PageContainer>
      <AccountHeader />
      <MainContent>
        <NavigationItems />
        {
          useWindowWidth() > 720 ? (
            <YourOrder/>
          ) : null
        }
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
  justify-content: center;

  @media (max-width: 600px) {
    padding: 0%;
  }
`;
