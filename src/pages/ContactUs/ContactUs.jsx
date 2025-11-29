"use client";
import React from "react";
import styled from "styled-components";
import BreadcrumbNav from "../../components/BreadcrumbNav";
import ContactForm from "./ContactForm";

function ContactUs() {
  return (
    <ContactPageWrapper>
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
    </ContactPageWrapper>
  );
}

const ContactPageWrapper = styled.main`
  background-color: #D9D9D9;
`;

const MainContent = styled.section`
  display: flex;
  width: 95%;
  flex-direction: column;
  align-self: center;
  @media (max-width: 650px){
    width: 100%;
  }
`;

const ContactSection = styled.section`
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 650px){
    width: 100%;
  }
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
  text-align: center;
  justify-self: center;
  @media (max-width: 480px){
    font-size: 16px;
  }
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
  }
  @media (max-width: 480px){
    font-size: 12px;
    margin-top: 6px;
    padding-left: 16px;
    padding-right: 16px;
  }
  @media (max-width: 280px){
    padding-left: 8px;
    padding-right: 8px;
  }
`;

export default ContactUs;
