import styled from 'styled-components';

export default function WorkItem({ name, description, imagePath, notionUrl }) {
    return (
        <Container imagePath={imagePath}>
            <Introduce>
                <Title>{name}</Title>
                <Paragraph>{description}</Paragraph>
                <NotionAnchor href={notionUrl} target="_blank">
                    자세히 보기
                </NotionAnchor>
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
    border-radius: 5px;
    margin: 20px;
    & > div {
        background: none;
        & h2,
        & p,
        & a {
            opacity: 0;
        }
    }
    &:hover {
        & > div {
            background: rgba(0, 0, 0, 0.7);
            & h2,
            & p,
            & a {
                opacity: 1;
            }
        }
        -webkit-box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.75);
        box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.75);
    }
`;

const Introduce = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    color: white;
    transition: all 0.3s;
    border-radius: 5px;
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
const NotionAnchor = styled.a`
    transition: all 0.2s;
    font-weight: 500;
    position: absolute;
    bottom: 20px;
    &:hover {
        text-decoration: underline;
    }
`;
