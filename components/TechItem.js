import styled from 'styled-components';

export default function TechItem({ name, description, percentage }) {
    return (
        <Container>
            <Name>{name}</Name>
            <Description>{description}</Description>
            <span>{percentage}</span>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    max-width: 650px;
    border: 1px solid black;
`;
const Name = styled.h2``;
const Description = styled.p``;
