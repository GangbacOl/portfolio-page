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
    width: 80%;
    height: auto;
`;
const Title = styled.h2`
    font-size: 2.5rem;
    font-weight: 500;
    border-bottom: 2px solid black;
    padding: 10px 20px;
`;
