import React from 'react';
import styled from 'styled-components';
import { Navigation } from './Navigation';
import { IconButtons } from './IconButtons';

export const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderContent>
          <img src="Sababaa.svg" alt="sababa" />
          <Navigation />
          <IconButtons />
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
  padding: 30px 32px;
  @media (max-width: 991px) {
    padding: 20px;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const HeaderContent = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 40px 100px;
  justify-content: space-between;
  flex-wrap: wrap;
`;