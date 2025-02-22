import styled, { css } from 'styled-components';
import {
  BREAK_POINT,
  DEVICE_QUERY,
} from '../../../../../types/enums/viewports';

export const WelcomeSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 32px 0px;
  gap: 32px;
  transform: translateY(50%);
`;
interface TitleSectionProps {
  marginbottom?: string;
  padding?: string;
}

export const TitleSection = styled.div<TitleSectionProps>`
  position: relative;
  width: 100%;
  min-height: 1px;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.15);
  text-transform: uppercase;
  text-align: center;
  padding: 32px 0px 0px;
  ${({ padding }) =>
    padding &&
    css`
      padding: ${padding};
    `}
  ${({ marginbottom }) =>
    marginbottom &&
    css`
      margin-bottom: ${marginbottom};
    `}
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

  @media ${DEVICE_QUERY(BREAK_POINT.DESKTOP)} {
    p {
      padding-right: 150px;
      padding-left: 150px;
    }
  }
`;
