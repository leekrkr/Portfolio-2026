import styled from "styled-components";

export const AboutSection = styled.section`
  width: 100%;

  color: #fff;

  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 0 0 160px;
`;

export const FrameBox = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  width: 100%;
  max-width: 1850px;
  margin: 160px auto 0;

  display: grid;
  grid-template-columns: 41% 59%;

  min-height: 740px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

export const LeftPane = styled.div`
  padding: 280px 64px 64px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 36px;

  @media (max-width: 1024px) {
    padding: 80px 56px 64px; /* 0 → 64px */
  }

  @media (max-width: 768px) {
    padding: 64px 40px 56px; /* 0 → 56px */
  }

  @media (max-width: 480px) {
    padding: 56px 24px 48px; /* 0 → 48px */
  }
`;

export const Headline = styled.h2`
  font-size: 36px;
  font-weight: 600;
  line-height: 1.3;
  margin: 0;
`;

export const Highlight = styled.span`
  color: #4cff9a;
`;

export const BodyText = styled.p`
  font-size: 15px;
  line-height: 1.7;
  color: #999;
  margin: 0;
`;

export const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 16px;
`;

export const Tag = styled.span`
  padding: 8px 12px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 999px;

  font-size: 14px;
  font-weight: 500;
  color: #fff;
`;

export const RightPane = styled.div`
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  padding: 280px 64px 64px;

  display: flex;
  align-items: flex-start; /* center → flex-start */

  @media (max-width: 1024px) {
    border-left: none;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding: 80px 56px;
  }

  @media (max-width: 768px) {
    padding: 64px 40px;
  }

  @media (max-width: 480px) {
    padding: 56px 24px;
  }
`;

export const InfoGrid = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    row-gap: 56px;
  }
`;

export const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;
`;

export const InfoBlock = styled.div`
  display: flex;
  gap: 50px;

  @media (max-width: 480px) {
    gap: 24px;
  }
`;

export const InfoLabel = styled.div`
  flex-shrink: 0;
  width: 100px;

  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.02em;
  color: #fff;
`;

export const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const InfoEntry = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const InfoTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #fff;
`;

export const InfoSub = styled.div`
  font-size: 13px;
  color: #777;
`;

export const InfoText = styled.div`
  font-size: 15px;
  color: #ccc;
  line-height: 1.6;
`;
