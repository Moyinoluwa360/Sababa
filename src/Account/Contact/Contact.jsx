"use client";
import React from "react";
import styled from "styled-components";

export const Contact = () => {
  return (
    <FormColumn>
      <FormWrapper>
        <FormDescription>
          If you've got any issues or outfits, products, styles, website
          suggestions, or anything else to share? Fill out the form!
        </FormDescription>

        <EmailBox>
          <EmailIcon>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/001f261659df40119f6cb1a32a4e0f9f/1b71351479d2343787cd47eb980b6b200c180bd5?placeholderIfAbsent=true"
              alt=""
            />
          </EmailIcon>
          <EmailText>
            Email us on <br />
            thesababacommunity@gmail.com
          </EmailText>
        </EmailBox>

        <FormFields>
          <FormField mt="0">
            <label>Name</label>
            <Input type="text" />
          </FormField>

          <FormField>
            <label>Email</label>
            <Input type="email" />
          </FormField>

          <FormField>
            <label>Subject</label>
            <Input type="text" />
          </FormField>

          <FormField>
            <label>Message</label>
            <TextArea />
          </FormField>
        </FormFields>

        <PrivacySection>
          <CheckboxWrapper>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/001f261659df40119f6cb1a32a4e0f9f/22849277e92bac1a68db3292e35f38ea1d072ea1?placeholderIfAbsent=true"
              alt=""
            />
          </CheckboxWrapper>
          <PrivacyText>
            To submit this form you have to accept our{" "}
            <span style={{ textDecoration: "underline" }}>
              Privacy Statement
            </span>
          </PrivacyText>
        </PrivacySection>

        <SubmitButton type="submit">Send</SubmitButton>
      </FormWrapper>
    </FormColumn>
  );
};

const FormColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  line-height: normal;
  width: 713px;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
    margin-left: 0%;
  }
`;

const FormWrapper = styled.form`
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.15);
  display: flex;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  padding: 49px 80px 49px 40px;
  flex-direction: column;
  align-items: start;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 17px;
    padding: 20px;
  }
  @media (max-width: 480px){
    padding: 8px;
  }
`;

const FormDescription = styled.p`
  color: rgba(84, 84, 84, 1);
  font-size: 16px;
  font-family:
    Inter,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-weight: 500;
  align-self: stretch;
  @media (max-width: 991px) {
    max-width: 100%;
  }
  @media (max-width: 480px){
    font-size: 10px;
  }
`;

const EmailBox = styled.div`
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  margin-top: 20px;
  padding: 8px;
  align-items: center;
  gap: 4px;
  width: 280px;
  @media (max-width: 480px){
    font-size: 12px;
  }
  @media (max-width: 330px){
    width: 100%;
  }
`;

const EmailIcon = styled.div`
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 8px;
  @media (max-width: 400px){
    width: 25px;
    height: 25px;
  }
`;

const EmailText = styled.p`
  color: rgba(0, 0, 0, 1);
  font-size: 14px;
  font-family:
    Inter,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-weight: 500;
  line-height: 18px;
  margin: 0;
  @media (max-width: 480px){
    font-size: 12px;
  }
  @media (max-width: 310px){
    font-size: 10px;
  }
  @media (max-width: 240px){
    font-size: 8px;
  }
`;

const FormFields = styled.div`
  margin-top: 20px;
  width: 370px;
  max-width: 100%;
  font-family:
    Inter,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 14px;
  color: rgba(84, 84, 84, 1);
  font-weight: 500;
  @media (max-width: 480px){
    font-size: 12px;
  }
`;

const FormField = styled.div`
  margin-top: ${(props) => props.mt || "20px"};
  width: 100%;
`;

const Input = styled.input`
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  min-height: 48px;
  margin-top: 8px;
  width: 100%;
  padding: 8px;
`;

const TextArea = styled.textarea`
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  min-height: 159px;
  margin-top: 8px;
  width: 100%;
  padding: 8px;
`;

const PrivacySection = styled.div`
  display: flex;
  margin-top: 28px;
  align-items: end;
  gap: 4px;
  @media (max-width: 480px){
    width: 100%;
  }
`;

const CheckboxWrapper = styled.div`
  border-radius: 4px;
  background-color: rgba(20, 110, 180, 0.05);
  border: 1px solid rgba(20, 110, 180, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
`;

const PrivacyText = styled.p`
  color: rgba(28, 28, 28, 1);
  font-size: 12px;
  font-family:
    Inter,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-weight: 500;
  width: 361px;
  @media (max-width: 280px){
    font-size: 10px;
  }
`;

const SubmitButton = styled.button`
  align-self: stretch;
  border-radius: 4px;
  width: 370px;
  background-color: rgba(28, 28, 28, 1);
  margin-top: 12px;
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
  font-weight: 600;
  border: none;
  cursor: pointer;
  text-align: center;

  @media (max-width: 991px) {
    padding: 15px 20px;
  }
  @media (max-width: 480px){
    font-size: 12px;
    width: 100%;
  }
`;
