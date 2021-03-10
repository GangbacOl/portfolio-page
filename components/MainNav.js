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
    width: 70%;
    margin: 0 auto;
    border: 1px solid black;
    display: flex;
    list-style: none;
`;
const NavList = styled.li``;
