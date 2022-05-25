import { useLocalStorage } from "../utils/useLocalStorage";
import { useState } from "react";
import spellList from "../data/spell-data.json";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import Collapsible from "react-collapsible";
import { useForm, useFieldArray } from "react-hook-form";
import useFormPersist from "react-hook-form-persist";
import { PartyMember } from "../components/PartyMember";

export const BattleMode = ({ getCurrentCharacter }) => {
  const [visibility, setVisibility] = useState(true);

  // Character + Party
  const currentCharacter = getCurrentCharacter();
  const [party, setParty] = useLocalStorage("currentParty", null);

  // Party Member Handling
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
    reset,
    control,
  } = useForm();

  const {
    fields: partyMemberFields,
    append: partyMemberAppend,
    remove: partyMemberRemove,
  } = useFieldArray({
    control,
    name: "partyMemberArray",
  });

  useFormPersist("currentParty", {
    watch,
    setValue,
  });

  function handleGroup(data) {
    setParty(data);
  }

  function deleteGroup() {
    setParty(null);
  }

  function toggleFields() {
    setVisibility(!visibility);
  }

  //Battle Counter
  const [count, setCount] = useState(0);

  //HP Counter
  const [currentHP, setCurrentHP] = useState(
    parseInt(currentCharacter.hp) ?? "Loading"
  );

  function addHP() {
    const newNumber = document.getElementById("addInt").value;
    if (newNumber > 0) {
      setCurrentHP(parseInt(currentHP) + parseInt(newNumber));
    } else return null;
  }

  function subHP() {
    const newNumber = document.getElementById("addInt").value;
    if (newNumber > 0) {
      setCurrentHP(parseInt(currentHP) - parseInt(newNumber));
    } else return null;
  }

  //Spell Handling
  const characterSpells = currentCharacter.spellSlotArray.map(
    (spell) => spell.selectedSpell
  );

  const spellInformation = spellList.filter((spell) => {
    return characterSpells.includes(spell.name);
  });

  const prettySpellKeys = {
    name: "Name",
    desc: "Description",
    casting_time: "Casting Time",
    class: "Sorcerer, Wizard",
    components: "Components",
    concentration: "Concentration",
    duration: "Duration",
    higher_level: "Higher Level",
    level: "Spell Level",
    material: "Material",
    page: "Book(Page)",
    range: "Range",
    ritual: "Ritual",
    school: "School",
    domains: "Domains",
  };

  return (
    <>
      {party !== null && visibility === false ? (
        <GroupDiv>
          {party?.partyMemberArray.map((member) => (
            <MemberDiv>
              <p>{member.partyMember}</p>
              <p>HP: {member.partyMemberCurrentHP}</p>
              <progress
                id="health"
                value={member.partyMemberCurrentHP}
                max={member.partyMemberMaxHP}
              ></progress>
            </MemberDiv>
          ))}
        </GroupDiv>
      ) : null}
      {visibility === true ? (
        <GroupFormWrapper>
          <form onSubmit={handleSubmit(handleGroup)}>
            <FormWrapper>
              {partyMemberFields.map((field, index) => (
                <PartyMember
                  register={register}
                  index={index}
                  partyMemberRemove={partyMemberRemove}
                  key={field.id}
                />
              ))}
            </FormWrapper>
            <ButtonDiv>
              <StyledButton
                type="button"
                onClick={() => partyMemberAppend({ partyMember: "" })}
              >
                Add Member
              </StyledButton>
              <StyledButton type="submit">Save Group</StyledButton>
              <StyledButton type="button" onClick={deleteGroup}>
                Delete Group
              </StyledButton>
            </ButtonDiv>
          </form>
        </GroupFormWrapper>
      ) : null}
      <ButtonDiv>
        <StyledButton type="button" onClick={toggleFields}>
          {visibility === false ? "Edit Mode" : "Overview Mode"}
        </StyledButton>
      </ButtonDiv>
      <BattleDiv>
        Battle Timer: {count}
        <button type="button" onClick={() => setCount(count + 1)}>
          Next Round
        </button>
        <button type="button" onClick={() => setCount(0)}>
          Reset
        </button>
      </BattleDiv>
      <HPDiv>
        <div>Current HP: {currentHP}</div>
        <input type="number" id="addInt" />
        <button type="button" onClick={addHP}>
          +
        </button>
        <button type="button" onClick={subHP}>
          -
        </button>
      </HPDiv>
      <SpellWrapper>
        <Desc>Available Spells</Desc>
        {spellInformation.map((spell) => (
          <Collapsible trigger={spell.name}>
            <SpellDiv key={uuidv4}>
              {Object.keys(spell).map((key) =>
                ["page", "name"].includes(key) ? null : (
                  <p>{`${prettySpellKeys[key] || key}: ${spell[key]}`}</p>
                )
              )}
            </SpellDiv>
          </Collapsible>
        ))}
      </SpellWrapper>
    </>
  );
};

const GroupFormWrapper = styled.div`
  width: 100%;
`;

const SpellDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background: rgba(58, 82, 118, 0.24);
  padding: 0.5rem;
`;

const HPDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
  background: rgba(58, 82, 118, 0.24);
  padding: 0.5rem;
  width: 80%;
  margin: 1rem auto;
`;

const BattleDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
  background: rgba(58, 82, 118, 0.24);
  padding: 0.5rem;
  width: 80%;
  margin: 1rem auto;
`;

const GroupDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.3rem;
  font-size: 1rem;
  width: 100%;

  & p {
    margin: 0 0 0.5rem 0;
  }
`;

const SpellWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 1rem auto;

  & p {
    margin: 0;
  }
`;

const Desc = styled.p`
  background: rgba(58, 82, 118, 1);
  color: white;
  padding: 0.2rem;
`;

const LabelText = styled.p`
  margin: 0.2rem 0 0.2rem 0;
  font-size: 0.8rem;
`;

const StyledButton = styled.button`
  background: rgba(58, 82, 118, 1);
  color: white;
  border: none;
  padding: 0.4rem;
  width: auto;
  font-size: 0.8rem;
  text-align: center;
  cursor: pointer;
`;

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.3rem;
  font-size: 1rem;
  width: 100%;
`;

const MemberDiv = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(58, 82, 118, 0.1);
  padding: 0.5rem;
  width: 40vw;
  font-size: 0.8rem;
`;

const ButtonDiv = styled.div`
  width: 80%;
  margin: 0.3rem auto;
  display: flex;
  gap: 0.5rem;
`;

const ProgressBarDiv = styled.div`
  width: 100%;

  & svg {
    width: 100%;
    height: 100%;
  }
`;
