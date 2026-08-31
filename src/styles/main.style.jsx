import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  max-width: 1850px; // 폭 제한 추가
  margin: 0 auto; // 중앙 정렬
  min-height: 100vh;

  display: flex;
  flex-direction: column;

  color: #fff;

  padding: 50px 64px 0;

  @media (max-width: 1024px) {
    padding: 40px 56px 0;
  }

  @media (max-width: 768px) {
    padding: 32px 40px 0;
    min-height: 87vh;
  }

  @media (max-width: 480px) {
    padding: 32px 24px 0;
  }
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

  font-size: 13px;
  font-weight: 500;

  background: transparent;

  @media (max-width: 1024px) {
    padding: 0 56px;
  }

  @media (max-width: 768px) {
    padding: 0 40px;
    font-size: 13px;
  }

  @media (max-width: 480px) {
    padding: 0 24px;
  }
`;

export const InfoItem = styled.span`
  background: #111;
`;
