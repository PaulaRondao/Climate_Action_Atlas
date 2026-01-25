import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import styled from 'styled-components';

const NotificationContainer = styled.div`
  margin: 20px 0;
  background-color: #e4efec;
  padding: 10px 20px;
  border-radius: 10px;
  text-align: left;
  font-size: var(--text-sm);
  font-weight: bold;
  align-items: center;
  display: flex;
  border: 1px solid #127a27;
  border-radius: 4px;

  p {
    flex: 1;
  }

  svg {
    width: 2em;
    height: 2em;
    padding: 0 8px 0 0;
  }
`;

export interface SuccessNotificationProps {
  message: string;
}

const SuccessNotification: React.FC<SuccessNotificationProps> = ({
  message,
}) => (
  <NotificationContainer>
    <FaCheckCircle aria-hidden="true" />
    <p>{message}</p>
  </NotificationContainer>
);

export default SuccessNotification;
