"use client";
import React from "react";
import styled from "styled-components";

export function AccountFooter() {
  return (
    <Footer>
      <FooterContent>
        <FooterLinks>
          <FooterLink>Sababa Homepage</FooterLink>
          <FooterLink>Terms &amp; Conditions</FooterLink>
          <FooterLink>Privacy Policy</FooterLink>
        </FooterLinks>
        <Copyright>@Sababa 2024</Copyright>
      </FooterContent>
    </Footer>
  );
}

const Footer = styled.footer`
  margin-top: auto;
  background-color: #fcfcfc;
  box-shadow: 1px 0px 15px 0px rgba(0, 0, 0, 0.15);
  padding: 30px 0;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1104px;
  margin: 0 auto;
  padding: 0 40px;

  @media (max-width: 991px) {
    padding: 0 20px;
  }

  @media (max-width: 640px) {
    padding: 0 16px;
    flex-direction: column;
    gap: 16px;
  }
`;

const FooterLinks = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

const FooterLink = styled.a`
  color: #545454;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
`;

const Copyright = styled.p`
  color: #545454;
  font-size: 16px;
  font-weight: 600;
  margin: 0;
`;
