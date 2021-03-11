import styled from 'styled-components';

export default function AboutLeft() {
    return (
        <Container>
            <Title>Hi.</Title>
            <Paragraph>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, illo officia perferendis
                maiores blanditiis provident iste dolores distinctio dolorum odit! Vitae veritatis quis ut
                est. Veniam enim doloribus iste magnam.
            </Paragraph>
        </Container>
    );
}

const Container = styled.div`
    width: 50%;
`;
const Title = styled.h2``;
const Paragraph = styled.p``;
