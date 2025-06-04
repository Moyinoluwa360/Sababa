"use client";
import React from "react";
import styled from "styled-components";
import CartItem from "./CartItem";
import OrderSummary from "./OrderSummary";
import Footer from "../../components/Footer"
import {Header}from "../Header/Header"
import BreadcrumbNav from "../../components/BreadcrumbNav";
const ShoppingBag = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Figma+Hand:wght@700&display=swap"
        rel="stylesheet"
      />
      <BreadcrumbNav/>
      <MainContent>
        <PageTitle>Your Bag</PageTitle>
        <ItemsDuration>Items will last for 1 hour</ItemsDuration>
        <CartContainer>
          <CartItems>
            <CartItem
              image="https://cdn.builder.io/api/v1/image/assets/TEMP/27e65db605ff76e462c7a9896b47224904265bc9"
              title="Mens pleated shirt Chunky knit light gray alpaca wool..."
              currentPrice="$52.99"
              originalPrice="$57.99"
              color="Neon Green"
              size="UK 10"
              quantity={1}
            />
            <CartItem
              image="https://cdn.builder.io/api/v1/image/assets/TEMP/27e65db605ff76e462c7a9896b47224904265bc9"
              title="Mens pleated shirt Chunky knit light gray alpaca wool..."
              currentPrice="$52.99"
              originalPrice="$57.99"
              color="Neon Green"
              size="UK 10"
              quantity={1}
            />
            <CartItem
              image="https://cdn.builder.io/api/v1/image/assets/TEMP/27e65db605ff76e462c7a9896b47224904265bc9"
              title="Mens pleated shirt Chunky knit light gray alpaca wool..."
              currentPrice="$52.99"
              originalPrice="$57.99"
              color="Neon Green"
              size="UK 10"
              quantity={1}
            />
            <CartTotal>
              <span>Total price:</span>
              <TotalAmount>$104.99</TotalAmount>
            </CartTotal>
          </CartItems>
          <OrderSummary />
        </CartContainer>
      </MainContent>
    </>
  );
};

const MainContent = styled.main`
  max-width: 1440px;
  margin: 0 auto;
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  background-color: white;
`;

const PageTitle = styled.h1`
  color: #000;
  font-family: Inter, sans-serif;
  font-size: 32px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 10px;
  @media (max-width: 620px){
    font-size: 16px;
  }
`;

const ItemsDuration = styled.p`
  color: #545454;
  font-family: Inter, sans-serif;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 20px;
  @media (max-width: 620px){
    font-size: 14px;
  }
`;

const CartContainer = styled.div`
  display: flex;
  width: 1110px;
  justify-content: center;
  align-self: center;
  @media (max-width: 1135px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

`;

const CartItems = styled.section`
  flex: 1;
`;

const CartTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 16px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0 0 8px 8px;
  margin-top: 8px;
  font-family: Inter, sans-serif;
  width: 681px;
  height: 52px;
  @media (max-width: 710px){
    width: 600px;
  }
  @media (max-width: 620px){
    width: 343px;
  }
  @media (max-width: 370px){
    width: 260px;
  }
  @media (max-width: 280px){
    width: 220px;
  }
`;

const TotalAmount = styled.span`
  color: #000;
  font-family: Inter, sans-serif;
  font-size: 18px;
  font-weight: 600;
  @media (max-width: 620px){
    font-size: 14px;
  }
  @media (max-width: 370px){
      font-size: 12px;
  }
`;

export default ShoppingBag;
