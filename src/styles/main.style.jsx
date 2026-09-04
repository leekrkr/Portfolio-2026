import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  overflow: hidden;

  width: 100%;
  max-width: 1850px;
  margin: 0 auto;
  min-height: 100vh;

  color: #fff;

  @media (max-width: 768px) {
    min-height: 87vh;
  }
`;

export const Background = styled.img`
  position: absolute;
  inset: 0;

  width: 100%;
  height: 100%;

  object-fit: cover;

  z-index: 0;
  pointer-events: none;
`;

export const HoverBackground = styled.img`
  position: absolute;
  inset: 0;

  width: 100%;
  height: 100%;

  object-fit: cover;

  z-index: 1;
  pointer-events: none;

  opacity: ${({ $show }) => ($show ? 1 : 0)};
  transition: opacity 0.3s ease;
`;

export const HoverArea1 = styled.div`
  position: absolute;

  top: 28%;
  left: 54%;
  transform: translateX(-50%);

  width: 18%;
  aspect-ratio: 1;

  border-radius: 50%;

  z-index: 20;
  cursor: pointer;

  /* 위치 확인용 */
  /* background: rgba(255, 0, 0, 0.3); */
`;

export const HoverArea2 = styled.div`
  position: absolute;

  top: 57%;
  left: 4.5%;

  width: 19%;
  aspect-ratio: 1;

  border-radius: 50%;

  z-index: 20;
  cursor: pointer;

  /* 위치 확인용 */
  /* background: rgba(255, 0, 0, 0.3); */
`;

export const HoverArea3 = styled.div`
  position: absolute;

  top: 74%;
  right: 10%;

  width: 19%;
  aspect-ratio: 1;

  border-radius: 50%;

  z-index: 20;
  cursor: pointer;

  /* 위치 확인용 */
  /* background: rgba(255, 0, 0, 0.3); */
`;

export const TopInfo = styled.div`
  position: fixed;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);

  width: 100%;
  max-width: 1850px;
  z-index: 100;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 64px;

  font-size: 16px;
  font-weight: 500;
  color: #777;

  @media (max-width: 1024px) {
    padding: 0 56px;
  }

  @media (max-width: 768px) {
    top: 32px;
    padding: 0 40px;
    font-size: 11px;
  }

  @media (max-width: 480px) {
    padding: 0 24px;
  }
`;

export const LeftInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;

  @media (max-width: 768px) {
    gap: 20px;
  }

  @media (max-width: 480px) {
    gap: 12px;
  }
`;

export const InfoItem = styled.span`
  white-space: nowrap;
  background: #111;
`;

export const Dot = styled.span`
  width: 8px;
  height: 8px;

  flex-shrink: 0;
  border-radius: 50%;

  background: #4cff9a;

  @media (max-width: 768px) {
    width: 6px;
    height: 6px;
  }
`;
