import styled from 'styled-components';
import Image from 'next/image';

import WorkItem from './WorkItem';

const workData = [
    {
        name: '유사 자율주행 rc카',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, nesciunt! Itaque illum debitis officiis magni veritatis deserunt in expedita optio nulla tenetur aliquam, voluptate doloribus eius quae impedit laudantium corrupti!',
    },
    {
        name: '정보과 홍보 페이지',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, nesciunt! Itaque illum debitis officiis magni veritatis deserunt in expedita optio nulla tenetur aliquam, voluptate doloribus eius quae impedit laudantium corrupti!',
    },
    {
        name: 'STA+C TranSign',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, nesciunt! Itaque illum debitis officiis magni veritatis deserunt in expedita optio nulla tenetur aliquam, voluptate doloribus eius quae impedit laudantium corrupti!',
    },
    {
        name: '[Intel] Intel AI For Youth',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, nesciunt! Itaque illum debitis officiis magni veritatis deserunt in expedita optio nulla tenetur aliquam, voluptate doloribus eius quae impedit laudantium corrupti!',
    },
    {
        name: '[KAIST 양재R&D혁신허브] 2019 혁신허브 AI스쿨 입문자 양성과정 2기',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, nesciunt! Itaque illum debitis officiis magni veritatis deserunt in expedita optio nulla tenetur aliquam, voluptate doloribus eius quae impedit laudantium corrupti!',
    },
    {
        name: '[한국정보화진흥원] 2020 데이터 크리에이터 캠프',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, nesciunt! Itaque illum debitis officiis magni veritatis deserunt in expedita optio nulla tenetur aliquam, voluptate doloribus eius quae impedit laudantium corrupti!',
    },
];

export default function WorkList() {
    return (
        <Container>
            {workData.map((item) => (
                <WorkItem name={item.name} />
            ))}
        </Container>
    );
}

const Container = styled.div``;
