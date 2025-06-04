import React from "react";
import styled from "styled-components";

export const EmptyOrder = () => {
  return (
    <ContentWrapper>
      <EmptyStateImage
        src="https://cdn.builder.io/api/v1/image/assets/001f261659df40119f6cb1a32a4e0f9f/a249ae872b9c54a7b83df0f289b216f13a5ea7c5?placeholderIfAbsent=true"
        alt="Empty order state illustration"
      />
      <TextContent>
        <Heading>You currently have no order</Heading>
        <Description>Start shopping at Sababa now..</Description>
      </TextContent>
    </ContentWrapper>
  );
};


const ContentWrapper = styled.div`
  align-self: center;
  display: flex;
  width: 277px;
  max-width: 100%;
  flex-direction: column;
  align-items: stretch;
  justify-content: start;
`;

const EmptyStateImage = styled.img`
  aspect-ratio: 1.38;
  object-fit: contain;
  object-position: center;
  width: 80px;
  align-self: center;
`;

const TextContent = styled.div`
  margin-top: 24px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.h2`
  color: rgba(28, 28, 28, 1);
  font-size: 20px;
  margin: 0;
  @media (max-width: 480px){
    font-size: 14px;
  }
  @media (max-width: 230px){
    font-size: 12px;
  }
`;

const Description = styled.p`
  color: rgba(84, 84, 84, 1);
  font-size: 16px;
  text-align: center;
  margin: 8px 0 0 0;
  @media (max-width: 480px){
    font-size: 12px;
  }
  @media (max-width: 230px){
    font-size: 10px;
  }
`;
