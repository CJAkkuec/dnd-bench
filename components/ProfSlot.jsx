import styled from "styled-components";
import slugify from "slugify";

export const ProfSlot = ({ register, index, profRemove }) => {
  return (
    <StatWrapper>
      <Stat>
        <LabelText htmlFor={`profSlotArray.${index}.proficiencies`}>
          Note {`${index + 1}`}
        </LabelText>
        <ProfInput
          {...register(`profSlotArray.${index}.proficiencies`)}
          placeholder="Add proficiencies, separated by commas"
        ></ProfInput>
        <Button type="button" onClick={() => profRemove(index)}>
          Delete
        </Button>
      </Stat>
    </StatWrapper>
  );
};

const LabelText = styled.p`
  margin: 0.2rem 0 0.2rem 0;
`;

const Stat = styled.label``;

const StatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  padding: 0.5rem;
  width: 43vw;
  height: 100%;
`;

const Button = styled.button`
  background: grey;
  color: white;
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
