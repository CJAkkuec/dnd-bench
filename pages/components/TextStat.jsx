import styled from "styled-components";

export const TextStat = ({ statName, type }) => {
  return (
    <label>
      <LabelText>{statName}</LabelText>
      <input type="text" name={type} />
    </label>
  );
};

const LabelText = styled.p`
  margin: 0.2rem 0 0.2rem 0;
`;
