import React from 'react'
import styled from 'styled-components'
import ShippingForm from './ShippingForm'

const MobileCheckoutComponent = () => {
  return (
    <MainSection>
        <MyBag>
            <div className="myBagHeader">
                My Bag
                <u><a href="">View</a></u>
            </div>
            <div className="bag">
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc4a2616ff884550c14ef0c012edc36bdf8d39d7" alt="product" />
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc4a2616ff884550c14ef0c012edc36bdf8d39d7" alt="product" />
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc4a2616ff884550c14ef0c012edc36bdf8d39d7" alt="product" />
            </div>
        </MyBag>
        <TotalItems>
            <div className="numItems">
                3 Items
            </div>
            <div className="totalPrice">
                $102.99
            </div>
        </TotalItems>
        <ShippingForm/>
        <DeliveryInfo>
            <AmazonDel>
              <div>
                  <div className="EtsyLabel">Amazon (2 items) </div>
                  <div className="price">$102.12</div>
              </div>
              <div>
                  <div className="dateLabel">Delivery date</div>
                  <div className="date">15th March 2025</div>
              </div>
            </AmazonDel>
            <EtsyDel>
              <div>
                  <div className="EtsyLabel">Etsy (1 items) </div>
                  <div className="price">$11.15</div>
              </div>
              <div>
                  <div className="dateLabel">Delivery date</div>
                  <div className="date">15th March 2025</div>
              </div>
            </EtsyDel>
            <Total>
              <div className="totaILabel">Total shipping fee</div>
              <div className="totalPrice">$127.30</div>
            </Total>
        </DeliveryInfo>
        <PaymentDetails>
          <div className="PDtitle">
            Payment Details
          </div>
          <button className="cardOpt"><img src="/cardIcon.svg" alt="Bank card"/> Add Debit/Credit Card</button>
          <button className="transferOpt"><img src="/bankIcon.svg" alt="bank transfer" /> Bank Transfer</button>
        </PaymentDetails>
        <OrderTotals>
            <TotalRow>
                <TotalLabel>Price:</TotalLabel>
                <TotalValue>$105.12</TotalValue>
            </TotalRow>
            <TotalRow>
                <TotalLabel>Shipping:</TotalLabel>
                <TotalValue>$5.12</TotalValue>
            </TotalRow>
            <TotalRow>
                <TotalLabel>Discount:</TotalLabel>
                <TotalValue>-$0.00</TotalValue>
            </TotalRow>
            <FinalTotalRow>
                <TotalLabel>Total:</TotalLabel>
                <TotalValue>$110.12</TotalValue>
            </FinalTotalRow>
        </OrderTotals>
        <PayButton>Pay now</PayButton>
        <Terms>
            By placing your order you agree to our Terms & Conditions,
             Privacy & Return Policies. You also consent to some of your data 
             being stored by SABABA, which may be used to make future shopping 
             experiences better for you.
        </Terms>
    </MainSection>
  )
}

const MainSection = styled.div`
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    @media (max-width: 480px){
        padding: 8px;
    }
`
const MyBag = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-top: 1px solid #e4e4e4;
    border-bottom: 1px solid #e2e2e2;
    padding: 10px 0 10px 0;
    .myBagHeader{
        display: flex;
        justify-content: space-between;
        font-family: Inter;
        font-size: 16px;
        font-weight: 600;
        a{
            text-decoration: none;
            font-family: Inter;
            font-size: 12px;
            color: #545454;
        }
        U{
            color: #545454;
        }
    }
    .bag{
        display: flex;
        overflow-x: auto;
        gap: 10px;
        img{
            width: 71px;
            height: 75px;
        }
    }
`
const TotalItems = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    .numItems{
        font-size: 12px;
        color: #1C1C1C;
        font-family: Inter;
    }
    .totalPrice{
        font-size: 14px;
        font-weight: 600;
        font-family: Inter;
    }
`

const DeliveryInfo = styled.div`
  margin-bottom: 24px;
`;

const AmazonDel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 0 0 10px 0;
  border-bottom: 1px solid #d3d3d3;
  div{
    display: flex;
    justify-content: space-between;
    font-family: Inter;
    font-size: 16px;
    :first-child{
      color: #545454;
    }
    @media (max-width: 480px){
        font-size: 12px;
    }
  }
`
const EtsyDel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 10px 0 10px 0;
  border-bottom: 1px solid #d3d3d3;
  div{
    display: flex;
    justify-content: space-between;
    font-family: Inter;
    font-size: 16px;
    :first-child{
      color: #545454;
    }
    @media (max-width: 480px){
        font-size: 12px;
    }
  }
`
const Total = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 600;
  margin-top: 10px;
  @media (max-width: 480px){
    font-size: 12px;
  }
`

const PaymentDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  div{
    font-size: 14px;
    font-weight: 600;
  }
  button{
    border: 1px solid #EDEDED;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    gap: 5px;
    border-radius: 5px;
    @media (max-width: 340px){
      font-size: 12px;
    }
  }
`

const OrderTotals = styled.div`
  margin-bottom: 24px;
`;

const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const TotalLabel = styled.span`
  color: #545454;
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-weight: 500;
  @media (max-width: 480px){
    font-size: 12px;
  }
`;

const TotalValue = styled.span`
  color: #545454;
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-weight: 500;
  @media (max-width: 480px){
    font-size: 12px;
  }
`;

const FinalTotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  span{
    font-weight: 600px;
    color: black;
  }
  @media (max-width: 480px){
    font-size: 12px;
    margin-bottom: 0;
  }
`;

const PayButton = styled.button`
  width: 100%;
  height: 48px;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  background-color: #4caf50;
  @media (max-width: 480px){
    font-size: 12px;
    height: 35px;
  }
`;

const Terms = styled.div`
    font-size: 11px;
    color: #a1a1a1;
    @media (max-width: 480px){
    font-size: 10px;
  }
`
export default MobileCheckoutComponent
