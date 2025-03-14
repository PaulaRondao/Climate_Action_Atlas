import styled, { css } from 'styled-components';
import { DEVICE_QUERY } from '@/constants/enums';

export const WelcomeSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2rem 2rem;
  padding: 2rem 2rem;
  gap: 32px;
  transform: translateY(50%);
  color: var(--color-background-beige);


  p {
    font-weight: bold;
    font-size: 1rem;
  }
  h1 {
    text-align: center;
  }

  ${DEVICE_QUERY.DESKTOP} {
    max-width: 77%;
    margin-right: auto;
    margin-left: auto;
  }
`;

export const TitleSection = styled.div`
  position: relative;
  width: 100%;
  min-height: 1px;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.15);
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 40px;
`;

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 0 0 auto;
  width: 100%;
  margin-left: 0;
  text-align: center;

  ${DEVICE_QUERY.DESKTOP} {
    p {
      padding-right: 150px;
      padding-left: 150px;
    }
  }
`;
