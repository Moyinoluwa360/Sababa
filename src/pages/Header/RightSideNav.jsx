import React from 'react';
import styled from 'styled-components';
import useWindowWidth from '../../components/useWindowWidth';
import { deviceSizes } from '../../components/deviceSize';
import { Link } from 'react-router-dom';

const icons = [
  { id: 1, icon: 'account.svg', label: 'Login' },
  { id: 2, icon: 'liked-heart.svg' , label: 'Liked items' },
  { id: 3, icon: 'shopping-cart.svg', label: 'Bag(0)' }
];

export default function Nav2 () {
  return (
    <IconButtonsWrapper>
      <Link to={"account"}>
        <IconButton  tabIndex="0">
          <img src="/account.svg" alt="account icon"  />
          {
            useWindowWidth() > 600 ?
            <div className="iconLabel">Login</div>
            :
            null
          }
        </IconButton>
      </Link>

      <Link to={"saveditems"}>
        <IconButton  tabIndex="0">
          <img src="/liked-heart.svg" alt="liked icon"/>
          {
            useWindowWidth() > 600 ?
            <div className="iconLabel">Saved Items</div>
            :
            null
          }
        </IconButton>
      </Link>

      <Link to={"bag"}>
        <IconButton  tabIndex="0">
          <img src="/shopping-cart.svg" alt="cart icon"  />
          {
            useWindowWidth() > 600 ?
            <div className="iconLabel">Bag(0)</div>
            :
            null
          }
        </IconButton>
      </Link>
      
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
  a{
    text-decoration: none;
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