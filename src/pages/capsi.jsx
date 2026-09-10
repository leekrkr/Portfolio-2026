import { Link } from "react-router-dom";
import PdfViewer from "../components/PdfViewer";
import CapsiPdf from "../assets/pdf/capsi.pdf";
import BackIcon from "../assets/icons/back.svg";
import {
  Container,
  Icon,
  Title,
  SubTitle,
} from "../styles/projectDetail.style";

export default function CapsiPage() {
  return (
    <>
      <Container>
        <Link to="/">
          <Icon src={BackIcon} alt="back" />
        </Link>
        <Title>CAPSI</Title>
        <SubTitle>CAPSY 앱 구축 프로젝트</SubTitle>
        <PdfViewer file={CapsiPdf} />
      </Container>
    </>
  );
}
