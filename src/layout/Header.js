import React from "react";
import { Button } from "../components/Button";
import { DecorativeShape } from "../components/DecorativeShape";
import styled from "styled-components";
import { Container } from "../components/Container";

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  align-items: center;
  background-color: var(--bg_default);
  padding: 17px 0;
`;

const StyledTitle = styled.h1`
  color: var(--brand-primary);
  font-size: 14px;
  font-weight: var(--regular-font);
`;

const IconsContainer = styled.div`
  display: flex;
  gap: 5px;
`;
const Welcome = styled.div`
  text-align: left;
  margin: 0 auto;
  width: 35%;
  color: var(--body-text);
  @media (max-width: 768px) {
    margin-left: 20px;
    margin-top: 10px;
    width: 100%;
  }
`;

const WlecomingHeader = styled.h4`
  font-size: 22px;
  color: var(--brand-secondary);
  font-weight: var(--bold-font);
`;

export const Header = () => {
  return (
    <>
      <Container>
        <StyledContainer>
          <StyledTitle>Web Topics</StyledTitle>
          <IconsContainer>
            <Button text="Dark Mode" iconName="moon-outline" />
            <Button text="Favorite" iconName="heart-outline" />
          </IconsContainer>
        </StyledContainer>
      </Container>
      <DecorativeShape />
      <Welcome>
        <WlecomingHeader>Welcome to our website!</WlecomingHeader>
        <p>We have a new design that's fresh, modern, and easy to use.</p>
      </Welcome>
    </>
  );
};
