import styled from "styled-components";

export const Container = styled.section`
  width: 100%;

  background: #0d0d0d;
  color: #fff;

  padding: 60px 64px 140px;

  @media (max-width: 1024px) {
    padding: 56px;
  }

  @media (max-width: 768px) {
    padding: 48px 32px;
  }
`;

export const Title = styled.h2`
  margin: 0 0 20px;

  font-size: 42px;
  font-weight: 600;
  line-height: 1;
`;

export const ProjectType = styled.div`
  margin-bottom: 12px;

  font-size: 28px;
  font-weight: 800;
`;

export const SubTitle = styled.h2`
  margin: 0;

  font-size: 30px;
  font-weight: 600;
  line-height: 1.4;
`;

export const ProjectInfoContainer = styled.div`
  margin-top: 80px;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 80px;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 48px;
  }
`;

export const ProjectDescription = styled.div`
  width: 100%;
  max-width: 640px;
`;

export const InfoTitle = styled.h3`
  margin: 0 0 12px;

  font-size: 20px;
  font-weight: 600;
  line-height: 1.5;
`;

export const Description = styled.p`
  margin: 0;

  font-size: 14px;
  font-weight: 300;
  line-height: 1.7;

  color: #999;
`;

export const ProjectMeta = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 80px;

  flex-shrink: 0;
`;

export const MetaItem = styled.div`
  min-width: 130px;
`;

export const MetaTitle = styled.h3`
  margin: 0 0 12px;

  font-size: 16px;
  font-weight: 600;
`;

export const MetaText = styled.p`
  margin: 0 0 12px;

  font-size: 13px;
  font-weight: 300;
  line-height: 1.7;

  color: #aaa;
`;

export const BackWrapper = styled.div`
  position: relative;

  width: 28px;
  height: 28px;

  margin-bottom: 48px;

  &:hover img:first-child {
    opacity: 0;
  }

  &:hover img:last-child {
    opacity: 1;
  }
`;

export const ButtonBack = styled.img`
  position: absolute;
  inset: 0;

  width: 28px;
  height: 28px;

  object-fit: contain;

  opacity: 1;
`;

export const ButtonActiveBack = styled.img`
  position: absolute;
  inset: 0;

  width: 28px;
  height: 28px;

  object-fit: contain;

  opacity: 0;
`;

export const SubTitleContainer = styled.h2`
  margin-bottom: 48px;
`;

export const ButtonContainer = styled.a`
  width: 150px;
  height: 55px;
  padding: 0 26px;

  margin-top: 80px;

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
