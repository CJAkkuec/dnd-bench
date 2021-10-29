import styled from "styled-components";

export const Dash = () => {
  return (
    <>
      <DashDiv>
        <DashItem>
          <ItemP>Current Character (Name)</ItemP>
        </DashItem>
        <DashItem>
          <ItemP>New Character</ItemP>
        </DashItem>
        <DashItem>
          <ItemP>Character Bench</ItemP>
        </DashItem>
        <DashItem>
          <ItemP>Battle Mode</ItemP>
        </DashItem>
      </DashDiv>
    </>
  );
};

const DashDiv = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
`;

const DashItem = styled.div`
  padding: 1rem;
  margin: 0.5rem 1.5rem 0.5rem 1.5rem;
  box-shadow: 0px 2px 7px rgba(58, 82, 118, 0.24);
`;

const ItemP = styled.p`
  text-align: center;
  margin: 0;
`;
