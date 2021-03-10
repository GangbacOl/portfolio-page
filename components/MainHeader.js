import styled from 'styled-components';
import Image from 'next/image';

export default function MainHeader() {
    return (
        <Container>
            <MainHeaderLeft>
                <Name>Gangyeon Jo</Name>
                <Subtitle>Sunrin Internet High School Student</Subtitle>
                <Subtitle>Interested In Web Develop</Subtitle>
                <SocialWrap>
                    <SocialLink>
                        <SocialImage src="/images/github.png" alt="github logo" width={40} height={40} />
                    </SocialLink>
                    <SocialLink>
                        <SocialImage
                            src="/images/rocketpunch.png"
                            alt="rocketpunch logo"
                            width={40}
                            height={40}
                        />
                    </SocialLink>
                    <SocialLink>
                        <SocialImage src="/images/facebook.png" alt="facebook logo" width={40} height={40} />
                    </SocialLink>
                </SocialWrap>
            </MainHeaderLeft>
            <MainHeaderRight>
                <ThumbnailWrap>
                    <ThumbnailImage src="/images/thumbnail.jpg" alt="me" layout="fill" objectFit="cover" />
                </ThumbnailWrap>
            </MainHeaderRight>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-top: 60px;
`;
const MainHeaderLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: space-around;
`;
const Name = styled.h2``;
const Subtitle = styled.p``;
const SocialWrap = styled.div``;
const SocialLink = styled.a``;
const SocialImage = styled(Image)``;
const MainHeaderRight = styled.div``;
const ThumbnailWrap = styled.div`
    position: relative;
    width: 350px;
    height: 350px;
    overflow: hidden;
    border-radius: 100%;
`;
const ThumbnailImage = styled(Image)``;
