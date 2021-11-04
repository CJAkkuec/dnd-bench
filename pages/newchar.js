import styled from "styled-components";
import Collapsible from "react-collapsible";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useFormPersist from "react-hook-form-persist";
import { v4 as uuidv4 } from "uuid";
import { Footer } from "./components/Footer";
import { SpellSlotInput } from "./components/SpellSlotInput";

import bgList from "../data/backgrounds-data.json";
import classList from "../data/classes-data.json";
import raceList from "../data/races-data.json";
import alignList from "../data/alignm-data.json";

/* Disable submit on enter */

export default function NewChar({ spellList }) {
  const [spellSlot, setSpellSlot] = useState([]);

  const addSlot = () => {
    setSpellSlot([...spellSlot, null]);
  };

  const handleSpellSlotChange = (index) => {
    return (event) => {
      const newValue = event.target.value;
      const cloneSpells = [...spellSlot];
      cloneSpells[index] = newValue;
      setSpellSlot(cloneSpells);
    };
  };

  const handleReset = () => {
    if (confirm("Are you sure you want to reset the form?")) {
      reset();
    } else {
    }
  };

  const { register, handleSubmit, watch, errors, setValue, reset } = useForm();
  useFormPersist("form", { watch, setValue });

  const onSubmit = (data) => {
    console.log(data);
  };

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <>
      <MainStyle>
        <MainWrapper>
          <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
              <Collapsible trigger="Basics">
                <FormWrapper>
                  <Stat>
                    <LabelText htmlFor="charname">Character Name</LabelText>
                    <input
                      type="text"
                      name="charname"
                      {...register("charname")}
                      id="charname"
                    />
                  </Stat>

                  <Stat>
                    <LabelText htmlFor="classtype">Class</LabelText>
                    <select
                      {...register("classtype")}
                      id="classtype"
                      name="classtype"
                    >
                      {classList.map((classtype) => {
                        return (
                          <option key={classtype.index} value={classtype.name}>
                            {classtype.name}
                          </option>
                        );
                      })}
                    </select>
                  </Stat>

                  <Stat>
                    <LabelText htmlFor="level">Level</LabelText>
                    <InputNumber
                      {...register("level")}
                      id="level"
                      max="999"
                      name="level"
                    />
                  </Stat>

                  <Stat>
                    <LabelText htmlFor="race">Race</LabelText>
                    <select {...register("race")} id="race" name="race">
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
                    <LabelText htmlFor="bg"> Background</LabelText>
                    <select {...register("bg")} id="bg" name="bg">
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
                    <LabelText htmlFor="align">Alignment</LabelText>
                    <select {...register("align")} id="align" name="align">
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
                    <Stat>
                      <LabelText htmlFor="proficiency-bonus">
                        Proficiency Bonus
                      </LabelText>
                      <InputNumber
                        {...register("proficiency-bonus")}
                        id="proficiency-bonus"
                        max="999"
                        name="proficiency-bonus"
                      />
                    </Stat>

                    <Stat>
                      <LabelText htmlFor="inspiration">Inspiration</LabelText>
                      <InputNumber
                        {...register("inspiration")}
                        id="inspiration"
                        max="999"
                        name="inspiration"
                      />
                    </Stat>
                  </StatWrapper>

                  <StatWrapper>
                    <Stat>
                      <LabelText htmlFor="strength">Strength</LabelText>
                      <InputNumber
                        {...register("strength")}
                        id="strength"
                        max="999"
                        name="strength"
                      />
                    </Stat>

                    <ThrowWrapper>
                      <Stat>
                        <LabelText htmlFor="strength-throw">
                          Saving Throw
                        </LabelText>
                        <InputNumber
                          {...register("strength-throw")}
                          id="strength-throw"
                          max="999"
                          name="strength-throw"
                        />
                      </Stat>

                      <Stat>
                        <LabelText htmlFor="athletics">Athletics</LabelText>
                        <InputNumber
                          {...register("athletics")}
                          id="athletics"
                          max="999"
                          name="athletics"
                        />
                      </Stat>
                    </ThrowWrapper>
                  </StatWrapper>

                  <StatWrapper>
                    <Stat>
                      <LabelText htmlFor="dexterity">Dexterity</LabelText>
                      <InputNumber
                        {...register("dexterity")}
                        id="dexterity"
                        max="999"
                        name="dexterity"
                      />
                    </Stat>
                    <ThrowWrapper>
                      <Stat>
                        <LabelText htmlFor="dex-throw">Saving Throws</LabelText>
                        <InputNumber
                          {...register("dex-throws")}
                          id="dex-throws"
                          max="999"
                          name="dex-throws"
                        />
                      </Stat>

                      <Stat>
                        <LabelText htmlFor="acrobatics">Acrobatics</LabelText>
                        <InputNumber
                          {...register("acrobatics")}
                          id="acrobatics"
                          max="999"
                          name="acrobatics"
                        />
                      </Stat>

                      <Stat>
                        <LabelText htmlFor="sleight">Sleight of Hand</LabelText>
                        <InputNumber
                          {...register("sleight")}
                          id="sleight"
                          max="999"
                          name="sleight"
                        />
                      </Stat>

                      <Stat>
                        <LabelText htmlFor="stealth">Stealth</LabelText>
                        <InputNumber
                          {...register("stealth")}
                          id="stealth"
                          max="999"
                          name="stealth"
                        />
                      </Stat>
                    </ThrowWrapper>
                  </StatWrapper>

                  <StatWrapper>
                    <Stat>
                      <LabelText htmlFor="constitution">Constitution</LabelText>
                      <InputNumber
                        {...register("constitution")}
                        id="constitution"
                        max="999"
                        name="constitution"
                      />
                    </Stat>

                    <ThrowWrapper>
                      <Stat>
                        <LabelText htmlFor="const-throw">
                          Saving Throws
                        </LabelText>
                        <InputNumber
                          {...register("const-throw")}
                          id="const-throw"
                          max="999"
                        />
                      </Stat>
                    </ThrowWrapper>
                  </StatWrapper>

                  <StatWrapper>
                    <Stat>
                      <LabelText htmlFor="intelligence">Intelligence</LabelText>
                      <InputNumber
                        {...register("intelligence")}
                        id="intelligence"
                        max="999"
                        name="intelligence"
                      />
                    </Stat>
                    <ThrowWrapper>
                      <Stat>
                        <LabelText htmlFor="int-throw">Saving Throws</LabelText>
                        <InputNumber
                          {...register("int-throw")}
                          id="int-throw"
                          max="999"
                          name="int-throw"
                        />
                      </Stat>

                      <Stat>
                        <LabelText htmlFor="arcana">Arcana</LabelText>
                        <InputNumber
                          {...register("arcana")}
                          id="arcana"
                          max="999"
                          name="arcana"
                        />
                      </Stat>

                      <Stat>
                        <LabelText htmlFor="history">History</LabelText>
                        <InputNumber
                          {...register("history")}
                          id="history"
                          max="999"
                          name="history"
                        />
                      </Stat>

                      <Stat>
                        <LabelText htmlFor="nature">Nature</LabelText>
                        <InputNumber
                          {...register("nature")}
                          id="nature"
                          max="999"
                          name="nature"
                        />
                      </Stat>

                      <Stat>
                        <LabelText htmlFor="investigation">
                          Investigation
                        </LabelText>
                        <InputNumber
                          {...register("investigation")}
                          id="investigation"
                          max="999"
                          name="investigation"
                        />
                      </Stat>

                      <Stat>
                        <LabelText htmlFor="religion">Religion</LabelText>
                        <InputNumber
                          {...register("religion")}
                          id="religion"
                          max="999"
                          name="religion"
                        />
                      </Stat>
                    </ThrowWrapper>
                  </StatWrapper>

                  <StatWrapper>
                    <Stat>
                      <LabelText htmlFor="wisdom">Wisdom</LabelText>
                      <InputNumber
                        {...register("wisdom")}
                        id="wisdom"
                        max="999"
                        name="wisdom"
                      />
                    </Stat>

                    <ThrowWrapper>
                      <Stat>
                        <LabelText htmlFor="wis-throw">Saving Throws</LabelText>
                        <InputNumber
                          {...register("wis-throw")}
                          id="wis-throw"
                          max="999"
                          name="wis-throw"
                        />
                      </Stat>

                      <Stat>
                        <LabelText htmlFor="animal-handling">
                          Animal Handling
                        </LabelText>
                        <InputNumber
                          {...register("animal-handling")}
                          id="animal-handling"
                          max="999"
                          name="animal-handling"
                        />
                      </Stat>

                      <Stat>
                        <LabelText htmlFor="insight">Insight</LabelText>
                        <InputNumber
                          {...register("insight")}
                          id="insight"
                          max="999"
                          name="insight"
                        />
                      </Stat>

                      <Stat>
                        <LabelText htmlFor="medicine">Medicine</LabelText>
                        <InputNumber
                          {...register("medicine")}
                          id="medicine"
                          max="999"
                          name="medicine"
                        />
                      </Stat>
                      <Stat>
                        <LabelText htmlFor="perception">Perception</LabelText>
                        <InputNumber
                          {...register("perception")}
                          id="perception"
                          max="999"
                          name="perception"
                        />
                      </Stat>

                      <Stat>
                        <LabelText htmlFor="survival">Survival</LabelText>
                        <InputNumber
                          {...register("survival")}
                          id="survival"
                          max="999"
                          name="survival"
                        />
                      </Stat>
                    </ThrowWrapper>
                  </StatWrapper>

                  <StatWrapper>
                    <Stat>
                      <LabelText htmlFor="charisma">Charisma</LabelText>
                      <InputNumber
                        {...register("charisma")}
                        id="charisma"
                        max="999"
                        name="charisma"
                      />
                    </Stat>
                    <ThrowWrapper>
                      <Stat>
                        <LabelText htmlFor="char-throw">
                          Saving Throws
                        </LabelText>
                        <InputNumber
                          {...register("char-throw")}
                          id="char-throw"
                          max="999"
                          name="char-throw"
                        />
                      </Stat>

                      <Stat>
                        <LabelText htmlFor="deception">Deception</LabelText>
                        <InputNumber
                          {...register("deception")}
                          id="deception"
                          max="999"
                          name="deception"
                        />
                      </Stat>

                      <Stat>
                        <LabelText htmlFor="intimidation">
                          Intimidation
                        </LabelText>
                        <InputNumber
                          {...register("intimidation")}
                          id="intimidation"
                          max="999"
                          name="intimidation"
                        />
                      </Stat>

                      <Stat>
                        <LabelText htmlFor="performance">Performance</LabelText>
                        <InputNumber
                          {...register("performance")}
                          id="performance"
                          max="999"
                          name="performance"
                        />
                      </Stat>

                      <Stat>
                        <LabelText htmlFor="persuasion">Persuasion</LabelText>
                        <InputNumber
                          {...register("persuasion")}
                          id="persuasion"
                          max="999"
                          name="persuasion"
                        />
                      </Stat>
                    </ThrowWrapper>

                    <Stat>
                      <LabelText htmlFor="passive-wisdom">
                        Passive Wisdom
                      </LabelText>
                      <InputNumber
                        {...register("passive-wisdom")}
                        id="passive-wisdom"
                        max="999"
                        name="passive-wisdom"
                      />
                    </Stat>
                  </StatWrapper>
                </FormWrapper>
              </Collapsible>
            </fieldset>

            <fieldset>
              <Collapsible trigger="Vitality">
                <FormWrapper>
                  <StatWrapper>
                    <Stat>
                      <LabelText htmlFor="armor-class">Armor Class</LabelText>
                      <InputNumber
                        {...register("armor-class")}
                        id="armor-class"
                        max="999"
                        name="armor-class"
                      />
                    </Stat>

                    <Stat>
                      <LabelText htmlFor="initiative">Initiative</LabelText>
                      <InputNumber
                        {...register("initiative")}
                        id="initiative"
                        max="999"
                      />
                    </Stat>

                    <Stat>
                      <LabelText htmlFor="speed">Speed</LabelText>
                      <InputNumber
                        {...register("speed")}
                        id="speed"
                        max="999"
                        name="speed"
                      />
                    </Stat>

                    <Stat>
                      <LabelText htmlFor="hp">Hit Points</LabelText>
                      <InputNumber
                        {...register("hp")}
                        id="hp"
                        max="999"
                        name="hp"
                      />
                    </Stat>

                    <Stat>
                      <LabelText htmlFor="temp-hp">Temp Hit Points</LabelText>
                      <InputNumber
                        {...register("temp-hp")}
                        id="temp-hp"
                        max="999"
                        name="temp-hp"
                      />
                    </Stat>

                    <Stat>
                      <LabelText htmlFor="hit-dice">Hit Dice</LabelText>
                      <InputNumber
                        {...register("hit-dice")}
                        id="hit-dice"
                        max="999"
                        name="hit-dice"
                      />
                    </Stat>

                    <Stat>
                      <LabelText htmlFor="death-saves">Death Saves</LabelText>
                      <InputNumber
                        {...register("death-saves")}
                        id="death-saves"
                        max="999"
                        name="death-saves"
                      />
                    </Stat>
                  </StatWrapper>
                </FormWrapper>
              </Collapsible>
            </fieldset>

            <fieldset>
              <Collapsible trigger="Flavor">
                <FormWrapper>
                  <StatWrapper>
                    <Stat>
                      <LabelText htmlFor="personality">Personality</LabelText>
                      <textarea
                        {...register("personality")}
                        id="personality"
                        name="personality"
                      ></textarea>
                    </Stat>

                    <Stat>
                      <LabelText htmlFor="ideals">Ideals</LabelText>
                      <textarea
                        {...register("ideals")}
                        id="ideals"
                        name="ideals"
                      ></textarea>
                    </Stat>

                    <Stat>
                      <LabelText htmlFor="bonds">Bonds</LabelText>
                      <textarea
                        {...register("bonds")}
                        id="bonds"
                        name="bonds"
                      ></textarea>
                    </Stat>

                    <Stat>
                      <LabelText htmlFor="flaws">Flaws</LabelText>
                      <textarea
                        {...register("flaws")}
                        id="flaws"
                        name="flaws"
                      ></textarea>
                    </Stat>
                  </StatWrapper>
                </FormWrapper>
              </Collapsible>
            </fieldset>

            <fieldset>
              <Collapsible trigger="Attacks&amp;Spells">
                <FormWrapper>
                  {spellSlot.map((value, index) => {
                    return (
                      <SpellSlotInput
                        spellList={spellList}
                        value={value}
                        onChange={handleSpellSlotChange(index)}
                      />
                    );
                  })}
                </FormWrapper>
                <Button onClick={addSlot} type="button">
                  Add
                </Button>
              </Collapsible>
            </fieldset>

            <fieldset>
              <Collapsible trigger="Features &amp; Traits">
                <FormWrapper>
                  <StatWrapper>
                    <Stat>
                      <LabelText htmlFor="feats-traits">Add a Feat</LabelText>
                      <select
                        {...register("feats-traits")}
                        id="feats-traits"
                        name="feats-traits"
                      >
                        <option>Temp</option>
                      </select>
                    </Stat>
                    <ButtonWrapper>
                      <Button>Delete</Button>
                    </ButtonWrapper>
                  </StatWrapper>
                </FormWrapper>
                <Button>Add</Button>
              </Collapsible>
            </fieldset>

            <fieldset>
              <Collapsible trigger="Other Proficiencies &amp; Languages">
                <FormWrapper>
                  <StatWrapper>
                    <Stat>
                      <LabelText htmlFor="other-prof">Add a Thing</LabelText>
                      <select
                        {...register("other-prof")}
                        id="other-prof"
                        name="other-prof"
                      >
                        <option>Temp</option>
                      </select>
                    </Stat>
                    <ButtonWrapper>
                      <Button>Delete</Button>
                    </ButtonWrapper>
                  </StatWrapper>
                </FormWrapper>
                <Button>Add</Button>
              </Collapsible>
            </fieldset>

            <fieldset>
              <Collapsible trigger="Equipment &amp; Character Notes">
                <FormWrapper>
                  <StatWrapper>
                    <Stat>
                      <LabelText htmlFor="equipment">Add a Thing</LabelText>
                      <select
                        {...register("equipment")}
                        id="equipment"
                        name="equipment"
                      >
                        <option>Temp</option>
                      </select>
                    </Stat>
                    <ButtonWrapper>
                      <Button>Delete</Button>
                      <Button>Add</Button>
                    </ButtonWrapper>
                  </StatWrapper>
                </FormWrapper>

                <StatWrapper>
                  <Stat>
                    <LabelText htmlFor="notes">Character Notes</LabelText>
                    <textarea
                      {...register("notes")}
                      id="notes"
                      name="notes"
                    ></textarea>
                  </Stat>
                  <ButtonWrapper>
                    <Button>Delete</Button>
                    <Button>Add</Button>
                  </ButtonWrapper>
                </StatWrapper>
              </Collapsible>
            </fieldset>

            <input type="submit" value="Submit" />
            <input
              type="button"
              onClick={() => handleReset()}
              value="Reset All"
            />
          </form>
          <Footer />
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

const LabelText = styled.p`
  margin: 0.2rem 0 0.2rem 0;
`;
const InputNumber = styled.input.attrs({ type: "number" })`
  width: 3rem;
  font-size: 0.7rem;
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
