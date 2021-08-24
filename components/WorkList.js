import styled from "styled-components";

import WorkItem from "./WorkItem";

import * as mixin from "../styles/mixin";
import workData from "../public/data/workData";

export default function WorkList() {
  return (
    <Container>
      <Title>Works</Title>
      <WorkItemListsWrap>
        {Object.entries(workData).map((item, idx) => (
          <WorkItemListWrap key={idx}>
            <SubTitle>{item[0] + " (" + item[1].length + ")"}</SubTitle>
            <WorkItemList>
              {item[1].map((item, idx) => (
                <WorkItem
                  name={item.name}
                  description={item.description}
                  imagePath={item.imagePath}
                  notionUrl={item.notionUrl}
                  key={idx}
                />
              ))}
            </WorkItemList>
          </WorkItemListWrap>
        ))}
      </WorkItemListsWrap>
    </Container>
  );
}

const Container = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

const WorkItemListsWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & div:nth-child(1) > h2 {
    margin-top: 0;
    padding-top: 0;
  }
`;

const WorkItemListWrap = styled.div`
  width: 75%;
  width: 100%;
`;

const WorkItemList = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  justify-content: center;
  justify-items: center;
  ${mixin.mobileTablet(`
        justify-content: center;
    `)}
`;

const Title = styled.h2`
  width: 100%;
  font-size: 2.5rem;
  font-weight: 500;
  padding: 0 20px 10px 20px;
  border-bottom: 2px solid black;
  margin-top: 0;
`;

const SubTitle = styled.h2`
  font-size: 2rem;
  font-weight: 500;
  border-bottom: 2px solid black;
  padding: 20px;
`;
