import { Link } from "react-router-dom";
import BackIcon from "../assets/icons/back.svg";
import { Container, Icon, Title } from "../styles/capsi.style";

export default function CapsiPage() {
  return (
    <>
      <Container>
        <Link to="/">
          <Icon src={BackIcon} alt="back" />
        </Link>
        <Title>CAPSI</Title>
      </Container>
    </>
  );
}
