import styled from 'styled-components';

export default function AboutRight() {
    return (
        <Container>
            <Title>About</Title>
        </Container>
    );
}

const Container = styled.div`
    position: relative;
    width: 95%;
    height: auto;
`;
const Title = styled.h2`
    font-size: 2.5rem;
    font-weight: 500;
    padding: 0px 20px 10px 20px;
    border-bottom: 2px solid black;
    margin-top: 0;
`;
