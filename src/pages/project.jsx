import { Link } from "react-router-dom";
import capsiImg from "../assets/images/thumbnail1.png";
import antiImg from "../assets/images/thumbnail2.png";
import asicsImg from "../assets/images/thumbnail3.png";
import {
  Container,
  Title,
  ProjectContainer,
  ProjectCard,
  Thumbnail,
  ProjectName,
  Description,
  TagContainer,
  Tag,
} from "../styles/project.style";

export default function ProjectPage() {
  return (
    <Container>
      <Title>Contents.</Title>

      <ProjectContainer>
        <Link to="/project1">
          <ProjectCard>
            <Thumbnail src={capsiImg} alt="CAPSY" />
            <ProjectName>CAPSY</ProjectName>
            <Description>CAPSY 앱 구축 프로젝트</Description>
            <TagContainer>
              <Tag>UXUI</Tag>
            </TagContainer>
          </ProjectCard>
        </Link>

        <Link to="/project2">
          <ProjectCard>
            <Thumbnail src={antiImg} alt="ANTI" />
            <ProjectName>ANTI MUSEUM</ProjectName>
            <Description>
              ANTI 뮤지엄 브랜딩 및 웹사이트 구축 프로젝트
            </Description>
            <TagContainer>
              <Tag>BRANDING</Tag>
              <Tag>UXUI</Tag>
            </TagContainer>
          </ProjectCard>
        </Link>

        <Link to="/project3">
          <ProjectCard>
            <Thumbnail src={asicsImg} alt="ASICS" />
            <ProjectName>ASICS WEBSITE REDESIGN</ProjectName>
            <Description>ASICS 웹사이트 리뉴얼 프로젝트</Description>
            <TagContainer>
              <Tag>UXUI</Tag>
            </TagContainer>
          </ProjectCard>
        </Link>

        <Link to="/project4">
          <ProjectCard>
            <Thumbnail />
            <ProjectName>HOWKIKI</ProjectName>
            <Description>HOWKIKI 챗봇/웹 설계 및 개발</Description>
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
