import styled from "styled-components";

export const PartyMember = ({ register, index, partyMemberRemove }) => {
  return (
    <StatWrapper>
      <Stat>
        <LabelText htmlFor={`partyMemberArray.${index}.partyMember`}>
          Party Member {`${index + 1}`}
        </LabelText>
        <input
          type="text"
          {...register(`partyMemberArray.${index}.partyMember`, {})}
        />
        <LabelText htmlFor={`partyMemberArray.${index}.partyMemberMaxHP`}>
          Max-HP
        </LabelText>
        <input
          type="number"
          {...register(`partyMemberArray.${index}.partyMemberMaxHP`, {})}
        />
        <LabelText htmlFor={`partyMemberArray.${index}.partyMemberCurrentHP`}>
          Current HP
        </LabelText>
        <input
          type="number"
          {...register(`partyMemberArray.${index}.partyMemberCurrentHP`, {})}
        />
        <Button type="button" onClick={() => partyMemberRemove(index)}>
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
  width: 40vw;
  font-size: 0.8rem;
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
