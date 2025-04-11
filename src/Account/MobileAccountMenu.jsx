import React from 'react'
import styled from 'styled-components';
import {AccountHeader} from "./AccountHeader";
import { NavigationItems } from "./AccountNav";
import { ProfileContent } from "./Profile/ProfileContent";
import {Contact} from "./Contact/Contact"
import { Settings } from "./Settings/Settings";
import { PaymentMethod } from "./PaymentMethod/PaymentMethod";
import {YourOrder} from "./YourOrder/YourOrder"
import { AccountFooter } from "./AccountFooter";

function MobileAccountMenu() {
  return (
    <>
        <AccountHeader/>
        <ProfileHeader>Hello, Eminokanju</ProfileHeader>
        <PaymentMethod/>
        <AccountFooter/>
    </>
  )
}

const ProfileHeader = styled.div`
  width: 100%;
  height: 95px;
  border-radius: 8px 8px 0 0;
  color: #fff;
  font-family: Inter, sans-serif;
  font-size: 20px;
  font-weight: 600;
  padding: 55px 16px 16px;
  background-color: #727272;
  @media (max-width: 730px) {
    border-radius: 0;
    height: 60px;
    padding: 16px;
  }
  @media (max-width: 480px) {
    height: 50px;
    padding: 16px;
    font-size: 16px;
  }
`;

export default MobileAccountMenu
