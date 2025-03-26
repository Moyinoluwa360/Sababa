import React, { useState } from 'react';
import styled from 'styled-components';
import { OutfitCard } from './OutfitCard';

const outfits = [
  { id: 100, image: 'https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/0ad9921a249113d36e4ed0c2e167f5741aac6a62e0e36c79996f99a1ccbd8153?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&', likes: 245 },
  { id: 99, image: 'https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/0c0a883a3aee0c98bd11a11bb7f0379df77ed6ab8e1a8b3870c45c7c6657bcf0?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&', likes: 189 },
  { id: 98, image: 'https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/0466c359a9969012d8f6311c355f2272855b69fbfdb18243927c71aefb3f2a76?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&', likes: 167 },
  { id: 97, image: 'https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/dbf348af0ff29496d9cf53011de25c26ee65a3d594829958e740e53c1b76dc82?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&', likes: 203 },
  { id: 96, image: 'https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/3863e1258a97cea31670fd0723cb2b845890d0194bd93e5f266ebdf86a191887?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&', likes: 178 },
  { id: 95, image: 'https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/c2f6cfd9fe8d35879670f6056411db9e3f9fc33ef72ccede1a0fb4b0596b3c64?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&', likes: 156 },
  { id: 1, image: 'https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/0ad9921a249113d36e4ed0c2e167f5741aac6a62e0e36c79996f99a1ccbd8153?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&', likes: 245 },
  { id: 9, image: 'https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/0c0a883a3aee0c98bd11a11bb7f0379df77ed6ab8e1a8b3870c45c7c6657bcf0?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&', likes: 189 },
  { id: 8, image: 'https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/0466c359a9969012d8f6311c355f2272855b69fbfdb18243927c71aefb3f2a76?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&', likes: 167 },
  { id: 7, image: 'https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/dbf348af0ff29496d9cf53011de25c26ee65a3d594829958e740e53c1b76dc82?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&', likes: 203 },
  { id: 6, image: 'https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/3863e1258a97cea31670fd0723cb2b845890d0194bd93e5f266ebdf86a191887?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&', likes: 178 }
];

export function OutfitGallery({ title }) {
  return (
    <GalleryContainer>
      <GalleryHeader>
        <GalleryTitle>{title}</GalleryTitle>
      </GalleryHeader>
      <OutfitsRow>
        {outfits.map((outfit) => (
          <OutfitCard
            key={outfit.id}
            image={outfit.image}
            likes={outfit.likes}
            id={outfit.id}
          />
        ))}
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

