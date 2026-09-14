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

export default function CapsiPage() {
  return (
    <>
      <Container>
        <BackWrapper>
          <Link to="/#projects">
            <ButtonBack src={BackIcon} alt="back" />
            <ButtonActiveBack src={BackActiveIcon} alt="back" />
          </Link>
        </BackWrapper>
        <Title>CAPSI</Title>
        <ProjectType>—</ProjectType>
        <SubTitle>Capsule Closet App UX/UI Project</SubTitle>
        <ProjectInfoContainer>
          <ProjectDescription>
            <InfoTitle>옷은 많지만, 입을 옷이 없다고 느껴질 때</InfoTitle>
            <Description>
              CAPSI는 반복되는 코디 고민과 비효율적인 옷장 관리로 인한
              사용자들의 불편을 해결하기 위해 만들어졌습니다.
              <br />
              보유한 옷을 체계적으로 관리하고 새로운 조합을 추천하여 매일의
              스타일링을 더욱 쉽고 즐겁게 만들어 줍니다.
            </Description>
          </ProjectDescription>
          <ProjectMeta>
            <MetaItem>
              <MetaTitle>Contribution</MetaTitle>
              <MetaText>기여도 100% 개인프로젝트</MetaText>
            </MetaItem>
            <MetaItem>
              <MetaTitle>Duration</MetaTitle>
              <MetaText>2026.01 - 2026.04</MetaText>
            </MetaItem>
          </ProjectMeta>
        </ProjectInfoContainer>
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
