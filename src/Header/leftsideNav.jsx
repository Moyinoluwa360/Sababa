import React from 'react';
import styled from 'styled-components';
import useWindowWidth from '../useWindowWidth';
import { deviceSizes } from '../deviceSize';

const icons = [
  { id: 1, icon: 'account.svg', label: 'Login' },
  { id: 2, icon: 'liked-heart.svg' , label: 'Liked items' },
  { id: 3, icon: 'shopping-cart.svg', label: 'Bag(0)' }
];

export default function Nav2 () {
  return (
    <IconButtonsWrapper>
      {icons.map(item => (
        <IconButton key={item.id} tabIndex="0" aria-label={item.icon}>
          <img src={item.icon} alt=""  />
          {
            useWindowWidth() > 600 ?
            <div className="iconLabel">{item.label}</div>
            :
            null
          }
        </IconButton>
      ))}
      
    </IconButtonsWrapper>
  );
};

const IconButtonsWrapper = styled.div`
  align-self: center;
  display: flex;
  align-items: center;
  gap: 24px;
  margin-left: auto;
  @media (max-width: ${deviceSizes.mobile}) {
      height: 20px;
      width: 91px;
      gap: 16px;
    }
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
    width: 25px;
    height: 25px;
  }
  transition: opacity 0.2s;
  &:hover {
    opacity: 0.8;
  }
  .iconLabel{
    font-size:17.5px;
    margin-left: 3px;
    font-weight: 600;
  }
  @media (max-width: ${deviceSizes.mobile}) {
    img{
      width: 20px;
      height: 20px;
    }
  }
`;