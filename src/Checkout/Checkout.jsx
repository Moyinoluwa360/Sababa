"use client";
import React from "react";
import styled from "styled-components";
import { Header } from "../Header/Header";
import BreadcrumbNav from "../BreadcrumbNav";
import CheckoutSteps from "./CheckoutSteps";
import ShippingForm from "./ShippingForm";
import OrderSummary from "./OrderSummary";
import Footer from "../Footer";
import PaymentSection from "./PaymentSection";
import PaymentDetailsSummary from "./PaymentsDetailsSummary";

function CheckoutPage() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <Header />
      <BreadcrumbNav />
      <MainTitle>Checkout</MainTitle>
      <CheckoutSteps />
      <CheckoutContainer>
        <ShippingForm/>
        <OrderSummary/>
      </CheckoutContainer>
      <Footer />
    </>
  );
}

const MainTitle = styled.h1`
  text-align: center;
  color: #000;
  font-family: Inter, sans-serif;
  font-size: 32px;
  font-weight: 600;
  margin: 20px 0;
`;

const CheckoutContainer = styled.main`
  display: flex;
  justify-content: center;
  gap: 24px;
  padding: 0 40px;
  margin-bottom: 40px;
  @media (max-width: 991px) {
    flex-direction: column;
  }
  @media (max-width: 640px) {
    padding: 0 20px;
  }
`;

export default CheckoutPage;
