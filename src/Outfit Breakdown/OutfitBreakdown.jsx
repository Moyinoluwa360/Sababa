"use client";
import * as React from "react";
import styled from "styled-components";
import {Header} from "../Header/Header"
import Footer from "../Footer"
import BreadcrumbNav from "../BreadcrumbNav";
import { OutfitGallery } from "./OutfitGallery";
import { OutfitDetails } from "./OutfitDetails";

function OutfitBreakdown() {
  return (
    <main className="ootd-container">
      <Header />
      <BreadcrumbNav/>
      <PageTitle>
        <div className="pTitle">
          Outfit Of The Day 100
        </div>
        {
          <div className="buyall">
            <u>Buy all</u>
          </div>
        }
      </PageTitle>
      <MainSection>
        <OutfitDetails />
        <OutfitGallery />
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
  .pTitle{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-size: 32px;
    font-weight: 600;
  }
  .buyall{
    margin-left: auto;
    font-size: 16px;
    margin-right: 40px;
  }
`

const MainSection = styled.section`
  display: flex;
  padding: 0 40px 0 40px;
  margin-bottom: 40px;
  @media (max-width: 1050px) {
    flex-direction: column;
    gap: 5px;
  }
  @media (max-width: 440px) {
    padding: 0 16px 0 16px;
  }
`

export default OutfitBreakdown;
