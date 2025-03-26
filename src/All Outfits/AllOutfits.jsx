"use client";
import React from 'react';
import styled from 'styled-components';
import {Header} from "../Header/Header"
import Footer from "../Footer"
import OutfitCard from '../OutfitCard';
import BreadcrumbNav from '../BreadcrumbNav';

const AllOutfits = () => {
  const outfitImages = [
    "https://cdn.builder.io/api/v1/image/assets/4d257a64c4fd431196f0bd5355e29fdb/748e2942dbf4ccb799ea21987b2b1c6523a1bb43d2bfb26c0433a6aaaf33397a?placeholderIfAbsent=true", "https://cdn.builder.io/api/v1/image/assets/4d257a64c4fd431196f0bd5355e29fdb/0c0a883a3aee0c98bd11a11bb7f0379df77ed6ab8e1a8b3870c45c7c6657bcf0?placeholderIfAbsent=true", "https://cdn.builder.io/api/v1/image/assets/4d257a64c4fd431196f0bd5355e29fdb/0466c359a9969012d8f6311c355f2272855b69fbfdb18243927c71aefb3f2a76?placeholderIfAbsent=true", "https://cdn.builder.io/api/v1/image/assets/4d257a64c4fd431196f0bd5355e29fdb/dbf348af0ff29496d9cf53011de25c26ee65a3d594829958e740e53c1b76dc82?placeholderIfAbsent=true", "https://cdn.builder.io/api/v1/image/assets/4d257a64c4fd431196f0bd5355e29fdb/3863e1258a97cea31670fd0723cb2b845890d0194bd93e5f266ebdf86a191887?placeholderIfAbsent=true", "https://cdn.builder.io/api/v1/image/assets/4d257a64c4fd431196f0bd5355e29fdb/c2f6cfd9fe8d35879670f6056411db9e3f9fc33ef72ccede1a0fb4b0596b3c64?placeholderIfAbsent=true",
    "https://cdn.builder.io/api/v1/image/assets/4d257a64c4fd431196f0bd5355e29fdb/42ad899e6680dc04792dd4dc222044eb813a92a02b2292d711ea165e66f63881?placeholderIfAbsent=true", "https://cdn.builder.io/api/v1/image/assets/4d257a64c4fd431196f0bd5355e29fdb/0725e9b2edefcd0bc177f9a4a6ac6caf39c560495026ea11eb62ed0ba3762ec5?placeholderIfAbsent=true", "https://cdn.builder.io/api/v1/image/assets/4d257a64c4fd431196f0bd5355e29fdb/66df12fd8142f0440c3e0065e0f454ad55e371a92a38710b93540d575c826803?placeholderIfAbsent=true", "https://cdn.builder.io/api/v1/image/assets/4d257a64c4fd431196f0bd5355e29fdb/cf68c2cd54ec9adf9757137fc4b1dc9894757abeadfcda382a40e99d2e469d70?placeholderIfAbsent=true", "https://cdn.builder.io/api/v1/image/assets/4d257a64c4fd431196f0bd5355e29fdb/8b85f12972713e7b6b7408e8deb64cac24e38389dfa3a07409de24aec5acb1ab?placeholderIfAbsent=true", "https://cdn.builder.io/api/v1/image/assets/4d257a64c4fd431196f0bd5355e29fdb/3c9d7d8301a5c3e9c178bb044ddd44ee5f839880d868a27d3e580d055686fb12?placeholderIfAbsent=true",
    "https://cdn.builder.io/api/v1/image/assets/4d257a64c4fd431196f0bd5355e29fdb/4d996bce72b6749820a2b0787403ad51869af4d6d7e0d1b360f420861877f331?placeholderIfAbsent=true", "https://cdn.builder.io/api/v1/image/assets/4d257a64c4fd431196f0bd5355e29fdb/d28049f68635cabdf124d1cc616e39403926efb6aa5ca09a9cd5d762151ae7e8?placeholderIfAbsent=true", "https://cdn.builder.io/api/v1/image/assets/4d257a64c4fd431196f0bd5355e29fdb/2063174ccb05bf547c478a3ca5f2b952f999a35a449fc951955472f493dccfd8?placeholderIfAbsent=true", "https://cdn.builder.io/api/v1/image/assets/4d257a64c4fd431196f0bd5355e29fdb/81087352b2cbf12468d3081191090363661fc5e3b2816ef31914da6a366ad6b4?placeholderIfAbsent=true", "https://cdn.builder.io/api/v1/image/assets/4d257a64c4fd431196f0bd5355e29fdb/3c80866c6c058d74e6f1debd49d6fb817ef421fbeecc605ff1abf3c043f2cb37?placeholderIfAbsent=true", "https://cdn.builder.io/api/v1/image/assets/4d257a64c4fd431196f0bd5355e29fdb/1be25115947b48572506ef88da4fbfd2d9e0e5f3de1c0ce5925ec4eaf1a21289?placeholderIfAbsent=true",
    "https://cdn.builder.io/api/v1/image/assets/4d257a64c4fd431196f0bd5355e29fdb/1bc8616eb685ec377dde61bc51a9adb8f9b3124dcd5e53acdd1f257af6d6556a?placeholderIfAbsent=true", "https://cdn.builder.io/api/v1/image/assets/4d257a64c4fd431196f0bd5355e29fdb/817370132fab95a30440cf6c0ca40a60bb822a0c8f168d53565e59f3856abf02?placeholderIfAbsent=true", "https://cdn.builder.io/api/v1/image/assets/4d257a64c4fd431196f0bd5355e29fdb/fcb4cadca04eba91f1024518db1793a8c659b6251314b582b553b2b92ae6063d?placeholderIfAbsent=true", "https://cdn.builder.io/api/v1/image/assets/4d257a64c4fd431196f0bd5355e29fdb/c4725841c437f71683319c2c94972429e0af3888694179a8da75a4c6f2a904a6?placeholderIfAbsent=true", "https://cdn.builder.io/api/v1/image/assets/4d257a64c4fd431196f0bd5355e29fdb/da9b7c979f9a0f2c0c1efa983cd23f80e163d8250087af474dc6173b766e2910?placeholderIfAbsent=true", "https://cdn.builder.io/api/v1/image/assets/4d257a64c4fd431196f0bd5355e29fdb/12b9a14ba69cfbf64078f3d32f5b027856df372edca4b04f074d6fc910047985?placeholderIfAbsent=true",
  ];

  return (
    <PageWrapper>
      <Header />
      <BreadcrumbNav/>
      <PageTitle>All Outfits</PageTitle>
        <OutfitContainer>
          {outfitImages.map((imageUrl) => (
            <OutfitCard 
              imageUrl={imageUrl}
              outfitNumber={100}
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

      <Footer />
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