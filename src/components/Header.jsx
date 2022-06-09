import { DragHandle } from "@mui/icons-material";
import { Menu } from "@mui/material";
import React, { useState } from "react";
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
  position: fixed;
  background: ${TertiaryColor};
`;
const Title = styled.a`
  padding: 10px;
  display: flex;
  justify-content: center;
  flex: 1;
  color: ${PrimaryColor};
  font-size: 35px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease-in;
  &:hover{
      transform: scale(1.1);
  }
`;
const NavList = styled.div`
  display: flex;
  flex: 1;
  padding: 10px;
  @media (max-width: 768px) {
    display: none;
  }
`;
const Button = styled.button`
  display: none;
  @media (min-width: 320px) and (max-width: 768px) {
    display: flex;
    margin: 10px;
    background: none;
    border: none;
    color: white;
  }
`

const MenuItem = styled.a`
  width: 100%;
  display: flex;
  padding: 20px;
  background: ${TertiaryColor};
  font-family: "Fredoka One", sans-serif;
  color: ${White};
  text-decoration: none;
`

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
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Navbar>
      <Title href="#Top">{'{Dev}'} Engine</Title>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <DragHandle sx={{fontSize: "3rem"}}/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose} href="#About">A propos</MenuItem>
        <MenuItem onClick={handleClose} href="#Services">Services</MenuItem>
        <MenuItem onClick={handleClose} href="#Projects">Projets</MenuItem>
        <MenuItem onClick={handleClose} href="#Contact">Contact</MenuItem>
      </Menu>
      <NavList>
        <ItemList href="#About">A propos</ItemList>
        <ItemList href="#Services">Services</ItemList>
        <ItemList href="#Projects">Projets</ItemList>
        <ItemList href="#Contact">Contact</ItemList>
      </NavList>
    </Navbar>
  );
};
