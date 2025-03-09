import styled from 'styled-components';
import {
  BREAK_POINT,
  DEVICE_QUERY,
} from '../../../../../types/enums/viewports';

export const MainFooterContainer = styled.div`
  display: flex;
  flex-flow: wrap;
  margin: 20px 0;
  justify-content: space-between;
  gap: 16px;

  p {
    font-size: 13px;
  }

  @media ${DEVICE_QUERY(BREAK_POINT.DESKTOP)} {
    flex-flow: row nowrap;
    justify-content: space-between;
  }
`;

export const MainInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled.div`
  padding-left: 10px;

  @media ${DEVICE_QUERY(BREAK_POINT.DESKTOP)} {
    padding-left: 0;
  }
`;