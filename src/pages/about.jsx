import React from "react";
import {
  AboutSection,
  FrameBox,
  LeftPane,
  Headline,
  Highlight,
  BodyText,
  TagRow,
  Tag,
  RightPane,
  InfoGrid,
  InfoColumn,
  InfoBlock,
  InfoLabel,
  InfoContent,
  InfoEntry,
  InfoTitle,
  InfoSub,
  InfoText,
} from "../styles/about.style";

const TAGS = ["#성실한", "#열정적인", "#끈기있는", "#책임감있는"];

export default function About() {
  return (
    <AboutSection>
      <FrameBox>
        <LeftPane>
          <Headline>
            다양한 관점에서 바라보고
            <br />
            서비스와 사용자를 잇는
            <br />
            디자이너, <Highlight>이주연</Highlight>입니다.
          </Headline>

          <BodyText>
            저마다 다른 색을 가진 것처럼, 모든 문제에는 서로 다른 답이 있다고
            생각합니다.
            <br />
            하나의 방식을 고집하기보다 문제마다 다른 각도로 접근하며,
            <br />
            서비스와 사용자 사이의 연결고리를 찾아갑니다.
          </BodyText>

          <TagRow>
            {TAGS.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </TagRow>
        </LeftPane>

        <RightPane>
          <InfoGrid>
            <InfoColumn>
              <InfoBlock>
                <InfoLabel>ABOUT</InfoLabel>
                <InfoContent>
                  <InfoEntry>
                    <InfoTitle>이주연</InfoTitle>
                  </InfoEntry>
                  <InfoEntry>
                    <InfoText>010-4149-9780</InfoText>
                    <InfoText>jooyn328@gmail.com</InfoText>
                  </InfoEntry>
                </InfoContent>
              </InfoBlock>

              <InfoBlock>
                <InfoLabel>EDUCATION</InfoLabel>
                <InfoContent>
                  <InfoEntry>
                    <InfoTitle>이화여자대학교 컴퓨터공학과</InfoTitle>
                    <InfoSub>졸업예정 ㅣ 2027.02</InfoSub>
                  </InfoEntry>
                  <InfoEntry>
                    <InfoTitle>이화여자대학교 융합콘텐츠학과</InfoTitle>
                    <InfoSub>복수전공 졸업예정 ㅣ 2027.02</InfoSub>
                  </InfoEntry>
                </InfoContent>
              </InfoBlock>

              <InfoBlock>
                <InfoLabel>SKILLS</InfoLabel>
                <InfoContent>
                  <InfoEntry>
                    <InfoText>
                      Figma, Photoshop, illustrator, Generative AI
                    </InfoText>
                  </InfoEntry>
                </InfoContent>
              </InfoBlock>
            </InfoColumn>

            <InfoColumn>
              <InfoBlock>
                <InfoLabel>CERTIFICATION</InfoLabel>
                <InfoContent>
                  <InfoEntry>
                    <InfoTitle>그래픽기술자격(GTQ) 1급</InfoTitle>
                    <InfoSub>한국생산성본부(KPC) ㅣ 2025.03</InfoSub>
                  </InfoEntry>
                  <InfoEntry>
                    <InfoTitle>그래픽기술자격 일러스트(GTQi) 1급</InfoTitle>
                    <InfoSub>한국생산성본부(KPC) ㅣ 2025.07</InfoSub>
                  </InfoEntry>
                  <InfoEntry>
                    <InfoTitle>정보처리기사</InfoTitle>
                    <InfoSub>한국산업인력공단 ㅣ 2026.07</InfoSub>
                  </InfoEntry>
                </InfoContent>
              </InfoBlock>
            </InfoColumn>
          </InfoGrid>
        </RightPane>
      </FrameBox>
    </AboutSection>
  );
}
