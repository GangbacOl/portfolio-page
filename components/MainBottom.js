import styled from 'styled-components';
import Image from 'next/image';

export default function MainBottom() {
    return (
        <Container>
            <DownArrowWrap>
                <DownArrowImage src="/images/down.png" alt="down" width={80} height={60} />
            </DownArrowWrap>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: -90px;
`;
const DownArrowWrap = styled.div``;
const DownArrowImage = styled(Image)``;
