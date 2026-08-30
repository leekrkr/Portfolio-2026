import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  min-height: 100vh;

  background: #111;
  color: #fff;

  display: flex;
  flex-direction: column;

  padding: 40px 64px 0;

  @media (max-width: 1024px) {
    padding: 40px 56px 0;
  }

  @media (max-width: 768px) {
    padding: 32px 32px 0;
    min-height: 70vh;
  }

  @media (max-width: 600px) {
    padding: 32px 32px 0;
    min-height: 60vh;
  }

  @media (max-width: 480px) {
    padding: 24px 20px 0;
    min-height: 50vh;
  }
`;

export const TopInfo = styled.div`
  position: fixed;
  top: 40px;
  left: 0;
  width: 100%;
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
    padding: 0 32px;
    font-size: 11px;
  }

  @media (max-width: 480px) {
    padding: 0 20px;
  }
`;

export const InfoItem = styled.span`
  background: #111;
`;

export const Title = styled.h1`
  container-type: inline-size;
  width: 100%;
  margin-top: auto;
  margin-bottom: 8px;

  font-size: clamp(80px, 22cqw, 360px);
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: 0.01em;

  white-space: nowrap;
  text-align: center;

  background: #111;
`;
