import React, { useState } from 'react';
import styled from 'styled-components';
import { createUserWithEmail, signInWithGoogle } from '../../firebase/auth';
import { useSelector } from 'react-redux';

export default function CreateAccForm(props) {
  const authError = useSelector((state) => state.auth.error);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError(''); // clear error when typing
  };

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      return 'All fields are required';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return 'Please enter a valid email address';
    }
    if (formData.password.length < 6) {
      return 'Password must be at least 6 characters';
    }
    if (formData.password !== formData.confirmPassword) {
      return 'Passwords do not match';
    }
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    createUserWithEmail(formData.email, formData.password, formData.name);
  };

  return (
    <CreateAccFormDiv>
      <div className="main-sec-head">
        <div>Create your account</div>
        <div>or <u onClick={() => { props.setCurrentForm("sign in") }}>sign in</u></div>
      </div>
      <div className="main-sec-body">
        <div className="input-section">
          <form onSubmit={handleSubmit} className="form-container">
            <div className="input-group">
              <div className="label">Username</div>
              <input
                type="text"
                name="name"
                className="input"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <div className="label">Email address</div>
              <input
                type="email"
                name="email"
                className="input"
                value={formData.email}
                onChange={handleChange}
                required
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
                required
              />
            </div>
            <div className="input-group">
              <div className="label">Confirm password</div>
              <input
                type="password"
                name="confirmPassword"
                className="input"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
            <div className="terms">
              By creating an account, you agree to our<pre> </pre><b><u>Terms Of Use</u></b>
            </div>
            {error && <div style={{ color: 'red', fontSize: '14px', marginBottom: '8px', fontWeight:"600" }}>{error}</div>}
            <div className="createAccBtn">
              <button type="submit" className="submit-button">
                Sign Up
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
            <div className="other-sign-in-option-btn Google-sign-in"
              onClick={()=>{signInWithGoogle()}}
            >
              <span>
                <img src="/google.svg" alt="Sign in with Google" loading='lazy' />
                Google
              </span>
            </div>
          </div>
        </div>
      </div>
    </CreateAccFormDiv>
  );
}
const CreateAccFormDiv = styled.div`
    width: 514px;
    height: 680px;
    align-self: center;
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    @media (max-width: 500px){
        width: 100%;
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
        font-size: 28px;
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
      height: 684px;
      @media (max-width: 500px){
        padding: 16px;
      }
      @media (max-width: 280px){
        padding: 8px;
      }

    .input-section {
      height: fit-content;
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
              font-size: 14px;
              padding-left: 10px;
            }
          }
        }
        .terms{
            display: flex;
            font-size: 14px;
            justify-content: center;
            color: #727272;
            @media (max-width: 500px){
              display: none;
            }
            }
            u{
              color: black;
            }
          }
        .createAccBtn {
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
      @media (max-width: 500px){
        margin-top: 0px;
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
`