import { useUser } from '@/hooks/useUser';
import { useSession } from '@/lib/auth-client';
import { Notification } from '@/types/Notification';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 15px;
  margin-top: 60px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 260px;
  gap: 10px;
  padding: 8px;
  color: #c4170d;
  font-weight: bold;
  border: 2px solid #c4170d;
  background-color: #c4170d19;
  border-radius: 40px;

  &:hover {
    cursor: pointer;
    background-color: #c4170d2e;
    box-shadow: 0 0 0 3px rgba(196, 23, 13, 0.2);
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

const DeleteCard: React.FC = () => {
  const [notification, setNotification] = useState<Notification | null>(null);

  const { deleteUser, loading } = useUser();

  const router = useRouter();

  const { data: session } = useSession();
  const userId = session?.user?.id;

  const handleDelete = async () => {
    setNotification(null);

    if (!userId) return;

    const success = await deleteUser(userId);

    if (!success) {
      setNotification({
        status: 'error',
        message: 'Une erreur est survenue lors de la suppression du compte',
      });
      return;
    }

    setNotification({
      status: 'success',
      message: 'Suppression du compte utilisateur réussie',
    });
  };

  useEffect(() => {
    if (notification?.status === 'success') {
      router.push('/suppression');
    }
  }, [notification]);

  return (
    <CardWrapper>
      <h2>Suppression de compte</h2>
      <p>
        Une fois votre compte supprimé, toutes vos données seront définitivement
        effacées. Cette action est irréversible.
      </p>
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
  );
};

export default DeleteCard;
