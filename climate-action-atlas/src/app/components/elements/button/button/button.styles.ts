import styled from 'styled-components';

export const ButtonContainer = styled.button`
  position: relative;
  margin-top: 20px;
  text-align: center
  color: var(--foreground-dark-blue);
  backgroundColor: transparent;
  border: 2px solid var(--foreground-dark-blue);
  border-radius: 25px;
  padding: 10px 40px;
    '&:hover': {
    borderColor: #6ee7b7;
    color: #6ee7b7';
    'WebkitTextStroke': 0.5px #6ee7b7;
    },
  transition: color 0.3s ease;
}}
`

export const SpanContainer = styled.span`
  > {
    text-transform: uppercase;
    font-size: 1rem;
  }
`