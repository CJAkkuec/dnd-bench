import styled from "styled-components";
import { Footer } from "/components/Footer";
import { useState } from "react";
import { BattleMode } from "../components/BattleMode";

export default function Battle({ getCurrentCharacter }) {
  const [isLoaded, setIsLoaded] = useState(false);
  function loadBattleMode() {
    setIsLoaded(true);
  }

  return (
    <>
      <MainStyle>
        <Title>Battle Mode: Player Perspective</Title>
        <Intro>
          This is your battle overview. Only the character marked as active can
          participate in this mode. This feature is a work in progress.
        </Intro>
        {isLoaded === false ? (
          <button onClick={loadBattleMode}>Load Battlemode</button>
        ) : (
          <BattleMode getCurrentCharacter={getCurrentCharacter} />
        )}
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
