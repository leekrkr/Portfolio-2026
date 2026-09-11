import { Link } from "react-router-dom";
import capsiImg from "../assets/images/thumbnail1.png";
import antiImg from "../assets/images/thumbnail2.png";
import asicsImg from "../assets/images/thumbnail3.png";
import howkikiImg from "../assets/images/thumbnail4.png";
import {
  Container,
  Title,
  ProjectContainer,
  ProjectCard,
  Thumbnail,
  DescriptionContainer,
  ProjectName,
  Description,
  TagContainer,
  Tag,
} from "../styles/project.style";

export default function ProjectPage() {
  return (
    <Container id="projects">
      <Title>
        Contents<span>.</span>
      </Title>

      <ProjectContainer>
        <Link to="/project1">
          <ProjectCard>
            <Thumbnail src={capsiImg} alt="CAPSY" />
            <DescriptionContainer>
              <ProjectName>CAPSY</ProjectName>
              <Description>CAPSY 앱 구축 프로젝트</Description>
            </DescriptionContainer>
            <TagContainer>
              <Tag>UXUI</Tag>
            </TagContainer>
          </ProjectCard>
        </Link>

        <Link to="/project2">
          <ProjectCard>
            <Thumbnail src={antiImg} alt="ANTI" />
            <DescriptionContainer>
              <ProjectName>ANTI MUSEUM</ProjectName>
              <Description>
                ANTI 뮤지엄 브랜딩 및 웹사이트 구축 프로젝트
              </Description>
            </DescriptionContainer>
            <TagContainer>
              <Tag>BRANDING</Tag>
              <Tag>UXUI</Tag>
            </TagContainer>
          </ProjectCard>
        </Link>

        <Link to="/project3">
          <ProjectCard>
            <Thumbnail src={asicsImg} alt="ASICS" />
            <DescriptionContainer>
              <ProjectName>ASICS WEBSITE REDESIGN</ProjectName>
              <Description>ASICS 웹사이트 리뉴얼 프로젝트</Description>
            </DescriptionContainer>
            <TagContainer>
              <Tag>UXUI</Tag>
            </TagContainer>
          </ProjectCard>
        </Link>
        <Link to="/project4">
          <ProjectCard>
            <Thumbnail src={howkikiImg} alt="HOWKIKI" />
            <DescriptionContainer>
              <ProjectName>HOWKIKI</ProjectName>
              <Description>HOWKIKI 챗봇/웹 설계 및 개발</Description>
            </DescriptionContainer>
            <TagContainer>
              <Tag>UXUI</Tag>
              <Tag>PUBLISHING</Tag>
            </TagContainer>
          </ProjectCard>
        </Link>
      </ProjectContainer>
    </Container>
  );
}
