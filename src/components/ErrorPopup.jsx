import styled from "styled-components";

export default function ErrorPopup({ message, onClose }) {
  if (!message) return null;

  return (
    <ErrPopup className="error-popup">
      <span>Error: {message}</span>
      <button className="close-btn" onClick={onClose}>×</button>
    </ErrPopup>
  );
}

const ErrPopup = styled.div`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: #ffc8c9;
  color: #ff3636;
  padding: 12px 20px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  z-index: 10000;
  @media (max-width:500px){
    width: 80%;
    padding: 10px 5px;
  }


.close-btn {
  background: transparent;
  border: none;
  color: #ff3636;
  font-size: 20px;
  cursor: pointer;
}
`