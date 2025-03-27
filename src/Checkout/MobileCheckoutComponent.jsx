import React from 'react'
import styled from 'styled-components'

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
    </MainSection>
  )
}

const MainSection = styled.div`
    background-color: aqua;
    padding: 16px;
`
const MyBag = styled.div`
    background-color: aquamarine;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-top: 1px solid #545454;
    border-bottom: 1px solid #545454;
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

export default MobileCheckoutComponent
