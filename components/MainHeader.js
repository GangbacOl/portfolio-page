import styled from 'styled-components';

export default function MainHeader() {
    return (
        <Container>
            <MainHeaderTop>
                <ThumbnailWrap>
                    <ThumbnailImage src="/images/thumbnail.jpg" alt="me" />
                </ThumbnailWrap>
            </MainHeaderTop>
            <MainHeaderBottom>
                <Name>Gangyeon Jo</Name>
                <Subtitle>Sunrin Internet High School Student,</Subtitle>
                <Subtitle>Interested In React, TypeScript, AI</Subtitle>
            </MainHeaderBottom>
        </Container>
    );
}

const Container = styled.div`
    width: 75%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: 60px auto 0 auto;
`;
const MainHeaderBottom = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: space-around;
    text-align: center;
`;
const Name = styled.h2`
    font-size: 4rem;
    color: #eee;
    margin: 0;
    margin-bottom: 10px;
`;
const Subtitle = styled.p`
    font-size: 1.6rem;
    font-weight: 500;
    margin: 0;
`;

const MainHeaderTop = styled.div``;
const ThumbnailWrap = styled.div`
    position: relative;
    width: 360px;
    height: 360px;
    overflow: hidden;
    border-radius: 100%;
    border: 7px solid #000;
`;
const ThumbnailImage = styled.img`
    position: relative;
    top: -7px;
    left: -7px;
    width: 360px;
`;
