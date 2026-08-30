import { Link } from "react-router-dom";
import BackIcon from "../assets/icons/back.svg";
import { Container, Icon, Title } from "../styles/asics.style";

export default function AsicsPage() {
  return (
    <>
      <Container>
        <Link to="/">
          <Icon src={BackIcon} alt="back" />
        </Link>
        <Title>ASICS</Title>
      </Container>
    </>
  );
}
