import React from "react";
import { Container } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';

export const SideBar = () => {

    return (
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Container fluid>
          <Navbar.Brand>
            Una Marca
          </Navbar.Brand>
          <Navbar.Text className={'d-none d-sm-inline'}>
            <strong>{"hola"}</strong><br/>
            <small>{"Hola"}</small>
          </Navbar.Text>
          <Navbar.Text className={'d-inline d-sm-none'}>
            text
          </Navbar.Text>
        </Container>
        </Navbar>
    )
}