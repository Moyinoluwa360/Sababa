"use client";
import styled from 'styled-components';
import OutfitCard from '../../components/OutfitCard';
import BreadcrumbNav from '../../components/BreadcrumbNav'
import { useDispatch, useSelector} from 'react-redux';
import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { fetchOutfits } from '../../redux/slices/outfitsSlice';
import MenOrWomen from './MenOrWomen';

const AllOutfits = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    // NOW the thunks run when component mounts
    dispatch(fetchOutfits());
  }, [dispatch]);

  const outfits = useSelector((state) => state.outfits.outfits);
  const { gender } = useParams();

  // normalize incoming param and derive initial filter
  const genderParam = (gender || "male").toString().toLowerCase();

  const outfitsLoading = useSelector((state) => state.outfits.outfitsLoading);

 // keep state for UI control but update when param changes
  const [genderFilter, setGenderFilter] = useState(genderParam);

  // update local state whenever route param changes
  useEffect(() => {
    setGenderFilter(genderParam);
  }, [genderParam]);

  // normalize outfits.gender and compare lowercased values
  let filteredOutfits = outfits.filter((outfit) => {
    const g = (outfit.gender || '').toString().toLowerCase();
    // accept "men"/"male" variants if needed:
    if (genderFilter === 'men' || genderFilter === 'male') {
      return g === 'male' || g === 'men';
    }
    if (genderFilter === 'women' || genderFilter === 'female') {
      return g === 'female' || g === 'women';
    }
    return g === genderFilter;
  });
  return (
    gender  === undefined ? <MenOrWomen />
     : 
    <PageWrapper>
      <BreadcrumbNav/>
      <PageHeading>
        <div className="headingTitle">Outfits</div>
        <div className="headingDes">Discover looks you love and shop each item with ease.</div>
      </PageHeading>
      {/* <GenderFilter>
        <div id="maleFilter"u
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
      </GenderFilter> */}
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
  background-color: #D9D9D9;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  align-items: center;
`;
const PageHeading = styled.div`
  color: rgba(0, 0, 0, 1);
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  @media (max-width: 480px){
    gap: 7px;
  }
  .headingTitle{
    font-size: 32px;
    font-weight: 600;
    color: #1C1C1C;
    @media (max-width: 480px){
      font-size: 20px;
    }
  }
  .headingDes{
    font-size: 16px;
    font-weight: 500;
    color: #787C7F;
    @media (max-width: 480px){
      font-size: 14px;
    }
    @media (max-width: 382px){
      font-size: 12px;
    }
    @media (max-width: 382px){
      font-size: 12px;
    }
    @media (max-width: 326px){
      font-size: 10px;
    }
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
  justify-content: center;
  width: 100%;
  margin-top: 60px;
  gap: 30px;
  @media (max-width: 480px){
    padding: 0 16px 0 16px;
    gap: 20px;
    margin-top: 40px;
  }
`;



export default AllOutfits;