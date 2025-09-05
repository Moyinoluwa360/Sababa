import React from "react";
import { useNavigate } from "react-router-dom";
export default function SignInModal({ open, setShowModal }) {
  if (!open) return null;
  const navigate = useNavigate();
  return (
    <div style={{
      position: "fixed",
      top: 0, left: 0, right: 0, bottom: 0,
      background: "rgba(0,0,0,0.5)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 100000
    }}>
      <div style={{
        background: "#fff",
        borderRadius: "10px",
        padding: "32px 24px 16px 24px",
        minWidth: "320px",
        boxShadow: "0 2px 16px rgba(0,0,0,0.2)",
        textAlign: "center",
        position: "relative"
      }}>
        <button
          onClick={()=> setShowModal(false)}
          style={{
            position: "absolute",
            top: 12,
            right: 16,
            border: "none",
            fontSize: 25,
            cursor: "pointer",
            color : "#000",
            background: "none"
          }}
          aria-label="Close"
        >×</button>
        <h2 style={{ marginBottom: 16, color:"black"}}>Please Sign In</h2>
        <p style={{ marginBottom: 32, color:"black"}}>Sign in to add items to your wishlist.</p>
        <button
          onClick={() => navigate("/signin")} 
          style={{
            width: "100%",
            background: "#000",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            padding: "12px 0",
            fontSize: "16px",
            cursor: "pointer"
          }}
        >
          Sign In
        </button>
      </div>
    </div>
  );
}