import styled from 'styled-components';

import TechItem from './TechItem';

const TechSkillData = [
    {
        name: 'JavaScript',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nesciunt non commodi cumque. Cum, ratione modi maiores atque impedit omnis distinctio minus a molestiae, pariatur enim odio ab est animi?',
        percentage: 70,
    },
    {
        name: 'TypeScript',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nesciunt non commodi cumque. Cum, ratione modi maiores atque impedit omnis distinctio minus a molestiae, pariatur enim odio ab est animi?',
        percentage: 40,
    },
    {
        name: 'Python',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nesciunt non commodi cumque. Cum, ratione modi maiores atque impedit omnis distinctio minus a molestiae, pariatur enim odio ab est animi?',
        percentage: 50,
    },
    {
        name: 'HTML5',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nesciunt non commodi cumque. Cum, ratione modi maiores atque impedit omnis distinctio minus a molestiae, pariatur enim odio ab est animi?',
        percentage: 80,
    },
    {
        name: 'CSS3',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nesciunt non commodi cumque. Cum, ratione modi maiores atque impedit omnis distinctio minus a molestiae, pariatur enim odio ab est animi?',
        percentage: 80,
    },
    {
        name: 'Github & Git',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nesciunt non commodi cumque. Cum, ratione modi maiores atque impedit omnis distinctio minus a molestiae, pariatur enim odio ab est animi?',
        percentage: 40,
    },
    {
        name: 'React.js',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nesciunt non commodi cumque. Cum, ratione modi maiores atque impedit omnis distinctio minus a molestiae, pariatur enim odio ab est animi?',
        percentage: 70,
    },
    {
        name: 'Next.js',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nesciunt non commodi cumque. Cum, ratione modi maiores atque impedit omnis distinctio minus a molestiae, pariatur enim odio ab est animi?',
        percentage: 60,
    },
    {
        name: 'Redux.js',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nesciunt non commodi cumque. Cum, ratione modi maiores atque impedit omnis distinctio minus a molestiae, pariatur enim odio ab est animi?',
        percentage: 70,
    },
];

export default function TechList() {
    return (
        <Container>
            <TechItemsWrap>
                {TechSkillData.map((item, idx) => (
                    <TechItem
                        name={item.name}
                        description={item.description}
                        percentage={item.percentage}
                        key={idx}
                    />
                ))}
            </TechItemsWrap>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    border: 1px solid black;
`;

const TechItemsWrap = styled.div`
    width: 90%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
    justify-items: center;
    row-gap: 20px;
    column-gap: 20px;
    border: 1px solid black;
    margin: 0 auto;
`;
