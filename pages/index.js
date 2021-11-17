import styled from "styled-components";
import { Dash } from "/components/Dash";

export default function Home({ bench }) {
  return (
    <MainStyle>
      <Header>
        <DnDiv>
          <DnD>D&amp;D</DnD>
          <Bench>&#47;&#47;Bench</Bench>
        </DnDiv>
      </Header>
      <Wrapper>
        <Dash bench={bench} />
      </Wrapper>
    </MainStyle>
  );
}

const MainStyle = styled.div`
  font-family: Roboto;
  font-weight: 300;
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
  font-family: serif;
  font-size: 25pt;
  font-weight: 600;
  margin: 0;
`;

const Bench = styled.p`
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
