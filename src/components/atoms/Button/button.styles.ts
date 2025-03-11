import styled from 'styled-components';

export const ButtonContainer = styled.button`
  position: relative;
  margin-top: 20px;
  text-align: center;
  color: var(--foreground-dark-blue);
  background-color: transparent;
  border: 2px solid var(--foreground-dark-blue);
  border-radius: 25px;
  padding: 10px 40px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    border-color: var(--color-background-green);
    color: var(--color-background-green);
    -webkit-text-stroke: 0.5px var(--color-background-green);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const SpanContainer = styled.span`
  text-transform: uppercase;
  font-size: 1rem;
  display: inline-block;
`;
