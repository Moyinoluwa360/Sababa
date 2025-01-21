import styled from "styled-components";
import {LogInForm} from "./LogInForm";
import Footer from "./Footer";
import CreateAccForm from "./CreateAccForm";
import { useState } from "react";
export default function SignUp(){
    const [currentForm, setCurrentForm] = useState("log in")
    return(
        <SignUpDiv currentForm = {currentForm}>
            <header>
                <div className="headerContent">
                    <div className="logo-sec">
                        <img src="/SababaLogo.svg" alt="Sababa Logo" height={"50px"} width={"50px"}/>
                        <img src="sababa.svg" alt="sababa" height={"45px"} width={"130px"}/>
                    </div>
                    <div className="other-pages-link">
                        <div id="aboutUs">About us</div>
                        <div id="logIn"
                        onClick={()=>{setCurrentForm("log in")}}
                        currentForm = {currentForm}
                        >Log in</div>
                        <div id="createAccount"
                        onClick={()=>{setCurrentForm("create account")}}
                        >Create account</div>
                    </div>
                </div>
            </header>
            {
              currentForm === "log in" ?
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
  height: 100vh;
  width: 100vw;
  font-family: inter;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  header {
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 16px;
    border-bottom: 1px solid  #d3d3d3;

    .headerContent {
      margin: 0 16px 0 16px;
      width: inherit;
      height: inherit;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .logo-sec {
        display: flex;
        gap: 8px;
        align-items: center;
      }

      .icons {
        display: flex;
        gap: 16px;
      }

      .other-pages-link {
        height: inherit;
        display: flex;
        gap: 32px;
        width: 334px;
        font-size: 16px;
        align-items: center;

        #aboutUs {
          color: #727272;
        }
        #logIn{
          color: ${(prop) => (prop.currentForm === "log in" ? "black" : "#727272")};
          font-weight: ${(prop) => (prop.currentForm === "log in" ? "bold" : "light")};
        }
        #createAccount {
          background-color: black;
          height: 60%;
          border-radius: 10px;
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 142px;
        }
      }
    }
  }
`;