import { useState, useEffect } from 'react';
import styled from 'styled-components';

import MainHeader from '../components/MainHeader';
import MainNav from '../components/MainNav';
import MainBottom from '../components/MainBottom';
import AboutLeft from '../components/AboutLeft';
import AboutRight from '../components/AboutRight';
import WorkList from '../components/WorkList';
import TechList from '../components/TechList';
import Footer from '../components/Footer';

export default function Home() {
    const [isMovedScroll, setIsMovedScroll] = useState(false);

    const handleClick = () => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 1192) setIsMovedScroll(true);
            else setIsMovedScroll(false);
        });
    }, []);
    return (
        <Container>
            <ScrollTopImage src="/images/uparrow.png" onClick={handleClick} isMovedScroll={isMovedScroll} />
            <Main>
                <MainHeader />
                <MainNav />
                <MainBottom />
            </Main>
            <About>
                <AboutLeft />
                <AboutRight />
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
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 100px;
`;
const About = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
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
const ScrollTopImage = styled.img`
    width: 40px;
    height: 40px;
    position: fixed;
    top: 100px;
    right: 50px;
    opacity: ${(props) => (props.isMovedScroll ? 1 : 0)};
    border-radius: 100%;
    border: 2px solid black;
    padding: 5px;
    transition: all 0.2s;
    &:hover {
        transform: scale(1.1);
    }
`;
