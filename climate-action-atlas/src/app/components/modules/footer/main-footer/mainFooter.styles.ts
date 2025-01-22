import styled from 'styled-components';
import { BREAK_POINT, DEVICE_QUERY } from '../../../../../../types/enums/viewports';

export const MainFooterContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding: 20px 0 30px;
  gap: 16px;

  @media ${DEVICE_QUERY(BREAK_POINT.DESKTOP)} {
    flex-flow: row nowrap;
    justify-content: space-between;
    height: 72px;
  }
`;

export const MainInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled.div`

  @media ${DEVICE_QUERY(BREAK_POINT.DESKTOP)} {
    padding-left: 0;
  }
`;