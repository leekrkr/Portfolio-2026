import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  max-width: 1850px; // 폭 제한
  margin: 0 auto; // 화면 중앙 정렬
  min-height: 100vh;

  padding: 170px 64px 100px;

  color: #fff;

  @media (max-width: 1024px) {
    padding: 120px 56px 80px;
  }

  @media (max-width: 768px) {
    padding: 100px 48px 64px;
  }

  @media (max-width: 480px) {
    padding: 88px 36px 56px;
  }
`;

export const Title = styled.h2`
  margin: 0 0 40px;

  font-size: 52px;
  font-weight: 500;
  line-height: 1;

  @media (max-width: 768px) {
    margin-bottom: 32px;
    font-size: 40px;
  }

  @media (max-width: 480px) {
    margin-bottom: 28px;
    font-size: 34px;
  }
`;
