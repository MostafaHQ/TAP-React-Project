import styled from "styled-components";

const AllContainers = styled.div`
  width: 93vw;
  margin: 0 auto;
`;

export const Container = ({ children }) => {
  return <AllContainers>{children}</AllContainers>;
};
