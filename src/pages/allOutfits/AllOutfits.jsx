"use client";
import styled from 'styled-components';
import OutfitCard from '../../components/OutfitCard';
import BreadcrumbNav from '../../components/BreadcrumbNav'
import { useSelector} from 'react-redux';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';


const AllOutfits = () => {
  const outfits = useSelector((state) => state.outfits.outfits);
  const location = useLocation()
  const {gender} = location.state || {}
  const outfitsLoading = useSelector((state) => state.outfits.outfitsLoading);
  const [genderFilter, setGenderFilter] = useState(gender || "male")
  let filteredOutfits =  outfits.filter((outfit)=> outfit.gender == genderFilter)
  return (
    <PageWrapper>
      <BreadcrumbNav/>
      <PageTitle>All Outfits</PageTitle>
        <GenderFilter>
          <div id="maleFilter"
           style={genderFilter == "male" ? {backgroundColor:"black" }: {}}
           onClick={()=> setGenderFilter("male")}
          >
            Male
          </div>
          <div id="femaleFilter" 
            style={genderFilter == "female" ? {backgroundColor:"black" }: {}}
            onClick={()=> setGenderFilter("female")}
          >
            Female
          </div>
        </GenderFilter>
        <OutfitContainer>
        {outfitsLoading ? <div>Loading...</div> : 
        // this is for the random outfits to show on the page
       filteredOutfits.map((outfit, index) => (
          <OutfitCard 
            key={outfit.id}
            outfit = {outfit}
            OOTDNUM = {filteredOutfits.length - index}
          />
        ))}
        </OutfitContainer>

    </PageWrapper>
  );
};

const PageWrapper = styled.main`
  background-color: rgba(252, 252, 252, 1);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  align-items: center;
`;
const PageTitle = styled.h1`
  color: rgba(0, 0, 0, 1);
  font-size: 32px;
  font-weight: 600;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  @media (max-width: 480px){
    font-size: 20px;
  }
`;

const GenderFilter = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 5px;
  margin-top: 10px;
  div{
    height: 35px;
    cursor: pointer;
    width: fit-content;
    color: white;
    background-color: #a7a6a6;
    font-size: 16px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 15px 0 15px;
    border-radius: 5px;
    &:hover{
      background-color: #8d8d8d;
    }
    @media (max-width: 480px){
      height: 25px;
      font-size: 14px;
      font-weight: 600;
      padding: 0 10px 0 10px;
    }
  }
`

const OutfitContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 24px;
  justify-content: center;
  gap: 12px;
  padding-left: 5px;
  padding-right: 5px;

  @media (max-width: 480px){
    gap: 12px;
  }
`;



export default AllOutfits;