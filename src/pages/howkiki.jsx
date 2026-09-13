import { Link } from "react-router-dom";
import BackIcon from "../assets/icons/back.svg";
import BackActiveIcon from "../assets/icons/back-active.svg";
import ArrowIcon from "../assets/icons/arrow.svg";
import ArrowActiveIcon from "../assets/icons/arrow-active.svg";
import {
  Container,
  BackWrapper,
  ButtonBack,
  ButtonActiveBack,
  Title,
  SubTitle,
  Description,
  ButtonContainer,
  ButtonText,
  ArrowWrapper,
  ButtonArrow,
  ButtonArrowHover,
  ProjectType,
  ProjectInfoContainer,
  ProjectDescription,
  ProjectMeta,
  MetaItem,
  MetaTitle,
  MetaText,
} from "../styles/projectDetail.style";

export default function HowkikiPage() {
  return (
    <>
      <Container>
        <BackWrapper>
          <Link to="/#projects">
            <ButtonBack src={BackIcon} alt="back" />
            <ButtonActiveBack src={BackActiveIcon} alt="back" />
          </Link>
        </BackWrapper>
        <Title>HowKIKI</Title>
        <ProjectType>—</ProjectType>
        <SubTitle>
          HowKIKI Chatbot / Web
          <br />
          Design & Frontend Development
        </SubTitle>
        <ProjectInfoContainer>
          <ProjectDescription>
            <Description>
              기존에 직접 디자인 및 프론트엔드 개발을 진행했던 프로젝트를
              바탕으로,
              <br />
              UI/UX를 새롭게 개선하고 퍼블리싱했습니다. 현재 API 만료로 인해
              실시간 채팅 및 알림 기능은 제한되어 있습니다.
            </Description>
          </ProjectDescription>
          <ProjectMeta>
            <MetaItem>
              <MetaTitle>Contribution</MetaTitle>
              <MetaText>
                Design
                <br />
                기여도 100% 팀프로젝트
              </MetaText>
              <MetaText>
                Frontend
                <br />
                기여도 100% 팀프로젝트
              </MetaText>
            </MetaItem>
            <MetaItem>
              <MetaTitle>Duration</MetaTitle>
              <MetaText>2026.08 - 2026.09</MetaText>
            </MetaItem>
          </ProjectMeta>
        </ProjectInfoContainer>
        <ButtonContainer
          href="https://howkiki2026.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ButtonText>HowKIKI</ButtonText>
          <ArrowWrapper>
            <ButtonArrow src={ArrowIcon} alt="" />
            <ButtonArrowHover src={ArrowActiveIcon} alt="" />
          </ArrowWrapper>
        </ButtonContainer>
      </Container>
    </>
  );
}
