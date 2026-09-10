import { Link } from "react-router-dom";
import PdfViewer from "../components/PdfViewer";
import CapsiCover from "../assets/pdf/capsi/1-표지.pdf";
import Capsi1 from "../assets/pdf/capsi/1-1.pdf";
import Capsi2 from "../assets/pdf/capsi/1-2.pdf";
import Capsi3 from "../assets/pdf/capsi/1-3.pdf";
import Capsi4 from "../assets/pdf/capsi/1-4.pdf";
import Capsi5 from "../assets/pdf/capsi/1-5.pdf";
import Capsi6 from "../assets/pdf/capsi/1-6.pdf";
import Capsi7 from "../assets/pdf/capsi/1-7.pdf";
import Capsi8 from "../assets/pdf/capsi/1-8.pdf";
import Capsi9 from "../assets/pdf/capsi/1-9.pdf";
import Capsi10 from "../assets/pdf/capsi/1-10.pdf";
import Capsi11 from "../assets/pdf/capsi/1-11.pdf";
import Capsi12 from "../assets/pdf/capsi/1-12.pdf";
import Capsi13 from "../assets/pdf/capsi/1-13.pdf";
import Capsi14 from "../assets/pdf/capsi/1-14.pdf";
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
        <Link to="/#projects">
          <Icon src={BackIcon} alt="back" />
        </Link>
        <Title>CAPSI</Title>
        <SubTitle>CAPSY 앱 구축 프로젝트</SubTitle>
      </Container>
      <PdfViewer file={CapsiCover} />
      <PdfViewer file={Capsi1} />
      <PdfViewer file={Capsi2} />
      <PdfViewer file={Capsi3} />
      <PdfViewer file={Capsi4} />
      <PdfViewer file={Capsi5} />
      <PdfViewer file={Capsi6} />
      <PdfViewer file={Capsi7} />
      <PdfViewer file={Capsi8} />
      <PdfViewer file={Capsi9} />
      <PdfViewer file={Capsi10} />
      <PdfViewer file={Capsi11} />
      <PdfViewer file={Capsi12} />
      <PdfViewer file={Capsi13} />
      <PdfViewer file={Capsi14} />
    </>
  );
}
