import styled from 'styled-components';
import { theme } from '@/styles/theme';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xl};
  max-width: 450px;
  padding: ${theme.spacing.xl};
  background-color: ${theme.colors.backgroundBeige};
  border: solid 2px ${theme.colors.green};
  border-radius: ${theme.borderRadius.medium};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  h1,
  p {
    text-align: center;
  }

  span {
    font-size: ${theme.typography.fontSizes.sm};
  }
`;

export const FormWrapper = styled.div`
  display: grid;
  gap: ${theme.spacing.md};

  a {
    text-decoration: underline;
    font-size: 0.9rem;
    color: ${theme.colors.darkBlue};
    font-weight: bold;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.sm};
`;

export const Label = styled.label`
  color: ${theme.colors.green};
  font-size: ${theme.typography.fontSizes.md};
  font-weight: 600;
`;

export const Input = styled.input`
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border: 1px solid ${theme.colors.darkBlue};
  border-radius: ${theme.borderRadius.small};
  font-size: ${theme.typography.fontSizes.md};
  transition: ${theme.transitions.default};

  &:focus {
    outline: none;
    border-color: ${theme.colors.backgroundGreen};
    box-shadow: 0 0 0 2px rgba(110, 231, 183, 0.2);
  }
`;
