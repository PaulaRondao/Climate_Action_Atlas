import styled from 'styled-components';
import { theme } from '@/styles/theme';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xl};
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
  width: auto;

  &:focus {
    outline: none;
    border-color: ${theme.colors.backgroundGreen};
    box-shadow: 0 0 0 2px rgba(110, 231, 183, 0.2);
  }
`;

export const PasswordWrapper = styled.div`
  display: inline-flex;
  position: relative;
  justify-content: space-between;
  flex-wrap: wrap;

  input {
    width: 55vw;

    @media (min-width: 718px) {
      width: 45vw;
    }
  }

  @media (min-width: 718px) {
      flex-wrap: nowrap;
      gap: 8px;
    }

  button {
    padding: ${theme.spacing.sm} ${theme.spacing.md};
    border: 1px solid ${theme.colors.darkBlue};
    border-radius: ${theme.borderRadius.small};
    
    &:hover {
      cursor: pointer;
    }
    &:focus {
      border: 1px dashed ${theme.colors.backgroundGreen};
    }
  }
  }
`;
