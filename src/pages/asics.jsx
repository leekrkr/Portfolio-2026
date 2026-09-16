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
import ArrowIcon from "../assets/icons/arrow-grey.svg";
import ArrowActiveIcon from "../assets/icons/arrow-active.svg";
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
  MetaLink,
  MetaArrowWrapper,
  MetaArrow,
  MetaArrowHover,
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
              ASICS는 다양한 브랜드와 협업을 이어가고 있지만 사용자들은 현재
              웹사이트에서 이와 관련된 정보를 획득하지
              <br />
              못하고 있습니다. 본 프로젝트는 메인 페이지와 Launch Calendar를
              리디자인하여 고도화된 정보 접근성으로
              <br />
              사용자들에게 탐색 편의를 제공합니다.
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
            <MetaItem>
              <MetaTitle>Full Project</MetaTitle>
              <MetaLink
                href="https://www.behance.net/gallery/255787749/Asics-Web-UXUI-Redesign-"
                target="_blank"
                rel="noopener noreferrer"
              >
                View
                <MetaArrowWrapper>
                  <MetaArrow src={ArrowIcon} alt="" />
                  <MetaArrowHover src={ArrowActiveIcon} alt="" />
                </MetaArrowWrapper>
              </MetaLink>
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
