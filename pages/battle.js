import styled from "styled-components";
import { Footer } from "/components/Footer";
import { useLocalStorage } from "../utils/useLocalStorage";
import { useEffect } from "react";

export default function Battle({ getCurrentCharacter }) {
  const currentCharacter = getCurrentCharacter();
  const [count, setCount] = useLocalStorage("round", 0);
  const [characterHP, setCharacterHP] = useLocalStorage("characterHP", null);

  useEffect(() => {
    if (currentCharacter?.hp) {
      setCharacterHP(parseInt(currentCharacter.hp, 10));
    }
  }, [currentCharacter?.hp]);

  /*https://scotch.io/courses/10-react-challenges-beginner/adding-calculator */

  return (
    <>
      <MainStyle>
        <Title>Battle Mode</Title>
        <Intro>
          This is your battle overview. Only the character marked as active can
          participate in this mode. This feature will be implemented soon.
        </Intro>
        <Wrapper>
          <p>Under construction...</p>
          {currentCharacter !== undefined ? (
            <>
              <div>
                Battle Timer: {count}
                <button type="button" onClick={() => setCount(count + 1)}>
                  Add Round
                </button>
                <button type="button" onClick={() => setCount(0)}>
                  Reset
                </button>
              </div>
              <div>{currentCharacter.charname}</div>
              <div>
                HP: {characterHP}
                <input type="number" />
                <button type="button">Change</button>
              </div>
              <div>Temp HP: {currentCharacter.tempHp}</div>
              <div>
                <span>Spells:</span>
                {currentCharacter.spellSlotArray.map((spellSlot) => {
                  return (
                    <div key={spellSlot.selectedSpell}>
                      {spellSlot.selectedSpell}
                    </div>
                  );
                })}
              </div>
              <div>
                <span>Attacks:</span>
                {currentCharacter.attackSlotArray.map((attackSlot) => {
                  return (
                    <>
                      <div>Name: {attackSlot.attackName}</div>
                      <div>Dice: {attackSlot.attackDice}</div>
                      <div>Range: {attackSlot.attackRange}</div>
                    </>
                  );
                })}
              </div>
              <div>Active Buff: Selection</div>
              <div>Active Debuff: Selection</div>
            </>
          ) : (
            ""
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

  & > p {
    font-size: 0.8rem;
    color: grey;
  }
`;
