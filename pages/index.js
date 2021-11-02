import Link from "next/link";
import styled from "styled-components";
import { Dash } from "./components/Dash";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid"; //why is this being weird when I use it for the dropdown

export default function Home({ data }) {
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
        <Header>
          <DnDiv>
            <DnD>D&amp;D</DnD>
            <Bench>//Bench</Bench>
          </DnDiv>
        </Header>
        <Wrapper>
          <Dash />
        </Wrapper>
      </MainStyle>
    </>
  );
}

export async function getStaticProps() {
  const result = await fetch(`https://www.dnd5eapi.co/api/spells/`);
  const data = await result.json();

  return {
    props: {
      data,
    },
  };
}

const MainStyle = styled.div`
  font-family: Roboto, Rokkit;
`;

const Header = styled.div`
  background: white;
  display: flex;
  position: fixed;
  top: 0;
  z-index: 1;
`;

const DnD = styled.p`
  color: red;
  font-family: Rokkit;
  font-size: 25pt;
  font-weight: bolder;
  margin: 0;
`;

const Bench = styled.p`
  font-family: Roboto;
  font-size: 20pt;
  font-weight: 100;
  margin: 0;
`;

const DnDiv = styled.div`
  display: flex;
  align-items: baseline;
  padding: 1rem;
  width: 100vw;
  z-index: 1;
  box-shadow: 0px 2px 7px rgba(58, 82, 118, 0.24);
`;

const Wrapper = styled.div`
  margin-top: 5rem;
`;
