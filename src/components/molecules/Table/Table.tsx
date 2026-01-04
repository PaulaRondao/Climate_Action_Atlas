'use client';

import { useInitiatives } from '@/hooks/useInitiatives';
import { InitiativeWithRelations } from '@/types/initiatives';
import { Notification } from '@/types/Notification';
import { useSession } from 'next-auth/react';
import { useCallback, useEffect, useState } from 'react';
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
  margin-bottom: 60px;

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
  $backgroundColor?: string;
  $fontColor?: string;
}

const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 113px;
  padding: 10px 15px;
  border: 2px solid ${({ $color }) => ($color ? $color : '#C4170D')};
  border-radius: 20px;
  color: ${({ $fontColor }) => ($fontColor ? $fontColor : '#C4170D')};

  &:hover {
    cursor: pointer;
    background-color: ${({ $backgroundColor }) =>
      $backgroundColor ? $backgroundColor : '#c4170d2e'};
    box-shadow: 0px rgba(196, 23, 13, 0.2);
  }

  &:focus {
    border: 1px dashed var(--color-light-grey);
  }

  &:focus-visible {
    outline: 3px solid #000;
    outline-offset: 3px;
  }

  &:active {
    transform: scale(0.97);
  }
`;

const Table = (): JSX.Element => {
  const { getInitiatives, deleteInitiative } = useInitiatives();
  const [initiatives, setInitiatives] = useState<InitiativeWithRelations[]>([]);

  const { data: session } = useSession();
  const userId = Number(session?.user?.id);

  const load = useCallback(async () => {
    if (!userId) return;

    const result = await getInitiatives(1, 5);
    if (!result) return;

    const initiativeByUser =
      result?.initiatives?.filter(
        (initiative) => initiative.contributorId === userId,
      ) || [];

    setInitiatives(initiativeByUser);
  }, [userId, getInitiatives]);

  const handleDelete = async (initiativeId: number) => {
    const deletedInitiative = await deleteInitiative(initiativeId);

    if (!deletedInitiative) {
      alert("Une erreur est survenue lors de la suppression de l'initiative");
      return;
    }

    const result = initiatives.filter(
      (initiative) => initiative.id !== initiativeId,
    );

    setInitiatives(result);
  };

  useEffect(() => {
    if (userId) {
      load();
    }
  }, [userId, load]);

  return (
    <>
      {initiatives.length > 0 ? (
        <TableContainer role="table" aria-label="mes initiatives">
          <Caption>
            <h2>Mes initiatives</h2>
          </Caption>

          <thead>
            <tr>
              <ColumnHeader>Nom d&apos;initiative</ColumnHeader>
              <ColumnHeader>Type d&apos;impact</ColumnHeader>
              <ColumnHeader>Actions</ColumnHeader>
            </tr>
          </thead>

          <tbody>
            {initiatives.map((initiative) => (
              <tr key={initiative.id}>
                <CellSpan>{initiative.name}</CellSpan>
                <CellSpan>{initiative.initiativeType}</CellSpan>
                <CellSpan>
                  <ButtonContainer>
                    <Button onClick={() => handleDelete(initiative.id)}>
                      Supprimer
                    </Button>
                    <Button
                      $color="#127A27"
                      $backgroundColor="#127A272e"
                      $fontColor="#127A27"
                    >
                      Mettre à jour
                    </Button>
                  </ButtonContainer>
                </CellSpan>
              </tr>
            ))}
          </tbody>
        </TableContainer>
      ) : (
        <p>Vous n&apos;avez pas encore enregistré d&apos;initiative.</p>
      )}
    </>
  );
};

export default Table;
