"use client";
import styled from "styled-components";
import BreadcrumbNav from "../../components/BreadcrumbNav";
import { OutfitGallery } from "./OutfitGallery";
import { Details } from "./Details";
import useWindowWidth from "../../components/useWindowWidth";
import { useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export function OutfitDetails() {
  const location = useLocation();
  const { id, gender, day } = useParams();
  const outfits = useSelector((state) => state.outfits.outfits);
  const menOOTW = useSelector((state) => state.outfits.menOOTW);
  const womenOOTW = useSelector((state) => state.outfits.womenOOTW);
  const windowWidth = useWindowWidth();
  const outfit = outfits.find((item) => String(item.id) === String(id));
  const { outfitNumber: outfitNumberFromState, ootdType: ootdTypeFromState, ootwData: ootwDataFromState } = location.state || {};

  const normalizedGender = (gender || outfit?.gender || "").toString().toLowerCase();
  const filteredOutfits = outfits.filter((item) => {
    const g = (item.gender || "").toString().toLowerCase();
    if (!normalizedGender) return true;
    if (normalizedGender === "men" || normalizedGender === "male") {
      return g === "men" || g === "male";
    }
    if (normalizedGender === "women" || normalizedGender === "female") {
      return g === "women" || g === "female";
    }
    return g === normalizedGender;
  });
  const derivedIndex = filteredOutfits.findIndex((item) => String(item.id) === String(id));
  const derivedOutfitNumber = derivedIndex >= 0 ? filteredOutfits.length - derivedIndex : undefined;
  const resolvedOutfitNumber = outfitNumberFromState ?? derivedOutfitNumber;

  const isOotwRoute = Boolean(day);
  const normalizedDay = (day || "").toString().toLowerCase();
  const ootwFromStore = isOotwRoute
    ? [...(menOOTW || []), ...(womenOOTW || [])].find(
        (item) => (item?.day || "").toString().toLowerCase() === normalizedDay
      )
    : undefined;
  const resolvedOotwData = ootwDataFromState || ootwFromStore;
  const isOotw = ootdTypeFromState === "ootw" || isOotwRoute;
  const resolvedOutfit = isOotw ? resolvedOotwData : outfit;

  const hasOutfitNumber = resolvedOutfitNumber !== undefined && resolvedOutfitNumber !== null;
  const dayTitle = resolvedOutfit?.day
    ? String(resolvedOutfit.day).charAt(0).toUpperCase() + String(resolvedOutfit.day).slice(1)
    : "Outfit of the Week";
  const titleText = isOotw
    ? dayTitle
    : hasOutfitNumber
      ? windowWidth > 481
        ? `Outfit Of The Day ${resolvedOutfitNumber}`
        : `OOTD ${resolvedOutfitNumber}`
      : windowWidth > 481
        ? "Outfit Of The Day"
        : "OOTD";
  const likeNumber = isOotw
    ? (resolvedOutfit?.id ?? resolvedOutfit?.day)
    : (resolvedOutfitNumber ?? resolvedOutfit?.id);
  return (
    <main className="ootd-container">
      <BreadcrumbNav/>
      <PageTitle>
        <div className="pTitle">
          {titleText}
        </div>
        <div className="titleDes">
          {isOotw ? "Outfit of the Week - Summer Essentials" : "Discover looks you love and shop each item with ease."}
        </div>
      </PageTitle>
      <MainSection>
        {
          resolvedOutfit ? (
            <>
              <OutfitGallery outfit={resolvedOutfit} outfitNumber={likeNumber} />
              <Details outfit={resolvedOutfit} />
            </>
          ) : (
            <div style={{textAlign:"center"}} >Loading...</div>
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
