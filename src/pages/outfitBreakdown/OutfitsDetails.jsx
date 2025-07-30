"use client";
import styled from "styled-components";
import {Header} from '../Header/Header'
import Footer from "../../components/Footer"
import BreadcrumbNav from "../../components/BreadcrumbNav";
import { OutfitGallery } from "./OutfitGallery";
import {Details } from "./Details";
import useWindowWidth from "../../components/useWindowWidth";

function OutfitsDetails() {
  return (
    <main className="ootd-container">
      <Header />
      <BreadcrumbNav/>
      <PageTitle>
        <div className="pTitle">
          {
            useWindowWidth() > 481 ? "Outfit Of The Day 100" : "OOTD 100"
          }
        </div>
        {
          <div className="buyall">
            <u>Buy all</u>
          </div>
        }
      </PageTitle>
      <MainSection>
        <OutfitGallery />
        <Details />
        <Buyall>
          Buy All
        </Buyall>
      </MainSection>
      <Footer />
    </main>
  );
}

const StyledMain = styled.main`
  background-color: rgba(252, 252, 252, 1);
  overflow: hidden;
`;

const PageTitle = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  height: 40px;
  margin: 21px 0 40px 0;
  @media (max-width: 480px) {
    margin-bottom: 0px;
  }
  .pTitle{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-size: 32px;
    font-weight: 600;
    @media (max-width: 700px) {
      font-size: 25px;
    }
    @media (max-width: 550px) {
      font-size: 20px;
    }
    @media (max-width: 480px) {
      font-size: 16px;
    }
  }
  .buyall{
    margin-left: auto;
    font-size: 16px;
    margin-right: 40px;
    @media (max-width: 480px) {
      display: none;
    }
  }
`

const MainSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 0 40px 0 40px;
  margin-bottom: 40px;
  @media (max-width: 680px) {
    padding: 0 16px 0 16px;
  }
  @media (max-width: 360px) {
    padding: 0 8px 0 8px;
  }
`
const Buyall = styled.button`
  display: none;
  @media (max-width: 480px) {
    display: flex;
    width: 100%;
    height: 40px;
    border: none;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    background-color: black;
    color: white;
    font-family: Inter;
    border-radius: 5px;
  }
`

export default OutfitsDetails;
