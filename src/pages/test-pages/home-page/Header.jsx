import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import useWindowWidth from './useWindowWidth';

const BannerContainer = styled.div`
  display: flex;
  width: 100%;
  height: 54px;
  justify-content: center;
  align-items: center;
  background: #1C1C1C;
  @media (max-width: 480px) {
    height: 44px;
  }
`;


const BannerText = styled.div`
  color: #FFFFFF;
  font-family: 'SF Pro Rounded', -apple-system, BlinkMacSystemFont, Roboto, Helvetica, sans-serif;
  font-size: 13px;
  font-weight: normal;
  @media (max-width: 480px) {
    font-size: 11px;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  max-width: 1360px;
  height: 44px;
  padding: 12.5 0 12.5px 0;
  margin: 0 auto;
  margin: 15px 16.5px;
  justify-content: space-between;
  align-items: center;

  .hamburger{
    font-size: 30px;
    @media (max-width: 480px) {
      font-size: 24px;
    }
  }
`;

const LeftNav = styled.div`
  display: none;
  align-items: center;
  gap: 32px;
  display: flex;
`;


const NavItem = styled.div`
  color: #787C7F;
  font-family: 'SF Pro Rounded', -apple-system, BlinkMacSystemFont, Roboto, Helvetica, sans-serif;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #1C1C1C;
  }
`;

const Logo = styled.div`
  @media (max-width: 480px) {
    img{
      height: 33px;
      width: 75px;
    }
  }
`;

const RightActions = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  @media (min-width: 768px) {
    gap: 32px;
  }
`;

const ActionItem = styled.div`
  display: flex;
  align-items: center;
  color: #787C7F;
  font-family: 'SF Pro Rounded', -apple-system, BlinkMacSystemFont, Roboto, Helvetica, sans-serif;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #1C1C1C;
  }

  svg {
    width: 20px;
    height: 20px;
    stroke: currentColor;
  }
  span{
    @media (max-width: 900px) {
      display: none;
    }
  }
`;

function Header() {
  return (
    <>
      <BannerContainer>
        <BannerText>IT'S NEVER TOO LATE TO UPGRADE YOUR STYLE!</BannerText>
      </BannerContainer>
      <HeaderContainer>
        {
          useWindowWidth() > 768
          ?
          <LeftNav>
            <NavItem className="active">MEN</NavItem>
            <NavItem>WOMEN</NavItem>
            <NavItem>INSPIRATIONS</NavItem>
          </LeftNav>
          : 
          <FontAwesomeIcon icon={faBars} className='hamburger'/>
        }

        <Logo>
          <img src="/Sababa.svg" alt="sababa logo" />
        </Logo>

        <RightActions>
          <ActionItem>
            <svg viewBox="0 0 28 28" fill="none">
              <path d="M7.22209 20.2222C10.6585 20.2222 13.4442 17.0384 13.4442 13.1111C13.4442 9.18374 10.6585 6 7.22209 6C3.78572 6 1 9.18374 1 13.1111C1 17.0384 3.78572 20.2222 7.22209 20.2222Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M15.0004 22L11.6172 18.1333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="action-text">SEARCH</span>
          </ActionItem>

          <ActionItem>
            <svg viewBox="0 0 28 28" fill="none">
              <path d="M15 21.9998V20.2221C15 19.2791 14.631 18.3747 13.975 17.7079C13.318 17.0411 12.428 16.6665 11.5 16.6665H4.5C3.572 16.6665 2.682 17.0411 2.025 17.7079C1.369 18.3747 1 19.2791 1 20.2221V21.9998" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 13.1111C9.933 13.1111 11.5 11.5192 11.5 9.55556C11.5 7.59188 9.933 6 8 6C6.067 6 4.5 7.59188 4.5 9.55556C4.5 11.5192 6.067 13.1111 8 13.1111Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="action-text">USER LOGIN</span>
          </ActionItem>

          <ActionItem>
            <svg viewBox="0 0 28 28" fill="none">
              <path d="M17.612 7.41452C17.172 6.96607 16.65 6.61034 16.075 6.36763C15.5 6.12492 14.884 6 14.262 6C13.64 6 13.024 6.12492 12.449 6.36763C11.875 6.61034 11.352 6.96607 10.913 7.41452L10 8.34476L9.087 7.41452C8.199 6.50912 6.994 6.00047 5.737 6.00047C4.481 6.00047 3.276 6.50912 2.388 7.41452C1.499 8.31992 1 9.5479 1 10.8283C1 12.1088 1.499 13.3367 2.388 14.2421L3.3 15.1724L10 22L16.699 15.1724L17.612 14.2421C18.052 13.7939 18.401 13.2617 18.639 12.676C18.877 12.0902 19 11.4624 19 10.8283C19 10.1943 18.877 9.56645 18.639 8.9807C18.401 8.39494 18.052 7.86275 17.612 7.41452Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="action-text">WISHLIST</span>
          </ActionItem>
        </RightActions>
      </HeaderContainer>
    </>
  );
}

export default Header;
