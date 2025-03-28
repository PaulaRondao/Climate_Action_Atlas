import styled from 'styled-components';
import { theme } from '@/styles/theme';
import { fr } from '@codegouvfr/react-dsfr';

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
  gap: ${theme.spacing.xl};
  max-width: 500px;
  margin: 0 auto;
  padding: ${theme.spacing.xl};
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.medium};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xs};

  p {
    font-size: ${theme.typography.fontSizes.sm};
  }
`;

export const Label = styled.label`
  color: ${theme.colors.darkBlue};
  font-size: ${theme.typography.fontSizes.md};
  font-weight: 500;
`;

export const Input = styled.input`
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border: 1px solid ${theme.colors.greyBlack};
  border-radius: ${theme.borderRadius.small};
  font-size: ${theme.typography.fontSizes.md};
  transition: ${theme.transitions.default};

  &:hover {
    border-color: ${theme.colors.darkBlue};
  }
`;

export const TextareaRow = styled.textarea`
  display: flex;
  width: 100%;
  resize: none;
  padding: 7px 12px;

  border: 1px solid;
  border-radius: 5px;

  &:hover {
    border-color: ${theme.colors.darkBlue};
  }
`;

export const Legend = styled.legend`
  color: ${theme.colors.darkBlue};
  font-size: ${theme.typography.fontSizes.sm};
  padding: 0 ${theme.spacing.sm};
`;

export const Fieldset = styled.fieldset`
  line-height: 21px;
  margin: 4px 0;
  padding: 8px;
  border: 1px solid ${theme.colors.greyBlack};
  border-radius: 8px;

  &:focus-within {
    outline: dashed #6f7582 1px;
  }
`;

export const InputWrapper = styled.div`
  cursor: pointer;
`;

export const InputContainer = styled.div`
  margin: 8px 0px;
`;

export const TitleSection = styled.div`
  display: flex;
  flex-direction: column;

  & span {
    font-size: ${theme.typography.fontSizes.sm};
  }
`;
