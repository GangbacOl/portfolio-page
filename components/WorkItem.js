import styled from 'styled-components';
import Image from 'next/image';

export default function WorkItem({ name, description, imagePath }) {
    return (
        <Container imagePath={imagePath}>
            <Introduce>
                <Title>{name}</Title>
                <Paragraph>{description}</Paragraph>
            </Introduce>
        </Container>
    );
}

const Container = styled.div`
    width: 320px;
    height: 320px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    background-image: url(${(props) => props.imagePath});
    background-size: cover;
    background-position: center;
    margin: 20px;
    & > div {
        background: none;
        & h2,
        & p {
            opacity: 0;
        }
    }
    &:hover {
        & > div {
            background: rgba(0, 0, 0, 0.7);
            & h2,
            & p {
                opacity: 1;
            }
        }
    }
`;

const Introduce = styled.div`
    width: 100%;
    height: 100%;
    color: white;
    transition: all 0.3s;
    padding: 20px;
`;
const Title = styled.h2`
    transition: all 0.2s;
    font-size: 1.2rem;
    margin: 10px 0 20px 0;
`;
const Paragraph = styled.p`
    transition: all 0.2s;
    font-size: 0.9rem;
    margin: 0;
`;
