import styled from 'styled-components';

export default function MainNav() {
    return (
        <Container>
            <Navigation>
                <NavList>About</NavList>
                <NavList>Works</NavList>
                <NavList>TechSkill</NavList>
            </Navigation>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    margin: 30px 0;
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
    border: 4px solid #333030;
`;
const NavList = styled.li`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    transition: all 0.3s;
    font-weight: bold;
    &:hover {
        background-color: #333030;
        color: white;
    }
`;
