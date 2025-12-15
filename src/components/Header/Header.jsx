import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import useWindowWidth from '../useWindowWidth';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SlideInMenu from './SlideInMenu';
import SearchModal from './SearchModal';

const Container = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  width: 100%;
  box-sizing: border-box;
  z-index: 10000000;
  background-color: #D9D9D9;
`;

const BannerContainer = styled.div`
  display: flex;
  width: 100%;
  height: 54px;
  justify-content: center;
  align-items: center;
  background: #1C1C1C;
  box-sizing: border-box;
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
  width: 100%;
  max-width: 1440px;
  box-sizing: border-box;
  padding: 12px 16px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
`;

const LeftNav = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const Logo = styled.div`
  img {
    max-width: 100%;
    height: auto;
    display: block;
    @media (max-width: 480px) {
      width: 80px;
  }
}
`;

const RightActions = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  box-sizing: border-box;
  @media (min-width: 768px) {
    gap: 32px;
  }
`;

const NavItem = styled.div`
  color: #787C7F;
  font-family: 'SF Pro Rounded', -apple-system, BlinkMacSystemFont, Roboto, Helvetica, sans-serif;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: color 0.3s;

  a { color: inherit; text-decoration: none; }

  &:hover {
    color: #1C1C1C;
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

  .action-text {
    margin-left: 8px;
    @media (max-width: 900px) {
      display: none;
    }
  }

  img.userImg {
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }
`;

function Header() {
  const user = useSelector((state) => state.auth?.user);
  const windowWidth = useWindowWidth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <Container>
      {isMenuOpen && <SlideInMenu open={isMenuOpen} onClose={toggleMenu} />}

      <BannerContainer>
        <BannerText>IT'S NEVER TOO LATE TO UPGRADE YOUR STYLE!</BannerText>
      </BannerContainer>

      <HeaderContainer>
        {windowWidth > 768 ? (
          <LeftNav>
            <Link to="/home/alloutfits/male" style={{ textDecoration: 'none' }}>
              <NavItem>MEN</NavItem>
            </Link>
            <Link to="/home/alloutfits/female" style={{ textDecoration: 'none' }}>
              <NavItem>WOMEN</NavItem>
            </Link>
            <NavItem>
              <a href="#for_inspiration_btn_header" style={{ color: '#787C7F', textDecoration: 'none' }}>
                INSPIRATIONS
              </a>
            </NavItem>
          </LeftNav>
        ) : (
          <FontAwesomeIcon icon={faBars} className="hamburger" onClick={toggleMenu} />
        )}

        <Logo>
          <Link to="/">
            <img src="/sababa.svg" alt="sababa logo" />
          </Link>
        </Logo>

        <RightActions>
          <ActionItem onClick={() => setIsSearchOpen(true)} aria-label="Open search">
            <img src="/searchIcon.svg" alt="search icon" />
            <span className="action-text">SEARCH</span>
          </ActionItem>

          <Link to="/account" style={{ textDecoration: 'none' }}>
            <ActionItem aria-label="Account">
              {user?.photoURL ? (
                <img src={user.photoURL} alt="account icon" className="userImg" loading="lazy" />
              ) : (
                <img src="/headerAccount.svg" alt="account icon" className="userImg" loading="lazy" />
              )}
              <div className="action-text">
                {user ? `Hello! ${String(user.displayName || '').split(' ')[0] || 'User'}` : <span className="action-text">USER LOGIN</span>}
              </div>
            </ActionItem>
          </Link>

          <Link to="/wishlist" style={{ textDecoration: 'none' }}>
            <ActionItem aria-label="Wishlist">
              <img src="/headerHeart.svg" alt="liked icon" />
              <span className="action-text">WISHLIST</span>
            </ActionItem>
          </Link>
        </RightActions>
      </HeaderContainer>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </Container>
  );
}

export default Header;