import React, { useState } from 'react';
import styled from 'styled-components';
import NavigationMenu from './AllOutfits/NavigationMenu';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Nav>
      <NavItem tabIndex="0">Shop</NavItem>
      <HoverWrapper
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <NavItem tabIndex="0">All Features <img src="dropdown.svg" alt="all feature drop down" /> </NavItem>
        {isHovered && <NavigationMenu />}
      </HoverWrapper>
      <NavItem tabIndex="0"> <NavLink to={"contact"}> Contact</NavLink> </NavItem>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  min-width: 240px;
  align-items: center;
  gap: 16px;
  color: #000;
  margin-left: 64px;
  font: 500 16px Inter, sans-serif;

  @media (max-width: 640px) {
    display: none;
  }
`;

const NavItem = styled.div`
  padding: 10px;
  font-size: 17.5px;
  font-weight: 600;
  cursor: pointer;
  transition: color 0.2s;
  display: flex;
  align-items: center;
  gap: 5px;
  a{
    text-decoration: none;
    color: inherit;
  }

  &:hover {
    color: #545454;
  }
  img{
    height: 15px;
    width: 15px;
  }
`;

const HoverWrapper = styled.div`
  position: relative;
  display: inline-block;
`;
