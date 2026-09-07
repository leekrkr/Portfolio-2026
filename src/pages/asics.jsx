import { Link } from "react-router-dom";
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
        <SubTitle>ASICS 웹사이트 리뉴얼 프로젝트</SubTitle>
      </Container>
    </>
  );
}
