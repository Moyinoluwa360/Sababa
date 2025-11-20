import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import useWindowWidth from '../useWindowWidth';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SlideInMenu from './SlideInMenu';
import {SearchModal} from './SearchModal';

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: fit-content;
  z-index: 10000000;
  background-color: #D9D9D9;
`

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
  const user = useSelector((state) => state.auth.user);
  const windowWidth = useWindowWidth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <Container>
      { isMenuOpen && <SlideInMenu open={isMenuOpen} onClose={toggleMenu} /> }
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
          <FontAwesomeIcon icon={faBars} className='hamburger' onClick={toggleMenu} />
        }

        <Logo>
          <Link to= "/" ><img src="/Sababa.svg" alt="sababa logo"/></Link>
        </Logo>

        <RightActions>
          <ActionItem onClick={() => setIsSearchOpen(true)}>
            <svg viewBox="0 0 28 28" fill="none">
              <path d="M7.22209 20.2222C10.6585 20.2222 13.4442 17.0384 13.4442 13.1111C13.4442 9.18374 10.6585 6 7.22209 6C3.78572 6 1 9.18374 1 13.1111C1 17.0384 3.78572 20.2222 7.22209 20.2222Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M15.0004 22L11.6172 18.1333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="action-text">SEARCH</span>
          </ActionItem>

          <Link to={"/account"} style={{textDecoration:"none"}}>
            <ActionItem style={{gap:"5px"}}>
              {
                user?.photoURL == "default_profile_picture_url"
                  ?
                <img src= "/account.svg" alt="account icon" className='userImg' loading={"lazy"}  />
                  :
                <img src={user ? user.photoURL : "/account.svg"} alt="account icon" className='userImg' loading={"lazy"} style={user ? {width:"30px", height:"30px", borderRadius:"50%", objectFit:"cover" } : null}  />
              }
              <div className="iconLabel">
                {
                  user?
                  windowWidth < 600
                  ?
                  'Hello!'
                  : `Hello! ${user?.displayName?.split(' ')[0]|| user?.displayName}` 
                  : (
                        <span className="action-text">USER LOGIN</span>                 
                  )
                }
              </div>
            </ActionItem>
          </Link>

          <Link to={"wishlist"} style={{textDecoration:"none"}}>
            <ActionItem style={{gap:"5px"}}>
              <img src="/wishlistHeaderHeart.svg" alt="liked icon"/>
              {
                useWindowWidth() > 600 ?
                <span className="action-text">WISHLIST</span>
                :
                null
              }
            </ActionItem>
          </Link>
        </RightActions>
      </HeaderContainer>

      {/* Search modal — connected, no design changes to header */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </Container>
  );
}

export default Header;
