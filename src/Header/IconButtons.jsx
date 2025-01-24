import React from 'react';
import styled from 'styled-components';

const icons = [
  { id: 1, icon: 'account.svg' },
  { id: 2, icon: 'liked-heart.svg' },
  { id: 3, icon: 'shopping-cart.svg' }
];

export const IconButtons = () => {
  return (
    <IconButtonsWrapper>
      {icons.map(item => (
        <IconButton key={item.id} tabIndex="0" aria-label={item.icon}>
          <img src={item.icon} alt="" />
        </IconButton>
      ))}
    </IconButtonsWrapper>
  );
};

const IconButtonsWrapper = styled.div`
  align-self: stretch;
  display: flex;
  margin: auto 0;
  align-items: center;
  gap: 24px;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  img{
    width: 26px;
    height: 26px;
  }
  transition: opacity 0.2s;
  &:hover {
    opacity: 0.8;
  }
`;