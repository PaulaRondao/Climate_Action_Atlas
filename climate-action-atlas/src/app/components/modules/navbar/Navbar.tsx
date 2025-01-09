'use client'
import react from 'react';
import { ListItem, MenuBurger, Nav, StyledLink } from './navbar.styles';
import Link from 'next/link';


export default function NavBar():JSX.Element {

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
hamburger.classList.toggle("active");
navMenu.classList.toggle("active");

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
hamburger.classList.remove("active");
navMenu.classList.remove("active");
}
}
  return (
        <Nav>
            <Link href="#">WebDev.</Link>
            <ul>
                <ListItem>
                    <Link href="#" passHref><StyledLink>S&apos;engager</StyledLink></Link>
                </ListItem>
                <ListItem>
                    <Link href="#" passHref><StyledLink>Ajouter une initiative</StyledLink></Link>
                </ListItem>
                <ListItem>
                    <Link href="#" passHref><StyledLink>Connexion</StyledLink></Link>
                </ListItem>
            </ul>
            <MenuBurger>
                <span></span>
                <span></span>
                <span></span>
            </MenuBurger>
        </Nav>
  );
};
