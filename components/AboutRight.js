import styled from 'styled-components';
import Image from 'next/image';

export default function AboutRight() {
    return (
        <Container>
            <AboutImage src="/images/me1.jpg" alt="me" layout="fill" objectFit="cover" />
        </Container>
    );
}

const Container = styled.div`
    position: relative;
    width: 40%;
    height: 80%;
`;
const AboutImage = styled(Image)``;
