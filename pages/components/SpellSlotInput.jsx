import { useState, useEffect } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

export const SpellSlotInput = ({ value, onChange, spellList }) => {
  const { register, handleSubmit, watch, errors, setValue, reset } = useForm();

  const [spellInfo, setSpellInfo] = useState({
    name: "Select your spell",
    desc: ["Description will be here"],
  });

  useEffect(() => {
    async function fetchSpellData() {
      const spellResult = await fetch(
        `https://www.dnd5eapi.co/api/spells/${value}`
      );
      const spellData = await spellResult.json();
      setSpellInfo(spellData);
    }
    if (value) {
      fetchSpellData();
    }
  }, [value]);

  return (
    <>
      <StatWrapper>
        <Stat>
          <LabelText htmlFor="spell-select">Add a Spell</LabelText>
          <SpellSelect
            onChange={onChange}
            value={value}
            {...register("spell-select")}
            id="spell-select"
            name="spell-select"
          >
            {spellList.results.map((spell) => {
              return (
                <option key={spell.name} value={spell.index}>
                  {spell.name}
                </option>
              );
            })}
          </SpellSelect>

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
    </>
  );
};

const LabelText = styled.p`
  margin: 0.2rem 0 0.2rem 0;
`;

const Stat = styled.label``;

const StatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  padding: 0.5rem;
  width: 45vw;
`;

const Button = styled.button`
  width: auto;
  height: 1.5rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 0.3rem;
`;

const SpellSelect = styled.select`
  width: 100%;
  overflow: hidden;
  white-space: pre;
  text-overflow: ellipsis;
`;
