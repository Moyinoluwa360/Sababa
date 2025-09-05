import React from 'react';
import styled from 'styled-components';

const categories = [
  { title: 'Casual Outfits', image: 'https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/11ea9902a59c14bbd209d2fd1e7de2b4f3ba540c528b15f976fff536194d4db9?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&' },
  { title: 'Work Outfits', image: 'https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/64b0c6f8a828a94d44d7aa8bf49a82cce79361958ce10b284f531936016b7997?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&' },
  { title: 'Street Outfits', image: 'https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/6803874f07c5e049eb2ab6ac0ccb087541d67fdfd39b063ce4c58b8856874975?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&' },
  { title: 'Occasion Outfits', image: 'https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/125d763ed143c6672b350dfdd2ff6f09afbaaaa292e50f1389fd92ed454189f8?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&' },
  { title: 'Corporate Outfits', image: 'https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/a099221fa5f10e72897c3656448acee17f6eb32cfc192059f4eaec86671e20c9?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&' }
];

export function StyleCategories() {
  return (
    <Container>
      <Title>Outfits by style</Title>
      <CategoriesGrid>
        {categories.map((category) => (
          <CategoryCard key={category.title}>
            <CategoryImage src={category.image} alt={category.title} />
            <CategoryTitle>{category.title}</CategoryTitle>
            <div className="cs">Coming soon</div>
          </CategoryCard>
        ))}
      </CategoriesGrid>
    </Container>
  );
}

const Container = styled.section`
  width: 100%;
  max-width: 95%;
  margin-top: 30px;
`;

const Title = styled.h2`
  color: rgba(0, 0, 0, 1);
  font: 600 20px Inter, sans-serif;
  margin-bottom: 16px;
  text-align: center;
  font-size: 26px;
  font-weight: 600;
  @media (max-width: 480px) {
    font-size: 17px;
  }
`;

const CategoriesGrid = styled.div`
  display: flex;
  gap: 4px;
  overflow-x: auto;
  white-space: nowrap;
  &::-webkit-scrollbar {
    display: none;
  }
  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */

  @media (max-width: 991px) {
    width: 100%;
  }
`;

const CategoryCard = styled.div`
  position: relative;
  border-radius: 4px;
  min-height: 450px;
  min-width: 340px;
  overflow: hidden;
  cursor: pointer;
  flex: 1;
  &:hover {
    opacity: 0.9;
  }
  .cs{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%);
    color: #ffffff;
    opacity: 0.9;
    font: 20px Inter, sans-serif;
    font-style: italic;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
    @media (max-width: 480px) {
    font-size: 13px;
    }
  }
  @media (max-width: 480px) {
    min-height: 200px;
    min-width: 150px;
    flex: 1;
  }
`;

const CategoryImage = styled.img`
  height: 100%;
  width: 100%;
`;

const CategoryTitle = styled.span`
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translate(-50%);
  color: white;
  font: 600 20px Inter, sans-serif;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
  @media (max-width: 480px) {
    font-size: 13px;
  }
`;