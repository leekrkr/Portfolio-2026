import { Link } from "react-router-dom";
import PdfViewer from "../components/PdfViewer";
import AntiPdf from "../assets/pdf/anti.pdf";
import BackIcon from "../assets/icons/back.svg";
import {
  Container,
  Icon,
  Title,
  SubTitle,
} from "../styles/projectDetail.style";

export default function AntiPage() {
  return (
    <>
      <Container>
        <Link to="/">
          <Icon src={BackIcon} alt="back" />
        </Link>
        <Title>ANTI</Title>
        <SubTitle>ANTI 뮤지엄 브랜딩 및 웹사이트 구축 프로젝트</SubTitle>
        <PdfViewer file={AntiPdf} />
      </Container>
    </>
  );
}
