import React from 'react'
import styled from 'styled-components'
import { Header } from '../pages/Header/Header'
import PaymentSection from './PaymentSection'
const AddCard = () => {
  return (
    <>
        <Header/>
        <AddCardHead>
          <div className="back">
            <img src="/lessThan.svg" alt="Back to previous page" />
            Back
          </div>
          <div className="title">Add Card</div>
        </AddCardHead>
        <PaymentSection/>
        <AddContainer>
          <CheckboxContainer>
            <input type="checkbox" />
            Save card details for next time
          </CheckboxContainer>
          <UseCardButton>Use Card</UseCardButton>
        </AddContainer>
    </>
  )
}

const AddCardHead = styled.div`
  display: flex;
  width: 100%;
  gap: 8px;
  padding: 10px;
  .back{
    display: flex;
    align-items: center;
    margin-right: auto;
    font-size: 14px;
    img{
      width: 12px;
      height: 12px;
    }
  }
  .title {
    margin: 0 auto; /* Moves the second element to the center */
    color: #000000;
    font-weight: 600;
    text-align: center;
    transform: translateX(-65%);
  }
`
const AddContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  flex-direction: column;
  padding: 10px;
  gap: 5px;
`;

const CheckboxContainer = styled.label`
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #333;
  cursor: pointer;
  width: 100%;
  
  input {
    margin-right: 8px;
    cursor: pointer;
  }
`;

const UseCardButton = styled.button`
  background-color: black;
  width: 100%; 
  color: white;
  border: none;
  padding: 10px 15px;
  font-size: 14px;
  font-family: Inter;
  cursor: pointer;
  border-radius: 5px;
  
  &:hover {
    background-color: #222;
  }
`;


export default AddCard
