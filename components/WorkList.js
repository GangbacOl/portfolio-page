import styled from 'styled-components';

import WorkItem from './WorkItem';

import * as mixin from '../styles/mixin';

export default function WorkList() {
    return (
        <Container>
            <Title>Works</Title>
            <WorkItemListsWrap>
                {Object.entries(WorkData).map((item, idx) => (
                    <WorkItemListWrap key={idx}>
                        <SubTitle>{item[0] + ' (' + item[1].length + ')'}</SubTitle>
                        <WorkItemList>
                            {item[1].map((item, idx) => (
                                <WorkItem
                                    name={item.name}
                                    description={item.description}
                                    imagePath={item.imagePath}
                                    notionUrl={item.notionUrl}
                                    key={idx}
                                />
                            ))}
                        </WorkItemList>
                    </WorkItemListWrap>
                ))}
            </WorkItemListsWrap>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const WorkItemListsWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & div:nth-child(1) > h2 {
        margin-top: 0;
        padding-top: 0;
    }
`;

const WorkItemListWrap = styled.div`
    width: 75%;
`;

const WorkItemList = styled.div`
    width: 100%;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    justify-content: center;
    justify-items: center;
    ${mixin.mobileTablet(`
        justify-content: center;
    `)}
`;

const Title = styled.h2`
    width: 80%;
    font-size: 2.5rem;
    font-weight: 500;
    padding: 0 20px 10px 20px;
    border-bottom: 2px solid black;
    margin-top: 0;
`;

const SubTitle = styled.h2`
    font-size: 2rem;
    font-weight: 500;
    border-bottom: 2px solid black;
    padding: 20px;
`;

const WorkData = {
    Personal: [
        {
            name: '유사 자율주행 rc카',
            description: '모교 소속 동아리를 홍보하기 위해 iot 분야를 담당하여 만든 프로젝트입니다.',
            imagePath: '/images/rccar.jpg',
            notionUrl: 'https://www.notion.so/rc-eaaee942f82b44e6a1a9cfe24342230f',
        },
        {
            name: 'Todar Book',
            description:
                '내가 읽은 책들, 읽고 있는 책의 독서량 등을 체크하며 독서를 할 수 있게 도와주는 독서 관리 웹 플랫폼입니다.',
            imagePath: '/images/todarbook.png',
            notionUrl: 'https://www.notion.so/Todar-Book-c271451591a545da8fc772c78c85fc2b',
        },
        {
            name: 'Real Word',
            description:
                '브라우저를 통해 영어 문서나 영어 문장을 읽을 때 모르는 단어들을 기록하고 쉽게 외울 수 있도록 도와주는 브라우저 확장 프로그램입니다.',
            imagePath: '/images/realword.png',
            notionUrl: 'https://www.notion.so/Real-Word-2f8e750730e444dd815bc6ea46b5553b',
        },
        {
            name: '포트폴리오 페이지',
            description: '저의 역량과 이력들을 정리해놓은 포트폴리오입니다.(지금 보고 계시는 페이지입니다.)',
            imagePath: '/images/portfoliopage.png',
            notionUrl: 'https://www.notion.so/97184c97e8e94d38a72de89a32538346',
        },
    ],
    Team: [
        {
            name: '정보과 홍보 페이지',
            description:
                '모교 정보보호과의 실적, 프로젝트들을 게시할 수 있는 홍보 목적으로 만든 사이트입니다. ',
            imagePath: '/images/sunrinsecurity.png',
            notionUrl: 'https://www.notion.so/cc4bd5e72fd54b468453fa32f87eac87',
        },
        {
            name: 'TranSign',
            description: '인공지능 모델을 개발하여 수어를 글로 글을 수어로 번역해주는 플랫폼입니다.',
            imagePath: '/images/transign.png',
            notionUrl: 'https://www.notion.so/STA-C-TranSign-573b0b387369467c900d9a0132aed3a7',
        },
    ],
    Competition: [
        {
            name: 'Intel AI For Youth',
            description:
                '대한민국, 인도, 폴란드 청소년들을 대상으로 주최하는 인공지능 프로젝트 전시 활동입니다.',
            imagePath: '/images/intel.jpg',
            notionUrl: 'https://www.notion.so/Intel-Ai-For-Youth-712f42416b3c45a199216a5b3c54279d',
        },
        {
            name: '2020 데이터 크리에이터 캠프',
            description:
                '인공지능 문제를 어느팀이 가장 효율적으로, 올바른 방법으로, 높은 정확도로 해결하는지 경쟁하는 대회입니다.',
            imagePath: '/images/datacreator.jpg',
            notionUrl: 'https://www.notion.so/2020-6b77310eb704408c88001ce6f87721e3',
        },
    ],
    Education: [
        {
            name: '2019 혁신허브 AI스쿨 입문자 양성과정 2기',
            description: '인공지능의 기초과정부터 고급과정까지 3개월간 오프라인으로 진행하는 교육과정입니다.',
            imagePath: '/images/yangjae.jpg',
            notionUrl: 'https://www.notion.so/2019-AI-2-a11293a0073c403b98e2efb34ab58223',
        },
    ],
};
