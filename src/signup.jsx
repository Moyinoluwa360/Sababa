import styled from "styled-components";
import { useState } from "react";
import { device } from './theme';

export default function SignUp(){
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
    return(
        <SignUpDiv>
            <header>
                <div className="headerContent">
                    <div className="logo-sec">
                        <img src="/SababaLogo.svg" alt="Sababa Logo" height={"40px"} width={"40px"}/>
                        <img src="sababa.svg" alt="sababa" height={"25px"} width={"90px"}/>
                    </div>
                    {
                        window.innerWidth > 500 ?
                        <div className="other-pages-link">
                            <div id="aboutUs">About Us</div>
                            <div id="logIn">Log In</div>
                            <div id="createAccount">Create Account</div>
                        </div>
                        :
                        <div className="icons">
                            <img src="/shopping.svg" alt="shopping iccon" height={"20px"} width={"16px"}/>
                            <img src="like.svg" alt="liked icon" height={"20px"} width={"22px"} />
                            <img src="account.svg" alt="account icon" height={"20px"} width={"20px"} />
                        </div>
                    }
                </div>
            </header>
            <div className="join-signIn">
                <div className="join">
                    Join
                </div>
                |
                <div className="signIn">
                    Sign In
                </div>
            </div>
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
                    <div className="signIn-forgotPassword">
                        <button type="submit" className="submit-button">
                            Sign In
                        </button>
                        <div className="forgot-password">
                            <u>Forgot passsword?</u> 
                        </div>
                    </div>
                </form>
            </div>
            <div className="other-sign-in-options">
                <span> or sign in with</span>
                <div className="other-sign-in-option-btn">
                    <img src="/google.svg" alt="sign in with Google" />
                    <span>Goggle</span>
                </div>
                <div className="other-sign-in-option-btn">
                    <img src="/apple.svg" alt="sign in with Apple" />
                    <span>Apple</span>
                </div>
                <div className="other-sign-in-option-btn">
                    <img src="/facebook.svg" alt="sign in with facebook" />
                    <span>Facebook</span>
                </div>
            </div>
        </SignUpDiv>
    )
}

const SignUpDiv = styled.div`
    background-color: #ffffff;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    font-family: inter;
    @media ${device.mobile} {
  }
  header{
        width: 100%;
        height: 34px;
        display: flex;
        justify-content: center;
        margin-top: 16px;
        margin-bottom: 16px;
        .headerContent{
            margin: 0 16px 0 16px;
            width: inherit;
            height: inherit;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .logo-sec{
                display: flex;
                gap: 8px;
                align-items: center;
            }
            .icons{
                display: flex;
                gap: 16px ;
            }
            .other-pages-link{
                height: inherit;
                display: flex;
                gap: 32px;
                width: 334px;
                font-size: 16px;
                align-items: center;
                #aboutUs{
                    color: #727272;
                }
                #createAccount{
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
    .join-signIn{
        @media ${device.mobile} {
            width: 100%;
            height: 46px;
        }
        display:flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 32px;
        div{
            width:49%;
            height: inherit;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 18px;
            border-bottom: 1px solid #c5c5c5;
        }
    }
    .input-section{
        margin: 0 16px 0 16px;
        height: 250px;
        form{
            width: inherit;
            height: inherit;
            display: flex;
            flex-direction: column;
            gap: 16px;
            .input-group{
                font-size: 12px;
                font-weight: bold;
                display: flex;
                flex-direction: column;
                gap: 4px;
                input{
                    width: inherit;
                    height: 48px;
                    border-radius:5px;
                    border: 1px solid grey;
                }
            }
            .signIn-forgotPassword{
                margin-top: 16px;
                width: 100%;
                height: 49px;
                button{
                    width: inherit;
                    height: 49px;
                    background-color: black;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 16px;
                    color:  #D9D9D9;
                    font-weight: bold;
                    border-radius: 5px;
                }
                .forgot-password{
                    display: flex;
                    justify-content: end;
                    margin-top: 4px;
                    font-weight: bold;
                }
            }
        }
    }
    .other-sign-in-options{
            margin: 48px 16px 0 16px;
            display: flex;
            flex-direction: column;
            gap: 16px;
            font-weight: bold;
            img{
                width: 20px;
                height: 20px;
            }
            >span{
                text-align: center;

            }
            .other-sign-in-option-btn{
                width: inherit;
                height: 48px;
                border-radius: 5px;
                display: flex;
                align-items: center;
                padding-left: 30px;
                border: 1px solid black;
                text-align: center;
                img{
                    margin-right: auto;
                }
                span{
                        position: absolute;
                        left: 50%;
                        transform: translateX(-50%);
                    }
            }
        }
`