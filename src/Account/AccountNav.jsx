"use client";
import React from "react";
import styled from "styled-components";

export function AccountNav() {
  return (
    <Sidebar>
      <ProfileBanner />
      <UserName>Hello, Eminokanju</UserName>
      <CurrentSection>
        <SectionItem>
          <ProfileIcon />
          <span>Profile</span>
        </SectionItem>
      </CurrentSection>
      <NavList>
        <NavItem>
          <OrdersIcon />
          <span>Your orders</span>
        </NavItem>
        <NavItem>
          <PaymentIcon />
          <span>Payment method</span>
        </NavItem>
        <NavItem>
          <ContactIcon />
          <span>Contact</span>
        </NavItem>
        <NavItem>
          <HelpIcon />
          <span>Need help?</span>
        </NavItem>
        <NavItem>
          <SettingsIcon />
          <span>Account settings</span>
        </NavItem>
        <NavItem>
          <SignOutIcon />
          <span>Sign out</span>
        </NavItem>
      </NavList>
    </Sidebar>
  );
}

const Sidebar = styled.nav`
  width: 375px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 1px 1px 15px 0px rgba(0, 0, 0, 0.15);
`;

const ProfileBanner = styled.div`
  height: 95px;
  background-color: #727272;
  border-radius: 8px 8px 0px 0px;
`;

const UserName = styled.h3`
  color: #fff;
  font-weight: 600;
  font-size: 20px;
  padding: 0 16px;
  margin-top: -40px;
`;

const CurrentSection = styled.div`
  background-color: #f5f5f5;
  border-width: 4px;
  border-color: #1c1c1c;
  padding: 12px 0;
  margin-top: 40px;
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SectionItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 16px;
  font-size: 14px;
  color: #1c1c1c;
`;

const NavItem = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px;
  font-size: 14px;
  color: #1c1c1c;
  cursor: pointer;
`;

// Icons components would be here with their respective SVGs
const ProfileIcon = styled.div`
  /* SVG content */
`;

const OrdersIcon = styled.div`
  /* SVG content */
`;

const PaymentIcon = styled.div`
  /* SVG content */
`;

const ContactIcon = styled.div`
  /* SVG content */
`;

const HelpIcon = styled.div`
  /* SVG content */
`;

const SettingsIcon = styled.div`
  /* SVG content */
`;

const SignOutIcon = styled.div`
  /* SVG content */
`;
