import styled from "styled-components";
import Link from "next/dist/client/link";
import { useRouter } from "next/dist/client/router";

export const Footer = () => {
  const router = useRouter();

  return (
    <FooterWrapper>
      <FooterList>
        <Link href="/">
          <li className={router.pathname == "/" ? "active" : ""}>Dash</li>
        </Link>
        <li className={router.pathname == "/mychar" ? "active" : ""}>
          Current
        </li>
        <li className={router.pathname == "/newchar" ? "active" : ""}>New</li>
        <li className={router.pathname == "/bench" ? "active" : ""}>Bench</li>
        <li className={router.pathname == "/battle" ? "active" : ""}>
          Battle Mode
        </li>
      </FooterList>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.div`
  background: white;
  position: fixed;
  bottom: 0;
  z-index: 1;
  box-shadow: 0px -2px 7px rgba(58, 82, 118, 0.24);
`;

const FooterList = styled.ul`
  margin: 0;
  padding: 1rem;
  display: flex;
  list-style-type: none;
  width: 100vw;
  justify-content: space-between;
`;

const li = styled.li`
  cursor: pointer;
  padding: 0.5rem;
`;
