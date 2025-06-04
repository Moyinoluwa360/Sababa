import React from 'react';
import styled from 'styled-components';

export function GalleryControls({ onPrevious, onNext, disablePrevious, disableNext }) {
  return (
    <ControlsContainer>
      <ControlButton 
        onClick={onPrevious} 
        disabled={disablePrevious}
        aria-label="Previous page"
      >
        <ControlIcon src="https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/123fcb6cd1c093aa342235622ac14903eb8d32bf270d3b40460126b039ec7b11?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&" alt="" />
      </ControlButton>
      <ControlButton 
        onClick={onNext} 
        disabled={disableNext}
        aria-label="Next page"
      >
        <ControlIcon src="https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/d644d2f51aa8e6326743688be4d320e34fe30a4673c6a1c78976076394bd18d8?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&" alt="" />
      </ControlButton>
    </ControlsContainer>
  );
}

const ControlsContainer = styled.div`
  display: flex;
  gap: 4px;
`;

const ControlButton = styled.button`
  border-radius: 26px;
  background-color: #eeeeee;
  width: 45px;
  height: 45px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  
  &:hover:not(:disabled) {
    background-color: rgba(0, 0, 0, 0.05);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  &:focus {
    outline: 2px solid #000;
    outline-offset: 2px;
  }
`;

const ControlIcon = styled.img`
  width: 14px;
  height: 20px;
`;