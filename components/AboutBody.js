import styled from 'styled-components';
import Image from 'next/image';

export default function AboutBody() {
    return (
        <Container>
            <AboutImage src="/images/me1.jpg" alt="me" />

            <SocialWrap>
                <SocialLink href="https://github.com/GangbacOl">
                    <SocialImage src="/images/github.png" alt="github logo" width={60} height={60} />
                </SocialLink>
                <SocialLink href="https://www.rocketpunch.com/@gangyeonjo336">
                    <SocialImage
                        src="/images/rocketpunch.png"
                        alt="rocketpunch logo"
                        width={60}
                        height={60}
                    />
                </SocialLink>
                <SocialLink href="https://www.facebook.com/profile.php?id=100014959867589">
                    <SocialImage src="/images/facebook.png" alt="facebook logo" width={60} height={60} />
                </SocialLink>
            </SocialWrap>
            <Title>Education</Title>
            <Subtitle>선린인터넷고등학교</Subtitle>
            <Paragraph>
                선린인터넷고등학교 정보보호과에 재학중입니다. 운영체제, 네트워크, 데이터베이스, 자료구조 등의
                교과목을 이수했습니다.
            </Paragraph>
            <Title>Activities</Title>
            <Subtitle>Unifox</Subtitle>
            <Paragraph>
                정보보호과 프로그래밍 전문동아리 Unifox의 부장을 맡아 1년동안 후배들을 지도하고 부원들을
                인솔했습니다.
            </Paragraph>
        </Container>
    );
}

const Container = styled.div`
    position: relative;
    width: 45%;
    max-width: 700px;
    height: auto;
`;
const AboutImage = styled.img`
    width: 100%;
    border: 7px solid black;
`;
const Title = styled.h2`
    font-size: 2rem;
    font-weight: 500;
    margin: 0;
`;
const Subtitle = styled.h2`
    font-size: 1.5rem;
    font-weight: 500;
    margin: 0;
`;
const Paragraph = styled.p`
    font-size: 1.2rem;
    margin: 0;
`;
const SocialWrap = styled.div`
    text-align: center;
    margin-top: 10px;
`;
const SocialLink = styled.a`
    margin-right: 5px;
`;
const SocialImage = styled(Image)``;
