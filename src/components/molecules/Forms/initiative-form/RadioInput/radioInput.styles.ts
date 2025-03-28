import styled from 'styled-components';
import { theme } from '@/styles/theme';

export const Label = styled.label`
  margin-left: 9px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0px;
  text-align: left;
  color: ${theme.colors.darkBlue};
`;

export const StyledRadio = styled.input`
  cursor: pointer;
`;
