import styled from 'styled-components';
import Image from 'next/image';

export default function MainHeader() {
    return (
        <Container>
            <MainHeaderLeft>
                <Name>Gangyeon Jo</Name>
                <Subtitle>Sunrin Internet High School Student,</Subtitle>
                <Subtitle>Interested In React, TypeScript, AI</Subtitle>
                <SocialWrap>
                    <SocialLink href="https://github.com/GangbacOl">
                        <SocialImage src="/images/github.png" alt="github logo" width={40} height={40} />
                    </SocialLink>
                    <SocialLink href="https://www.rocketpunch.com/@gangyeonjo336">
                        <SocialImage
                            src="/images/rocketpunch.png"
                            alt="rocketpunch logo"
                            width={40}
                            height={40}
                        />
                    </SocialLink>
                    <SocialLink href="https://www.facebook.com/profile.php?id=100014959867589">
                        <SocialImage src="/images/facebook.png" alt="facebook logo" width={40} height={40} />
                    </SocialLink>
                </SocialWrap>
            </MainHeaderLeft>
            <MainHeaderRight>
                <ThumbnailWrap>
                    <ThumbnailImage src="/images/thumbnail.jpg" alt="me" />
                </ThumbnailWrap>
            </MainHeaderRight>
        </Container>
    );
}

const Container = styled.div`
    width: 75%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 60px auto 0 auto;
`;
const MainHeaderLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: space-around;
`;
const Name = styled.h2`
    font-size: 4rem;
    margin: 0;
    margin-bottom: 10px;
`;
const Subtitle = styled.p`
    font-size: 1.4rem;
    margin: 0;
`;
const SocialWrap = styled.div`
    margin-top: 10px;
`;
const SocialLink = styled.a`
    margin-right: 5px;
`;
const SocialImage = styled(Image)``;
const MainHeaderRight = styled.div``;
const ThumbnailWrap = styled.div`
    position: relative;
    width: 360px;
    height: 360px;
    overflow: hidden;
    border-radius: 100%;
    border: 7px solid black;
`;
const ThumbnailImage = styled.img`
    position: relative;
    top: -7px;
    left: -7px;
    width: 360px;
`;
