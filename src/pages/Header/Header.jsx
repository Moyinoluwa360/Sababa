import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { Navigation } from './Navigation';
import Nav2 from './RightSideNav';
import useWindowWidth from '../../components/useWindowWidth';
import { deviceSizes } from '../../components/deviceSize';
import SlideInMenu from './SlideInMenu';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle menu
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  return (
    <HeaderWrapper>
      { isMenuOpen && <SlideInMenu open={isMenuOpen} onClose={toggleMenu} /> }
      <HeaderContainer>
        <HeaderContent>
          {
            useWindowWidth() < 1090 ?
            <div className='hamburgerMenu' onClick={toggleMenu}>
              <img src="/hamburgerMenu.svg" alt="menu bar" />
            </div>
            : null
          }
          <div className="logo">
            <Link to={"/"} ><img src="fullSababaLogo.svg" alt="sababa"/></Link>
          </div>
          {
            useWindowWidth() > 1090 ?
            <Navigation/>
            : null
          }
          <Nav2/>
        </HeaderContent>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  border-color: rgba(244, 244, 244, 1);
  border-top-width: 2px;
  border-bottom-width: 2px;
  width: 100%;
  padding: 0 32px 0 32px;
  margin-bottom: 40px;
  margin-top: 29px;
  @media (max-width: ${deviceSizes.mobile}) {
    height: 26px;
    padding: 0 16px 0 16px;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  .logo{
    width: 131px;
    height: 40px;
    margin-left: 0;
    img{
      width: 131px;
      height: 40px;
    }
  }
  @media (max-width: ${deviceSizes.mobile}) {
    height: 26px;
    .logo{
    width: 90px;
    height: 26px;
    img{
      width: 90px;
      height: 26px;
    }
  }
  }
`;

const HeaderContent = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  .hamburgerMenu{
    margin: 0%;
    margin-right: 12px;
    height: 35px;
    display: flex;
    align-items: center;
    img{
      height: 25px;
    }
    @media (max-width: ${deviceSizes.mobile}) {
      height: inherit;
      img{
        height: 15px;
        width: 22px;
      }
    }
  }
`;