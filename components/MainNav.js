import styled from 'styled-components';

import * as mixin from '../styles/mixin';

export default function MainNav({ about, works, tech }) {
    const handleScroll = (element) => {
        if (element) window.scrollTo({ top: element.current.offsetTop, left: 0, behavior: 'smooth' });
    };
    return (
        <Container>
            <Navigation>
                <NavList onClick={() => handleScroll(about)}>About</NavList>
                <NavList onClick={() => handleScroll(works)}>Works</NavList>
                <NavList onClick={() => handleScroll(tech)}>Tech Stack</NavList>
            </Navigation>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    margin: 200px 0 100px 0;
    ${mixin.mobileTablet(`
        margin: 0 0 100px 0;
    `)}
`;
const Navigation = styled.div`
    width: 60%;
    max-width: 950px;
    height: 60px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
    margin: 0 auto;
    border: 4px solid #eee;
    border-radius: 20px;
    & li:first-child {
        border-top-left-radius: 15px;
        border-bottom-left-radius: 15px;
    }
    & li:last-child {
        border-top-right-radius: 15px;
        border-bottom-right-radius: 15px;
    }
`;
const NavList = styled.li`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    transition: all 0.3s;
    font-weight: bold;
    color: #eee;
    &:hover {
        background-color: #eee;
        color: #000;
    }
`;
