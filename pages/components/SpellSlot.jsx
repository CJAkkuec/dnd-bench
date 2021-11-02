import styled from "styled-components";
import { useState } from "react";

export const SpellSlot = ({ spellList }) => {
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
    </>
  );
};

export async function getStaticProps() {
  const spellResult = await fetch(`https://www.dnd5eapi.co/api/spells/`);
  const spellList = await spellResult.json();

  return {
    props: {
      spellList,
    },
  };
}

const LabelText = styled.p`
  margin: 0.2rem 0 0.2rem 0;
`;

const Stat = styled.label``;
