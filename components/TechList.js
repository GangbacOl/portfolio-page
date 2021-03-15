import styled from 'styled-components';

import TechItem from './TechItem';

export default function TechList() {
    return (
        <Container>
            <Title>Tech Stack</Title>
            <TechItemsWrap>
                {TechSkillData.map((item, idx) => (
                    <TechItem
                        name={item.name}
                        description={item.description}
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
    width: 80%;
    margin: 0 auto;
`;

const Title = styled.h2`
    font-size: 2.5rem;
    font-weight: 500;
    border-bottom: 2px solid black;
    padding: 10px 20px;
`;

const TechItemsWrap = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
    justify-items: center;
    row-gap: 20px;
    column-gap: 20px;
    margin: 0 auto;
`;

const TechSkillData = [
    {
        name: 'JavaScript',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nesciunt non commodi cumque. Cum, ratione modi maiores atque impedit omnis distinctio minus a molestiae, pariatur enim odio ab est animi?',
        percentage: 70,
        imagePath: '/images/logo/js.png',
    },
    {
        name: 'TypeScript',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nesciunt non commodi cumque. Cum, ratione modi maiores atque impedit omnis distinctio minus a molestiae, pariatur enim odio ab est animi?',
        percentage: 40,
        imagePath: '/images/logo/ts.png',
    },
    {
        name: 'Python',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nesciunt non commodi cumque. Cum, ratione modi maiores atque impedit omnis distinctio minus a molestiae, pariatur enim odio ab est animi?',
        percentage: 50,
        imagePath: '/images/logo/python.png',
    },
    {
        name: 'HTML5',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nesciunt non commodi cumque. Cum, ratione modi maiores atque impedit omnis distinctio minus a molestiae, pariatur enim odio ab est animi?',
        percentage: 80,
        imagePath: '/images/logo/html.png',
    },
    {
        name: 'CSS3',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nesciunt non commodi cumque. Cum, ratione modi maiores atque impedit omnis distinctio minus a molestiae, pariatur enim odio ab est animi?',
        percentage: 80,
        imagePath: '/images/logo/css.png',
    },
    {
        name: 'Github & Git',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nesciunt non commodi cumque. Cum, ratione modi maiores atque impedit omnis distinctio minus a molestiae, pariatur enim odio ab est animi?',
        percentage: 40,
        imagePath: '/images/logo/git.png',
    },
    {
        name: 'React.js',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nesciunt non commodi cumque. Cum, ratione modi maiores atque impedit omnis distinctio minus a molestiae, pariatur enim odio ab est animi?',
        percentage: 70,
        imagePath: '/images/logo/react.png',
    },
    {
        name: 'Next.js',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nesciunt non commodi cumque. Cum, ratione modi maiores atque impedit omnis distinctio minus a molestiae, pariatur enim odio ab est animi?',
        percentage: 60,
        imagePath: '/images/logo/next.png',
    },
    {
        name: 'Redux.js',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nesciunt non commodi cumque. Cum, ratione modi maiores atque impedit omnis distinctio minus a molestiae, pariatur enim odio ab est animi?',
        percentage: 70,
        imagePath: '/images/logo/redux.png',
    },
    {
        name: 'Sass',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nesciunt non commodi cumque. Cum, ratione modi maiores atque impedit omnis distinctio minus a molestiae, pariatur enim odio ab est animi?',
        percentage: 65,
        imagePath: '/images/logo/sass.png',
    },
    {
        name: 'styled-components',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nesciunt non commodi cumque. Cum, ratione modi maiores atque impedit omnis distinctio minus a molestiae, pariatur enim odio ab est animi?',
        percentage: 80,
        imagePath: '/images/logo/styled.png',
    },
    {
        name: 'Amazon Web Service',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nesciunt non commodi cumque. Cum, ratione modi maiores atque impedit omnis distinctio minus a molestiae, pariatur enim odio ab est animi?',
        percentage: 25,
        imagePath: '/images/logo/aws.png',
    },
    {
        name: 'React Hooks',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nesciunt non commodi cumque. Cum, ratione modi maiores atque impedit omnis distinctio minus a molestiae, pariatur enim odio ab est animi?',
        percentage: 60,
        imagePath: '/images/logo/hooks.png',
    },
];
