import styled from "styled-components";
import { Footer } from "/components/Footer";
import Link from "next/dist/client/link";

export default function MyChar({ getCurrentCharacter }) {
  const currentCharacter = getCurrentCharacter();

  return (
    <>
      <MainStyle>
        <MainWrapper>
          {currentCharacter === undefined ? (
            <Empty>It&#39;s empty here ...</Empty>
          ) : (
            <>
              <CharacterName>
                <p>{currentCharacter.charname}</p>
                <Link href={`/edit-character/${currentCharacter.id}`}>
                  <a>edit</a>
                </Link>
              </CharacterName>
              <BaseInfoWrapper>
                <p>{currentCharacter.classtype}</p>
                <p>Level {currentCharacter.level}</p>
                <p>{currentCharacter.bg}</p>
              </BaseInfoWrapper>
              <BaseInfoWrapper>
                <p>{currentCharacter.race}</p>
                <p>{currentCharacter.align}</p>
              </BaseInfoWrapper>

              <FieldWrapper>
                <MainStatWrapper>
                  <StatFieldWrapper>
                    <StatWrapper>
                      <SingleStatWrapper>
                        <StyledStat>Strength</StyledStat>
                        <StyledNumber>{currentCharacter.strength}</StyledNumber>
                      </SingleStatWrapper>
                      <SingleModWrapper>
                        <StyledStat>Modifier</StyledStat>
                        <StyledNumber>
                          {currentCharacter.strengthMod}
                        </StyledNumber>
                      </SingleModWrapper>
                    </StatWrapper>
                    <ThrowWrapper>
                      <SingleThrowWrapper>
                        <p>Saving Throw</p>
                        <p>{currentCharacter.strengthThrow}</p>
                      </SingleThrowWrapper>
                      <SingleThrowWrapper>
                        <p>Athletics</p>
                        <p>{currentCharacter.athletics}</p>
                      </SingleThrowWrapper>
                    </ThrowWrapper>
                  </StatFieldWrapper>

                  <StatFieldWrapper>
                    <StatWrapper>
                      <SingleStatWrapper>
                        <StyledStat>Dexterity</StyledStat>
                        <StyledNumber>
                          {currentCharacter.dexterity}
                        </StyledNumber>
                      </SingleStatWrapper>
                      <SingleModWrapper>
                        <StyledStat>Modifier</StyledStat>
                        <StyledNumber>
                          {currentCharacter.dexterityMod}
                        </StyledNumber>
                      </SingleModWrapper>
                    </StatWrapper>
                    <ThrowWrapper>
                      <SingleThrowWrapper>
                        <p>Saving Throw</p>
                        <p>{currentCharacter.dexThrow}</p>
                      </SingleThrowWrapper>
                      <SingleThrowWrapper>
                        <p>Athletics</p>
                        <p>{currentCharacter.acrobatics}</p>
                      </SingleThrowWrapper>
                      <SingleThrowWrapper>
                        <p>Sleight of Hand</p>
                        <p>{currentCharacter.sleight}</p>
                      </SingleThrowWrapper>
                      <SingleThrowWrapper>
                        <p>Stealth</p>
                        <p>{currentCharacter.stealth}</p>
                      </SingleThrowWrapper>
                    </ThrowWrapper>
                  </StatFieldWrapper>

                  <StatFieldWrapper>
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
                          {currentCharacter.constitutionMod}
                        </StyledNumber>
                      </SingleModWrapper>
                    </StatWrapper>
                    <ThrowWrapper>
                      <SingleThrowWrapper>
                        <p>Saving Throw</p>
                        <p>{currentCharacter.constThrow}</p>
                      </SingleThrowWrapper>
                    </ThrowWrapper>
                  </StatFieldWrapper>

                  <StatFieldWrapper>
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
                          {currentCharacter.intelligenceMod}
                        </StyledNumber>
                      </SingleModWrapper>
                    </StatWrapper>
                    <ThrowWrapper>
                      <SingleThrowWrapper>
                        <p>Saving Throw</p>
                        <p>{currentCharacter.constThrow}</p>
                      </SingleThrowWrapper>
                      <SingleThrowWrapper>
                        <p>Arcana</p>
                        <p>{currentCharacter.arcana}</p>
                      </SingleThrowWrapper>
                      <SingleThrowWrapper>
                        <p>History</p>
                        <p>{currentCharacter.history}</p>
                      </SingleThrowWrapper>
                      <SingleThrowWrapper>
                        <p>Investigation</p>
                        <p>{currentCharacter.investigation}</p>
                      </SingleThrowWrapper>
                      <SingleThrowWrapper>
                        <p>Nature</p>
                        <p>{currentCharacter.nature}</p>
                      </SingleThrowWrapper>
                      <SingleThrowWrapper>
                        <p>Religion</p>
                        <p>{currentCharacter.religion}</p>
                      </SingleThrowWrapper>
                    </ThrowWrapper>
                  </StatFieldWrapper>

                  <StatFieldWrapper>
                    <StatWrapper>
                      <SingleStatWrapper>
                        <StyledStat>Wisdom</StyledStat>
                        <StyledNumber>{currentCharacter.wisdom}</StyledNumber>
                      </SingleStatWrapper>
                      <SingleModWrapper>
                        <StyledStat>Modifier</StyledStat>
                        <StyledNumber>
                          {currentCharacter.wisdomMod}
                        </StyledNumber>
                      </SingleModWrapper>
                    </StatWrapper>
                    <ThrowWrapper>
                      <SingleThrowWrapper>
                        <p>Saving Throw</p>
                        <p>{currentCharacter.wisThrow}</p>
                      </SingleThrowWrapper>
                      <SingleThrowWrapper>
                        <p>Animal Handling</p>
                        <p>{currentCharacter.animalHandling}</p>
                      </SingleThrowWrapper>
                      <SingleThrowWrapper>
                        <p>Insight</p>
                        <p>{currentCharacter.insight}</p>
                      </SingleThrowWrapper>
                      <SingleThrowWrapper>
                        <p>Medicine</p>
                        <p>{currentCharacter.medicine}</p>
                      </SingleThrowWrapper>
                      <SingleThrowWrapper>
                        <p>Perception</p>
                        <p>{currentCharacter.perception}</p>
                      </SingleThrowWrapper>
                      <SingleThrowWrapper>
                        <p>Survival</p>
                        <p>{currentCharacter.survival}</p>
                      </SingleThrowWrapper>
                    </ThrowWrapper>
                  </StatFieldWrapper>

                  <StatFieldWrapper>
                    <StatWrapper>
                      <SingleStatWrapper>
                        <StyledStat>Charisma</StyledStat>
                        <StyledNumber>{currentCharacter.charisma}</StyledNumber>
                      </SingleStatWrapper>
                      <SingleModWrapper>
                        <StyledStat>Modifier</StyledStat>
                        <StyledNumber>
                          {currentCharacter.charismaMod}
                        </StyledNumber>
                      </SingleModWrapper>
                    </StatWrapper>
                    <ThrowWrapper>
                      <SingleThrowWrapper>
                        <p>Saving Throw</p>
                        <p>{currentCharacter.charThrow}</p>
                      </SingleThrowWrapper>
                      <SingleThrowWrapper>
                        <p>Deception</p>
                        <p>{currentCharacter.deception}</p>
                      </SingleThrowWrapper>
                      <SingleThrowWrapper>
                        <p>Intimidation</p>
                        <p>{currentCharacter.intimidation}</p>
                      </SingleThrowWrapper>
                      <SingleThrowWrapper>
                        <p>Performance</p>
                        <p>{currentCharacter.performance}</p>
                      </SingleThrowWrapper>
                      <SingleThrowWrapper>
                        <p>Persuasion</p>
                        <p>{currentCharacter.persuasion}</p>
                      </SingleThrowWrapper>
                    </ThrowWrapper>
                  </StatFieldWrapper>
                </MainStatWrapper>
              </FieldWrapper>

              <FieldWrapper>
                <SecondaryStatWrapper>
                  <DiverseStatWrapper>
                    <SingleStatWrapper>
                      <StyledStat>Prof. Bonus</StyledStat>
                      <StyledNumber>
                        {currentCharacter.proficiencyBonus}
                      </StyledNumber>
                    </SingleStatWrapper>
                  </DiverseStatWrapper>
                  <DiverseStatWrapper>
                    <SingleStatWrapper>
                      <StyledStat>Inspiration</StyledStat>
                      <StyledInsp>
                        {currentCharacter.inspiration === true ? "✔️" : ""}
                      </StyledInsp>
                    </SingleStatWrapper>
                  </DiverseStatWrapper>
                  <DiverseStatWrapper>
                    <SingleStatWrapper>
                      <StyledStat>Armor Class</StyledStat>
                      <StyledNumber>{currentCharacter.armorClass}</StyledNumber>
                    </SingleStatWrapper>
                  </DiverseStatWrapper>
                  <DiverseStatWrapper>
                    <SingleStatWrapper>
                      <StyledStat>Initiative</StyledStat>
                      <StyledNumber>{currentCharacter.initiative}</StyledNumber>
                    </SingleStatWrapper>
                  </DiverseStatWrapper>
                  <DiverseStatWrapper>
                    <SingleStatWrapper>
                      <StyledStat>Speed</StyledStat>
                      <StyledNumber>{currentCharacter.speed}</StyledNumber>
                    </SingleStatWrapper>
                  </DiverseStatWrapper>
                  <DiverseStatWrapper>
                    <SingleStatWrapper>
                      <StyledStat>HP</StyledStat>
                      <StyledNumber>{currentCharacter.hp}</StyledNumber>
                    </SingleStatWrapper>
                  </DiverseStatWrapper>
                  <DiverseStatWrapper>
                    <SingleStatWrapper>
                      <StyledStat>Temp HP</StyledStat>
                      <StyledNumber>{currentCharacter.tempHp}</StyledNumber>
                    </SingleStatWrapper>
                  </DiverseStatWrapper>
                  <DiverseStatWrapper>
                    <SingleStatWrapper>
                      <StyledStat>Hit Dice</StyledStat>
                      <StyledNumber>{currentCharacter.hitDice}</StyledNumber>
                    </SingleStatWrapper>
                  </DiverseStatWrapper>
                  <DiverseStatWrapper>
                    <SingleStatWrapper>
                      <StyledStat>Death Saves</StyledStat>
                      <StyledNumber>{currentCharacter.deathSaves}</StyledNumber>
                    </SingleStatWrapper>
                  </DiverseStatWrapper>
                </SecondaryStatWrapper>
              </FieldWrapper>

              <FieldWrapper>
                <ConditionalWrapper>
                  <p>Spells</p>
                  {currentCharacter.spellSlotArray.map((spellSlot) => {
                    return (
                      <div key={spellSlot.selectedSpell}>
                        {spellSlot.selectedSpell}
                      </div>
                    );
                  })}
                </ConditionalWrapper>
                <ConditionalWrapper>
                  <p>Attacks</p>
                  {currentCharacter.attackSlotArray.map((attackSlot) => {
                    return (
                      <>
                        <div>Name: {attackSlot.attackName}</div>
                        <div>Dice: {attackSlot.attackDice}</div>
                        <div>Range: {attackSlot.attackRange}</div>
                      </>
                    );
                  })}
                </ConditionalWrapper>
                <ConditionalWrapper>
                  <p>Feats/etc</p>
                  {currentCharacter.featSlotArray.map((featSlot) => {
                    return (
                      <div key={featSlot.selectedFeat}>
                        {featSlot.selectedFeat}
                      </div>
                    );
                  })}
                </ConditionalWrapper>
                <ConditionalWrapper>
                  <p>Proficiencies</p>
                  {currentCharacter.proficiencySlotArray.map(
                    (proficiencySlot) => {
                      return (
                        <div key={proficiencySlot.proficiencies}>
                          {proficiencySlot.proficiencies}
                        </div>
                      );
                    }
                  )}
                </ConditionalWrapper>
                <ConditionalWrapper>
                  <p>Languages</p>
                  {currentCharacter.languageSlotArray.map((languageSlot) => {
                    return (
                      <div key={languageSlot.selectedLanguage}>
                        {languageSlot.selectedLanguage}
                      </div>
                    );
                  })}
                </ConditionalWrapper>
              </FieldWrapper>

              <FieldWrapper>
                <ConditionalWrapper>
                  <p>Basic Items</p>
                  {currentCharacter.basicItemSlotArray.map((itemSlot) => {
                    return (
                      <div key={itemSlot.selectedItem}>
                        <p>
                          {itemSlot.selectedItem} x
                          {itemSlot.selectedItemAmount < 1
                            ? "1"
                            : itemSlot.selectedItemAmount}
                        </p>
                      </div>
                    );
                  })}
                </ConditionalWrapper>
                <ConditionalWrapper>
                  <p>Special Items</p>
                  {currentCharacter.specialItemSlotArray.map((itemSlot) => {
                    return (
                      <div key={itemSlot.selectedItem}>
                        <p>
                          {itemSlot.selectedItem} x
                          {itemSlot.selectedItemAmount < 1
                            ? "1"
                            : itemSlot.selectedItemAmount}
                        </p>
                      </div>
                    );
                  })}
                </ConditionalWrapper>
              </FieldWrapper>

              <FieldWrapper>
                <ConditionalWrapper>
                  <p>Character Notes</p>
                  {currentCharacter.notesArray.map((noteSlot) => {
                    return (
                      <div key={noteSlot.addedNote}>{noteSlot.addedNote}</div>
                    );
                  })}
                </ConditionalWrapper>
                <ConditionalWrapper>
                  <p>Personality</p>
                  <div>{currentCharacter.personality}</div>
                </ConditionalWrapper>
                <ConditionalWrapper>
                  <p>Ideals</p>
                  <div>{currentCharacter.ideals}</div>
                </ConditionalWrapper>
                <ConditionalWrapper>
                  <p>Bonds</p>
                  <div>{currentCharacter.bonds}</div>
                </ConditionalWrapper>
                <ConditionalWrapper>
                  <p>Flaws</p>
                  <div>{currentCharacter.flaws}</div>
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
  font-weight: 300;
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
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.3rem;
`;

const StatWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  padding: 0.3rem;
  font-size: 0.7rem;
  gap: 0.3rem;
  background: rgba(58, 82, 118, 0.24);
`;

const SingleStatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  & > p:nth-child(2) {
    background: white;
  }
`;

const SingleModWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  & > p:nth-child(2) {
    background: white;
  }
`;

const StyledStat = styled.p`
  margin: 0 auto 0.1rem auto;
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
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding: 0.1rem 0 0.1rem 0.4rem;
  font-size: 1.3rem;
  font-family: serif;
  font-weight: bold;
  background: rgba(58, 82, 118, 1);
  color: white;
  margin-bottom: 0.5rem;
  & > p {
    margin: 0;
  }
  & > a:nth-child(2) {
    font-size: 1rem;
    font-weight: 100;
    font-family: "Roboto";
    margin-right: 0.5rem;
    cursor: pointer;
  }
`;

const FieldWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 1rem;
  gap: 0.3rem;
`;

const SecondaryStatWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.3rem;
`;

const ConditionalWrapper = styled.div`
  width: 48%;
  font-size: 0.8rem;
  display: flex;
  flex-direction: column;
  & > p {
    background: rgba(58, 82, 118, 0.24);
    margin: 0 0 0.3rem 0;
  }

  & div > p {
    margin: 0;
  }
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

const StyledInsp = styled.p`
  background: white;
  font-family: serif;
  font-size: 0.7rem;
  width: 50%;
  color: black;
  margin: auto;
  text-align: center;
  margin: 0 auto 0 auto;
`;

const ThrowWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.7rem;
  padding: 0.3rem;

  & > div:nth-child(even) {
    background: rgba(58, 82, 118, 0.24);
  }
`;

const SingleThrowWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  & > p {
    margin: 0;
  }
`;

const StatFieldWrapper = styled.div`
  width: 32%;
  display: flex;
  flex-direction: column;
`;

const DiverseStatWrapper = styled.div`
  width: 32%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  padding: 0.3rem;
  font-size: 0.7rem;
  background: rgba(58, 82, 118, 0.24);
`;
