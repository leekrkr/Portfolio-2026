import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  min-height: 100vh;

  background: #111;
  color: #fff;

  padding: 60px 64px 100px;

  @media (max-width: 1024px) {
    padding: 40px 56px 0;
  }

  @media (max-width: 768px) {
    padding: 32px 32px 0;
  }

  @media (max-width: 480px) {
    padding: 24px 20px 0;
  }
`;

export const Icon = styled.img`
  width: 28px;
  height: 28px;

  margin-bottom: 48px;
`;

export const Title = styled.h2`
  margin: 0 0 44px;

  font-size: 52px;
  font-weight: 600;
  line-height: 1;
`;
