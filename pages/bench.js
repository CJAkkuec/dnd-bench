import styled from "styled-components";
import { Footer } from "/components/Footer";

export default function Bench({ bench, setBench }) {
  const benchMapper = () => {
    if (bench.length === 0) {
      return <Empty>It's empty here!</Empty>;
    } else {
      return bench.map((benchItem) => {
        return <BenchDiv>{benchItem.charname}</BenchDiv>;
      });
    }
  };

  return (
    <>
      <MainStyle>
        <Title>Character Bench</Title>
        <Intro>
          This is the character bench. All of your characters will be stored
          here. Your active character is marked red.
        </Intro>
        <Wrapper>{benchMapper()}</Wrapper>
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

const Title = styled.div`
  margin-bottom: 1rem;
  background: grey;
  color: white;
  padding: 0.4rem;
  width: 50vw;
`;

const Intro = styled.div`
  margin: 1rem;
  padding: 0.4rem;
  font-size: 0.8rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  width: 100vw;
`;

const BenchDiv = styled.div`
  cursor: pointer;
  text-align: center;
  padding: 1rem;
  margin: 0 1.5rem 0.5rem 1.5rem;
  box-shadow: 0px 2px 7px rgba(58, 82, 118, 0.24);
`;

const Empty = styled.div`
  margin-top: 10vh;
  color: grey;
`;
