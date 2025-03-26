"use client";
import React from "react";
import styled from "styled-components";
import { Header } from "../Header/Header";
import BreadcrumbNav from "../BreadcrumbNav";
import ContactForm from "./ContactForm";
import Footer from "../Footer";

function ContactUs() {
  return (
    <ContactPageWrapper>
      <Header />
      <MainContent>
        <BreadcrumbNav />
        <ContactSection>
          <ContactTitle>Contact us</ContactTitle>
          <ContactDescription>
            If you've got any issues or outfits, products, styles, website
            suggestions, or anything else to share? Fill out the form!
          </ContactDescription>
          <ContactForm />
        </ContactSection>
      </MainContent>
      <Footer />
    </ContactPageWrapper>
  );
}

const ContactPageWrapper = styled.main`
  background-color: rgba(252, 252, 252, 1);
  overflow: hidden;
`;

const MainContent = styled.section`
  display: flex;
  margin-top: 24px;
  margin-left: 40px;
  width: 95%;
  flex-direction: column;
  align-items: end;
`;

const ContactSection = styled.section`
  
  align-self: center;
  display: flex;
  flex-direction: column;
`;

const ContactTitle = styled.h1`
  color: rgba(0, 0, 0, 1);
  font-size: 32px;
  font-family:
    Inter,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-weight: 600;
  align-self: center;
  width: 100%;
  @media (max-width: 991px) {
    margin-right: 10px;
  }
  justify-self: center;
`;

const ContactDescription = styled.p`
  color: rgba(84, 84, 84, 1);
  font-size: 16px;
  font-family:
    Inter,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-weight: 500;
  text-align: center;
  margin-top: 24px;
  width: 580px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-right: 3px;
  }
`;

export default ContactUs;
