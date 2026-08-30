import { Link } from "react-router-dom";
import BackIcon from "../assets/icons/back.svg";
import { Container, Icon, Title } from "../styles/anti.style";

export default function AntiPage() {
  return (
    <>
      <Container>
        <Link to="/">
          <Icon src={BackIcon} alt="back" />
        </Link>
        <Title>ANTI</Title>
      </Container>
    </>
  );
}
