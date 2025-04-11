"use client";
import { useState } from "react";
import styled from "styled-components";

export const VerificationCode = () => {
  const [code, setCode] = useState(["", "", "", ""]);

  const handleResend = () => {
    // Handle resend logic
  };

  return (
    <VerificationWrapper>
      <IconWrapper>
        <img src="https://cdn.builder.io/api/v1/image/assets/001f261659df40119f6cb1a32a4e0f9f/1708f2cfbcaee4bcde10769edbb4817fbfe7b94b?placeholderIfAbsent=true" alt="Verification" />
      </IconWrapper>
      <TextContent>
        <Title>Enter your code</Title>
        <Subtitle>
          We sent a code to <EmailText>vwegbaeminokanju@gmail</EmailText>
        </Subtitle>
      </TextContent>
      <CodeInputSection>
        <CodeInputGroup>
          {code.map((digit, index) => (
            <CodeInput key={index} value={digit} readOnly />
          ))}
        </CodeInputGroup>
        <ResendText>
          Didn't receive the email?{" "}
          <ResendLink onClick={handleResend}>Click to resend</ResendLink>
        </ResendText>
      </CodeInputSection>
      <ContinueButton>Continue</ContinueButton>
    </VerificationWrapper>
  );
};

const VerificationWrapper = styled.section`
margin-top: 60px;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 1);
  width: 514px;
  max-width: 100%;
  padding: 40px 32px;
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 991px) {
    padding: 40px 20px;
  }
  @media (max-width: 500px) {
    width: 100%;
    margin-top: 30px;
  }
`;

const IconWrapper = styled.div`
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 18px;
    height: 18px;
    object-fit: contain;
  }
`;

const TextContent = styled.div`
  margin-top: 8px;
  text-align: center;
  font-family:
    Inter,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-weight: 500;
`;

const Title = styled.h1`
  color: rgba(28, 28, 28, 1);
  font-size: 16px;
  @media (max-width: 500px) {
    font-size: 14px;
  }
`;

const Subtitle = styled.p`
  color: rgba(114, 114, 114, 1);
  font-size: 12px;
  margin-top: 4px;
`;

const EmailText = styled.span`
  color: rgba(28, 28, 28, 1);
  @media (max-width: 500px) {
    font-size: 12px;
  }
`;

const CodeInputSection = styled.div`
  margin-top: 32px;
  width: 295px;
  max-width: 100%;
`;

const CodeInputGroup = styled.div`
  display: flex;
  gap: 13px;
  justify-content: center;
  @media (max-width: 500px) {
    gap: 6px;
  }
`;

const CodeInput = styled.input`
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  width: 60px;
  height: 60px;
  text-align: center;
  font-family:
    Inter,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 24px;
  color: rgba(28, 28, 28, 1);
  font-weight: 500;
  @media (max-width: 500px) {
    width: 45px;
    height: 45px;
    font-size: 16px;
  }
  @media (max-width: 280px) {
    width: 35px;
    height: 35px;
  }
`;

const ResendText = styled.p`
  color: rgba(114, 114, 114, 1);
  font-size: 12px;
  font-family:
    Inter,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-weight: 500;
  text-align: center;
  margin-top: 24px;
`;

const ResendLink = styled.span`
  text-decoration: underline;
  color: rgba(28, 28, 28, 1);
  cursor: pointer;
`;

const ContinueButton = styled.button`
  width: 100%;
  border-radius: 4px;
  background-color: rgba(28, 28, 28, 1);
  margin-top: 20px;
  min-height: 48px;
  padding: 15px;
  font-family:
    Inter,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 16px;
  color: rgba(255, 255, 255, 1);
  font-weight: 500;
  border: none;
  cursor: pointer;

  @media (max-width: 991px) {
    white-space: initial;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    height: 40px;
  }
`;
