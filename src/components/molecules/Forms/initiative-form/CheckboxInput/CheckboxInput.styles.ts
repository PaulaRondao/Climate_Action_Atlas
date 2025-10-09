import styled from 'styled-components';

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  width: 14px;
  height: 14px;

  &::before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    display: block;
    content: '';
    border: 2px solid var(--color-primary);
    border-radius: 3px;

    background: transparent;
    transition: background-color 0.2s ease;
  }

  &:checked::before {
    background: var(--color-primary);
  }
`;
