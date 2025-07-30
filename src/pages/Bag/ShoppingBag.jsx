"use client";
import React from "react";
import styled from "styled-components";
import CartItem from "./CartItem";
import OrderSummary from "./OrderSummary";
import BreadcrumbNav from "../../components/BreadcrumbNav";
import { useSelector } from "react-redux";
const ShoppingBag = () => {
  const cartItems = useSelector(state => state.cart.items);
  console.log(cartItems);
  const orderTotal = useSelector(state => state.cart.orderTotal);

  // Format price in Nigerian Naira (or USD if you prefer)
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 2
    }).format(price);
  };
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
        {cartItems.length === 0 ? (
          <EmptyCartContainer>
            <EmptyCartIcon src="/shopping-cart.svg" alt="Empty cart" />
            <EmptyCartText>No products in your bag</EmptyCartText>
            <EmptyCartSubText>Your shopping bag is currently empty. Start adding items to see them here!</EmptyCartSubText>
          </EmptyCartContainer>
        ) : (
          <CartContainer>
            <CartItems>
              {cartItems.map((item) => (
                <CartItem key={item.id} product={item} />
              ))}
              <CartTotal>
                <span>Order price:</span>
                <OrderAmount>{formatPrice(orderTotal)}</OrderAmount>
              </CartTotal>
            </CartItems>
            <OrderSummary />
          </CartContainer>
        )}
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
  span{
    font-weight: 500;
    @media (max-width: 620px){
      font-size: 14px;
  }
  }
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

const OrderAmount = styled.span`
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

const EmptyCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  width: 100%;
  padding: 40px 0;
`;

const EmptyCartIcon = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: 24px;
  opacity: 0.5;
  @media (max-width: 480px) {
    width: 48px;
    height: 48px;
    margin-bottom: 16px;
  }
`;

const EmptyCartText = styled.h2`
  color: #545454;
  font-family: Inter, sans-serif;
  font-size: 22px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 8px;
  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const EmptyCartSubText = styled.p`
  color: #888;
  font-family: Inter, sans-serif;
  font-size: 16px;
  text-align: center;
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export default ShoppingBag;
