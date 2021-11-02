import Link from "next/link";
import styled from "styled-components";
import Collapsible from "react-collapsible";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { NumberStat } from "./components/NumberStat";
import { TextStat } from "./components/TextStat";

import bgList from "../data/backgrounds-data.json";
import classList from "../data/classes-data.json";
import raceList from "../data/races-data.json";
import alignList from "../data/alignm-data.json";

export default function NewChar({ spellList }) {
  const [spellInfo, setSpellInfo] = useState({
    name: "Select your spell",
    desc: ["Description will be here"],
  });

  const getSelectValue = (spell) => {
    const spellIndex = spell.target.value;

    async function fetchSpellData() {
      const spellResult = await fetch(
        `https://www.dnd5eapi.co/api/spells/${spellIndex}`
      );
      const spellData = await spellResult.json();
      setSpellInfo(spellData);
      console.log(spellData);
    }

    fetchSpellData();
  };

  return (
    <>
      <MainStyle>
        <MainWrapper>
          <form>
            <fieldset>
              <Collapsible trigger="Basics">
                <FormWrapper>
                  <TextStat statName="Character Name" type="c-name" />
                  <Stat>
                    <LabelText>Class</LabelText>
                    <select>
                      {classList.map((classtype) => {
                        return (
                          <option key={classtype.name} value={classtype.name}>
                            {classtype.name}
                          </option>
                        );
                      })}
                    </select>
                  </Stat>
                  <NumberStat statName="Level" type="c-level" />
                  <Stat>
                    <LabelText>Race</LabelText>
                    <select>
                      {raceList.map((race) => {
                        return (
                          <option key={race.name} value={race.name}>
                            {race.name}
                          </option>
                        );
                      })}
                    </select>
                  </Stat>
                  <Stat>
                    <LabelText> Background</LabelText>
                    <select>
                      {bgList.map((bg) => {
                        return (
                          <option key={bg.name} value={bg.name}>
                            {bg.name}
                          </option>
                        );
                      })}
                    </select>
                  </Stat>
                  <Stat>
                    <LabelText>Alignment</LabelText>
                    <select>
                      {alignList.map((align) => {
                        return (
                          <option key={align.name} value={align.index}>
                            {align.name}
                          </option>
                        );
                      })}
                    </select>
                  </Stat>
                </FormWrapper>
              </Collapsible>
            </fieldset>

            <fieldset>
              <Collapsible trigger="Stats">
                <FormWrapper>
                  <StatWrapper>
                    <NumberStat
                      statName="Proficiency Bonus"
                      type="proficiency-bonus"
                    />
                    <NumberStat statName="Inspiration" type="inspiration" />
                  </StatWrapper>

                  <StatWrapper>
                    <NumberStat statName="Strength" type="strength" />
                    <ThrowWrapper>
                      <NumberStat
                        statName="Saving Throws"
                        type="strength-throw"
                      />
                      <NumberStat statName="Athletics" type="athletics" />
                    </ThrowWrapper>
                  </StatWrapper>

                  <StatWrapper>
                    <NumberStat statName="Dexterity" type="dexterity" />
                    <ThrowWrapper>
                      <NumberStat statName="Saving Throws" type="dex-throws" />
                      <NumberStat statName="Acrobatics" type="acrobatics" />
                      <NumberStat
                        statName="Sleight of Hand"
                        type="sleightofhand"
                      />
                      <NumberStat statName="Stealth" type="stealth" />
                    </ThrowWrapper>
                  </StatWrapper>

                  <StatWrapper>
                    <NumberStat statName="Constitution" type="constitution" />
                    <ThrowWrapper>
                      <NumberStat
                        statName="Saving Throws"
                        type="const-throws"
                      />
                    </ThrowWrapper>
                  </StatWrapper>

                  <StatWrapper>
                    <NumberStat statName="Intelligence" type="intelligence" />
                    <ThrowWrapper>
                      <NumberStat statName="Saving Throws" type="int-throws" />
                      <NumberStat statName="Arcana" type="arcana" />
                      <NumberStat statName="History" type="history" />
                      <NumberStat
                        statName="Investigation"
                        type="investigation"
                      />
                      <NumberStat statName="Nature" type="nature" />
                      <NumberStat statName="Religion" type="religion" />
                    </ThrowWrapper>
                  </StatWrapper>

                  <StatWrapper>
                    <NumberStat statName="Wisdom" type="wisdom" />
                    <ThrowWrapper>
                      <NumberStat statName="Saving Throws" type="wis-throws" />
                      <NumberStat
                        statName="Animal Handling"
                        type="animalhandling"
                      />
                      <NumberStat statName="Insight" type="insight" />
                      <NumberStat statName="Medicine" type="medicine" />
                      <NumberStat statName="Perception" type="perception" />
                      <NumberStat statName="Survival" type="survival" />
                    </ThrowWrapper>
                  </StatWrapper>

                  <StatWrapper>
                    <NumberStat statName="Charisma" type="charisma" />
                    <ThrowWrapper>
                      <NumberStat statName="Saving Throws" type="char-throws" />
                      <NumberStat statName="Deception" type="deception" />
                      <NumberStat statName="Intimidation" type="intimidation" />
                      <NumberStat statName="Performance" type="performance" />
                      <NumberStat statName="Persuasion" type="persuasion" />
                    </ThrowWrapper>
                    <NumberStat
                      statName="Passive Wisdom"
                      type="passive-wisdom"
                    />
                  </StatWrapper>
                </FormWrapper>
              </Collapsible>
            </fieldset>

            <fieldset>
              <Collapsible trigger="Vitality">
                <FormWrapper>
                  <StatWrapper>
                    <NumberStat statName="Armor Class" type="armor-class" />
                    <NumberStat statName="Initiative" type="initiative" />
                    <NumberStat statName="Speed" type="speed" />
                    <NumberStat statName="Hit Points" type="hp" />
                    <NumberStat statName="Temp Hit Points" type="temp-hp" />
                    <NumberStat statName="Hit Dice" type="hit-dice" />
                    <NumberStat statName="Death Saves" type="deathsaves" />
                  </StatWrapper>
                </FormWrapper>
              </Collapsible>
            </fieldset>

            <fieldset>
              <Collapsible trigger="Flavor">
                <FormWrapper>
                  <StatWrapper>
                    <TextStat
                      statName="Personality Traits"
                      type="personality"
                    />
                    <TextStat statName="Ideals" type="ideals" />
                    <TextStat statName="Bonds" type="bonds" />
                    <TextStat statName="Flaws" type="flaws" />
                  </StatWrapper>
                </FormWrapper>
              </Collapsible>
            </fieldset>

            <fieldset>
              <Collapsible trigger="Attacks&amp;Spells">
                <FormWrapper>
                  <StatWrapper>
                    <Stat>
                      <LabelText>Add a Spell</LabelText>
                      <select onChange={getSelectValue}>
                        {spellList.results.map((spell) => {
                          return (
                            <option key={spell.name} value={spell.index}>
                              {spell.name}
                            </option>
                          );
                        })}
                      </select>
                      <div>
                        <p>{spellInfo.name}</p>
                        {spellInfo.desc.map((desc) => {
                          return <p key={spellInfo.name}>{desc}</p>;
                        })}
                        <p>{spellInfo.components}</p>
                        <p>{spellInfo.range}</p>
                      </div>
                    </Stat>
                    <ButtonWrapper>
                      <Button>Delete</Button>
                    </ButtonWrapper>
                  </StatWrapper>
                </FormWrapper>
                <Button>Add</Button>
              </Collapsible>
            </fieldset>

            <input type="submit" value="Submit" />
          </form>

          <Footer>
            <FooterList>
              <Link href="/">
                <FooterItem>Dash</FooterItem>
              </Link>
              <FooterItem>Current</FooterItem>
              <FooterItem>New</FooterItem>
              <FooterItem>Bench</FooterItem>
              <FooterItem>Battle Mode</FooterItem>
            </FooterList>
          </Footer>
        </MainWrapper>
      </MainStyle>
    </>
  );
}

export async function getStaticProps() {
  const spellResult = await fetch(`https://www.dnd5eapi.co/api/spells/`);
  const spellList = await spellResult.json();

  return {
    props: {
      spellList,
    },
  };
}

const MainStyle = styled.div`
  padding: 0;
  margin: 0;
  font-family: Roboto, Rokkit;
`;

const Footer = styled.div`
  background: white;
  position: fixed;
  bottom: 0;
  z-index: 1;
  box-shadow: 0px -2px 7px rgba(58, 82, 118, 0.24);
`;

const SpellTest = styled.div`
  font-size: 0.8rem;
  margin: 1rem auto;
  padding: 0.5rem;
  border-radius: 10px;
  background: lightgrey;
  display: flex;
  flex-direction: column;
  width: 80vw;
`;

const FooterList = styled.ul`
  margin: 0;
  padding: 1rem;
  display: flex;
  list-style-type: none;
  width: 100vw;
  justify-content: space-between;
`;

const FooterItem = styled.li`
  cursor: pointer;
  padding: 0.5rem;
`;

const LabelText = styled.p`
  margin: 0.2rem 0 0.2rem 0;
`;

const FormWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.3rem;
`;

const ThrowWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: lightgrey;
  font-size: 0.7rem;
  padding: 0.2rem;
`;

const StatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  padding: 0.5rem;
  width: 45vw;
`;

const InputNumber = styled.input.attrs({ type: "number" })`
  width: 3rem;
  font-size: 0.7rem;
`;

const MainWrapper = styled.div`
  margin-bottom: 5rem;
`;

const Button = styled.button`
  width: auto;
  height: 1.5rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 0.3rem;
`;

const Stat = styled.label``;
