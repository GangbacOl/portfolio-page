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
    width: 450px;
    height: 600px;
`;
const AboutImage = styled(Image)``;
