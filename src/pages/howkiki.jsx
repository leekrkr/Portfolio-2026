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
  InfoTitle,
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
            <InfoTitle>주문부터 문의까지, 하나로</InfoTitle>
            <Description>
              HowKIKI는 1인 음식점에서 발생하는 주문·결제·문의 과정을 하나의
              시스템으로 연결한 매장 운영 서비스입니다.
              <br />
              고객의 반복적인 요청은 스스로 해결할 수 있도록 하고, 사장님은
              주문과 요청을 실시간으로 확인하여 고객 응대에 대한 부담을 줄이고
              매장 운영에 더욱 집중할 수 있도록 돕습니다.
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
