import { Link } from "react-router-dom";
import PdfViewer from "../components/PdfViewer";
import AntiCover from "../assets/pdf/anti/2-표지.pdf";
import Anti1 from "../assets/pdf/anti/2-1.pdf";
import Anti2 from "../assets/pdf/anti/2-2.pdf";
import Anti3 from "../assets/pdf/anti/2-3.pdf";
import Anti4 from "../assets/pdf/anti/2-4.pdf";
import Anti5 from "../assets/pdf/anti/2-5.pdf";
import Anti6 from "../assets/pdf/anti/2-6.pdf";
import Anti7 from "../assets/pdf/anti/2-7.pdf";
import Anti8 from "../assets/pdf/anti/2-8.pdf";
import Anti9 from "../assets/pdf/anti/2-9.pdf";
import Anti10 from "../assets/pdf/anti/2-10.pdf";
import Anti11 from "../assets/pdf/anti/2-11.pdf";
import Anti12 from "../assets/pdf/anti/2-12.pdf";
import Anti13 from "../assets/pdf/anti/2-13.pdf";
import Anti14 from "../assets/pdf/anti/2-14.pdf";
import Anti15 from "../assets/pdf/anti/2-15.pdf";
import BackIcon from "../assets/icons/back.svg";
import BackActiveIcon from "../assets/icons/back-active.svg";
import {
  Container,
  BackWrapper,
  ButtonBack,
  ButtonActiveBack,
  Title,
  SubTitle,
  ProjectType,
  ProjectInfoContainer,
  ProjectDescription,
  InfoTitle,
  Description,
  ProjectMeta,
  MetaItem,
  MetaTitle,
  MetaText,
} from "../styles/projectDetail.style";

export default function AntiPage() {
  return (
    <>
      <Container>
        <BackWrapper>
          <Link to="/#projects">
            <ButtonBack src={BackIcon} alt="back" />
            <ButtonActiveBack src={BackActiveIcon} alt="back" />
          </Link>
        </BackWrapper>
        <Title>ANTI</Title>
        <ProjectType>—</ProjectType>
        <SubTitle>ANTI Museum Branding & Website Design</SubTitle>
        <ProjectInfoContainer>
          <ProjectDescription>
            <InfoTitle>도시의 흐름 속, 더 가까운 예술</InfoTitle>
            <Description>
              anti는 도시의 흐름 속에서 가볍게 방문하기 좋은 밤의 미술관이자
              시간·공간·규범의 장벽을 허물고 누구나 자유롭게 예술을 경험할 수
              있는 이동형, 야간형 예술 플랫폼입니다. '오늘 밤, 예술은 더
              가까이'라는 슬로건 아래 고정된 공간과 정형화된 관람 방식에서
              벗어나 도시의 밤과 일상 속에서 자연스럽게 예술을 만나는 새로운
              문화 경험을 제안합니다.
            </Description>
          </ProjectDescription>
          <ProjectMeta>
            <MetaItem>
              <MetaTitle>Contribution</MetaTitle>
              <MetaText>
                Branding
                <br />
                기여도 20% 팀프로젝트
              </MetaText>
              <MetaText>
                Design
                <br />
                기여도 100% 개인프로젝트
              </MetaText>
            </MetaItem>
            <MetaItem>
              <MetaTitle>Duration</MetaTitle>
              <MetaText>2026.05 - 2026.06</MetaText>
            </MetaItem>
          </ProjectMeta>
        </ProjectInfoContainer>
      </Container>
      <PdfViewer file={AntiCover} />
      <PdfViewer file={Anti1} />
      <PdfViewer file={Anti2} />
      <PdfViewer file={Anti3} />
      <PdfViewer file={Anti4} />
      <PdfViewer file={Anti5} />
      <PdfViewer file={Anti6} />
      <PdfViewer file={Anti7} />
      <PdfViewer file={Anti8} />
      <PdfViewer file={Anti9} />
      <PdfViewer file={Anti10} />
      <PdfViewer file={Anti11} />
      <PdfViewer file={Anti12} />
      <PdfViewer file={Anti13} />
      <PdfViewer file={Anti14} />
      <PdfViewer file={Anti15} />
    </>
  );
}
