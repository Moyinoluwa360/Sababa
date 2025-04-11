"use client";
import styled from "styled-components";

export const PasswordResetSuccess = () => {
  return (
    <SuccessContainer>
      <SuccessContent>
        <IconContainer>
          <SuccessIcon src="https://cdn.builder.io/api/v1/image/assets/001f261659df40119f6cb1a32a4e0f9f/d4da538068f8f6ce38d403478a48932ce51d717d?placeholderIfAbsent=true" alt="Success icon" />
        </IconContainer>
        <MessageContainer>
          <SuccessTitle>All done!</SuccessTitle>
          <SuccessMessage>Your password has been reset</SuccessMessage>
        </MessageContainer>
      </SuccessContent>
      <DoneButton>Done</DoneButton>
    </SuccessContainer>
  );
};

const SuccessContainer = styled.section`
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 1);
  align-self: center;
  display: flex;
  margin-top: 128px;
  width: 514px;
  max-width: 100%;
  padding: 40px 32px;
  flex-direction: column;
  align-items: stretch;
  @media (max-width: 991px) {
    padding: 40px 20px;
    margin-top: 40px;
  }
  @media (max-width: 500px){
    padding:60px 16px;
  }
`;

const SuccessContent = styled.div`
  align-self: center;
  display: flex;
  width: 184px;
  max-width: 100%;
  flex-direction: column;
  align-items: stretch;
`;

const IconContainer = styled.div`
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  align-self: center;
  display: flex;
  min-height: 40px;
  width: 40px;
  padding: 11px;
  align-items: center;
  justify-content: center;
`;

const SuccessIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 18px;
`;

const MessageContainer = styled.div`
  display: flex;
  margin-top: 8px;
  width: 100%;
  flex-direction: column;
  align-items: stretch;
  font-family:
    Inter,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-weight: 500;
`;

const SuccessTitle = styled.h1`
  color: rgba(28, 28, 28, 1);
  font-size: 16px;
  text-align: center;
  margin: 0;
`;

const SuccessMessage = styled.p`
  color: rgba(114, 114, 114, 1);
  font-size: 12px;
  align-self: center;
  margin: 4px 0 0;
`;

const DoneButton = styled.button`
  align-self: stretch;
  border-radius: 4px;
  background-color: rgba(28, 28, 28, 1);
  margin-top: 40px;
  min-height: 51px;
  padding: 16px;
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
    padding: 16px 20px;
    white-space: initial;
  }
  @media (max-width: 500px){
    margin-top: 10px;
  }
`;
