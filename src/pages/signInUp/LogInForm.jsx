import React, { useState } from 'react';
import styled from 'styled-components';

export function LogInForm(props) {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
      alert(formData.email, formData.password)
  };

  
  
  return (
    <LogInFormDiv>
      <div className="main-sec-head">
        <div>Sign in to your account</div>
        <div>or <u onClick={()=>{props.setCurrentForm("create account")}}>sign up</u></div>
      </div>
      <div className="main-sec-body">
        <div className="input-section">
          <form onSubmit={handleSubmit} className="form-container">
            <div className="input-group">
              <div className="label">Email address</div>
              <input
                type="email"
                name="email"
                className="input"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <div className="label">Password</div>
              <input
                type="password"
                name="password"
                className="input"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className="forgot-password-remember-me">
              <div className='remember-me'>
                <input type="radio" id="remember-me" />
                <label htmlFor="remember-me">Remember me</label>
              </div>
              <div><u>Forgot password?</u></div>
            </div>
            <div className="logIn">
              <button type="submit" className="submit-button">
                Log in
              </button>
            </div>
          </form>
        </div>
        <div className="other-sign-in-options">
          <span>
            <div className="line" />
            <div className="text">or continue with</div>
            <div className="line" />
          </span>
          <div className="other-sign-in-opt">
            <div className="other-sign-in-option-btn">
              <span>
                <img src="/google.svg" alt="Sign in with Google" loading='lazy'/>
                Google
              </span>
            </div>
          </div>
        </div>
      </div>
    </LogInFormDiv>
  );
}

const LogInFormDiv = styled.div`
    width: 514px;
    height: 595px;
    align-self: center;
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    gap: 48px;
    @media (max-width: 500px){
      width: 100%;
      gap: 16px;
      margin-top: 10px;
    }
    .main-sec-head{
      display: flex;
      flex-direction: column;
      align-items: center;
      font-weight:bold;
      gap: 4px;
      @media (max-width: 500px){
        display: none;
      }
      :first-child{
        font-size: 26px;
      }
      :last-child{
        font-size: 16px;
        font-weight: 500;
      }
    }
    .main-sec-body{
      padding: 16px 32px 48px 32px;
      display: flex;
      flex-direction: column;
      gap: 24px;
      height: 595px;
      @media (max-width: 500px){
        padding: 16px;
      }
      @media (max-width: 280px){
        padding: 8px;
      }

      .join-signIn {
      width: 100%;
      height: 46px;
      background-color: #727272;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 32px; 
    }

    .input-section {
      height: 250px;
      width: 100%;
      @media (max-width: 500px){
        height: fit-content;
      }
      form {
        width: inherit;
        height: inherit;
        display: flex;
        flex-direction: column;
        gap: 16px;
        @media (max-width: 500px){
          gap: 12px;
        }

        .input-group {
          font-size: 14px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          @media (max-width: 500px){
            gap: 3px;
            font-size: 12px;
          }

          input {
            width: 100%;
            height: 48px;
            border-radius: 5px;
            border: 1px solid grey;
            padding-left: 20px;
            font-size: 20px;
            @media (max-width: 500px){
              height: 44px;
              padding-left: 10px;
              font-size: 14px;
            }
          }
        }
        .forgot-password-remember-me{
            display: flex;
            font-size: 14px;
            align-items: center;
            justify-content: space-between;
            @media (max-width: 500px){
              font-size: 12px;
              justify-content: end;
            }
            :first-child{
              input{
                background-color: #D9D9D9;
                height: 16px;
                width: 16px;
                appearance: none;
                margin-right: 8px;
                border-radius: 2px;
                @media (max-width: 500px){
                  height: 12px;
                  width: 12px;
                }
              }
              display: flex;
              align-items: center;
            }
            .remember-me{
              @media (max-width: 500px){
                display: none;
              }
            }
          }
        .logIn {
          width: 100%;
          height: 49px;
          @media (max-width: 500px){
            height: 44px;
          }
          button {
            width: inherit;
            height: inherit;
            background-color: black;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 16px;
            color: #d9d9d9;
            font-weight: bold;
            border-radius: 10px;
          }
        }
      }
    }

    .other-sign-in-options {
      display: flex;
      flex-direction: column;
      gap: 16px;
      @media (max-width: 500px){
        gap: 0px;
      }
      img {
        width: 20px;
        height: 20px;
      }

      > span {
        display: flex;
        align-items: center;
        width: 100%;
        margin: 20px 0;
        .line {
          flex: 1;
          height: 1px;
          background-color: #D9D9D9; 
        }
        .text {
          margin: 0 15px;
          white-space: nowrap;
          font-size: 14px;
          color: #727272;
          @media (max-width: 500px){
            font-size: 12px;
          }
        }
      }

      .other-sign-in-opt{
        display: flex;
        gap: 24px;
        flex-direction: column;
        justify-content: center;
        .other-sign-in-option-btn {
          height: 48px;
          width: 100%;
          background-color: #F4F4F4;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1px solid #D9D9D9;
          border-radius: 6px;
          span{
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 16px;
            color: #727272;
          }
        }
      }
    }
    }
`