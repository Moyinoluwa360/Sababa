import styled from "styled-components";

const ColorContainer = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

const ColorButton = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid ${(props) => (props.selected ? "#1c1c1c" : "transparent")};
  background-color: ${(props) => props.color};
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;

  &:hover {
    transform: scale(1.1);
  }

  &::after {
    content: '';
    position: absolute;
    top: -4px;
    left: -4px;
    right: -4px;
    bottom: -4px;
    border: 2px solid ${(props) => (props.selected ? "#1c1c1c" : "transparent")};
    border-radius: 50%;
    opacity: ${(props) => (props.selected ? 1 : 0)};
    transition: opacity 0.2s ease;
  }
`;

const ColorSelector = ({ selectedColor, onColorChange }) => {
  const colors = [
    { name: "black", hex: "#000000" },
    { name: "white", hex: "#FFFFFF" },
    { name: "navy", hex: "#000080" },
    { name: "gray", hex: "#808080" },
    { name: "brown", hex: "#8B4513" },
  ];

  return (
    <ColorContainer>
      {colors.map((color) => (
        <ColorButton
          key={color.name}
          color={color.hex}
          selected={selectedColor === color.name}
          onClick={() => onColorChange(color.name)}
          title={color.name.charAt(0).toUpperCase() + color.name.slice(1)}
        />
      ))}
    </ColorContainer>
  );
};

export default ColorSelector; 