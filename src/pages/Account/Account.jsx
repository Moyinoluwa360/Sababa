"use client";
import styled from "styled-components";
import {AccountHeader} from "./AccountHeader";
import { NavigationItems } from "./AccountNav";
import { AccountFooter } from "./AccountFooter";
import useWindowWidth from "../../components/useWindowWidth";
import { Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export function AccountPage() {
  const [currentNav, setCurrentNav] = useState("Profile")
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <PageContainer>
      <AccountHeader currentNav ={currentNav} />
      <MainContent>
        <NavigationItems currentNav ={currentNav} setCurrentNav ={setCurrentNav} />
        <Outlet/>
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

  @media (max-width: 800px) {
    padding-left: 20px;
    padding-right: 20px;
    flex-direction: column;
  }
`;
