import React from 'react';
import styled from 'styled-components';

const navItems = [
  { id: 1, text: 'Shop' },
  { id: 2, text: 'All Features' },
  { id: 3, text: 'Contact' },
  { id: 4, text: 'About Us' }
];

export const Navigation = () => {
  return (
    <Nav>
      {navItems.map(item => (
        <NavItem key={item.id} tabIndex="0">
          {item.text}
        </NavItem>
      ))}
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  min-width: 240px;
  align-items: center;
  gap: 16px;
  color: #000;
  font: 500 18px Inter, sans-serif;
  @media (max-width: 640px) {
    display: none;
  }
`;

const NavItem = styled.div`
  align-self: stretch;
  margin: auto 0;
  padding: 10px;
  gap: 10px;
  cursor: pointer;
  transition: color 0.2s;
  &:hover {
    color: #545454;
  }
`;