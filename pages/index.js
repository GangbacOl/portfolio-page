import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

import MainHeader from '../components/MainHeader';
import MainNav from '../components/MainNav';
import MainBottom from '../components/MainBottom';
import AboutHeader from '../components/AboutHeader';
import AboutBody from '../components/AboutBody';
import WorkList from '../components/WorkList';
import TechList from '../components/TechList';
import Footer from '../components/Footer';

export default function Home() {
    const [backgroundNumber, setBackgroundNumber] = useState(0);

    useEffect(() => setBackgroundNumber(Math.floor(Math.random() * 7) + 1), []);
    return (
        <Container>
            <Main backgroundNumber={backgroundNumber}>
                <MainHeader />
                <MainNav />
                <MainBottom />
            </Main>
            <About>
                <AboutHeader />
                <AboutBody />
            </About>
            <Works>
                <WorkList />
            </Works>
            <TechSkill>
                <TechList />
            </TechSkill>
            <Footer />
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
`;
const Main = styled.div`
    position: relative;
    width: 100%;
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 100px;
    ${(props) =>
        props.backgroundNumber === 0
            ? null
            : css`
                  background-image: url('/images/background/background${(props) =>
                      props.backgroundNumber}.jpg');
              `}
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    transition: background-image 0.5s;
`;
const About = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 100px;
`;

const Works = styled.div`
    width: 100%;
    margin-bottom: 100px;
`;
const TechSkill = styled.div`
    width: 100%;
    margin-bottom: 100px;
`;
