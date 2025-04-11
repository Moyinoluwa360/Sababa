"use client";
import React from "react";
import styled from "styled-components";
import ForgotPasswordForm from "./ForgotPasswordForm";
import { VerificationCode } from "./VerificationCode";
import { PasswordResetForm } from "./PasswordResetForm";
import { PasswordResetSuccess } from "./PasswordResetSuccessful";
import Footer from "../../Footer";
import useWindowWidth from "../../useWindowWidth";
import { useState } from "react";

export const ForgotPassword = () => {
    const [currentForm, setCurrentForm] = useState("log in")
  return (
    <PageWrapper>
      {
            useWindowWidth() > 500 ?
            <header>
            <div className="headerContent">
                <div className="logo">
                    <img src="/fullSababaLogo.svg" alt="Sababa Logo" />
                </div>
                <div className="other-pages-link">
                    <div id="aboutUs">About us</div>
                    <div id="logIn"
                    onClick={()=>{setCurrentForm("log in")}}
                    currentForm = {currentForm}
                    >Log in</div>
                    <div id="createAccount"
                    onClick={()=>{setCurrentForm("create account")}}
                    >Sign Up</div>
                </div>
            </div>
            </header>
            :
            <div className="mobileHeader">
            <img src="SababaLogo.svg" alt="" />
            </div>
        }
      <PasswordResetSuccess />
      <Footer />
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fcfcfc;
  display: flex;
  flex-direction: column;
  .mobileHeader{
    position: relative;
    width: 100%;
    height: 100px;
    background-color: #727272;
    img{
      position: absolute;
      height: 64px;
      width: 64px;
      right: 40%;
      bottom: -30%;
    }
  }
  header {
    width: 100%;
    height: 72px;
    display: flex;
    justify-content: center;
    align-items: center;

    .headerContent {
      padding: 0 20px 0 16px;
      width: inherit;
      height: inherit;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .logo {
        img{
          height: 40px;
          width: 131px;
        }
      }

      .icons {
        display: flex;
        gap: 16px;
      }

      .other-pages-link {
        height: inherit;
        display: flex;
        gap: 32px;
        font-size: 16px;
        align-items: center;
        @media (max-width: 600px){
          gap: 16px;
        }

        #aboutUs {
          color: #727272;
          font-weight: 600;
        }
        #logIn{
          color: ${(prop) => (prop.currentForm === "log in" ? "black" : "#727272")};
          font-weight: ${(prop) => (prop.currentForm === "log in" ? "bold" : "light")};
        }
        #createAccount {
          background-color: black;
          height: 50%;
          border-radius: 10px;
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          font-weight: 400;
          padding-left: 10px;
          padding-right: 10px;
          font-size: 16px;
        }
      }
    }
  }
`;

