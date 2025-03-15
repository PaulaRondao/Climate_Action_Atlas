import styled from 'styled-components';
import { theme } from '@/styles/theme';

export const ErrorMessage = styled.span`
  color: #ef4444;
  font-size: ${theme.typography.fontSizes.sm};
`;

export const GlobalError = styled(ErrorMessage)`
  text-align: center;
  margin-bottom: ${theme.spacing.md};
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.lg};
  max-width: 500px;
  margin: 0 auto;
  padding: ${theme.spacing.xl};
  background-color: ${theme.colors.backgroundBeige};
  border-radius: ${theme.borderRadius.medium};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.sm};
`;

export const Label = styled.label`
  color: ${theme.colors.darkBlue};
  font-size: ${theme.typography.fontSizes.md};
  font-weight: 500;
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

export const TextareaRow = styled.textarea`
  display: flex;
  width: 100%;
  resize: none;
  background-color: white;

  border: 1px solid;
  border-radius: 5px;

  &:hover {
    border-color: var(--color-black);
  }
  &:focus {
    border-color: var(--color-primary);
  }
  &::placeholder {
    color: var(--color-medium-grey);
  }

  padding: 7px 12px;
`;

export const FieldLabel = styled.label`
  color: ${theme.colors.darkBlue};
`;
