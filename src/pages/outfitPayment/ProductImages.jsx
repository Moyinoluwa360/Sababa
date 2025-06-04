import React from "react";
import styled from "styled-components";

const ProductImages = () => {
  return (
    <ImagesColumn>
      <ImagesContainer>
        <ThumbnailsColumn>
          <ThumbnailImage
            src="https://cdn.builder.io/api/v1/image/assets/08bf16d58b0d4aa28fefd3a671be5059/9afeb808247218c739844205b57cd986e21bc05099764667cc57178f9cd01836?placeholderIfAbsent=true"
            alt="Product thumbnail 1"
          />
          <ThumbnailImage
            src="https://cdn.builder.io/api/v1/image/assets/08bf16d58b0d4aa28fefd3a671be5059/9afeb808247218c739844205b57cd986e21bc05099764667cc57178f9cd01836?placeholderIfAbsent=true"
            alt="Product thumbnail 2"
          />
          <ThumbnailImage
            src="https://cdn.builder.io/api/v1/image/assets/08bf16d58b0d4aa28fefd3a671be5059/9afeb808247218c739844205b57cd986e21bc05099764667cc57178f9cd01836?placeholderIfAbsent=true"
            alt="Product thumbnail 3"
          />
          <ThumbnailImage
            src="https://cdn.builder.io/api/v1/image/assets/08bf16d58b0d4aa28fefd3a671be5059/9afeb808247218c739844205b57cd986e21bc05099764667cc57178f9cd01836?placeholderIfAbsent=true"
            alt="Product thumbnail 4"
          />
          <ThumbnailImage
            src="https://cdn.builder.io/api/v1/image/assets/08bf16d58b0d4aa28fefd3a671be5059/9afeb808247218c739844205b57cd986e21bc05099764667cc57178f9cd01836?placeholderIfAbsent=true"
            alt="Product thumbnail 5"
          />
        </ThumbnailsColumn>
        <MainImageContainer>
          <ActionButtonsRow>
              <ActionButton>
                <img src="/Ob-heart.svg" alt="like buttton" />
              </ActionButton>
              <ActionButton>
                <img src="/shareIcon.svg" alt="share button" id="shareIconImg" />
              </ActionButton>
          </ActionButtonsRow>
          <MainImage>
            <ThumbnailMainImage
                src="https://cdn.builder.io/api/v1/image/assets/08bf16d58b0d4aa28fefd3a671be5059/9afeb808247218c739844205b57cd986e21bc05099764667cc57178f9cd01836?placeholderIfAbsent=true"
                alt="Product thumbnail 4"
            />
          </MainImage>
        </MainImageContainer>
      </ImagesContainer>
    </ImagesColumn>
  );
};

const ImagesColumn = styled.div`
  display: flex;
  line-height: normal;
  width: 610px;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const ImagesContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: stretch;
  gap: 28px;
  flex-wrap: wrap;
  @media (max-width: 700px){
    width: 300px;
    height: 400px;
    align-self: center;
    margin: auto;
  }
  @media (max-width: 480px){
    height: 300px;
  }
`;

const ThumbnailsColumn = styled.div`
  align-self: start;
  display: flex;
  flex-direction: column;
  @media (max-width:870px){
    display: none;
  }
`;

const ThumbnailImage = styled.img`
  aspect-ratio: 0.72;
  object-fit: contain;
  object-position: center;
  width: 69px;
  border-radius: 8px;
  margin-top: ${(props) => (props.index === 0 ? 0 : "4px")};
`;

const MainImageContainer = styled.div`
  border-radius: 4px;
  padding: 18px 19px;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
  height: 50%;
  @media (max-width: 991px) {
    max-width: 100%;
    padding-left: 20px;
    padding-bottom: 100px;
  }
`;

const ActionButtonsRow = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  @media (max-width: 480px){
    gap: 2px;
  }
`;


const ActionButton = styled.button`
  background: none;
  border: none;
  img{
    height: 40px;
    width: 40px;
  }
`;

const MainImage = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 20px;
`

const ThumbnailMainImage = styled.img`
    height: 80%;
    width: 80%;
    @media (max-width:480px){
      height: 200px;
      width: 160px;
    }
`
export default ProductImages;
