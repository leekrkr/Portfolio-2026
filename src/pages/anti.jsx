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
import {
  Container,
  Icon,
  Title,
  SubTitle,
  SubTitleContainer,
} from "../styles/projectDetail.style";

export default function AntiPage() {
  return (
    <>
      <Container>
        <Link to="/#projects">
          <Icon src={BackIcon} alt="back" />
        </Link>
        <Title>ANTI</Title>
        <SubTitleContainer>
          <SubTitle>ANTI 뮤지엄 브랜딩 및 웹사이트 구축 프로젝트</SubTitle>
        </SubTitleContainer>
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
