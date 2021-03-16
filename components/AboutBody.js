import styled from 'styled-components';
import Image from 'next/image';

import * as mixin from '../styles/mixin';

export default function AboutBody() {
    return (
        <Container>
            <AboutLeft>
                <AboutImage src="/images/me1.jpg" alt="me" />
            </AboutLeft>
            <AboutRight>
                <Name>조강연 / Gangyeon Jo</Name>
                <SocialWrap>
                    <SocialLink>
                        <SocialImage src="/images/phone.png" alt="phone logo" width={30} height={30} />
                        <SocialSpan href="tel:010-8377-1145">010-8377-1145</SocialSpan>
                    </SocialLink>
                    <SocialLink>
                        <SocialImage src="/images/mail.png" alt="mail logo" width={30} height={30} />
                        <SocialSpan href="mailto:gangyeonjo336@gmail.com">gangyeonjo336@gmail.com</SocialSpan>
                    </SocialLink>
                    <SocialLink>
                        <SocialImage src="/images/github.png" alt="github logo" width={30} height={30} />
                        <SocialSpan href="https://github.com/GangbacOl">
                            https://github.com/GangbacOl
                        </SocialSpan>
                    </SocialLink>
                    <SocialLink>
                        <SocialImage src="/images/facebook.png" alt="facebook logo" width={30} height={30} />
                        <SocialSpan href="https://www.facebook.com/profile.php?id=100014959867589">
                            https://www.facebook.com/profile.php?id=100014959867589
                        </SocialSpan>
                    </SocialLink>
                </SocialWrap>
                <Career>
                    <Title>Education</Title>
                    <SubtitleWrap>
                        <ProfileImage src="/images/sunrin.png" width={35} height={35} />
                        <Subtitle>선린인터넷고등학교</Subtitle>
                    </SubtitleWrap>
                    <Paragraph>
                        선린인터넷고등학교 정보보호과에 재학중입니다. 운영체제, 네트워크, 데이터베이스,
                        자료구조 등의 교과목을 이수했습니다.
                    </Paragraph>
                </Career>
                <Career>
                    <Title>Activities</Title>
                    <SubtitleWrap>
                        <ProfileImage src="/images/unifox.png" width={35} height={35} />
                        <Subtitle>Unifox(유니폭스)</Subtitle>
                    </SubtitleWrap>
                    <Paragraph>
                        정보보호과 프로그래밍 전문동아리 Unifox의 부장을 맡아 1년동안 후배들을 지도하고
                        부원들을 인솔했습니다.
                    </Paragraph>
                </Career>
            </AboutRight>
        </Container>
    );
}

const Container = styled.div`
    position: relative;
    width: 80%;
    display: flex;
    justify-content: space-between;
    height: auto;
    ${mixin.mobileTablet(`
        flex-direction: column;
    `)}
`;
const AboutLeft = styled.div`
    width: 45%;
    ${mixin.mobileTablet(`
        width: 100%;
    `)}
`;
const AboutImage = styled.img`
    width: 100%;
    border: 7px solid black;
    border-radius: 15px;
`;
const AboutRight = styled.div`
    width: 55%;
    margin-left: 20px;
    ${mixin.mobileTablet(`
        width: 95%;
        margin: 0 auto;
    `)}
`;
const Name = styled.h2`
    font-size: 2.5rem;
    font-weight: 500;
    margin: 5px 0 15px 0;
    ${mixin.mobileTablet(`
        font-size: 2rem;
    `)}
`;
const SocialWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0 0 15px 0;
`;
const SocialLink = styled.div`
    display: flex;
    align-items: center;
    margin: 5px;
`;
const SocialImage = styled(Image)``;
const SocialSpan = styled.a`
    margin-left: 10px;
    &:hover {
        text-decoration: underline;
    }
    ${mixin.tablet(`
        font-size: 1.3rem;
    `)}
`;
const Career = styled.div`
    margin: 5px 0;
`;
const Title = styled.h2`
    font-size: 1.5rem;
    font-weight: 500;
    margin: 0;
`;
const SubtitleWrap = styled.div`
    display: flex;
    align-items: center;
`;
const Subtitle = styled.h2`
    font-size: 1.2rem;
    font-weight: 500;
    margin: 0 0 0 10px;
`;
const Paragraph = styled.p`
    font-size: 1rem;
    margin: 0;
    ${mixin.tablet(`
        font-size: 1.3rem;
    `)}
`;
const ProfileImage = styled(Image)``;
