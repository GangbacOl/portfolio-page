import { useState, useEffect, useRef } from "react";
import styled, { css } from "styled-components";

import MainHeader from "../components/MainHeader";
import MainNav from "../components/MainNav";
import AboutHeader from "../components/AboutHeader";
import AboutBody from "../components/AboutBody";
import WorkList from "../components/WorkList";
import TechList from "../components/TechList";
import Footer from "../components/Footer";

export default function Home({ backgroundNumber }) {
  //   const [backgroundNumber, setBackgroundNumber] = useState(1);
  const about = useRef(null);
  const works = useRef(null);
  const tech = useRef(null);

  //   useEffect(() => setBackgroundNumber(Math.floor(Math.random() * 7) + 1), []);
  return (
    <Container>
      <Main>
        <MainBg backgroundNumber={backgroundNumber} />
        <MainHeader />
        <MainNav about={about} works={works} tech={tech} />
      </Main>
      <About ref={about}>
        <AboutHeader />
        <AboutBody />
      </About>
      <Works ref={works}>
        <WorkList />
      </Works>
      <TechSkill ref={tech}>
        <TechList />
      </TechSkill>
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  animation: background-fade 1.5s forwards;

  @keyframes background-fade {
    0% {
      opacity: 0;
    }
    70% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
const Main = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-bottom: 100px;
`;
const MainBg = styled.div`
  width: 100%;
  height: 100vh;
  ${(props) =>
    props.backgroundNumber === 0
      ? null
      : css`
          background-image: url("/images/background/background${(props) => props.backgroundNumber}.jpg");
        `}
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: fixed;
  z-index: -10;
  transition: background-image 0.5s;
`;
const About = styled.div`
  position: relative;
  width: 80%;
  margin: 0 auto;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
  padding: 30px 0;
  background: #fff;
`;

const Works = styled.div`
  width: 80%;
  padding: 30px 0;
  border-radius: 20px;
  margin: 0 auto 100px auto;
  background: #fff;
`;
const TechSkill = styled.div`
  width: 80%;
  padding: 30px 0;
  border-radius: 20px;
  margin: 0 auto 100px auto;
  background: #fff;
`;

export async function getStaticProps() {
  const backgroundNumber = Math.floor(Math.random() * 7) + 1;
  return { props: { backgroundNumber } };
}
