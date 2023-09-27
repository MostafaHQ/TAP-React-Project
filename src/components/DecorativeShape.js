import styled from "styled-components";

const ShapeContainer = styled.div`
  width: 100%;
  height: 40px;
`;

const GreenTriangle = styled.div`
  border-left: 50px solid transparent;
  border-right: 80vw solid var(--brand-secondary);
  border-bottom: 50px solid transparent;
`;

const BlueTraingle = styled.div`
  border-left: 80vw solid var(--brand-primary);
  border-right: 50px solid transparent;
  border-bottom: 50px solid transparent;
  position: relative;
  bottom: 49px;
`;

export const DecorativeShape = () => {
  return (
    <ShapeContainer>
      <GreenTriangle />
      <BlueTraingle />
    </ShapeContainer>
  );
};
