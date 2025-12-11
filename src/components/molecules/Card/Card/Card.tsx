import { SuccessNotification } from '@/components/atoms';
import { Container } from '@/styles/components';
import { Notification } from '@/types/Notification';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React, { useState } from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 15px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 280px;
  gap: 10px;
  padding: 10px 14px;
  color: #c4170d;
  font-weight: bold;
  border: 2px solid #c4170d;
  background-color: #c4170d19;
  border-radius: 40px;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    border: 1px dashed var(--color-light-grey);
  }
`;

export interface CardProps {
  title: string;
  message: string;
}

const Card: React.FC<CardProps> = ({ title, message }) => {
  const [notification, setNotification] = useState<Notification | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const { data: session } = useSession();
  const userId = session?.user?.id;

  const handleDelete = async () => {
    setNotification(null);
    setLoading(true);

    try {
      const response = await fetch(`/api/users/${userId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        setNotification({
          status: 'error',
          message: 'Erreur lors de la suppression',
        });
        return;
      }

      setNotification({
        status: 'success',
        message: "Ajout d'initiative réussi",
      });

      setTimeout(() => {
        window.location.href = '/';
      }, 5000);
    } catch (error) {
      console.error(error);
      setLoading(false);
      setNotification({
        status: 'error',
        message: 'Une erreur est survenue lors de la suppression du compte',
      });
    }
  };

  return (
    <>
      {notification && notification.status === 'success' ? (
        <Container>
          <SuccessNotification message="Vous compte a bien été supprimé" />
        </Container>
      ) : (
        <CardWrapper>
          <h2>{title}</h2>
          <p>{message}</p>
          <Button onClick={handleDelete} disabled={loading}>
            {loading ? (
              'Suppression en cours'
            ) : (
              <>
                <Image src="/icons/Trash.svg" alt="" width={26} height={26} />
                Supprimer mon compte
              </>
            )}
          </Button>
        </CardWrapper>
      )}
    </>
  );
};

export default Card;
