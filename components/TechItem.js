import styled from 'styled-components';

export default function TechItem({ name, description, percentage }) {
    return (
        <Container>
            <Name>{name}</Name>
            <Description>{description}</Description>
            <Progress>
                <ProgressBar percentage={percentage} />
            </Progress>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    max-width: 650px;
    background: #f7f7f7;
    -webkit-box-shadow: 1px 1px 10px -4px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 1px 1px 10px -4px rgba(0, 0, 0, 0.75);
    box-shadow: 1px 1px 10px -4px rgba(0, 0, 0, 0.75);
    border-radius: 5px;
    padding: 20px;
`;

const Name = styled.h2`
    margin: 0 0 10px 0;
`;

const Description = styled.p`
    margin: 0 0 10px 0;
`;

const Progress = styled.div`
    width: 100%;
    border: 2px solid black;
    height: 10px;
`;

const ProgressBar = styled.div`
    width: ${(props) => props.percentage}%;
    height: 6px;
    background: #000;
`;
