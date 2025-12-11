'use client';

import styled from 'styled-components';

const TableContainer = styled.table`
  border-collapse: collapse;
  background-color: #ffffff;
  font-family: sans-serif;
  font-size: 0.8rem;
  letter-spacing: 1px;
  padding: 25px;
  border-radius: 15px;
  width: 40vw;
  margin-bottom: 30px;

  p {
    font-size: 20px;
    font-weight: bold;
  }
`;

const Caption = styled.caption`
  caption-side: top;
  text-align: left;
  padding-bottom: 10px;
  font-weight: bold;
`;
const ColumnHeader = styled.th`
  font-weight: bold;
  border-bottom: thin bold #888;
  border: 1px solid #dddbdb;
  padding: 8px 10px;
`;

const CellSpan = styled.td`
  display: table-cell;
  width: 14em;
  border: 1px solid #dddbdb;
  padding: 8px 10px;
  text-align: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-weight: bold;
  gap: 15px;
`;

interface ButtonProps {
  $color?: string;
}

const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 113px;
  padding: 10px 15px;
  border: 2px solid ${({ $color }) => ($color ? $color : '#C4170D')};
  border-radius: 20px;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    border: 1px dashed var(--color-light-grey);
  }
`;

const Table = (): JSX.Element => {
  return (
    <TableContainer
      role="table"
      aria-label="mes_initiatives"
      aria-describedby="ma_table_des_initiatives"
    >
      <Caption id="ma_table_des_initiatives">
        <p>Mes initiatives</p>
      </Caption>
      <thead role="rowgroup">
        <tr role="row">
          <ColumnHeader role="columnheader">Nom d&apos;initiative</ColumnHeader>
          <ColumnHeader role="columnheader">Type d&apos;impact</ColumnHeader>
          <ColumnHeader role="columnheader">Actions</ColumnHeader>
        </tr>
      </thead>
      <tbody role="rowgroup">
        <tr role="row">
          <CellSpan role="cell">Protection des espèces</CellSpan>
          <CellSpan role="cell">Environnement</CellSpan>
          <CellSpan role="cell">
            <ButtonContainer>
              <Button>Supprimer</Button>
              <Button $color="#127A27">Mettre à jour</Button>
            </ButtonContainer>
          </CellSpan>
        </tr>
      </tbody>
    </TableContainer>
  );
};

export default Table;
