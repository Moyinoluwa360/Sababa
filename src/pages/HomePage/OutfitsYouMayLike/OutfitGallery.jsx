import styled from 'styled-components';
import OutfitCard from '../../../components/OutfitCard'; 
import { useSelector } from 'react-redux';
import getCertAmountOfOutfit from '../../../components/getCertAmountOfOutfit';

export function OutfitGallery({ title }) {
  const outfits = useSelector((state) => state.outfits.outfits);
  const outfitsLoading = useSelector((state) => state.outfits.outfitsLoading);
  
  return (
    <GalleryContainer>
      <GalleryHeader>
        <GalleryTitle>{title}</GalleryTitle>
      </GalleryHeader>
      <OutfitsRow>
        {outfitsLoading ? <div>Loading...</div> : outfits.length > 0 ?
        // limit can be set for the amount of random outfits u want to show just change number in the function
        getCertAmountOfOutfit(outfits, 5).map((outfit) => (
          <OutfitCard 
            key={outfit.id}
            outfit={outfit}
          />
        )) : <div>No outfits found</div>}
      </OutfitsRow>
    </GalleryContainer>
  );
}

const GalleryContainer = styled.section`
  width: 100%;
  max-width: 95%;
  margin-top: 40px;
`;

const GalleryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px; 
`;

const GalleryTitle = styled.h2`
  color: rgba(0, 0, 0, 1);
  font: 600 25px Inter, sans-serif;
  margin: 0;
  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const OutfitsRow = styled.div`
    display: flex;
    gap: 12px;
    overflow-x: auto;
    white-space: nowrap;
    padding-bottom: 10px;

    & > * {
      flex: 0 0 auto;
    }

    &::-webkit-scrollbar {
    display: none;
    }
    
  /* Hide scrollbar for IE, Edge and Firefox */
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;
`;
