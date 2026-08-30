import { Link } from "react-router-dom";
import BackIcon from "../assets/icons/back.svg";
import { Container, Icon, Title } from "../styles/howkiki.style";

export default function HowkikiPage() {
  return (
    <>
      <Container>
        <Link to="/">
          <Icon src={BackIcon} alt="back" />
        </Link>
        <Title>HowKIKI</Title>
      </Container>
    </>
  );
}
