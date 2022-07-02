import styled from 'styled-components';

export const Banner = styled.header`
  width: 100%;
  min-height: 70vh;
  display: flex;
  place-items: center;
  overflow: hidden;
`;

export const BannerContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  place-items: flex-start;
  justify-content: center;
  gap: 16px;
  height: 100%;
  margin-left: 5%;
  max-width: 650px;
`;
