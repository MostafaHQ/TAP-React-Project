import styled from "styled-components";
import { Container } from "./Container";
import { InputWithIcon } from "./InputWithIcon";






const StyledDropList = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--bg_default);
  width: 50%;
  font-size: 12px;
  padding: 7px;
`;

 const Search = (search,onSearch) => {

  return (
    <>
      <Container>
          <SearchCriteria>
            <StyledDropList>
              <label for="sort">Sort By:</label>
              <select name="sort" id="sort">
                <option value="Default">Default</option>
                <option value="topic">Topic Title</option>
                <option value="name">Author Name</option>
              </select>
            </StyledDropList>
            <StyledDropList>
              <label for="sort">Filter By:</label>
              <select name="filter" id="filter">
                <option value="Default">Default</option>
              </select>
            </StyledDropList>
          </SearchCriteria>
      </Container>
    </>
  );
};
