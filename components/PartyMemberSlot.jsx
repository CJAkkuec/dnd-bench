import styled from "styled-components";

export const PartyMemberSlot = ({ partyMember }) => {
  let initialNumber = parseInt(partyMember.charMaxHP) / 100;
  let calculatedNumber = parseInt(partyMember.charCurrentHP) / initialNumber;

  return (
    <>
      <p>
        {partyMember.charName}
        {calculatedNumber <= 0 ? "💀" : null}
      </p>
      <p>Initiative: {partyMember.charInitiative}</p>
      <p>HP</p>
      <StyledProgress
        id="healthBar"
        value={partyMember.charCurrentHP}
        max={partyMember.charMaxHP}
      />
      <HPDiv>
        <span
          style={calculatedNumber < 30 ? { color: "red" } : { color: "black" }}
        >
          {partyMember.charCurrentHP}
        </span>
        <span>{partyMember.charMaxHP}</span>
      </HPDiv>
      {partyMember.forRounds > 0 ? (
        <EffectDiv>
          Has <StyledSpan>{partyMember.activeEffect}</StyledSpan> for
          <StyledSpan>{partyMember.forRounds}</StyledSpan> rounds
        </EffectDiv>
      ) : (
        ""
      )}
    </>
  );
};

const StyledProgress = styled.progress`
  width: 100%;
`;

const HPDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const EffectDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StyledSpan = styled.span`
  color: white;
  margin: 0 0.3rem 0 0.3rem;
`;
