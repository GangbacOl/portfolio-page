import styled from 'styled-components';

export default function Footer() {
    return (
        <Container>
            <Copyright>Copyright 2020. Gangyeon Jo all rights reserved.</Copyright>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 120px;
    background: #333030;
    display: flex;
    align-items: center;
`;

const Copyright = styled.p`
    font-size: 1.2rem;
    color: white;
    margin-left: 40px;
`;
