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
  SubTitleContainer,
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
        <SubTitleContainer>
          <SubTitle>
            신제품 및 콜라보 발매 정보 탐색 경험을 개선한 ASICS 웹사이트 리뉴얼
            프로젝트
          </SubTitle>
        </SubTitleContainer>
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
