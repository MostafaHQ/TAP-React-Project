import styled from "styled-components";

const StyledInput = styled.input`
  width: 75%;
  background-color: var(--bg_default);
  border-radius: 7px 0 0 7px;
  border: none;
  text-indent: 35px;
  font-size: 20px;
  color: var(--body-text);
  @media (max-width: 768px) {
    width: 100%;
    border-radius: 7px 7px 0 0;
  }
`;

export const InputWithIcon = ({ onChange, value }) => {
  return (
    <StyledInput
      placeholder="Search the website..."
      type="text"
      value={value}
      onChange={onChange}
    />
  );
};
