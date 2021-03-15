import styled from 'styled-components';

export default function TechItem({ name, percentage, imagePath }) {
    return (
        <Container>
            <Name>{name}</Name>
            <Logo src={imagePath} alt={imagePath} />
            <Progress>
                <ProgressBar percentage={percentage} />
            </Progress>
        </Container>
    );
}

const Container = styled.div`
    position: relative;
    width: 100%;
    max-width: 650px;
    background: #f7f7f7;
    border-radius: 5px;
    padding: 20px;
    transition: box-shadow 0.3s;
    &:hover {
        -webkit-box-shadow: 1px 1px 15px 0px rgba(0, 0, 0, 0.35);
        -moz-box-shadow: 1px 1px 15px 0px rgba(0, 0, 0, 0.35);
        box-shadow: 1px 1px 15px 0px rgba(0, 0, 0, 0.35);
    }
`;

const Name = styled.h2`
    margin: 0 0 10px 0;
    display: flex;
    align-items: center;
`;

const Logo = styled.img`
    height: 32px;
    width: auto;
    position: absolute;
    right: 20px;
    top: 20px;
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
