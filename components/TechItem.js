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

const Container = styled.div``;
const Name = styled.h2``;
const Description = styled.p``;
