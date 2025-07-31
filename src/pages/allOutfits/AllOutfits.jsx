"use client";
import styled from 'styled-components';
import OutfitCard from '../../components/OutfitCard';
import BreadcrumbNav from '../../components/BreadcrumbNav'

const AllOutfits = () => {
  const outfits = [
    { id: 1, image: 'https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/0ad9921a249113d36e4ed0c2e167f5741aac6a62e0e36c79996f99a1ccbd8153?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&', likes: 245 },
    { id: 2, image: 'https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/0c0a883a3aee0c98bd11a11bb7f0379df77ed6ab8e1a8b3870c45c7c6657bcf0?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&', likes: 189 },
    { id: 3, image: 'https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/0466c359a9969012d8f6311c355f2272855b69fbfdb18243927c71aefb3f2a76?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&', likes: 167 },
    { id: 4, image: 'https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/dbf348af0ff29496d9cf53011de25c26ee65a3d594829958e740e53c1b76dc82?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&', likes: 203 },
    { id: 5, image: 'https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/3863e1258a97cea31670fd0723cb2b845890d0194bd93e5f266ebdf86a191887?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&', likes: 178 },
    { id: 6, image: 'https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/c2f6cfd9fe8d35879670f6056411db9e3f9fc33ef72ccede1a0fb4b0596b3c64?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&', likes: 156 },
    { id: 7, image: 'https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/0ad9921a249113d36e4ed0c2e167f5741aac6a62e0e36c79996f99a1ccbd8153?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&', likes: 234 },
    { id: 8, image: 'https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/0c0a883a3aee0c98bd11a11bb7f0379df77ed6ab8e1a8b3870c45c7c6657bcf0?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&', likes: 198 },
    { id: 9, image: 'https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/0466c359a9969012d8f6311c355f2272855b69fbfdb18243927c71aefb3f2a76?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&', likes: 142 },
    { id: 10, image: 'https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/dbf348af0ff29496d9cf53011de25c26ee65a3d594829958e740e53c1b76dc82?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&', likes: 211 },
    { id: 11, image: 'https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/3863e1258a97cea31670fd0723cb2b845890d0194bd93e5f266ebdf86a191887?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&', likes: 185 },
    { id: 12, image: 'https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/c2f6cfd9fe8d35879670f6056411db9e3f9fc33ef72ccede1a0fb4b0596b3c64?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&', likes: 163 },
    { id: 13, image: 'https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/0ad9921a249113d36e4ed0c2e167f5741aac6a62e0e36c79996f99a1ccbd8153?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&', likes: 256 },
    { id: 14, image: 'https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/0c0a883a3aee0c98bd11a11bb7f0379df77ed6ab8e1a8b3870c45c7c6657bcf0?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&', likes: 172 },
    { id: 15, image: 'https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/0466c359a9969012d8f6311c355f2272855b69fbfdb18243927c71aefb3f2a76?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&', likes: 191 },
    { id: 16, image: 'https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/dbf348af0ff29496d9cf53011de25c26ee65a3d594829958e740e53c1b76dc82?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&', likes: 148 },
    { id: 17, image: 'https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/3863e1258a97cea31670fd0723cb2b845890d0194bd93e5f266ebdf86a191887?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&', likes: 207 },
    { id: 18, image: 'https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/c2f6cfd9fe8d35879670f6056411db9e3f9fc33ef72ccede1a0fb4b0596b3c64?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&', likes: 129 },
    { id: 19, image: 'https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/0ad9921a249113d36e4ed0c2e167f5741aac6a62e0e36c79996f99a1ccbd8153?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&', likes: 268 },
    { id: 20, image: 'https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/0c0a883a3aee0c98bd11a11bb7f0379df77ed6ab8e1a8b3870c45c7c6657bcf0?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&', likes: 154 },
    { id: 21, image: 'https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/0466c359a9969012d8f6311c355f2272855b69fbfdb18243927c71aefb3f2a76?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&', likes: 176 },
    { id: 22, image: 'https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/dbf348af0ff29496d9cf53011de25c26ee65a3d594829958e740e53c1b76dc82?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&', likes: 223 },
    { id: 23, image: 'https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/3863e1258a97cea31670fd0723cb2b845890d0194bd93e5f266ebdf86a191887?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&', likes: 194 },
    { id: 24, image: 'https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/c2f6cfd9fe8d35879670f6056411db9e3f9fc33ef72ccede1a0fb4b0596b3c64?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&', likes: 141 },
    { id: 25, image: 'https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/0ad9921a249113d36e4ed0c2e167f5741aac6a62e0e36c79996f99a1ccbd8153?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&', likes: 252 },
    { id: 26, image: 'https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/0c0a883a3aee0c98bd11a11bb7f0379df77ed6ab8e1a8b3870c45c7c6657bcf0?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&', likes: 167 },
    { id: 27, image: 'https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/0466c359a9969012d8f6311c355f2272855b69fbfdb18243927c71aefb3f2a76?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&', likes: 188 },
    { id: 28, image: 'https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/dbf348af0ff29496d9cf53011de25c26ee65a3d594829958e740e53c1b76dc82?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&', likes: 215 },
    { id: 29, image: 'https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/3863e1258a97cea31670fd0723cb2b845890d0194bd93e5f266ebdf86a191887?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&', likes: 133 },
    { id: 30, image: 'https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/c2f6cfd9fe8d35879670f6056411db9e3f9fc33ef72ccede1a0fb4b0596b3c64?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&', likes: 179 },
    { id: 31, image: 'https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/0ad9921a249113d36e4ed0c2e167f5741aac6a62e0e36c79996f99a1ccbd8153?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&', likes: 261 },
    { id: 32, image: 'https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/0c0a883a3aee0c98bd11a11bb7f0379df77ed6ab8e1a8b3870c45c7c6657bcf0?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&', likes: 145 },
    { id: 33, image: 'https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/0466c359a9969012d8f6311c355f2272855b69fbfdb18243927c71aefb3f2a76?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&', likes: 202 },
    { id: 34, image: 'https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/dbf348af0ff29496d9cf53011de25c26ee65a3d594829958e740e53c1b76dc82?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&', likes: 158 },
    { id: 35, image: 'https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/3863e1258a97cea31670fd0723cb2b845890d0194bd93e5f266ebdf86a191887?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&', likes: 186 },
    { id: 36, image: 'https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/c2f6cfd9fe8d35879670f6056411db9e3f9fc33ef72ccede1a0fb4b0596b3c64?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&', likes: 127 },
    { id: 37, image: 'https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/0ad9921a249113d36e4ed0c2e167f5741aac6a62e0e36c79996f99a1ccbd8153?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&', likes: 274 },
    { id: 38, image: 'https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/0c0a883a3aee0c98bd11a11bb7f0379df77ed6ab8e1a8b3870c45c7c6657bcf0?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&', likes: 139 },
    { id: 39, image: 'https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/0466c359a9969012d8f6311c355f2272855b69fbfdb18243927c71aefb3f2a76?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&', likes: 195 },
    { id: 40, image: 'https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/dbf348af0ff29496d9cf53011de25c26ee65a3d594829958e740e53c1b76dc82?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&', likes: 228 },
    { id: 41, image: 'https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/3863e1258a97cea31670fd0723cb2b845890d0194bd93e5f266ebdf86a191887?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&', likes: 151 },
    { id: 42, image: 'https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/c2f6cfd9fe8d35879670f6056411db9e3f9fc33ef72ccede1a0fb4b0596b3c64?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&', likes: 164 },
    { id: 43, image: 'https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/0ad9921a249113d36e4ed0c2e167f5741aac6a62e0e36c79996f99a1ccbd8153?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&', likes: 287 },
    { id: 44, image: 'https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/0c0a883a3aee0c98bd11a11bb7f0379df77ed6ab8e1a8b3870c45c7c6657bcf0?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&', likes: 173 },
    { id: 45, image: 'https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/0466c359a9969012d8f6311c355f2272855b69fbfdb18243927c71aefb3f2a76?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&', likes: 146 },
    { id: 46, image: 'https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/dbf348af0ff29496d9cf53011de25c26ee65a3d594829958e740e53c1b76dc82?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&', likes: 219 },
    { id: 47, image: 'https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/3863e1258a97cea31670fd0723cb2b845890d0194bd93e5f266ebdf86a191887?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&', likes: 192 },
    { id: 48, image: 'https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/c2f6cfd9fe8d35879670f6056411db9e3f9fc33ef72ccede1a0fb4b0596b3c64?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&', likes: 135 },
    { id: 49, image: 'https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/0ad9921a249113d36e4ed0c2e167f5741aac6a62e0e36c79996f99a1ccbd8153?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&', likes: 259 },
    { id: 50, image: 'https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/0c0a883a3aee0c98bd11a11bb7f0379df77ed6ab8e1a8b3870c45c7c6657bcf0?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&', likes: 168 },
    { id: 51, image: 'https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/0466c359a9969012d8f6311c355f2272855b69fbfdb18243927c71aefb3f2a76?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&', likes: 183 },
    { id: 52, image: 'https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/dbf348af0ff29496d9cf53011de25c26ee65a3d594829958e740e53c1b76dc82?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&', likes: 204 },
    { id: 53, image: 'https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/3863e1258a97cea31670fd0723cb2b845890d0194bd93e5f266ebdf86a191887?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&', likes: 157 },
    { id: 54, image: 'https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/c2f6cfd9fe8d35879670f6056411db9e3f9fc33ef72ccede1a0fb4b0596b3c64?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&', likes: 171 },
    { id: 55, image: 'https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/0ad9921a249113d36e4ed0c2e167f5741aac6a62e0e36c79996f99a1ccbd8153?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&', likes: 243 },
    { id: 56, image: 'https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/0c0a883a3aee0c98bd11a11bb7f0379df77ed6ab8e1a8b3870c45c7c6657bcf0?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&', likes: 132 },
    { id: 57, image: 'https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/0466c359a9969012d8f6311c355f2272855b69fbfdb18243927c71aefb3f2a76?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&', likes: 197 },
    { id: 58, image: 'https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/dbf348af0ff29496d9cf53011de25c26ee65a3d594829958e740e53c1b76dc82?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&', likes: 236 },
    { id: 59, image: 'https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/3863e1258a97cea31670fd0723cb2b845890d0194bd93e5f266ebdf86a191887?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&', likes: 149 },
    { id: 60, image: 'https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/c2f6cfd9fe8d35879670f6056411db9e3f9fc33ef72ccede1a0fb4b0596b3c64?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&', likes: 162 },
    { id: 61, image: 'https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/0ad9921a249113d36e4ed0c2e167f5741aac6a62e0e36c79996f99a1ccbd8153?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&', likes: 281 },
    { id: 62, image: 'https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/0c0a883a3aee0c98bd11a11bb7f0379df77ed6ab8e1a8b3870c45c7c6657bcf0?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&', likes: 175 },
    { id: 63, image: 'https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/0466c359a9969012d8f6311c355f2272855b69fbfdb18243927c71aefb3f2a76?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&', likes: 153 },
    { id: 64, image: 'https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/dbf348af0ff29496d9cf53011de25c26ee65a3d594829958e740e53c1b76dc82?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&', likes: 208 },
  ]
  return (
    <PageWrapper>
      <BreadcrumbNav/>
      <PageTitle>All Outfits</PageTitle>
        <OutfitContainer>
        {outfits.map((outfit) => (
          <OutfitCard 
            key={outfit.id}
            outfit = {outfit}
          />
        ))}
        </OutfitContainer>

      <Pagination>
        {[...Array(10)].map((_, i) => (
          <PageNumber key={i} active={i === 0}>
            {i + 1}
          </PageNumber>
        ))}
      </Pagination>
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
  margin-top: 21px;
  display: flex;
  justify-content: center;
  @media (max-width: 480px){
    font-size: 20px;
  }
`;

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



const Pagination = styled.nav`
  display: flex;
  margin-top: 40px;
  align-items: center;
  gap: 20px;
  font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 20px;
  color: rgba(84, 84, 84, 1);
  font-weight: 500;
`;

const PageNumber = styled.button`
  color: ${props => props.active ? 'rgba(0, 0, 0, 1)' : 'inherit'};
  background: none;
  border: none;
  cursor: pointer;
  font-size: inherit;
  font-weight: inherit;
  padding: 0;
`;

export default AllOutfits;