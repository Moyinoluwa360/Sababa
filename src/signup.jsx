import styled from "styled-components";
import { useState } from "react";

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
                <div className="logo-sec">
                    <img src="/3bars.svg" alt="collapsable bar" />
                    <span>sababa</span>
                </div>
                <div className="icons">
                    <img src="/shopping.svg" alt="shopping iccon" />
                    <img src="like.svg" alt="liked icon" />
                    <img src="account.svg" alt="account icon" />
                </div>
            </header>
            <div className="join-signIn">
                <div className="join">
                    Join
                </div>
                <div className="signUp">
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
                        placeholder="Enter your email"
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
                        placeholder="Enter your password"
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
                            Forgot passsword?
                        </div>
                    </div>
                </form>
            </div>
            <div className="other-sign-in-options">
                <span> or sign in with</span>
                <div className="other-sign-in-option-btn">
                    <img src="/google.svg" alt="sign in with Google" />
                </div>
                <div className="other-sign-in-option-btn">
                    <img src="/apple.svg" alt="sign in with Google" />
                </div>
                <div className="other-sign-in-option-btn">
                    <img src="/facebook.svg" alt="sign in with Google" />
                </div>
            </div>
        </SignUpDiv>
    )
}

const SignUpDiv = styled.div`
    
`