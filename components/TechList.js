import styled from 'styled-components';

import TechItem from './TechItem';

import { mobile } from '../styles/mixin';

export default function TechList() {
    return (
        <Container>
            <Title>Tech Stack</Title>
            <TechItemsWrap>
                {TechSkillData.map((item, idx) => (
                    <TechItem
                        name={item.name}
                        percentage={item.percentage}
                        imagePath={item.imagePath}
                        key={idx}
                    />
                ))}
            </TechItemsWrap>
        </Container>
    );
}

const Container = styled.div`
    width: 95%;
    margin: 0 auto;
`;

const Title = styled.h2`
    font-size: 2.5rem;
    font-weight: 500;
    padding: 0px 20px 10px 20px;
    border-bottom: 2px solid black;
    margin-top: 0;
`;

const TechItemsWrap = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
    justify-items: center;
    row-gap: 20px;
    column-gap: 20px;
    margin: 0 auto;
    ${mobile(`
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    `)}
`;

const TechSkillData = [
    {
        name: 'JavaScript',
        percentage: 70,
        imagePath: '/images/logo/js.png',
    },
    {
        name: 'TypeScript',
        percentage: 40,
        imagePath: '/images/logo/ts.png',
    },
    {
        name: 'Python',
        percentage: 50,
        imagePath: '/images/logo/python.png',
    },
    {
        name: 'HTML5',
        percentage: 80,
        imagePath: '/images/logo/html.png',
    },
    {
        name: 'CSS3',
        percentage: 80,
        imagePath: '/images/logo/css.png',
    },
    {
        name: 'Github & Git',
        percentage: 40,
        imagePath: '/images/logo/git.png',
    },
    {
        name: 'React.js',
        percentage: 70,
        imagePath: '/images/logo/react.png',
    },
    {
        name: 'Next.js',
        percentage: 60,
        imagePath: '/images/logo/next.png',
    },
    {
        name: 'Redux.js',
        percentage: 70,
        imagePath: '/images/logo/redux.png',
    },
    {
        name: 'Sass',
        percentage: 65,
        imagePath: '/images/logo/sass.png',
    },
    {
        name: 'styled-components',
        percentage: 80,
        imagePath: '/images/logo/styled.png',
    },
    {
        name: 'Amazon Web Service',
        percentage: 25,
        imagePath: '/images/logo/aws.png',
    },
    {
        name: 'React Hooks',
        percentage: 60,
        imagePath: '/images/logo/hooks.png',
    },
];
