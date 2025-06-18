import styled from "styled-components";
import { signInWithGoogle } from "../../firebase/auth";
import {useSelector } from "react-redux";
export default function SignInPage(){
  const { isLoading, error } = useSelector((state) => state.auth);
    return(
        <SignInDiv>
            <CenteredDiv>
                <div className="logo">
                  <img src="/fullSababaLogo.svg" alt="sababa logo" />
                </div>
                <div className="welcome">
                  Welcome, continue to Google sign in
                </div>
                <button onClick={()=>{signInWithGoogle()}}>
                  <img src="/google.svg" alt="google logo" />
                  <div>
                    Sign in with Google
                  </div>
                  {isLoading && <div className="loading">Loading...</div>}
                  {error && console.error("Error signing in:", error)}
                </button>
            </CenteredDiv>
        </SignInDiv>

    )
}

const SignInDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const CenteredDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;

  
  .logo {
    margin-bottom: 20px;
  }
  
  .welcome {
    margin-bottom: 20px;
    font-size: 20px;
    font-weight: 600;
    font-family: 'Inter', sans-serif;
    color: #333;
  }
  
  button {
    display: flex;
    align-items: center;
    background-color: #D9D9D9;
    color: white;
    padding: 10px 20px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    height: 60px;
    width: 250px;

    img {
      margin-right: 10px;
      height: 24px;
      width: 24px;
    }
    
    div {
      font-size: 16px;
      font-weight: 500;
      font-family: 'Inter', sans-serif;
      color: #333;
    }

    &:hover {
      background-color: #bbbbbb;
    }
  }
`;