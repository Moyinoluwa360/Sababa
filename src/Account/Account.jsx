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
import { Outlet } from "react-router-dom";
import { useState } from "react";

export function AccountPage() {
  const [currentNav, setCurrentNav] = useState("Profile")
  return (
    <PageContainer>
      <AccountHeader currentNav ={currentNav} />
      <MainContent>
        <NavigationItems currentNav ={currentNav} setCurrentNav ={setCurrentNav} />
        {
          useWindowWidth() > 720 ? (
            <Outlet/>
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
