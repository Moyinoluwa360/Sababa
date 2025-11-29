import React from 'react'
import styled from 'styled-components';
import {AccountHeader} from "./AccountHeader";
import { NavigationItems } from "./AccountNav";
import { ProfileContent } from "./Profile/ProfileContent";
import {Contact} from "./Contact/Contact"
import { Settings } from "./Settings/Settings";
import { PaymentMethod } from "./PaymentMethod/PaymentMethod";
import {YourOrder} from "./Password/Password"
import { AccountFooter } from "./AccountFooter";
import { useParams, Link } from 'react-router-dom';

function getComponent(menuLabel) {
  switch (menuLabel) {
    case 'profile':
      return <ProfileContent />;
    case 'contact':
      return <Contact />;
    case 'settings':
      return <Settings />;
    case 'payment method':
      return <PaymentMethod />;
    case 'your order':
      return <YourOrder />;
    default:
      return null;
  }
}


function MobileAccountMenu() {
  const { menuLabel } = useParams();
  return (
    <>
        <AccountHeader/>
        <ProfileHeader>
          <Link to={"/account"} style={{ textDecoration: 'none'}}>
            <div className='backMenu'> <img src="/lessThan.svg" alt="back icon" /> Back </div>
          </Link>
          Hello, Eminokanju
        </ProfileHeader>
        {getComponent(menuLabel)}
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
  display: flex;
  gap: 14px;
  div{
    display: none;
  }
  @media (max-width: 730px) {
    border-radius: 0;
    height: 60px;
    padding: 16px;
    div{
      display: flex;
      align-items: center;
      gap: 3px;
      font-size: 14px;
      color: #fff;
      font-weight: normal;
      img{
        height: 10px;
        width: 6px;
        filter: brightness(0) invert(1);
      }
    }
  }
  @media (max-width: 480px) {
    height: 50px;
    padding: 16px;
    font-size: 16px;
  }
`;

export default MobileAccountMenu
