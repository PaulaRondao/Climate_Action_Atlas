import styled from 'styled-components';
import { BREAK_POINT, DEVICE_QUERY } from '../../../../../../types/enums/viewports';

export const MainFooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0 30px;
  gap: 16px;

  @media ${DEVICE_QUERY(BREAK_POINT.DESKTOP)} {
    align-items: center;
  }
`;

export const MainInfoContainer = styled.div`
  display: flex;
`;