'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import LoginButton from '@/components/atoms/Button/loginButton';
import styled from 'styled-components';

const ListWrapper = styled.div`
  align-items: center;
  display: flex;
  margin: 0;
  padding: 2px;
  border: 2px solid #eee;
  font-size: 110%;
  list-style: none;
  background-color: #eee;
  height: 32px;

  &focus {
    padding: 4px;
    border: 2px solid #034575;
    background-color: #034575;
    color: #fff;
    outline: none;
  }
`;

const ListItem = styled.ul`
  display: none;
  margin: 0;
  padding: 2px;
  position: absolute;
  border: 2px solid #034575;
  background-color: #eee;

  &focus {
    padding: 4px;
    border: 2px solid #034575;
    background-color: #034575;
    color: #fff;
    outline: none;
  }
`;

const List = styled.li`
  margin: 0;
  padding: 0;
  list-style: none;
  display: inline-block;
  position: relative;
  top: 3px;
  left: 1px;

  &focus {
    padding: 4px;
    border: 2px solid #034575;
    background-color: #034575;
    color: #fff;
    outline: none;
  }
`;

export const NavbarDropdown = (): JSX.Element => {
  const pathname = usePathname();

  return (
    <ListWrapper aria-label="menu profil">
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded="false"
        aria-controls="menu1"
      >
        <Image src="/icons/login-icon.svg" alt="" width={36} height={36} />
      </button>
      <ListItem
        id="menu1"
        role="menu"
        aria-labelledby="menubutton1"
        aria-activedescendant="mi1"
      >
        <List id="mi1" role="menuitem">
          <Link
            href="/profil"
            passHref
            aria-current={pathname === '/profil' ? 'page' : undefined}
          >
            Profil
          </Link>
        </List>
        <List id="mi2" role="menuitem">
          <Link
            href="/profil"
            passHref
            aria-current={pathname === '/paramètre' ? 'page' : undefined}
          >
            Paramètre
          </Link>
        </List>
        <List id="mi3" role="menuitem">
          <LoginButton />
        </List>
      </ListItem>
    </ListWrapper>
  );
};
