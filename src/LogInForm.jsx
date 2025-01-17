import React, { useState } from 'react';
import styled from 'styled-components';

export default function LogInForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted successfully!');
    console.log('Form Data:', formData);
  };

  return (
    <LogInFormDiv>
      <div className="main-sec-head">
        <div>Log in to your account</div>
        <div>or <u>create a new account</u></div>
      </div>
      <div className="main-sec-body">
        <div className="input-section">
          <form onSubmit={handleSubmit} className="form-container">
            <div className="input-group">
              <div className="label">Email Address</div>
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
              <div>
                <input type="radio" id="remember-me" />
                <label htmlFor="remember-me">Remember Me</label>
              </div>
              <div><u>Forgot password?</u></div>
            </div>
            <div className="logIn">
              <button type="submit" className="submit-button">
                Log In
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
              <img src="/google.svg" alt="Sign in with Google" />
            </div>
            <div className="other-sign-in-option-btn">
              <img src="/apple.svg" alt="Sign in with Apple" />
            </div>
            <div className="other-sign-in-option-btn">
              <img src="/facebook.svg" alt="Sign in with Facebook" />
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
    margin-top: 132px;
    display: flex;
    flex-direction: column;
    gap: 48px;
    .main-sec-head{
      display: flex;
      flex-direction: column;
      align-items: center;
      font-weight:bold;
      gap: 4px;
      :first-child{
        font-size: 26px;
      }
      :last-child{
        font-size: 16px;
      }
    }
    .main-sec-body{
      padding: 48px 32px 48px 32px;
      display: flex;
      flex-direction: column;
      gap: 24px;
      height: 595px;
      box-shadow: -2px -2px 4px rgba(0, 0, 0, 0.1);
      .join-signIn {
      width: 100%;
      height: 46px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 32px;

      div {
        width: 49%;
        height: inherit;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 18px;
        border-bottom: 1px solid #c5c5c5;
      }
    }

    .input-section {
      height: 250px;

      form {
        width: inherit;
        height: inherit;
        display: flex;
        flex-direction: column;
        gap: 16px;

        .input-group {
          font-size: 14px;
          display: flex;
          flex-direction: column;
          gap: 10px;

          input {
            width: 85%;
            height: 48px;
            border-radius: 5px;
            border: 1px solid grey;
            padding-left: 20px;
            font-size: 20px;
          }
        }
        .forgot-password-remember-me{
            display: flex;
            font-size: 14px;
            align-items: center;
            justify-content: space-between;
            :first-child{
              input{
                background-color: #D9D9D9;
                height: 16px;
                width: 16px;
                appearance: none;
                margin-right: 8px;
                border-radius: 2px;
              }
            }
          }
        .logIn {
          width: 100%;
          height: 49px;
          button {
            width: inherit;
            height: 49px;
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
        }
      }

      .other-sign-in-opt{
        display: flex;
        gap: 24px;
        justify-content: center;
        .other-sign-in-option-btn {
          height: 48px;
          width: 48px;
          background-color: #F4F4F4;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1px solid #D9D9D9;
          border-radius: 6px;
        }
      }
    }
    }
`