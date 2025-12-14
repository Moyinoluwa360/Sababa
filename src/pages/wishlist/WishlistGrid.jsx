import * as React from "react";
import styled from "styled-components";
import OutfitCard from "../../components/OutfitCard"
import { useState } from "react";

export default function WhislistGrid({wish}) {
  const [activeGender, setActiveGender] = useState('men');

  // normalize and filter by selected gender
  const filteredWish = (wish || []).filter((outfit) => {
    const g = (outfit.gender || '').toString().toLowerCase();
    if (activeGender === 'men') return g === 'men' || g === 'male';
    if (activeGender === 'women') return g === 'women' || g === 'female';
    return true;
  });

  return (
    <>
      <GenderContainer>
        <GenderToggle>
          <GenderBtn
            active={activeGender === 'men'}
            onClick={() => setActiveGender('men')}
            aria-pressed={activeGender === 'men'}
          >
            Men
          </GenderBtn>
          <GenderBtn
            active={activeGender === 'women'}
            onClick={() => setActiveGender('women')}
            aria-pressed={activeGender === 'women'}
          >
            Women
          </GenderBtn>
        </GenderToggle>
      </GenderContainer>
      <Wrapper>
        {filteredWish.slice().reverse().map((outfit) => (
          <OutfitCard
            key={outfit.id}
            outfit={outfit}
            OOTDNUM={outfit.OOTDNUM}
          />
        ))}
      </Wrapper>
    </>
  );
}

const GenderContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`

const GenderToggle = styled.div`
  display: flex;
  align-items: center;
  width: 160px;
  height: 40px;
  gap: 0;
  border: 1px solid #C4C4C4;
  border-radius: 25px;
`

const GenderBtn = styled.div`
  color: grey;
  font-weight: 550;
  font-size: 16px;
  cursor: pointer;
  height: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => (props.active ? 'white' : '#787C7F')};
  background-color: ${(props) => (props.active ? 'black' : '#ffffffff')};
  &:first-child{
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
  }
  &:last-child{
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
  }

`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  gap: 12px;
  padding-left: 5px;
  padding-right: 5px; 
  @media (max-width: 480px){
    gap: 12px;
  }
`;

