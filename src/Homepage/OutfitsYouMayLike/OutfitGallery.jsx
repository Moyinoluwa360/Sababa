import React, { useState } from 'react';
import styled from 'styled-components';
import { OutfitCard } from './OutfitCard';
import { GalleryControls } from './GalleryControls';

const outfits = [
  { id: 100, image: 'https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/0ad9921a249113d36e4ed0c2e167f5741aac6a62e0e36c79996f99a1ccbd8153?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&', likes: 245 },
  { id: 99, image: 'https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/0c0a883a3aee0c98bd11a11bb7f0379df77ed6ab8e1a8b3870c45c7c6657bcf0?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&', likes: 189 },
  { id: 98, image: 'https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/0466c359a9969012d8f6311c355f2272855b69fbfdb18243927c71aefb3f2a76?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&', likes: 167 },
  { id: 97, image: 'https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/dbf348af0ff29496d9cf53011de25c26ee65a3d594829958e740e53c1b76dc82?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&', likes: 203 },
  { id: 96, image: 'https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/3863e1258a97cea31670fd0723cb2b845890d0194bd93e5f266ebdf86a191887?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&', likes: 178 },
  { id: 95, image: 'https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/c2f6cfd9fe8d35879670f6056411db9e3f9fc33ef72ccede1a0fb4b0596b3c64?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&', likes: 156 }
];

export function OutfitGallery({ title }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(outfits.length / itemsPerPage);

  const currentOutfits = outfits.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <GalleryContainer>
      <GalleryHeader>
        <GalleryTitle>{title}</GalleryTitle>
        <GalleryControls 
          onPrevious={() => setCurrentPage(Math.max(1, currentPage - 1))}
          onNext={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
          disablePrevious={currentPage === 1}
          disableNext={currentPage === totalPages}
        />
      </GalleryHeader>
      <OutfitsGrid>
        {currentOutfits.map((outfit) => (
          <OutfitCard
            key={outfit.id}
            image={outfit.image}
            likes={outfit.likes}
            id={outfit.id}
          />
        ))}
      </OutfitsGrid>
      <OutfitLabels>
        {currentOutfits.map((outfit) => (
          <OutfitLabel key={outfit.id}>
            OOTD {outfit.id}
          </OutfitLabel>
        ))}
      </OutfitLabels>
    </GalleryContainer>
  );
}

const GalleryContainer = styled.section`
  width: 100%;
  max-width: 1360px;
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
  font: 600 20px Inter, sans-serif;
  margin: 0;
`;

const OutfitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(215px, 1fr));
  gap: 20px;
  
  @media (max-width: 991px) {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  }
`;

const OutfitLabels = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(215px, 1fr));
  gap: 20px;
  margin-top: 4px;
  
  @media (max-width: 991px) {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  }
`;

const OutfitLabel = styled.div`
  color: rgba(0, 0, 0, 1);
  font: 500 16px Inter, sans-serif;
  text-align: center;
`;