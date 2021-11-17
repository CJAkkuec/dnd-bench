import styled from "styled-components";
import slugify from "slugify";

export const ProficiencySlot = ({ register, index, proficiencyRemove }) => {
  return (
    <StatWrapper>
      <Stat>
        <LabelText htmlFor={`proficiencySlotArray.${index}.proficiencies`}>
          Proficiency {`${index + 1}`}
        </LabelText>
        <ProfInput
          {...register(`proficiencySlotArray.${index}.proficiencies`)}
          placeholder="Add proficiencies, separated by commas"
        ></ProfInput>
        <Button type="button" onClick={() => proficiencyRemove(index)}>
          Delete
        </Button>
      </Stat>
    </StatWrapper>
  );
};

const LabelText = styled.p`
  margin: 0.2rem 0 0.2rem 0;
  font-size: 0.8rem;
`;

const Stat = styled.label``;

const StatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(58, 82, 118, 0.1);
  padding: 0.5rem;
  width: 43vw;
  height: 100%;
  margin-bottom: 0.3rem;
`;

const Button = styled.button`
  background: rgba(58, 82, 118, 0.24);
  color: black;
  border: none;
  padding: 0.3rem;
  width: auto;
  font-size: 0.8rem;
  text-align: center;
  margin-top: 0.3rem;
`;

const ProfInput = styled.textarea`
  width: 100%;
  font-family: Roboto;
`;
