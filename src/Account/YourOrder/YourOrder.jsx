"use client";
import React from "react";
import styled from "styled-components";
import { EmptyOrder } from "./EmptyOrder";
import { ActionButton } from "./ActionButton";

const EmptyOrderState = () => {
  return (
    <Container>
      <EmptyOrder/>
      <ActionButton>Start shopping</ActionButton>
    </Container>
  );
};

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
`;

export const ActionButton = styled.button`
  align-self: stretch;
  border-radius: 8px;
  background-color: rgba(28, 28, 28, 1);
  margin-top: 24px;
  min-height: 44px;
  width: 100%;
  padding: 13px 111px;
  font-size: 16px;
  color: rgba(255, 255, 255, 1);
  border: none;
  cursor: pointer;
  font-family: inherit;
  font-weight: 500;

  &:hover {
    opacity: 0.9;
  }

  &:focus {
    outline: 2px solid rgba(28, 28, 28, 0.5);
    outline-offset: 2px;
  }
`;


export default EmptyOrderState;
