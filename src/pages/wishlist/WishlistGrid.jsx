import * as React from "react";
import styled from "styled-components";
import OutfitCard from "../../components/OutfitCard"

export default function WhislistGrid({wish}) {
  return (
    <Wrapper>
      {wish.slice().reverse().map((outfit) => (
          <OutfitCard 
          key={outfit.id}
          outfit = {outfit}
          OOTDNUM={outfit.OOTDNUM}
        />
      ))}
    </Wrapper>
  );
}

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

