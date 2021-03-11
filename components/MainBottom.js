import styled from 'styled-components';
import Image from 'next/image';

export default function MainBottom() {
    return (
        <Container>
            <Message>SCROLL TO VIEW</Message>
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
    margin-bottom: 60px;
`;
const Message = styled.p`
    letter-spacing: 5px;
    font-size: 1.1rem;
    color: rgba(0, 0, 0, 0.4);
`;
const DownArrowWrap = styled.div``;
const DownArrowImage = styled(Image)``;
