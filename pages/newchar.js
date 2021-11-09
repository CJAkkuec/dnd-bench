import styled from "styled-components";
import Collapsible from "react-collapsible";
import { useForm, useFieldArray } from "react-hook-form";
import useFormPersist from "react-hook-form-persist";
import { Footer } from "/components/Footer";
import { SpellSlot } from "../components/SpellSlot";
import { BasicItemSlot } from "/components/BasicItemSlot";
import { NoteSlot } from "../components/NoteSlot";

import bgList from "../data/backgrounds-data.json";
import classList from "../data/classes-data.json";
import raceList from "../data/races-data.json";
import alignList from "../data/alignm-data.json";

export default function NewChar({ bench, addCharacterToBench }) {
  const { register, handleSubmit, watch, errors, setValue, reset, control } =
    useForm();

  const {
    fields: spellFields,
    append: spellAppend,
    remove: spellRemove,
  } = useFieldArray({
    control,
    name: "spellSlotArray",
  });

  const {
    fields: basicItemFields,
    append: basicItemAppend,
    remove: basicItemRemove,
  } = useFieldArray({
    control,
    name: "basicItemSlotArray",
  });

  const {
    fields: noteFields,
    append: noteAppend,
    remove: noteRemove,
  } = useFieldArray({
    control,
    name: "notesArray",
  });

  useFormPersist("form", { watch, setValue });

  const onSubmit = (data) => {
    console.log(data);
    addCharacterToBench(data);
  };

  const checkKeyDown = (e) => {
    if (e.code === "Enter") e.preventDefault();
  };

  const handleReset = () => {
    if (confirm("Are you sure you want to reset the form?")) {
      reset();
    }
  };

  return (
    <>
      <MainStyle>
        <Title>Create a new character</Title>
        <MainWrapper>
          <form
            onSubmit={handleSubmit(onSubmit)}
            onKeyDown={(e) => checkKeyDown(e)}
          >
            <StatField>
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
            </StatField>
            <StatField>
              <Collapsible trigger="Stats">
                <FormWrapper>
                  <StatWrapper>
                    <MainStatWrapper>
                      <Stat>
                        <LabelText htmlFor="strength">Strength</LabelText>
                        <InputNumber
                          {...register("strength")}
                          id="strength"
                          max="999"
                          min="-999"
                          name="strength"
                        />
                      </Stat>
                      <Stat>
                        <LabelText htmlFor="strength-mod">Modifier</LabelText>
                        <InputNumber
                          {...register("strength-mod")}
                          id="strength-mod"
                          max="999"
                          name="strength-mod"
                        />
                      </Stat>
                    </MainStatWrapper>

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
                    <MainStatWrapper>
                      <Stat>
                        <LabelText htmlFor="dexterity">Dexterity</LabelText>
                        <InputNumber
                          {...register("dexterity")}
                          id="dexterity"
                          max="999"
                          name="dexterity"
                        />
                      </Stat>
                      <Stat>
                        <LabelText htmlFor="dexterity-mod">Modifier</LabelText>
                        <InputNumber
                          {...register("dexterity-mod")}
                          id="dexterity-mod"
                          max="999"
                          name="dexterity-mod"
                        />
                      </Stat>
                    </MainStatWrapper>

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
                    <MainStatWrapper>
                      <Stat>
                        <LabelText htmlFor="constitution">
                          Constitution
                        </LabelText>
                        <InputNumber
                          {...register("constitution")}
                          id="constitution"
                          max="999"
                          name="constitution"
                        />
                      </Stat>
                      <Stat>
                        <LabelText htmlFor="constitution-mod">
                          Modifier
                        </LabelText>
                        <InputNumber
                          {...register("constitution-mod")}
                          id="constitution-mod"
                          max="999"
                          name="constitution-mod"
                        />
                      </Stat>
                    </MainStatWrapper>

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
                    <MainStatWrapper>
                      <Stat>
                        <LabelText htmlFor="intelligence">
                          Intelligence
                        </LabelText>
                        <InputNumber
                          {...register("intelligence")}
                          id="intelligence"
                          max="999"
                          name="intelligence"
                        />
                      </Stat>
                      <Stat>
                        <LabelText htmlFor="intelligence-mod">
                          Modifier
                        </LabelText>
                        <InputNumber
                          {...register("intelligence-mod")}
                          id="intelligence-mod"
                          max="999"
                          name="intelligence-mod"
                        />
                      </Stat>
                    </MainStatWrapper>

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
                    <MainStatWrapper>
                      <Stat>
                        <LabelText htmlFor="wisdom">Wisdom</LabelText>
                        <InputNumber
                          {...register("wisdom")}
                          id="wisdom"
                          max="999"
                          name="wisdom"
                        />
                      </Stat>
                      <Stat>
                        <LabelText htmlFor="wisdom-mod">Modifier</LabelText>
                        <InputNumber
                          {...register("wisdom-mod")}
                          id="wisdom-mod"
                          max="999"
                          name="wisdom-mod"
                        />
                      </Stat>
                    </MainStatWrapper>

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
                    <MainStatWrapper>
                      <Stat>
                        <LabelText htmlFor="charisma">Charisma</LabelText>
                        <InputNumber
                          {...register("charisma")}
                          id="charisma"
                          max="999"
                          name="charisma"
                        />
                      </Stat>
                      <Stat>
                        <LabelText htmlFor="charisma-mod">Modifier</LabelText>
                        <InputNumber
                          {...register("charisma-mod")}
                          id="charisma-mod"
                          max="999"
                          name="charisma-mod"
                        />
                      </Stat>
                    </MainStatWrapper>

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
                  </StatWrapper>
                  <StatWrapper>
                    <MainStatWrapper>
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
                    </MainStatWrapper>
                  </StatWrapper>
                </FormWrapper>
              </Collapsible>
            </StatField>
            <StatField>
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
            </StatField>
            <StatField>
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
            </StatField>
            <StatField>
              <Collapsible trigger="Attacks &amp; Spells">
                <FormWrapper>
                  {spellFields.map((field, index) => (
                    <SpellSlot
                      register={register}
                      watch={watch}
                      index={index}
                      spellRemove={spellRemove}
                      key={field.id}
                    />
                  ))}
                </FormWrapper>
                <Button
                  type="button"
                  onClick={() => spellAppend({ "selected-spell": "" })}
                >
                  Add
                </Button>
              </Collapsible>
            </StatField>
            <StatField>
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
            </StatField>
            <StatField>
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
            </StatField>

            <StatField>
              <Collapsible trigger="Equipment &amp; Character Notes">
                <FormWrapper>
                  {basicItemFields.map((field, index) => (
                    <BasicItemSlot
                      register={register}
                      watch={watch}
                      index={index}
                      basicItemRemove={basicItemRemove}
                      key={field.id}
                    />
                  ))}
                </FormWrapper>
                <Button
                  type="button"
                  onClick={() => basicItemAppend({ "selected-item": "" })}
                >
                  Add Item
                </Button>

                <FormWrapper>
                  {noteFields.map((field, index) => (
                    <NoteSlot
                      register={register}
                      watch={watch}
                      index={index}
                      noteRemove={noteRemove}
                      key={field.id}
                    />
                  ))}
                </FormWrapper>
                <Button
                  type="button"
                  onClick={() => noteAppend({ "added-note": "" })}
                >
                  Add Note
                </Button>
              </Collapsible>
            </StatField>
            <InputSubmit value="Submit" />
            <InputReset onClick={() => handleReset()} value="Reset All" />
          </form>
        </MainWrapper>
        <Footer />
      </MainStyle>
    </>
  );
}

const MainStyle = styled.div`
  padding: 0;
  margin: 0;
  font-family: "Roboto", "Rokkitt";
`;

const LabelText = styled.p`
  margin: 0.2rem 0 0.2rem 0;
`;
const InputNumber = styled.input.attrs({ type: "number" })`
  width: 2rem;
  font-size: 0.7rem;
`;

const InputSubmit = styled.input.attrs({ type: "submit" })`
  background: red;
  color: white;
  border: none;
  padding: 0.4rem;
  width: auto;
  font-size: 0.9rem;
  text-align: center;
  margin-right: 0.4rem;
`;

const InputReset = styled.input.attrs({ type: "button" })`
  background: grey;
  color: white;
  border: none;
  padding: 0.4rem;
  width: auto;
  font-size: 0.9rem;
  text-align: center;
`;

const FormWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.3rem;
  font-size: 0.9rem;
  margin-top: 0.3rem;
`;

const ThrowWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: lightgrey;
  font-size: 0.7rem;
  padding: 0.2rem 0.2rem 0.2rem 0.4rem;
`;

const MainStatWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  padding: 0rem 0.2rem 0.4rem 0.4rem;
`;

const StatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  padding: 0.5rem;
  width: 42vw;
`;

const MainWrapper = styled.div`
  margin-bottom: 5rem;
  padding: 1rem;
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

const StatField = styled.fieldset`
  padding: 0;
  border: none;
`;

const Title = styled.div`
  margin-bottom: 1rem;
  background: grey;
  color: white;
  padding: 0.4rem;
  width: 50vw;
`;
