import styled from 'styled-components';
import { BREAK_POINT, DEVICE_QUERY } from '../../../../types/enums/viewports';


interface ContainerProps {
  background?: string,
}
export const Container = styled.div<ContainerProps>`
  background: ${({ background }: ContainerProps) => background || ''};
`;

export const Content = styled.div`
  width: 100%;
  @media ${DEVICE_QUERY(BREAK_POINT.DESKTOP)} {
    margin: auto;
    padding: 0;
  }
`;