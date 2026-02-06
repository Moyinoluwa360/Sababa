import React from 'react';
import {saveNewsLetterEmail} from "../firebase/firestore"
import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
  width: 100%;
  margin-top: 44px;
  background-color: #D9D9D9;

  @media (min-width: 768px) {
    margin-top: 100px;
  }
`;

const FooterContent = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 40px 86px;
  display: flex;
  justify-content: space-between;
  gap: 24px;
  @media (max-width: 767px) {
    flex-direction: column;
    padding: 0 16px 40px;
  }
`;

const FooterMain = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: column;
`;

const FooterNewsDescription = styled.div`
  display: flex;
  flex-direction: column;   
  max-width: 456px;
`;

const FooterLogo = styled.div`
  margin-bottom: 16px;
`;

const FooterDescription = styled.p`
  color: #787C7F;
  font-family: 'SF Pro Rounded', -apple-system, BlinkMacSystemFont, Roboto, Helvetica, sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 16px;
    width: 100%;
  }
`;

const NewsletterForm = styled.div`
  position: relative;
  width: 456px;
  height: 52px;
  margin-top: 0;
  @media (max-width: 510px) {
    width: 100%;
  }
`;

const NewsletterInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 15px 130px 15px 16px;
  border-radius: 40px;
  background: #E7E7E7;
  border: none;
  font-family: 'SF Pro Rounded', -apple-system, BlinkMacSystemFont, Roboto, Helvetica, sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #787C7F;

  &::placeholder {
    color: #787C7F;
  }

  &:focus {
    outline: none;
    background: #ddd;
  }

  @media (min-width: 768px) {
    padding: 19px 160px 19px 24px;
    background: rgba(28, 28, 28, 0.10);
    font-size: 16px;
    font-weight: 500;

    &:focus {
      background: rgba(28, 28, 28, 0.15);
    }
  }
`;

const SubmitButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  width: 113px;
  height: 48px;
  padding: 13px 34px;
  border-radius: 40px;
  background: #1C1C1C;
  border: none;
  color: #FFF;
  font-family: 'SF Pro Rounded', -apple-system, BlinkMacSystemFont, Roboto, Helvetica, sans-serif;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #333;
  }

  @media (min-width: 768px) {
    width: 142px;
    height: 52px;
    padding: 18px 46px;
    font-size: 16px;
  }
`;

const FooterLinksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;

  @media (min-width: 768px) {
    justify-content: flex-start;
    gap: 80px;
    margin-bottom: 0;
    .mobileColumn {
      display: none;
  }
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-width: 120px;
`;

const ColumnTitle = styled.h4`
  color: #1C1C1C;
  font-family: 'SF Pro Rounded', -apple-system, BlinkMacSystemFont, Roboto, Helvetica, sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: normal;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

const ColumnLink = styled.a`
  color: #787C7F;
  font-family: 'SF Pro Rounded', -apple-system, BlinkMacSystemFont, Roboto, Helvetica, sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: normal;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #1C1C1C;
  }

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

const FooterBottom = styled.div`
  display: flex;
  width: 100%;
  height: 44px;
  padding: 15px 16px;
  justify-content: space-between;
  align-items: center;
  background: #1C1C1C;

  @media (min-width: 768px) {
    height: 57px;
    padding: 20px 40px;
  }
`;

const Copyright = styled.div`
  color: #FFF;
  font-family: 'SF Pro Rounded', -apple-system, BlinkMacSystemFont, Roboto, Helvetica, sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: normal;

  @media (min-width: 768px) {
    font-size: 14px;
    font-weight: 600;
  }
`;

const PolicyLink = styled.div`
  color: #FFF;
  font-family: 'SF Pro Rounded', -apple-system, BlinkMacSystemFont, Roboto, Helvetica, sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;

const SocialLinks = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 32px;

    svg {
      cursor: pointer;
      transition: opacity 0.3s ease;

      &:hover {
        opacity: 0.7;
      }
    }
  }
`;

function Footer() {
  const [email, setEmail] = useState("");

  const saveEmailToNewsletter = async (email)=>{
    try {
      await saveNewsLetterEmail(email);
      setEmail("");
      alert("Thank you for subscribing to our newsletter!");
    } catch (error) {
      console.error("Error saving email:", error);
    }
  }

  const socialLinks = {
    instagram: "https://www.instagram.com/sababacommunity?igsh=MXB4NDB4aXZwb213cg==",
    tiktok: "https://www.tiktok.com/@sababacommunity?_r=1&_d=e3g3a108k302ge&sec_uid=MS4wLjABAAAA-BQYPoX21qeG3jwf3s4wyZwxP3lNhW3ty3cpZvz385CLDWrT-evN7hj91x7mPFqx&share_author_id=7137640200730231813&sharer_language=en&source=h5_m&u_code=e3g3a03jh0e51a&timestamp=1769251253&user_id=7137640200730231813&sec_user_id=MS4wLjABAAAA-BQYPoX21qeG3jwf3s4wyZwxP3lNhW3ty3cpZvz385CLDWrT-evN7hj91x7mPFqx&item_author_type=1&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7591015437442762514&share_link_id=cd770753-e685-4d26-b7ad-2edaeeae4847&share_app_id=1233&ugbiz_name=ACCOUNT&ug_btm=b8727%2Cb7360&social_share_type=5&enable_checksum=1",
    twitter: "https://x.com/sababacommunity",
    pinterest: "https://pin.it/1xlxWNiqO",
    googleForm: "https://docs.google.com/forms/d/e/1FAIpQLSfDMY1CZNgla3ydnJQfnFQsmByMY3kSORz1h7wHdIc9AVO9tw/viewform?usp=sharing&ouid=101552073548109166338"
  }

  return (
    <FooterContainer>
      <FooterContent>
        <FooterMain>
          <FooterNewsDescription>
            <FooterLogo>
              <img src='/sababa.svg' alt='Sababa logo'/>
            </FooterLogo>
            <FooterDescription>
              Join Sababa Newsletter to never miss a fit, be the <br/> first to know about our weekly drops.
            </FooterDescription>
          </FooterNewsDescription>

          <NewsletterForm>
            <NewsletterInput 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email" />

            <SubmitButton onClick={() => saveEmailToNewsletter(email)}>Submit</SubmitButton>
          </NewsletterForm>
        </FooterMain>

        <FooterLinksContainer>
          <FooterColumn>
            <ColumnTitle>PRODUCTS</ColumnTitle>
            <Link to="/home/alloutfits/male" style={{ textDecoration: 'none' }}><ColumnLink>MEN</ColumnLink></Link>
            <Link to="/home/alloutfits/female" style={{ textDecoration: 'none' }}><ColumnLink>WOMEN</ColumnLink></Link>
            <Link to="/home#for_inspiration_btn_header" style={{ textDecoration: 'none' }}><ColumnLink>INSPIRATION</ColumnLink></Link>
          </FooterColumn>

          <FooterColumn>
            <ColumnTitle>SUPPORT</ColumnTitle>
            <ColumnLink>ABOUT</ColumnLink>
            <Link to={"contact"} style={{ textDecoration: 'none' }}><ColumnLink>CONTACT US</ColumnLink></Link>
            <ColumnLink href={socialLinks.googleForm}>FEEDBACK FORM</ColumnLink>
          </FooterColumn>

          <FooterColumn className='mobileColumn'>
            <ColumnTitle>SOCIALS</ColumnTitle>
            <ColumnLink href={socialLinks.instagram}>INSTAGRAM</ColumnLink>
            <ColumnLink href={socialLinks.tiktok}>TIK TOK</ColumnLink>
            <ColumnLink href={socialLinks.pinterest}>PINTEREST</ColumnLink>
            <ColumnLink href={socialLinks.twitter}>X</ColumnLink>
          </FooterColumn>

          <FooterColumn>
            <ColumnTitle>LEGAL</ColumnTitle>
            <ColumnLink>PRIVACY POLICY</ColumnLink>
            <ColumnLink>TERMS OF SERVICE</ColumnLink>
          </FooterColumn>
        </FooterLinksContainer>
      </FooterContent>

      <FooterBottom>
        <Copyright>© 2025 Sababa. All rights reserved.</Copyright>
        <PolicyLink>Privacy & Cookie Policy</PolicyLink>

        <SocialLinks>
          <a href={socialLinks.instagram}><img src="/instagram.svg" alt="instagram logo" /></a>
          <a href={socialLinks.tiktok}><img src="/tiktok.svg" alt="tiktok logo" /></a>
          <a href={socialLinks.twitter}><img src="/twitter.svg" alt="twitter logo" /></a>
          <a href={socialLinks.pinterest}><img src="/pinterest.svg" alt="pinterest logo" /></a>
        </SocialLinks>
      </FooterBottom>
    </FooterContainer>
  );
}

export default Footer;
