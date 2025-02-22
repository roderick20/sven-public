import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom

function DocsMenu() {
    return (
        <ul class="navbar-nav flex-column mt-4" id="sidebarnav">
            <li class="navbar-header">
                <h5 class="heading">Introudcción</h5>
            </li>
            <li class="nav-item">
                <Nav.Link as={Link} to="/docs" class="nav-link">
                    Acerca de SVEN
                </Nav.Link>
            </li>
            <li class="nav-item">
                <Nav.Link as={Link} to="/docs/getting-started" class="nav-link">
                    Inicio rápido
                </Nav.Link>
            </li>
            <li class="nav-item">
                <Nav.Link as={Link} to="/docs/editor" class="nav-link">
                    Editor de código
                </Nav.Link>
            </li>
            <li class="nav-item">
                <Nav.Link as={Link} to="/docs/db" class="nav-link">
                    Base de datos
                </Nav.Link>
            </li>
            <li class="nav-item">
                <Nav.Link as={Link} to="/docs/template" class="nav-link">
                    Plantillas
                </Nav.Link>
            </li>
        </ul>
    );
}

export default DocsMenu;