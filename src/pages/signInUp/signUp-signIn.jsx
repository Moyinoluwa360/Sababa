import styled from "styled-components";
import { LogInForm } from "./LogInForm";
import Footer from "../../components/Footer";
import CreateAccForm from "./CreateAccForm";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ErrorPopup from "../../components/ErrorPopup";
import { store } from "../../redux/store";
import { setError } from "../../redux/slices/authSlice";
import Header from "../../components/Header/Header";

export default function SignUpSignInPage() {
  const [currentForm, setCurrentForm] = useState("sign in");
  const authError = useSelector((state) => state.auth.error);
  const [popupError, setPopupError] = useState("");

  useEffect(() => {
      if (authError) {
        setPopupError(authError);
        store.dispatch(setError(false));
      }
    }, [authError]);

  return (
    <SignUpDiv $currentForm={currentForm}>
      <Header/>
      {popupError &&
       (<ErrorPopup message={popupError} onClose={() => setPopupError("")} />)
      }

      {/* Error Popup */}
      {authError && <ErrorPopup>{authError}</ErrorPopup>}

      {currentForm === "sign in" ? (
        <LogInForm setCurrentForm={setCurrentForm} />
      ) : (
        <CreateAccForm setCurrentForm={setCurrentForm} />
      )}
      <Footer/>
    </SignUpDiv>
  );
}

const SignUpDiv = styled.div`
  background-color: #D9D9D9;
  height: 100%;
  width: 100%;
  font-family: inter;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

`;
