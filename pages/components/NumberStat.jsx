import styled from "styled-components";

export const NumberStat = ({ statName, type }) => {
  return (
    <label>
      <LabelText>{statName}</LabelText>
      <InputNumber name={type} max="999" />
    </label>
  );
};

const InputNumber = styled.input.attrs({ type: "number" })`
  width: 3rem;
  font-size: 0.7rem;
`;

const LabelText = styled.p`
  margin: 0.2rem 0 0.2rem 0;
`;
