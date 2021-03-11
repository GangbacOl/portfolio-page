import styled from 'styled-components';
import Image from 'next/image';

import WorkItem from './WorkItem';

const personalWork = [
    {
        name: '유사 자율주행 rc카',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, nesciunt! Itaque illum debitis officiis magni veritatis deserunt in expedita optio nulla tenetur aliquam, voluptate doloribus eius quae impedit laudantium corrupti!',
        imagePath: '/images/rccar.jpg',
    },
    {
        name: 'Todar Book',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur facilis distinctio, consequuntur voluptatibus eius fugiat a voluptate eveniet numquam. Iusto cum porro asperiores facere voluptatum assumenda temporibus tempore accusamus minus?',
        imagePath: '/images/todarbook.png',
    },
    {
        name: 'Real Word',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur facilis distinctio, consequuntur voluptatibus eius fugiat a voluptate eveniet numquam. Iusto cum porro asperiores facere voluptatum assumenda temporibus tempore accusamus minus?',
        imagePath: '/images/realword.png',
    },
    {
        name: '포트폴리오 페이지',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur facilis distinctio, consequuntur voluptatibus eius fugiat a voluptate eveniet numquam. Iusto cum porro asperiores facere voluptatum assumenda temporibus tempore accusamus minus?',
        imagePath: '/images/portfoliopage.png',
    },
];
const teamWork = [
    {
        name: '정보과 홍보 페이지',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, nesciunt! Itaque illum debitis officiis magni veritatis deserunt in expedita optio nulla tenetur aliquam, voluptate doloribus eius quae impedit laudantium corrupti!',
        imagePath: '/images/sunrinsecurity.png',
    },
    {
        name: 'STA+C TranSign',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, nesciunt! Itaque illum debitis officiis magni veritatis deserunt in expedita optio nulla tenetur aliquam, voluptate doloribus eius quae impedit laudantium corrupti!',
        imagePath: '/images/transign.png',
    },
];

const competitionWork = [
    {
        name: 'Intel AI For Youth',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, nesciunt! Itaque illum debitis officiis magni veritatis deserunt in expedita optio nulla tenetur aliquam, voluptate doloribus eius quae impedit laudantium corrupti!',
        imagePath: '/images/intel.jpg',
        type: 'competition',
    },
    {
        name: '2020 데이터 크리에이터 캠프',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, nesciunt! Itaque illum debitis officiis magni veritatis deserunt in expedita optio nulla tenetur aliquam, voluptate doloribus eius quae impedit laudantium corrupti!',
        imagePath: '/images/datacreator.jpg',
        type: 'competition',
    },
];

const educationWork = [
    {
        name: '2019 혁신허브 AI스쿨 입문자 양성과정 2기',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, nesciunt! Itaque illum debitis officiis magni veritatis deserunt in expedita optio nulla tenetur aliquam, voluptate doloribus eius quae impedit laudantium corrupti!',
        imagePath: '/images/yangjae.jpg',
        type: 'education',
    },
];

export default function WorkList() {
    return (
        <Container>
            <WorkItemsWrap>
                <Title>개인 프로젝트{' (' + personalWork.length + ')'}</Title>
                <WorkItems>
                    {personalWork.map((item, idx) => (
                        <WorkItem
                            name={item.name}
                            description={item.description}
                            imagePath={item.imagePath}
                            key={idx}
                        />
                    ))}
                </WorkItems>
            </WorkItemsWrap>
            <WorkItemsWrap>
                <Title>팀 프로젝트{' (' + teamWork.length + ')'}</Title>
                <WorkItems>
                    {teamWork.map((item, idx) => (
                        <WorkItem
                            name={item.name}
                            description={item.description}
                            imagePath={item.imagePath}
                            key={idx}
                        />
                    ))}
                </WorkItems>
            </WorkItemsWrap>
            <WorkItemsWrap>
                <Title>대회{' (' + competitionWork.length + ')'}</Title>
                <WorkItems>
                    {competitionWork.map((item, idx) => (
                        <WorkItem
                            name={item.name}
                            description={item.description}
                            imagePath={item.imagePath}
                            key={idx}
                        />
                    ))}
                </WorkItems>
            </WorkItemsWrap>
            <WorkItemsWrap>
                <Title>교육 & 캠프{' (' + educationWork.length + ')'}</Title>
                <WorkItems>
                    {educationWork.map((item, idx) => (
                        <WorkItem
                            name={item.name}
                            description={item.description}
                            imagePath={item.imagePath}
                            key={idx}
                        />
                    ))}
                </WorkItems>
            </WorkItemsWrap>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const WorkItemsWrap = styled.div`
    width: 75%;
`;

const WorkItems = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`;

const Title = styled.h2`
    font-size: 2rem;
    font-weight: 500;
    border-bottom: 3px solid black;
    padding: 20px;
`;
