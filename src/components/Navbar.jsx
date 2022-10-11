import React from "react";
import { NavLink } from "react-router-dom";
import {Container, Nav, Navbar} from "react-bootstrap";


export default function Navbarra() {
    const setActiveClass = ({ isActive }) => (isActive ? "active" : "inactive");
    return (
    <Navbar  bg="dark" variant="dark">
      <Container>
        <Navbar.Brand><img className="logo" src='https://i.postimg.cc/CxR8cs37/puntero-2.png' alt='puntero'/></Navbar.Brand>
       
          <Nav>
            <NavLink className={setActiveClass} to="/">
              Home
            </NavLink>
            {" - "}
            <NavLink className={setActiveClass} to="/pokemones">
              Pokemones
            </NavLink>
          </Nav>
       
      </Container>
    </Navbar>
  );
}


