import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  min-height: 100vh;

  background: #111;
  color: #fff;

  padding: 170px 64px 100px;

  @media (max-width: 1024px) {
    padding: 120px 56px 80px;
  }

  @media (max-width: 768px) {
    padding: 100px 32px 64px;
  }

  @media (max-width: 480px) {
    padding: 88px 20px 56px;
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

export const ProjectContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 38px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 28px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  @media (max-width: 480px) {
    gap: 32px;
  }
`;

export const ProjectCard = styled.div`
  min-width: 0;
`;

export const Thumbnail = styled.img`
  display: block;

  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;

  margin-bottom: 20px;

  background: #fff;

  &:hover {
    filter: brightness(0.5);
  }

  @media (max-width: 768px) {
    margin-bottom: 16px;
  }
`;

export const ProjectName = styled.h3`
  margin: 0 0 6px;

  font-size: 16px;
  font-weight: 500;
  line-height: 1.4;

  @media (max-width: 480px) {
    font-size: 15px;
  }
`;

export const Description = styled.p`
  margin: 0 0 20px;

  font-size: 14px;
  font-weight: 300;
  line-height: 1.5;
  color: #777;

  @media (max-width: 480px) {
    margin-bottom: 16px;
    font-size: 13px;
  }
`;

export const TagContainer = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    gap: 8px;
  }
`;

export const Tag = styled.span`
  padding: 8px 12px;

  background: #2a2a2a;
  color: #ddd;

  font-size: 12px;
  font-weight: 400;
  line-height: 1;

  @media (max-width: 480px) {
    padding: 7px 10px;
    font-size: 11px;
  }
`;
