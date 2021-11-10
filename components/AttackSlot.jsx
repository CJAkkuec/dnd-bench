import styled from "styled-components";

export const AttackSlot = ({ register, index, attackRemove }) => {
  return (
    <>
      <StatWrapper>
        <Stat>
          <LabelText htmlFor={`attackSlotArray.${index}.attack-name`}>
            Name
          </LabelText>
          <InputText {...register(`attackSlotArray.${index}.attack-name`)} />
        </Stat>
        <Stat>
          <LabelText htmlFor={`attackSlotArray.${index}.attack-dice`}>
            Dice
          </LabelText>
          <InputText {...register(`attackSlotArray.${index}.attack-dice`)} />
        </Stat>
        <Stat>
          <LabelText htmlFor={`attackSlotArray.${index}.attack-range`}>
            Range
          </LabelText>
          <InputText {...register(`attackSlotArray.${index}.attack-range`)} />
        </Stat>
        <ButtonWrapper>
          <Button type="button" onClick={() => attackRemove(index)}>
            Delete
          </Button>
        </ButtonWrapper>
      </StatWrapper>
    </>
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

const ButtonWrapper = styled.div`
  display: flex;
  gap: 0.3rem;
`;

const InputText = styled.input.attrs({ type: "text" })`
  width: 6rem;
  font-size: 0.7rem;
`;
