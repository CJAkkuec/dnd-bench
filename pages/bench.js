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
        <Wrapper>{benchMapper()}</Wrapper>
        <Footer />
      </MainStyle>
    </>
  );
}

const MainStyle = styled.div`
  font-family: Roboto, Rokkit;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;
`;

const BenchDiv = styled.div`
  cursor: pointer;
  text-align: center;
  width: 50%;
  padding: 1rem;
  margin: 0.5rem 1.5rem 0.5rem 1.5rem;
  box-shadow: 0px 2px 7px rgba(58, 82, 118, 0.24);
`;

const Empty = styled.div`
  margin-top: 10vh;
  color: grey;
`;
