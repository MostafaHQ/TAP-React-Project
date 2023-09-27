import styled from "styled-components";

const StyledFooter = styled.h5`
  text-align: center;
  font-size: 20px;
  color: var(--body-text);
  padding: 30px;
  background-color: var(--bg_body);
`;

const HeartIcon = styled.span`
  color: var(--heart-color);
`;

export const Footer = () => {
  return (
    <StyledFooter>
      Developed with
      <HeartIcon>
        <ion-icon class="red-heart" name="heart"></ion-icon>
      </HeartIcon>
      &copy; 2023
    </StyledFooter>
  );
};
