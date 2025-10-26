import React from 'react';
import styled from 'styled-components';

const BannerContainer = styled.div`
  display: flex;
  width: 100%;
  height: 54px;
  justify-content: center;
  align-items: center;
  background: #1C1C1C;

`;

const BannerText = styled.div`
  color: #FFFFFF;
  font-family: 'SF Pro Rounded', -apple-system, BlinkMacSystemFont, Roboto, Helvetica, sans-serif;
  font-size: 13px;
  font-weight: normal;
`;

function TopBanner() {
  return (
    <BannerContainer>
      <BannerText>IT'S NEVER TOO LATE TO UPGRADE YOUR STYLE!</BannerText>
    </BannerContainer>
  );
}

export default TopBanner;
