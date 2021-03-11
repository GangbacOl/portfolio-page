import styled from 'styled-components';
import Image from 'next/image';

export default function WorkItem({ name }) {
    return <Container>{name}</Container>;
}

const Container = styled.div`
    width: 320px;
    height: 320px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
`;
