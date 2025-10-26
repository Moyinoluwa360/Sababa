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
        <div className="titleDes">
          Discover looks you love and shop each item with ease.
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
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  justify-content:center;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  height: 40px;
  margin: 21px 0 40px 0;
  background-color: #D9D9D9;
  @media (max-width: 480px) {
    margin-bottom: 30px;
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
  .titleDes{
    color: #787C7F;
    font-weight: 500;
    text-align: center;
    padding-left: 2px;
    padding-right: 5px;
    @media (max-width: 480px) {
      font-size: 12px;
    }
  }
`

const MainSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-bottom: 40px;
  background-color: #D9D9D9; 
`
