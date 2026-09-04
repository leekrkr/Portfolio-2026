import { useState } from "react";

import mainImg from "../assets/images/main.png";
import mainHoverImg1 from "../assets/images/mainhover1.png";
import mainHoverImg2 from "../assets/images/mainhover2.png";
import mainHoverImg3 from "../assets/images/mainhover3.png";

import {
  Container,
  Background,
  HoverBackground,
  HoverArea1,
  HoverArea2,
  HoverArea3,
  TopInfo,
  LeftInfo,
  InfoItem,
  Dot,
} from "../styles/main.style";

export default function MainPage() {
  const [hoverImage, setHoverImage] = useState(null);

  return (
    <Container>
      <Background src={mainImg} alt="" />

      <HoverBackground src={mainHoverImg1} alt="" $show={hoverImage === 1} />

      <HoverBackground src={mainHoverImg2} alt="" $show={hoverImage === 2} />

      <HoverBackground src={mainHoverImg3} alt="" $show={hoverImage === 3} />

      <HoverArea1
        onMouseEnter={() => setHoverImage(1)}
        onMouseLeave={() => setHoverImage(null)}
      />

      <HoverArea2
        onMouseEnter={() => setHoverImage(2)}
        onMouseLeave={() => setHoverImage(null)}
      />

      <HoverArea3
        onMouseEnter={() => setHoverImage(3)}
        onMouseLeave={() => setHoverImage(null)}
      />

      <TopInfo>
        <LeftInfo>
          <InfoItem>2026 PORTFOLIO</InfoItem>
          <Dot />
          <InfoItem>UXUI DESIGN / PUBLISHING</InfoItem>
        </LeftInfo>

        <InfoItem>BETTER BY DESIGN</InfoItem>
      </TopInfo>
    </Container>
  );
}
