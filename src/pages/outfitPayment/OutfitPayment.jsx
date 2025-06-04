"use client";
import * as React from "react";
import { Header } from "../Header/Header";
import BreadcrumbNav from "../BreadcrumbNav";
import ProductSection from "./ProductSection";
import Footer from "../Footer";
import styled from "styled-components";

function OutfitsPayment() {
  return (
    <Container>
      <Header />
      <BreadcrumbNav />
      <PageTitle>Outfits Breakdown</PageTitle>
      <ProductSection />
      <Footer />
    </Container>
  );
}

const Container = styled.main`
  background-color: rgba(252, 252, 252, 1);
  overflow: hidden;
`;
const PageTitle = styled.h1`
  color: rgba(0, 0, 0, 1);
  font-size: 35px;
  font-weight: 600;
  text-align: center;
  margin-top: 21px;
  font-family: 'inter';
  margin-bottom: 0%;
  @media (max-width: 800px) {
    font-size: 25px;
  }
  @media (max-width: 480px) {
    font-size: 16px;
  }

`;
export default OutfitsPayment;
