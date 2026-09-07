import { Link } from "react-router-dom";
import BackIcon from "../assets/icons/back.svg";
import {
  Container,
  Icon,
  Title,
  SubTitle,
} from "../styles/projectDetail.style";

export default function HowkikiPage() {
  return (
    <>
      <Container>
        <Link to="/">
          <Icon src={BackIcon} alt="back" />
        </Link>
        <Title>HowKIKI</Title>
        <SubTitle>HOWKIKI 챗봇/웹 설계 및 개발</SubTitle>
      </Container>
    </>
  );
}
