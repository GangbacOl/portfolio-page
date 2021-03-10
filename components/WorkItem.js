import styled from 'styled-components';
import Image from 'next/image';

export default function WorkItem({ name }) {
    return <Container>{name}</Container>;
}

const Container = styled.div``;
