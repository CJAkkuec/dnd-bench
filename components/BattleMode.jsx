import { useLocalStorage } from "../utils/useLocalStorage";
import { useState } from "react";
import spellList from "../data/spell-data.json";
import { v4 as uuidv4 } from "uuid";
import { nanoid } from "nanoid";
import styled from "styled-components";
import Collapsible from "react-collapsible";
import { PartyMemberContainer } from "../components/PartyMemberContainer";
import { PartyMemberForm } from "../components/PartyMemberForm";

import { useSnackbar } from "notistack";

function calculateHPPercentage(currentHP, maxHP) {
  const initialNumber = maxHP / 100;
  const calculatedNumber = currentHP / initialNumber;
  return calculatedNumber;
}

export const BattleMode = ({ getCurrentCharacter }) => {
  // Battle Log
  const [messages, setMessages] = useLocalStorage("battlelog", []);

  // Silent Mode
  const [silentMode, setSilentMode] = useLocalStorage("silentMode", false);

  // Dialog Handling
  const [open, setOpen] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  // Party Handling & Status Checks
  const [isActive, setIsActive] = useState(false);
  const [partyMembers, setPartyMembers] = useLocalStorage("currentParty", []);

  // Sorting
  const [sortByInitiative, setSortByInitiative] = useState(false);
  const [sortByCurrentHP, setSortByCurrentHP] = useState(false);

  const sortedPartyMembers = [...partyMembers]?.sort((a, b) => {
    if (sortByInitiative) {
      return b.charInitiative - a.charInitiative;
    }
    if (sortByCurrentHP) {
      return a.charCurrentHP - b.charCurrentHP;
    }
  });

  function addPartyMember(event, values) {
    event.preventDefault();
    setPartyMembers([
      ...partyMembers,
      {
        id: nanoid(),
        charName: values.charName,
        charMaxHP: values.charMaxHP,
        charCurrentHP: values.charCurrentHP,
        charInitiative: values.charInitiative,
        activeEffect: values.activeEffect,
        forRounds: values.forRounds,
      },
    ]);
  }

  function editPartyMember(updatedPartyMember) {
    const id = updatedPartyMember.id;
    const oldCharacterState = partyMembers.find(
      (oldCharacter) => id === oldCharacter.id
    );

    const oldMaxHP = parseInt(oldCharacterState.charMaxHP);
    const oldCurrentHP = parseInt(oldCharacterState.charCurrentHP);
    const newMaxHP = parseInt(updatedPartyMember.charMaxHP);
    const newCurrentHP = parseInt(updatedPartyMember.charCurrentHP);

    const oldPercentage = calculateHPPercentage(oldCurrentHP, oldMaxHP);
    const newPercentage = calculateHPPercentage(newCurrentHP, newMaxHP);

    if (!silentMode && oldPercentage > 30 && newPercentage < 30) {
      enqueueSnackbar(
        `${updatedPartyMember.charName} is at ${updatedPartyMember.charCurrentHP} HP!`,
        {
          variant: "warning",
          autoHideDuration: 2000,
        }
      );

      const healingSpells = spellInformation.filter((spell) =>
        spell.desc.includes("hit points")
      );

      if (healingSpells.length > 0) {
        enqueueSnackbar(
          `${
            currentCharacter.charname
          } appears to have healing spells. Do you want to use ${healingSpells.map(
            (spell) => spell.name
          )}?`,
          {
            variant: "info",
            autoHideDuration: 10000,
          }
        );
      }
    }

    if (!silentMode && newCurrentHP <= 0) {
      enqueueSnackbar(`${updatedPartyMember.charName} is unconscious!`, {
        variant: "error",
        autoHideDuration: 2000,
      });
    }

    if (newCurrentHP < oldCurrentHP) {
      const damage = oldCurrentHP - newCurrentHP;
      const messageText = `${updatedPartyMember.charName} took ${damage} points of damage!`;
      const newMessage = String(messageText);
      setMessages([...messages, newMessage]);
    }

    if (oldCurrentHP < newCurrentHP) {
      const healing = newCurrentHP - oldCurrentHP;
      const messageText = `${updatedPartyMember.charName} received ${healing} points of healing!`;
      const newMessage = String(messageText);
      setMessages([...messages, newMessage]);
    }

    const editedPartyMembers = partyMembers.map((partyMember) => {
      if (partyMember.id === id) {
        return updatedPartyMember;
      } else {
        return partyMember;
      }
    });
    setPartyMembers(editedPartyMembers);
  }

  function removePartyMember(characterToRemove) {
    const id = characterToRemove.id;
    const newPartyMembers = partyMembers.filter(
      (character) => character.id !== id
    );
    setPartyMembers(newPartyMembers);
    setOpen(false);
    enqueueSnackbar("Party member deleted!", {
      variant: "success",
      autoHideDuration: 2000,
    });
  }

  // Current Character
  const currentCharacter = getCurrentCharacter();

  // Battle Counter
  const [count, setCount] = useState(0);

  function handleCount() {
    const partyCountedDown = partyMembers.map((character) => {
      const rounds = parseInt(character.forRounds);
      if (rounds > 0) {
        const updatedRounds = rounds - 1;
        if (!silentMode && updatedRounds === 1) {
          enqueueSnackbar(
            `${character.activeEffect} is about to run out on ${character.charName}`,
            {
              variant: "warning",
              autoHideDuration: 2000,
            }
          );
        }
        if (!silentMode && updatedRounds === 0) {
          enqueueSnackbar(
            `${character.activeEffect} has run out on ${character.charName}`,
            {
              variant: "error",
              autoHideDuration: 2000,
            }
          );
        }
        const partyMemberCountedDown = {
          ...character,
          forRounds: updatedRounds,
        };
        return partyMemberCountedDown;
      }

      if (rounds === 0) {
        const updatedRounds = rounds;
        const partyMemberCountedDown = {
          ...character,
          forRounds: updatedRounds,
        };
        return partyMemberCountedDown;
      }
    });
    setPartyMembers(partyCountedDown);
    setCount(count + 1);
  }

  // HP Counter
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

  // Spell Handling
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
      <MainWrapper>
        <button
          onClick={() => {
            setSilentMode(!silentMode);
          }}
        >
          {silentMode === true ? "Silent Mode Is On" : "Silent Mode Is Off"}
        </button>
        <PartyField>
          <button
            onClick={() => {
              setIsActive(!isActive);
            }}
          >
            {isActive === false ? "Add Character" : "Hide"}
          </button>
          {isActive === true ? (
            <PartyFormWrapper>
              <PartyMemberForm
                handleSubmit={addPartyMember}
                initialValue={{
                  charName: "Jane",
                  charMaxHP: 99,
                  charCurrentHP: 99,
                  charInitiative: 0,
                  activeEffect: "no active effect",
                  forRounds: 0,
                }}
              />
            </PartyFormWrapper>
          ) : null}
          <button
            onClick={() => {
              setSortByInitiative(true);
              setSortByCurrentHP(false);
            }}
          >
            Sort by Initiative
          </button>
          <button
            onClick={() => {
              setSortByInitiative(false);
              setSortByCurrentHP(true);
            }}
          >
            Sort by HP
          </button>
          <StyledWrapper>
            {partyMembers !== undefined
              ? sortedPartyMembers.map((partyMember) => (
                  <PartyMemberContainer
                    partyMember={partyMember}
                    editPartyMember={editPartyMember}
                    removePartyMember={removePartyMember}
                    key={partyMember.id}
                    handleClose={handleClose}
                    handleClickOpen={handleClickOpen}
                    open={open}
                  />
                ))
              : ""}
          </StyledWrapper>
        </PartyField>
        <BattleWrapper>
          <BattleDiv>
            Battle Timer: {count}
            <button type="button" onClick={() => handleCount()}>
              Next Round
            </button>
            <button type="button" onClick={() => setCount(0)}>
              Reset
            </button>
          </BattleDiv>
          <MessageWrapper>
            <span>This is your battle log</span>
            <MessageDiv>
              {messages.map((message) => {
                return <p>{message}</p>;
              })}
            </MessageDiv>
            <button
              onClick={() => {
                setMessages([]);
              }}
            >
              Reset
            </button>
          </MessageWrapper>
        </BattleWrapper>

        <CharacterField>
          <HPDiv>
            <p>{currentCharacter.charname}</p>
            <div>Current HP: {currentHP}</div>
            <HPCalcDiv>
              <input type="number" id="addInt" />
              <button type="button" onClick={addHP}>
                +
              </button>
              <button type="button" onClick={subHP}>
                -
              </button>
            </HPCalcDiv>
          </HPDiv>
          <SpellWrapper>
            <Desc>Available Spells</Desc>
            {spellInformation.map((spell) => (
              <Collapsible trigger={spell.name} key={uuidv4}>
                <SpellDiv>
                  {Object.keys(spell).map((key) => (
                    <p key={uuidv4}>{`${prettySpellKeys[key] || key}: ${
                      spell[key]
                    }`}</p>
                  ))}
                </SpellDiv>
              </Collapsible>
            ))}
          </SpellWrapper>
        </CharacterField>
      </MainWrapper>
    </>
  );
};

const StyledWrapper = styled.div`
  margin-top: 1rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
`;

const MainWrapper = styled.div`
  width: 80%;
  margin: auto auto 4rem auto;
`;

const PartyFormWrapper = styled.div`
  margin-top: 1rem;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0.5rem;
  background: rgba(58, 82, 118, 0.24);
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
  flex-grow: 0;
  gap: 0.5rem;
  background: rgba(58, 82, 118, 0.24);
  padding: 0.5rem;
  width: 80%;
  height: 100%;
  margin: 1rem auto;
`;

const HPCalcDiv = styled.div`
  display: flex;
`;

const BattleDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem;
  width: 80%;

  & button {
    flex-grow: 0;
    width: 5rem;
  }
`;

const PartyField = styled.div`
  padding: 0.5rem;
  margin-top: 1rem;
  background: rgba(58, 82, 118, 0.24);
`;

const CharacterField = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 0.5rem;
  margin-top: 1rem;
  background: rgba(58, 82, 118, 0.24);
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

const MessageDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background: white;
  max-height: 200px;
  overflow: scroll;
  & p {
    margin: 0;
  }
`;

const MessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  & span {
    background: rgba(58, 82, 118, 0.24);
    color: white;
    display: block;
    padding: 0.5rem 1rem 0.5rem 1rem;
  }
`;

const BattleWrapper = styled.div`
  display: flex;
  max-height: 200px;
  margin: 1rem auto;
  padding: 1rem;
  background: rgba(58, 82, 118, 0.24);
`;
