import styled from "styled-components";
import LogInForm from "./LogInForm";
import Footer from "./Footer";
export default function SignUp(){
    return(
        <SignUpDiv>
            <header>
                <div className="headerContent">
                    <div className="logo-sec">
                        <img src="/SababaLogo.svg" alt="Sababa Logo" height={"40px"} width={"40px"}/>
                        <img src="sababa.svg" alt="sababa" height={"25px"} width={"90px"}/>
                    </div>
                    <div className="other-pages-link">
                        <div id="aboutUs">About Us</div>
                        <div id="logIn">Log In</div>
                        <div id="createAccount">Create Account</div>
                    </div>
                </div>
            </header>
            <LogInForm/>
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
    height: 34px;
    display: flex;
    justify-content: center;
    margin-top: 16px;
    margin-bottom: 16px;

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
        #createAccount {
          background-color: black;
          height: 100%;
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