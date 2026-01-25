import React, { useEffect } from 'react';

import { FaBars, FaTimes } from 'react-icons/fa';
import styled from 'styled-components';

const BurgerMenuButton = styled.button`
  color: var(--foreground-green);
  border: 2px solid;
  border-radius: 50px;
  border-color: var(--foreground-green);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;

  svg {
    fill: var(--text-black);
  }
`;

interface BurgerMenuProps {
  burgerMenuCollapse: (value: boolean) => void;
  isBurgerMenuOpen: boolean;
}

const BurgerMenu = ({
  burgerMenuCollapse: burgerMenuCollapse,
  isBurgerMenuOpen,
}: BurgerMenuProps) => {
  useEffect(() => {
    if (isBurgerMenuOpen) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }, [isBurgerMenuOpen]);

  const handleClick = () => burgerMenuCollapse(!isBurgerMenuOpen);

  return (
    <BurgerMenuButton
      type="button"
      onClick={handleClick}
      aria-label={isBurgerMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
      aria-expanded={isBurgerMenuOpen ? 'true' : 'false'}
      aria-controls="menu-principal"
      data-test-id="burger-menu"
    >
      {isBurgerMenuOpen ? <FaTimes aria-label="Fermer le menu" /> : <FaBars aria-hidden />}
    </BurgerMenuButton>
  );
};

export default BurgerMenu;
