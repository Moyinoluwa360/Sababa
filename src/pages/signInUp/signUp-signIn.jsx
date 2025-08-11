import styled from "styled-components";
import {LogInForm} from "./LogInForm";
import Footer from "../../components/Footer";
import CreateAccForm from "./CreateAccForm";
import { useState } from "react";
import useWindowWidth from "../../components/useWindowWidth";

export default function SignUpSignInPage(){
    const [currentForm, setCurrentForm] = useState("sign in")
    return(
        <SignUpDiv currentForm = {currentForm}>
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
                        onClick={()=>{setCurrentForm("sign in")}}
                        $currentForm = {currentForm}
                        >Sign in</div>
                        <div id="createAccount"
                        onClick={()=>{setCurrentForm("create account")}}
                        >Sign Up</div>
                    </div>
                </div>
              </header>
              :
              <div className="mobileHeader">
                <img src="/SababaLogo.svg" alt="" />
              </div>
            }
            {
              useWindowWidth() < 500 ?
              <SignInToSignUpNAV>
                <div
                  onClick={()=>{setCurrentForm("sign in")}}
                  style={currentForm == "sign in" ? {fontWeight:"600", borderBottom:"2px solid black"} : null}
                >Sign In</div>
                |
                <div
                  onClick={()=>{setCurrentForm("create account")}}
                   style={currentForm == "create account" ? {fontWeight:"600", borderBottom:"2px solid black"} : null}
                >Sign Up</div>
              </SignInToSignUpNAV>
              : null
            }
            {
              currentForm === "sign in" ?
              <LogInForm setCurrentForm = {setCurrentForm} />
              :
              <CreateAccForm setCurrentForm = {setCurrentForm} />
            }
            <Footer/>
        </SignUpDiv>

    )
}

const SignUpDiv = styled.div`
  background-color: #ffffff;
  height: 100%;
  width: 100%;
  font-family: inter;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  .mobileHeader{
    position: relative;
    width: 100%;
    height: 90px;
    background-color: #727272;
    img{
      position: absolute;
      height: 60px;
      width: 60px;
      right: 41%;
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
          color: ${(prop) => (prop.$currentForm === "sign in" ? "black" : "#727272")};
          font-weight: ${(prop) => (prop.$currentForm === "sign in" ? "bold" : "light")};
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

const SignInToSignUpNAV = styled.div`
  margin-top: 70px;
  height: 39px;
  width: 100%;
  display: flex;
  align-items: center;
  color: #a3a3a3;
  font-size: 12px;
  div{
    height: inherit;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    font-weight: 500;
    font-size: 14px;
  }
`