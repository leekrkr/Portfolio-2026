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
  SubTitleContainer,
  SubTitle,
  Description,
  ButtonContainer,
  ButtonText,
  ArrowWrapper,
  ButtonArrow,
  ButtonArrowHover,
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
        <SubTitleContainer>
          <SubTitle>HOWKIKI 챗봇/웹 설계 및 개발</SubTitle>
          <SubTitle $contribution>
            기여도 : Design 100% / FrontEnd 100%
          </SubTitle>
          <Description>
            기존에 직접 디자인 및 프론트엔드 개발을 진행했던 프로젝트를
            바탕으로, UI/UX를 새롭게 개선하고 퍼블리싱했습니다.
            <br />
            현재 API 만료로 인해 실시간 채팅 및 알림 기능은 제한되어 있습니다.
          </Description>
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
        </SubTitleContainer>
      </Container>
    </>
  );
}
