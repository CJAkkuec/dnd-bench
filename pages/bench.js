import styled from "styled-components";
import { Footer } from "/components/Footer";
import Toggle from "react-toggle";

export default function Bench({ bench, setActiveCharacter, removeCharacter }) {
  const handleRemove = (id) => {
    if (confirm("Are you sure you want to delete this character?")) {
      removeCharacter(id);
    }
  };

  return (
    <>
      <MainStyle>
        <Title>Character Bench</Title>
        <Intro>
          This is the character bench. All of your characters will be stored
          here. Use the toggle to activate your character.
        </Intro>
        <Wrapper>
          {bench.characters.length !== 0 ? (
            bench.characters.map((benchItem) => (
              <BenchDiv key={benchItem.id}>
                <Name>{benchItem.charname}</Name>
                <ToggleDiv>
                  <Toggle
                    checked={bench.activeCharacterID === benchItem.id}
                    name="characterIsActive"
                    icons={false}
                    onChange={() => {
                      setActiveCharacter(benchItem.id);
                    }}
                  />
                </ToggleDiv>
                <Remove onClick={() => handleRemove(benchItem.id)}>
                  Remove
                </Remove>
              </BenchDiv>
            ))
          ) : (
            <Empty>It&#39;s empty here ...</Empty>
          )}
        </Wrapper>
        <Footer />
      </MainStyle>
    </>
  );
}

const MainStyle = styled.div`
  padding: 0;
  margin: 0;
  font-family: Roboto;
  font-weight: 300;
`;

const Title = styled.div`
  margin-bottom: 1rem;
  background: rgba(58, 82, 118, 1);
  color: white;
  padding: 0.4rem;
  width: 50vw;
`;

const Intro = styled.div`
  margin: 1rem;
  padding: 0.4rem;
  font-size: 0.8rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto auto 5rem auto;
  width: 80vw;
  gap: 1rem;
`;

const BenchDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  padding: 1rem;
  box-shadow: 0px 2px 7px rgba(58, 82, 118, 0.24);
`;

const Empty = styled.div`
  margin: 10vh auto auto auto;
  color: grey;
`;

const Name = styled.div``;

const ToggleDiv = styled.div`
  display: flex;
`;

const Remove = styled.div`
  color: grey;
  font-size: 0.8rem;
`;
