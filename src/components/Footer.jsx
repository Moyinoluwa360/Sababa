import React from 'react';
import styled from 'styled-components';

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
            <NewsletterInput placeholder="Enter your email" />
            <SubmitButton>Submit</SubmitButton>
          </NewsletterForm>
        </FooterMain>

        <FooterLinksContainer>
          <FooterColumn>
            <ColumnTitle>PRODUCTS</ColumnTitle>
            <ColumnLink>MEN</ColumnLink>
            <ColumnLink>WOMEN</ColumnLink>
            <ColumnLink>INSPIRATION</ColumnLink>
          </FooterColumn>

          <FooterColumn>
            <ColumnTitle>SUPPORT</ColumnTitle>
            <ColumnLink>ABOUT</ColumnLink>
            <ColumnLink>CONTACT US</ColumnLink>
            <ColumnLink>FEEDBACK FORM</ColumnLink>
          </FooterColumn>

          <FooterColumn className='mobileColumn'>
            <ColumnTitle>SOCIALS</ColumnTitle>
            <ColumnLink>INSTAGRAM</ColumnLink>
            <ColumnLink>TIK TOK</ColumnLink>
            <ColumnLink>PINTEREST</ColumnLink>
            <ColumnLink>X</ColumnLink>
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
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M14.5 1H5.5C3.01472 1 1 3.01472 1 5.5V14.5C1 16.9853 3.01472 19 5.5 19H14.5C16.9853 19 19 16.9853 19 14.5V5.5C19 3.01472 16.9853 1 14.5 1Z" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M13.6005 9.43303C13.7116 10.182 13.5837 10.947 13.2349 11.6191C12.8862 12.2913 12.3343 12.8363 11.658 13.1767C10.9816 13.5172 10.2151 13.6357 9.46753 13.5154C8.71993 13.3951 8.0293 13.0421 7.49387 12.5067C6.95844 11.9712 6.60548 11.2806 6.48518 10.533C6.36488 9.78542 6.48338 9.01893 6.82381 8.34256C7.16425 7.6662 7.70929 7.11439 8.3814 6.76564C9.05352 6.4169 9.8185 6.28896 10.5675 6.40003C11.3315 6.51332 12.0389 6.86934 12.585 7.4155C13.1312 7.96166 13.4872 8.669 13.6005 9.43303Z" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14.9492 5.04999H14.9582" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>

          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M3.6939 2.82C2.9965 2.03953 2.6121 1.0374 2.6122 0H-0.5408V12.4C-0.5646 13.0712 -0.8536 13.7071 -1.3466 14.1735C-1.8397 14.6399 -2.4984 14.9004 -3.1837 14.9C-4.6327 14.9 -5.8367 13.74 -5.8367 12.3C-5.8367 10.58 -4.1429 9.29 -2.398 9.82V6.66C-5.9184 6.2 -9 8.88 -9 12.3C-9 15.63 -6.1837 18 -3.1939 18C0.0102041 18 2.6122 15.45 2.6122 12.3V6.01C3.8908 6.90985 5.4259 7.39265 7 7.39V4.3C7 4.3 5.0816 4.39 3.6939 2.82Z" fill="white"/>
          </svg>

          <svg width="20" height="18" viewBox="0 0 20 18" fill="none">
            <path d="M19 1.00897C18.129 1.61128 17.166 2.07195 16.145 2.37324C15.598 1.75576 14.87 1.3181 14.061 1.11947C13.252 0.920834 12.4 0.970804 11.62 1.26261C10.841 1.55442 10.171 2.07399 9.703 2.75105C9.234 3.42812 8.989 4.23001 9 5.04827V5.93995C7.402 5.98058 5.819 5.63305 4.392 4.92829C2.964 4.22354 1.737 3.18345 0.818 1.90065C0.818 1.90065 -2.818 9.9258 5.364 13.4925C3.491 14.739 1.261 15.364 -1 15.2758C7.182 19.7342 17.182 15.2758 17.182 5.02152C17.181 4.77315 17.157 4.52539 17.109 4.28143C18.037 3.38395 18.692 2.25082 19 1.00897Z" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>

          <svg width="24" height="18" viewBox="0 0 24 18" fill="none">
            <path d="M22.541 2.50453C22.422 2.01336 22.18 1.56333 21.839 1.1999C21.499 0.836473 21.071 0.572507 20.601 0.434673C18.881 0 12.001 0 12.001 0C12.001 0 5.121 0 3.401 0.476073C2.93 0.613897 2.503 0.877867 2.162 1.2413C1.821 1.60473 1.579 2.05476 1.461 2.54593C1.146 4.35245 0.992 6.18506 1.001 8.02073C0.989 9.87023 1.143 11.7167 1.461 13.5369C1.592 14.0128 1.839 14.4457 2.179 14.7938C2.519 15.1419 2.939 15.3933 3.401 15.5239C5.121 16 12.001 16 12.001 16C12.001 16 18.881 16 20.601 15.5239C21.071 15.3861 21.499 15.1221 21.839 14.7587C22.18 14.3953 22.422 13.9452 22.541 13.4541C22.853 11.6612 23.007 9.84253 23.001 8.02073C23.012 6.17123 22.858 4.32466 22.541 2.50453Z" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9.75 11.4049L15.5 8.02073L9.75 4.63647V11.4049Z" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </SocialLinks>
      </FooterBottom>
    </FooterContainer>
  );
}

export default Footer;
