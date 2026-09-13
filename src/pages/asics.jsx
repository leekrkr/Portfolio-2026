import { Link } from "react-router-dom";
import PdfViewer from "../components/PdfViewer";
import AsicsCover from "../assets/pdf/asics/3-표지.pdf";
import Asics1 from "../assets/pdf/asics/3-1.pdf";
import Asics2 from "../assets/pdf/asics/3-2.pdf";
import Asics3 from "../assets/pdf/asics/3-3.pdf";
import Asics4 from "../assets/pdf/asics/3-4.pdf";
import Asics5 from "../assets/pdf/asics/3-5.pdf";
import Asics6 from "../assets/pdf/asics/3-6.pdf";
import Asics7 from "../assets/pdf/asics/3-7.pdf";
import Asics8 from "../assets/pdf/asics/3-8.pdf";
import Asics9 from "../assets/pdf/asics/3-9.pdf";
import Asics10 from "../assets/pdf/asics/3-10.pdf";
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

export default function AsicsPage() {
  return (
    <>
      <Container>
        <BackWrapper>
          <Link to="/#projects">
            <ButtonBack src={BackIcon} alt="back" />
            <ButtonActiveBack src={BackActiveIcon} alt="back" />
          </Link>
        </BackWrapper>
        <Title>ASICS</Title>
        <ProjectType>—</ProjectType>
        <SubTitle>ASICS Website UX/UI Redesign Project</SubTitle>
        <ProjectInfoContainer>
          <ProjectDescription>
            <InfoTitle>콜라보 정보를 더 쉽고 빠르게, asics와 함께</InfoTitle>
            <Description>
              ASICS는 다양한 브랜드와 협업을 이어가고 있지만 현재 웹사이트는
              발매 정보와 협업 콘텐츠를 효과적으로 전달하지 못하고 있습니다. 본
              프로젝트는 메인 페이지와 Launch Calendar를 리디자인하여 더 쉽고
              직관적인 탐색 경험을 제안했습니다.
            </Description>
          </ProjectDescription>
          <ProjectMeta>
            <MetaItem>
              <MetaTitle>Contribution</MetaTitle>
              <MetaText>기여도 100% 개인프로젝트</MetaText>
            </MetaItem>
            <MetaItem>
              <MetaTitle>Duration</MetaTitle>
              <MetaText>2026.07 - 2026.08</MetaText>
            </MetaItem>
          </ProjectMeta>
        </ProjectInfoContainer>
      </Container>
      <PdfViewer file={AsicsCover} />
      <PdfViewer file={Asics1} />
      <PdfViewer file={Asics2} />
      <PdfViewer file={Asics3} />
      <PdfViewer file={Asics4} />
      <PdfViewer file={Asics5} />
      <PdfViewer file={Asics6} />
      <PdfViewer file={Asics7} />
      <PdfViewer file={Asics8} />
      <PdfViewer file={Asics9} />
      <PdfViewer file={Asics10} />
    </>
  );
}
