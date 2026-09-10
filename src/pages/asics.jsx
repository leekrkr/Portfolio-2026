import { Link } from "react-router-dom";
import PdfViewer from "../components/PdfViewer";
import AsicsPdf from "../assets/pdf/asics.pdf";
import BackIcon from "../assets/icons/back.svg";
import {
  Container,
  Icon,
  Title,
  SubTitle,
} from "../styles/projectDetail.style";

export default function AsicsPage() {
  return (
    <>
      <Container>
        <Link to="/">
          <Icon src={BackIcon} alt="back" />
        </Link>
        <Title>ASICS</Title>
        <SubTitle>
          신제품 및 콜라보 발매 정보 탐색 경험을 개선한 ASICS 웹사이트 리뉴얼
          프로젝트
        </SubTitle>
        <PdfViewer file={AsicsPdf} />
      </Container>
    </>
  );
}
