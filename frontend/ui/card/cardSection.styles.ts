import styled from 'styled-components';

export const CardContainer = styled.div`
  padding: 10px;
  background-color: var(--color-background-beige);
  max-width: 800px;
  margin: 1em auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, auto);
  gap: 40px;
`;

export const CardTitle = styled.div`
  width: 100%;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.15);
  text-transform: uppercase;
  padding-bottom: 40px;
  text-align: center;
  padding: 32px 0px;
`;

export const Card = styled.div`
  grid-row: auto / span 2;
  display: grid;
  grid-template-rows: subgrid;
  gap: 16px;
  border: 1px solid var(--foreground-grey-black);
  padding: 8px;
  border-radius: 8px;

  h3 {
    font-weight: bold;
  }
`;