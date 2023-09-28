import styled from "styled-components";

const StyledDropList = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--bg_default);
  width: 50%;
  font-size: 12px;
  padding: 7px;
`;

export const Dropdown = ({ options, value, label, onChange }) => {
  return (
    <StyledDropList>
      <label>{label}</label>
      <select onChange={onChange}>
        {options?.map(({ title, value }, index) => (
          <option value={value ?? title} key={index}>
            {title}
          </option>
        ))}
      </select>
    </StyledDropList>
  );
};
