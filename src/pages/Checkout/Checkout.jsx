"use client";
import styled from "styled-components";
import { Header } from "../pages/Header/Header";
import BreadcrumbNav from "../../components/BreadcrumnNav.jsx";
import CheckoutSteps from "./CheckoutSteps";
import ShippingForm from "./ShippingForm";
import OrderSummary from "./OrderSummary";
import Footer from "../../components/Footer/";
import useWindowWidth from "../../components/useWindowWidth";
import MobileCheckoutComponent from "./MobileCheckoutComponent";

function CheckoutPage() {
  return (
    <Con>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <Header />
      <BreadcrumbNav />
      <MainTitle>Checkout</MainTitle>
      {
        useWindowWidth() >= 630 ?
        <>
          <CheckoutSteps />
          <CheckoutContainer>
            <ShippingForm/>
            <OrderSummary/>
          </CheckoutContainer>
        </>
        :
         <MobileCheckoutComponent/>
      }
      <Footer />
    </Con>
  );
}

const Con = styled.div`
  background-color: white;
`

const MainTitle = styled.h1`
  text-align: center;
  color: #000;
  font-family: Inter, sans-serif;
  font-size: 32px;
  font-weight: 600;
  margin: 20px 0;
  @media (max-width: 480px){
    font-size: 16px;
    margin: 10px 0;
  }
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
