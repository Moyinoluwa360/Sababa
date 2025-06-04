"use client";
import React from "react";
import styled from "styled-components";
import { EmptyOrder } from "./EmptyOrder";

export const YourOrder = () => {
  return (
    <YourOrderCon>
      <Container>
        <EmptyOrder/>
        <ActionButton>Start shopping</ActionButton>
      </Container>
    </YourOrderCon>
  );
};

const YourOrderCon = styled.div`
  width: 713px;
  height: 361px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 1px 15px 0px rgba(0, 0, 0, 0.15);
  @media (max-width: 730px){
    width: 100%;
  }
`

const Container = styled.div`
  display: flex;
  max-width: 370px;
  flex-direction: column;
  align-items: stretch;
  font-family:
    Inter,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-weight: 500;
  justify-content: start;
  @media (max-width: 480px){
    width: 100%;
    padding: 16px;
  }
`;

export const ActionButton = styled.button`
  border-radius: 8px;
  background-color: rgba(28, 28, 28, 1);
  margin-top: 24px;
  min-height: 44px;
  width: 100%;
  font-size: 16px;
  color: rgba(255, 255, 255, 1);
  border: none;
  cursor: pointer;
  font-family: inherit;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    opacity: 0.9;
  }

  &:focus {
    outline: 2px solid rgba(28, 28, 28, 0.5);
    outline-offset: 2px;
  }
  @media (max-width: 480px){
    font-size: 14px;
  }
`;

