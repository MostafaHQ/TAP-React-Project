import styled from "styled-components";

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: 0.9rem;
  color: var(--body-text);
  padding: 5px 11px;
  border-radius: 4px;
  background-color: var(--bg_default);
  border: 1px solid var(--lines-color);
  padding-inline: 11px;
  gap: 6px;
  @media (max-width: 768px) {
    width: 35px;
    height: 25px;
  }
`;

const ButtonText = styled.span`
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Button = ({ text, iconName, onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      <ion-icon name={iconName}></ion-icon>
      <ButtonText>{text}</ButtonText>
    </StyledButton>
  );
};
