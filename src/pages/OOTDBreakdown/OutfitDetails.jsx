"use client";
import styled from "styled-components";
import BreadcrumbNav from "../../components/BreadcrumbNav";
import { OutfitGallery } from "./OutfitGallery";
import {Details } from "./Details";
import useWindowWidth from "../../components/useWindowWidth";
import { useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export function OutfitDetails() {
  const location = useLocation();
  const { id } = useParams();
  const outfits = useSelector((state) => state.outfits.outfits);
  const outfit = outfits.find(outfit => outfit.id == id)
  const { outfitNumber } = location.state || {};

  return (
    <main className="ootd-container">
      <BreadcrumbNav/>
      <PageTitle>
        <div className="pTitle">
          {
            useWindowWidth() > 481 ? `Outfit Of The Day ${outfitNumber}` : `OOTD ${outfitNumber}`
          }
        </div>
      </PageTitle>
      <MainSection>
        {
          outfit ? (
            <>
              <OutfitGallery outfit = {outfit} />
              <Details outfit = {outfit} />
            </>
          ) : (
            <div>Loading...</div>
          )
        }
      </MainSection>
    </main>
  );
}


const PageTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content:center;
  height: 40px;
  margin: 21px 0 40px 0;
  background-color: #ffffff;
  @media (max-width: 480px) {
    margin-bottom: 0px;
  }
  .pTitle{
  align-self:center;
    font-size: 32px;
    font-weight: bold;
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
`

const MainSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 0 40px 0 40px;
  margin-bottom: 40px;
  background-color: #ffffff;
  @media (max-width: 680px) {
    padding: 0 16px 0 16px;
  }
  @media (max-width: 360px) {
    padding: 0 8px 0 8px;
  }
`
