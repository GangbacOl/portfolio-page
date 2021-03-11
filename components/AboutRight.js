import styled from 'styled-components';
import Image from 'next/image';

export default function AboutRight() {
    return (
        <Container>
            <AboutImage src="/images/me1.jpg" alt="me" />
        </Container>
    );
}

const Container = styled.div`
    position: relative;
    width: 45%;
    max-width: 700px;
    height: auto;
`;
const AboutImage = styled.img`
    width: 100%;
    border: 7px solid black;
`;
