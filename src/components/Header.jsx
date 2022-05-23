import React from "react";
import styled from "styled-components";

const PrimaryColor = "#90be3e";
const SecondaryColor = "#4e4f50";
const TertiaryColor = "#18191a";
const White = "whitesmoke";

const Navbar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100px;
  color: ${PrimaryColor};
  font-family: "Fredoka One", sans-serif;
`;
const Title = styled.h1`
  padding: 10px;
  display: flex;
  justify-content: center;
  flex: 1;
  transition: all 0.2s ease-in;
  &:hover{
      transform: scale(1.1);
  }
`;
const NavList = styled.div`
  display: flex;
  flex: 1;
  padding: 10px;
`;
const ItemList = styled.a`
  width: 120px;
  height: 50px;
  border-top: 2px solid ${SecondaryColor};
  border-bottom: 2px solid ${SecondaryColor};
  border-radius: 5px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  scroll-behavior: smooth;
  text-decoration: none;
  color: ${White};
  &:hover {
    transform: translateY(3px);
    background: ${PrimaryColor};
    color: ${TertiaryColor};
    border-color: ${TertiaryColor};
  }
`;

export const Header = () => {
  return (
    <Navbar>
      <Title>Gring{'{ed}'}</Title>
      <NavList>
        <ItemList href="#About">A propos</ItemList>
        <ItemList href="#Services">Services</ItemList>
        <ItemList href="#Projects">Projets</ItemList>
        <ItemList href="#Contact">Contact</ItemList>
      </NavList>
    </Navbar>
  );
};
