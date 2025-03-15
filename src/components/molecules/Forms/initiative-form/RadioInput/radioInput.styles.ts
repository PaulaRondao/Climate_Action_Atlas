import styled from 'styled-components';
import { theme } from '@/styles/theme';


export const Fieldset = styled.fieldset``;

export const Label = styled.label`
 margin-left: 9px;
    font-style: normal;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0px;
    text-align: left;
    color: var(--color-black) !important;
`;

export const RadioContainer = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  line-height: 21px;
  margin: 4px 0;
  cursor: pointer; /* Ajouter un curseur pour indiquer que c'est cliquable */

  &:before {
    content: "";
    border-radius: 50%;
    width: 16px;
    min-width: 16px;
    height: 16px;
    background: var(--color-white);
    border: 2px solid var(--color-primary);
    transition: background 0.2s ease, border-color 0.2s ease;
  }

  &:focus-within {
    outline: dashed #6f7582 1px;
  }
`;

export const StyledRadio = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
  &:checked {
    opacity: 1;
    content: "";
    border-radius: 50%;
    width: 20px;
    height: 20px;
    background: var(--color-primary);
    border: 2px solid var(--color-primary);
  }
`;

