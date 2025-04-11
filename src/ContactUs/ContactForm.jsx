"use client";
import React, { useState } from "react";
import styled from "styled-components";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    privacyAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
  };

  return (
    <FormContainer>
      <EmailInfoBox>
        <EmailIconWrapper>
          <EmailIcon
            src="https://cdn.builder.io/api/v1/image/assets/08bf16d58b0d4aa28fefd3a671be5059/0fb1b1f8b7371575b45f05343bd0c186985651ba456699a5681943959560e3ad?placeholderIfAbsent=true"
            alt="Email icon"
          />
        </EmailIconWrapper>
        <EmailText>
          <span>Email us on </span>
          <br />
          <EmailAddress>thesababacommunity@gmail.com</EmailAddress>
        </EmailText>
      </EmailInfoBox>

      <StyledForm onSubmit={handleSubmit}>
        <FormFields>
          <FormGroup>
            <FormLabel htmlFor="name">Name</FormLabel>
            <FormInput
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <FormLabel htmlFor="email">Email</FormLabel>
            <FormInput
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <FormLabel htmlFor="subject">Subject</FormLabel>
            <FormInput
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <FormLabel htmlFor="message">Message</FormLabel>
            <FormTextarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </FormGroup>
        </FormFields>

        <FormActions>
          <PrivacyContainer>
            <CheckboxContainer>
              <Checkbox
                type="checkbox"
                id="privacy"
                name="privacyAccepted"
                checked={formData.privacyAccepted}
                onChange={handleChange}
                required
              />
              <CheckboxIcon
                src="https://cdn.builder.io/api/v1/image/assets/08bf16d58b0d4aa28fefd3a671be5059/0e18d44f55ed96ae37f0649893cd9c49f49dc1295f315ad53ec4c871825c9986?placeholderIfAbsent=true"
                alt="Checkbox"
              />
            </CheckboxContainer>
            <PrivacyText>
              <span>To submit this form you have to accept our </span>
              <PrivacyLink href="/privacy">Privacy Statement</PrivacyLink>
            </PrivacyText>
          </PrivacyContainer>

          <SubmitButton type="submit">Send</SubmitButton>
        </FormActions>
      </StyledForm>
    </FormContainer>
  );
}

const FormContainer = styled.div`
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.15);
  display: flex;
  margin-top: 16px;
  width: 580px;
  padding: 24px 40px 40px;
  flex-direction: column;
  @media (max-width: 650px){
    width: 100%;
  }
  @media (max-width: 480px){
    padding: 16px;
    box-shadow: none;
  }
  @media (max-width: 280px){
    padding: 8px;
  }
`;

const EmailInfoBox = styled.div`
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  align-self: center;
  display: flex;
  padding: 8px;
  align-items: center;
  gap: 4px;
  justify-content: start;
  @media (max-width: 300px){
    width: 100%;
  }
  @media (max-width: 26px){
    justify-content: center;
    gap: 1px;
  }
`;

const EmailIconWrapper = styled.div`
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  align-self: stretch;
  display: flex;
  margin-top: auto;
  margin-bottom: auto;
  min-height: 32px;
  padding: 10px 8px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
`;

const EmailIcon = styled.img`
  aspect-ratio: 1.33;
  object-fit: contain;
  object-position: center;
  width: 16px;
  @media (max-width: 480px){
    width: 14px;
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
  align-self: stretch;
  margin: 0;
  @media (max-width: 480px){
    font-size: 12px;
  }
  @media (max-width: 300px){
    font-size: 10px;
  }
  @media (max-width: 262px){
    word-break: break-all;
    font-size: 8px;
    line-height: 14px;
  }
`;

const EmailAddress = styled.span`
  color: rgba(0, 0, 0, 1);
  font-weight: 500;
`;

const StyledForm = styled.form`
  margin-top: 24px;
  width: 100%;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const FormFields = styled.div`
  width: 100%;
  font-family:
    Inter,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 16px;
  color: rgba(84, 84, 84, 1);
  font-weight: 500;
  @media (max-width: 991px) {
    max-width: 100%;
  }
  @media (max-width: 480px){
    font-size: 12px;
  }
`;

const FormGroup = styled.div`
  width: 100%;
  margin-top: 24px;
  &:first-child{
    margin-top: 12px;
  }
  @media (max-width: 480px){
    margin-top: 8px;
    &:first-child{
    margin-top: 0px;
  }
  }
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  @media (max-width: 480px){
    margin-bottom: 4px;
  }
`;

const FormInput = styled.input`
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: block;
  min-height: 48px;
  width: 100%;
  padding: 0 12px;
  font-family:
    Inter,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 16px;
  @media (max-width: 480px){
    font-size: 12px;
    min-height: 44px;
  }
`;

const FormTextarea = styled.textarea`
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: block;
  min-height: 159px;
  width: 100%;
  padding: 12px;
  font-family:
    Inter,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 16px;
  resize: vertical;
  @media (max-width: 480px){
    font-size: 12px;
  }
`;

const FormActions = styled.div`
  display: flex;
  margin-top: 20px;
  width: 100%;
  flex-direction: column;
  align-items: stretch;
  justify-content: start;
`;

const PrivacyContainer = styled.div`
  align-self: start;
  display: flex;
  align-items: end;
  gap: 4px;
  justify-content: start;
`;

const CheckboxContainer = styled.div`
  border-radius: 4px;
  background-color: rgba(20, 110, 180, 0.05);
  border: 1px solid rgba(20, 110, 180, 0.1);
  display: flex;
  min-height: 16px;
  padding: 4px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  position: relative;
`;

const Checkbox = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 100%;
  width: 100%;
  z-index: 1;
`;

const CheckboxIcon = styled.img`
  aspect-ratio: 1.33;
  object-fit: contain;
  object-position: center;
  width: 8px;
`;

const PrivacyText = styled.p`
  color: rgba(0, 0, 0, 1);
  font-size: 14px;
  font-family:
    Inter,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-weight: 500;
  margin: 0;
  @media (max-width: 480px){
    font-size: 12px;
  }
  @media (max-width: 300px){
    font-size: 10px;
  }
`;

const PrivacyLink = styled.a`
  color: rgba(0, 0, 0, 1);
  text-decoration: underline;
  cursor: pointer;
  @media (max-width: 480px){
    font-size: 12px;
  }
  @media (max-width: 300px){
    font-size: 10px;
  }
`;

const SubmitButton = styled.button`
  align-self: stretch;
  border-radius: 4px;
  background-color: #000000;
  margin-top: 12px;
  min-height: 48px;
  width: 100%;
  padding: 15px;
  border: none;
  font-family:
    Inter,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 16px;
  color: rgba(255, 255, 255, 1);
  font-weight: 600;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: #2c2c2c;
  }

  @media (max-width: 991px) {
    padding: 15px 20px;
  }
  @media (max-width: 480px){
    font-size: 12px;
  }
`;

export default ContactForm;
