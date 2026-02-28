'use client';

import { useUser } from '@/hooks/useUser';
import { useSession } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { Notification } from '@/types/Notification';
import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  KeyboardEvent,
} from 'react';
import styled, { keyframes, css } from 'styled-components';

// ─── Types ────────────────────────────────────────────────────────────────────

interface AlertDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  description?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  triggerRef?: React.RefObject<HTMLElement>;
}

// ─── Keyframes ────────────────────────────────────────────────────────────────

const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

const slideUp = keyframes`
  from { opacity: 0; transform: translateY(12px) scale(0.97); }
  to   { opacity: 1; transform: translateY(0)    scale(1); }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to   { opacity: 0; }
`;

// ─── Styled Components ────────────────────────────────────────────────────────

const Backdrop = styled.div<{ $closing: boolean }>`
  position: fixed;
  inset: 0;
  background: rgba(10, 10, 15, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: ${({ $closing }) =>
    $closing
      ? css`
          ${fadeOut} 0.2s ease forwards
        `
      : css`
          ${fadeIn} 0.2s ease forwards
        `};
`;

const DialogBox = styled.div<{ $closing: boolean }>`
  background: #ffffff;
  border-radius: 16px;
  padding: 2rem 2.25rem 1.75rem;
  max-width: 460px;
  width: calc(100% - 2rem);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.04), 0 20px 60px rgba(0, 0, 0, 0.12),
    0 0 0 1px rgba(0, 0, 0, 0.06);
  position: relative;
  animation: ${({ $closing }) =>
    $closing
      ? css`
          ${fadeOut} 0.18s ease forwards
        `
      : css`
          ${slideUp} 0.25s cubic-bezier(0.22, 1, 0.36, 1) forwards
        `};

  &:focus {
    outline: none;
  }
`;

const Title = styled.h2`
  font-size: 1.2rem;
  font-weight: 700;
  color: #111827;
  margin: 0 0 0.6rem;
  line-height: 1.3;
`;

const Description = styled.p`
  font-size: 0.9rem;
  margin: 0 0 1.75rem;
  line-height: 1.6;
`;

const Actions = styled.div`
  display: flex;
  gap: 0.75rem;
  justify-content: flex-end;
  flex-direction: column;
`;

const BaseButton = styled.button`
  font-family: 'system-ui', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  padding: 0.8rem 1.25rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: all 0.15s ease;

  &:focus-visible {
    outline: 2px solid #6366f1;
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const CancelButton = styled(BaseButton)`
  color: var(--color-background-green);
  border: 2px solid var(--color-background-green);
  font-weight: bold;
  font-size: 1rem;

  &:hover:not(:disabled) {
    background: #e5e7eb;
  }

  &:active:not(:disabled) {
    background: #d1d5db;
  }
`;

const ConfirmButton = styled(BaseButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: #c4170d;
  color: var(--color-background-beige);
  font-weight: bold;
  font-size: 1rem;

  &:hover:not(:disabled) {
    background: #dc2626;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(239, 68, 68, 0.35);
  }

  &:active:not(:disabled) {
    background: #b91c1c;
    transform: translateY(0);
    box-shadow: none;
  }
`;

// ─── Focusable helpers ────────────────────────────────────────────────────────

const FOCUSABLE_SELECTORS =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

function getFocusableElements(container: HTMLElement): HTMLElement[] {
  return Array.from(
    container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTORS),
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

export const AlertDialog: React.FC<AlertDialogProps> = ({
  isOpen,
  onClose,
  title,
  description,
  confirmLabel = 'Confirmer',
  cancelLabel = 'Annuler',
  triggerRef,
}) => {
  const [closing, setClosing] = useState(false);
  const [notification, setNotification] = useState<Notification | null>(null);
  const { deleteUser, loading } = useUser();

  const dialogRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const { data: session } = useSession();
  const userId = session?.user?.id;

  const onConfirm = async () => {
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

  // Animate out then call onClose
  const handleClose = useCallback(() => {
    setClosing(true);
    setTimeout(() => {
      setClosing(false);
      onClose();
      triggerRef?.current?.focus();
    }, 180);
  }, [onClose, triggerRef]);

  // Trap focus inside dialog
  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLDivElement>) => {
      if (e.key === 'Escape') {
        e.stopPropagation();
        handleClose();
        return;
      }

      if (e.key !== 'Tab') return;

      const focusable = dialogRef.current
        ? getFocusableElements(dialogRef.current)
        : [];

      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    },
    [handleClose],
  );

  useEffect(() => {
    if (notification?.status === 'success') {
      router.push('/suppression');
    }
  }, [notification]);

  // Focus first focusable element on open
  useEffect(() => {
    if (isOpen && dialogRef.current) {
      const focusable = getFocusableElements(dialogRef.current);
      focusable[0]?.focus();
    }
  }, [isOpen]);

  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen && !closing) return null;

  return (
    <Backdrop $closing={closing} onClick={handleClose} aria-hidden="true">
      <DialogBox
        ref={dialogRef}
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="alert-dialog-title"
        aria-describedby={description ? 'alert-dialog-desc' : undefined}
        $closing={closing}
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
        tabIndex={-1}
      >
        <Title id="alert-dialog-title">{title}</Title>

        {description && (
          <Description id="alert-dialog-desc">{description}</Description>
        )}

        <Actions>
          <CancelButton onClick={handleClose} aria-label={cancelLabel}>
            {cancelLabel}
          </CancelButton>
          <ConfirmButton
            onClick={() => {
              onConfirm();
              handleClose();
            }}
            aria-label={confirmLabel}
          >
            {confirmLabel}
          </ConfirmButton>
        </Actions>
      </DialogBox>
    </Backdrop>
  );
};

export default AlertDialog;
