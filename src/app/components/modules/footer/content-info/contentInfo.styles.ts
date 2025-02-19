import styled from 'styled-components';
import {
  BREAK_POINT,
  DEVICE_QUERY,
} from '../../../../../../types/enums/viewports';

export const ContentInfoContainer = styled.ul`
  display: flex;
  // flex-wrap: wrap;
  flex-direction: column;
  gap: 20px;

  @media ${DEVICE_QUERY(BREAK_POINT.DESKTOP)} {
    flex-direction: row;
  }
`;

export const ContentInfoLink = styled.a`
  font-size: 14px;
  color: var(--color-background-beige);
  text-decoration: none;

  &:hover {
    color: var(--color-background-green);
    cursor: pointer;
  }
`;
