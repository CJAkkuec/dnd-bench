import styled from "styled-components";
import { Footer } from "/components/Footer";

export default function MyChar({ bench }) {
  const currentCharacter = bench.characters.find(
    (character) => character.id === bench.activeCharacterID
  );

  return (
    <>
      <MainStyle>
        <MainWrapper>
          {currentCharacter === undefined ? (
            <Empty>It's empty here ...</Empty>
          ) : (
            <>
              <CharacterName>{currentCharacter.charname}</CharacterName>
              <BaseInfoWrapper>
                <p>{currentCharacter.classtype}</p>
                <p> Level {currentCharacter.level}</p>
                <p>{currentCharacter.bg}</p>
              </BaseInfoWrapper>
              <BaseInfoWrapper>
                <p>{currentCharacter.race}</p>
                <p>{currentCharacter.align}</p>
              </BaseInfoWrapper>
              <FieldWrapper>
                <MainStatWrapper>
                  <SpecialWrapper>
                    <SingleStatWrapper>
                      <StyledStat>Prof. Bonus</StyledStat>
                      <StyledNumber>
                        {currentCharacter["proficiency-bonus"]}
                      </StyledNumber>
                    </SingleStatWrapper>
                    <SingleStatWrapper>
                      <StyledStat>Inspiration</StyledStat>
                      <StyledNumber>
                        {currentCharacter["inspiration"]}
                      </StyledNumber>
                    </SingleStatWrapper>
                  </SpecialWrapper>
                  <StatWrapper>
                    <SingleStatWrapper>
                      <StyledStat>Strength</StyledStat>
                      <StyledNumber>{currentCharacter.strength}</StyledNumber>
                    </SingleStatWrapper>
                    <SingleModWrapper>
                      <StyledStat>Modifier</StyledStat>
                      <StyledNumber>
                        {currentCharacter["strength-mod"]}
                      </StyledNumber>
                    </SingleModWrapper>
                  </StatWrapper>
                  <StatWrapper>
                    <SingleStatWrapper>
                      <StyledStat>Dexterity</StyledStat>
                      <StyledNumber>{currentCharacter.dexterity}</StyledNumber>
                    </SingleStatWrapper>
                    <SingleModWrapper>
                      <StyledStat>Modifier</StyledStat>
                      <StyledNumber>
                        {currentCharacter["dexterity-mod"]}
                      </StyledNumber>
                    </SingleModWrapper>
                  </StatWrapper>
                  <StatWrapper>
                    <SingleStatWrapper>
                      <StyledStat>Constitution</StyledStat>
                      <StyledNumber>
                        {currentCharacter.constitution}
                      </StyledNumber>
                    </SingleStatWrapper>
                    <SingleModWrapper>
                      <StyledStat>Modifier</StyledStat>
                      <StyledNumber>
                        {currentCharacter["constitution-mod"]}
                      </StyledNumber>
                    </SingleModWrapper>
                  </StatWrapper>
                  <StatWrapper>
                    <SingleStatWrapper>
                      <StyledStat>Intelligence</StyledStat>
                      <StyledNumber>
                        {currentCharacter.intelligence}
                      </StyledNumber>
                    </SingleStatWrapper>
                    <SingleModWrapper>
                      <StyledStat>Modifier</StyledStat>
                      <StyledNumber>
                        {currentCharacter["intelligence-mod"]}
                      </StyledNumber>
                    </SingleModWrapper>
                  </StatWrapper>
                  <StatWrapper>
                    <SingleStatWrapper>
                      <StyledStat>Wisdom</StyledStat>
                      <StyledNumber>{currentCharacter.wisdom}</StyledNumber>
                    </SingleStatWrapper>
                    <SingleModWrapper>
                      <StyledStat>Modifier</StyledStat>
                      <StyledNumber>
                        {currentCharacter["wisdom-mod"]}
                      </StyledNumber>
                    </SingleModWrapper>
                  </StatWrapper>
                  <StatWrapper>
                    <SingleStatWrapper>
                      <StyledStat>Charisma</StyledStat>
                      <StyledNumber>{currentCharacter.charisma}</StyledNumber>
                    </SingleStatWrapper>
                    <SingleModWrapper>
                      <StyledStat>Modifier</StyledStat>
                      <StyledNumber>
                        {currentCharacter["charisma-mod"]}
                      </StyledNumber>
                    </SingleModWrapper>
                  </StatWrapper>
                </MainStatWrapper>
                <SecondaryStatWrapper>
                  <TertiaryStatWrapper>
                    <StatWrapper>
                      <SingleStatWrapper>
                        <StyledStat>Armor Class</StyledStat>
                        <StyledNumber>
                          {currentCharacter["armor-class"]}
                        </StyledNumber>
                      </SingleStatWrapper>
                    </StatWrapper>
                    <StatWrapper>
                      <SingleStatWrapper>
                        <StyledStat>Initiative</StyledStat>
                        <StyledNumber>
                          {currentCharacter.initiative}
                        </StyledNumber>
                      </SingleStatWrapper>
                    </StatWrapper>
                    <StatWrapper>
                      <SingleStatWrapper>
                        <StyledStat>Speed</StyledStat>
                        <StyledNumber>{currentCharacter.speed}</StyledNumber>
                      </SingleStatWrapper>
                    </StatWrapper>
                  </TertiaryStatWrapper>
                  <TertiaryStatWrapper>
                    <StatWrapper>
                      <SingleStatWrapper>
                        <StyledStat>HP</StyledStat>
                        <StyledNumber>{currentCharacter.hp}</StyledNumber>
                      </SingleStatWrapper>
                    </StatWrapper>
                    <StatWrapper>
                      <SingleStatWrapper>
                        <StyledStat>Temp HP</StyledStat>
                        <StyledNumber>
                          {currentCharacter["temp-hp"]}
                        </StyledNumber>
                      </SingleStatWrapper>
                    </StatWrapper>
                    <StatWrapper></StatWrapper>
                  </TertiaryStatWrapper>
                  <TertiaryStatWrapper>
                    <StatWrapper>
                      <SingleStatWrapper>
                        <StyledStat>Hit Dice</StyledStat>
                        <StyledNumber>
                          {currentCharacter["hit-dice"]}
                        </StyledNumber>
                      </SingleStatWrapper>
                    </StatWrapper>
                    <StatWrapper>
                      <SingleStatWrapper>
                        <StyledStat>Death Saves</StyledStat>
                        <StyledNumber>
                          {currentCharacter["death-saves"]}
                        </StyledNumber>
                      </SingleStatWrapper>
                    </StatWrapper>
                    <StatWrapper></StatWrapper>
                  </TertiaryStatWrapper>
                  <TertiaryStatWrapper>
                    <ConditionalWrapper>
                      <p>Spells</p>
                      {currentCharacter.spellSlotArray.map((spellSlot) => {
                        return <div>{spellSlot.selectedSpell}</div>;
                      })}
                    </ConditionalWrapper>
                  </TertiaryStatWrapper>
                  <TertiaryStatWrapper>
                    <ConditionalWrapper>
                      <p>Feats/etc</p>
                      {currentCharacter.featSlotArray.map((featSlot) => {
                        return <div>{featSlot.selectedFeat}</div>;
                      })}
                    </ConditionalWrapper>
                  </TertiaryStatWrapper>
                </SecondaryStatWrapper>
              </FieldWrapper>
              <FieldWrapper>
                <ProfStatWrapper>
                  <ConditionalWrapper>
                    <p>Proficiencies</p>
                    {currentCharacter.profSlotArray.map((profSlot) => {
                      return <div>{profSlot.proficiency}</div>;
                    })}
                  </ConditionalWrapper>
                  <ConditionalWrapper>
                    <p>Languages</p>
                    {currentCharacter.languageSlotArray.map((languageSlot) => {
                      return <div>{languageSlot.selectedLanguage}</div>;
                    })}
                  </ConditionalWrapper>
                </ProfStatWrapper>
              </FieldWrapper>
              <FieldWrapper>
                <ConditionalWrapper>
                  <div>
                    <p>Personality</p>
                    <p>{currentCharacter.personality}</p>
                  </div>
                  <div>
                    <p>Ideals</p>
                    <p>{currentCharacter.ideals}</p>
                  </div>
                  <div>
                    <p>Bonds</p>
                    <p>{currentCharacter.bonds}</p>
                  </div>
                  <div>
                    <p>Flaws</p>
                    <p>{currentCharacter.flaws}</p>
                  </div>
                </ConditionalWrapper>
              </FieldWrapper>
            </>
          )}
        </MainWrapper>
        <Footer />
      </MainStyle>
    </>
  );
}

const MainStyle = styled.div`
  padding: 0;
  margin: 0;
  font-family: Roboto;
`;

const Empty = styled.div`
  margin: 10vh auto auto auto;
  color: grey;
`;

const MainWrapper = styled.div`
  padding: 1rem;
  margin-bottom: 5rem;
`;

const MainStatWrapper = styled.div`
  width: 35vw;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

const StatWrapper = styled.div`
  display: flex;
  font-size: 0.7rem;
`;

const SingleStatWrapper = styled.div`
  width: 4rem;
  height: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: lightgrey;
`;

const SingleModWrapper = styled.div`
  width: 4rem;
  height: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid lightgrey;
`;

const StyledStat = styled.p`
  margin: 0 auto 0.1rem auto;
`;

const SpecialWrapper = styled.div`
  width: 35vw;
  display: flex;
  font-size: 0.7rem;
`;

const BaseInfoWrapper = styled.div`
  display: flex;
  gap: 1rem;
  & > p {
    margin: 0;
    font-size: 0.8rem;
    padding: 0.2rem;
  }
`;

const CharacterName = styled.div`
  padding: 0.1rem 0 0.1rem 0.4rem;
  font-size: 1.3rem;
  font-family: serif;
  font-weight: bold;
  background: black;
  color: white;
  margin-bottom: 0.5rem;
`;

const FieldWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

const SecondaryStatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

const TertiaryStatWrapper = styled.div`
  display: flex;
  gap: 0.2rem;
`;

const ConditionalWrapper = styled.div`
  width: 100%;
  font-size: 0.8rem;
  display: flex;
  flex-direction: column;
  & > p {
    background: lightgrey;
  }
`;

const ProfStatWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const StyledNumber = styled.p`
  background: white;
  font-family: serif;
  font-size: 1rem;
  width: 50%;
  color: black;
  margin: auto;
  text-align: center;
  margin: 0 auto 0 auto;
`;
