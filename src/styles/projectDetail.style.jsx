import styled from "styled-components";

export const Container = styled.section`
  width: 100%;

  background: #0d0d0d;
  color: #fff;

  padding: 60px 64px 0px;

  @media (max-width: 1024px) {
    padding: 56px 56px 0;
  }

  @media (max-width: 768px) {
    padding: 48px 32px 0;
  }
`;

export const Icon = styled.img`
  width: 28px;
  height: 28px;

  margin-bottom: 48px;
`;

export const Title = styled.h2`
  margin: 0 0 24px;

  font-size: 52px;
  font-weight: 600;
  line-height: 1;
`;

export const SubTitleContainer = styled.h2`
  margin-bottom: 48px;
`;

export const SubTitle = styled.h2`
  margin: ${({ $contribution }) => ($contribution ? "0 0 24px" : "0 0 8px")};

  font-size: ${({ $contribution }) => ($contribution ? "15px" : "17px")};
  font-weight: ${({ $contribution }) => ($contribution ? "400" : "300")};
  line-height: 1.6;
`;

export const Description = styled.div`
  font-size: 15px;
  font-weight: 300;
  line-height: 1.6;

  color: #777;
`;

export const ButtonContainer = styled.a`
  width: 150px;
  height: 55px;
  padding: 0 26px;

  margin-top: 64px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border: 1px solid #fff;
  color: #fff;

  cursor: pointer;

  &:hover {
    color: #4cff9a;
  }

  &:hover img:first-child {
    opacity: 0;
  }

  &:hover img:last-child {
    opacity: 1;
  }
`;

export const ButtonText = styled.span`
  font-size: 18px;
  font-weight: 400;
`;

export const ArrowWrapper = styled.div`
  position: relative;

  width: 20px;
  height: 20px;
`;

export const ButtonArrow = styled.img`
  position: absolute;
  inset: 0;

  width: 20px;
  height: 20px;

  opacity: 1;
`;

export const ButtonArrowHover = styled.img`
  position: absolute;
  inset: 0;

  width: 20px;
  height: 20px;

  opacity: 0;
`;
