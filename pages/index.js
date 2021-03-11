import styled from 'styled-components';

import MainHeader from '../components/MainHeader';
import MainNav from '../components/MainNav';
import MainBottom from '../components/MainBottom';
import AboutLeft from '../components/AboutLeft';
import AboutRight from '../components/AboutRight';
import WorkList from '../components/WorkList';
import TechList from '../components/TechList';

export default function Home() {
    return (
        <Container>
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
