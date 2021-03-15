import styled from 'styled-components';

import WorkItem from './WorkItem';

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
    display: flex;
    flex-wrap: wrap;
`;

const Title = styled.h2`
    width: 80%;
    font-size: 2.5rem;
    font-weight: 500;
    border-bottom: 2px solid black;
    padding: 10px 20px;
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
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, nesciunt! Itaque illum debitis officiis magni veritatis deserunt in expedita optio nulla tenetur aliquam, voluptate doloribus eius quae impedit laudantium corrupti!',
            imagePath: '/images/rccar.jpg',
            notionUrl: 'https://www.notion.so/rc-eaaee942f82b44e6a1a9cfe24342230f',
        },
        {
            name: 'Todar Book',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur facilis distinctio, consequuntur voluptatibus eius fugiat a voluptate eveniet numquam. Iusto cum porro asperiores facere voluptatum assumenda temporibus tempore accusamus minus?',
            imagePath: '/images/todarbook.png',
            notionUrl: 'https://www.notion.so/Todar-Book-c271451591a545da8fc772c78c85fc2b',
        },
        {
            name: 'Real Word',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur facilis distinctio, consequuntur voluptatibus eius fugiat a voluptate eveniet numquam. Iusto cum porro asperiores facere voluptatum assumenda temporibus tempore accusamus minus?',
            imagePath: '/images/realword.png',
            notionUrl: 'https://www.notion.so/Real-Word-2f8e750730e444dd815bc6ea46b5553b',
        },
        {
            name: '포트폴리오 페이지',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur facilis distinctio, consequuntur voluptatibus eius fugiat a voluptate eveniet numquam. Iusto cum porro asperiores facere voluptatum assumenda temporibus tempore accusamus minus?',
            imagePath: '/images/portfoliopage.png',
            notionUrl: 'https://www.notion.so/97184c97e8e94d38a72de89a32538346',
        },
    ],
    Team: [
        {
            name: '정보과 홍보 페이지',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, nesciunt! Itaque illum debitis officiis magni veritatis deserunt in expedita optio nulla tenetur aliquam, voluptate doloribus eius quae impedit laudantium corrupti!',
            imagePath: '/images/sunrinsecurity.png',
            notionUrl: 'https://www.notion.so/cc4bd5e72fd54b468453fa32f87eac87',
        },
        {
            name: 'STA+C TranSign',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, nesciunt! Itaque illum debitis officiis magni veritatis deserunt in expedita optio nulla tenetur aliquam, voluptate doloribus eius quae impedit laudantium corrupti!',
            imagePath: '/images/transign.png',
            notionUrl: 'https://www.notion.so/STA-C-TranSign-573b0b387369467c900d9a0132aed3a7',
        },
    ],
    Competition: [
        {
            name: 'Intel AI For Youth',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, nesciunt! Itaque illum debitis officiis magni veritatis deserunt in expedita optio nulla tenetur aliquam, voluptate doloribus eius quae impedit laudantium corrupti!',
            imagePath: '/images/intel.jpg',
            notionUrl: 'https://www.notion.so/Intel-Ai-For-Youth-712f42416b3c45a199216a5b3c54279d',
        },
        {
            name: '2020 데이터 크리에이터 캠프',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, nesciunt! Itaque illum debitis officiis magni veritatis deserunt in expedita optio nulla tenetur aliquam, voluptate doloribus eius quae impedit laudantium corrupti!',
            imagePath: '/images/datacreator.jpg',
            notionUrl: 'https://www.notion.so/2020-6b77310eb704408c88001ce6f87721e3',
        },
    ],
    Education: [
        {
            name: '2019 혁신허브 AI스쿨 입문자 양성과정 2기',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, nesciunt! Itaque illum debitis officiis magni veritatis deserunt in expedita optio nulla tenetur aliquam, voluptate doloribus eius quae impedit laudantium corrupti!',
            imagePath: '/images/yangjae.jpg',
            notionUrl: 'https://www.notion.so/2019-AI-2-a11293a0073c403b98e2efb34ab58223',
        },
    ],
};
