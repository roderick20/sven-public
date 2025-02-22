import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom

function Header() {
  return (
    <div>
      <header>
        <nav class="navbar navbar-expand-lg navbar-light w-100">
          <div class="container px-3">
            <a class="navbar-brand" href="/"><img src="/images/logo/logo.png" alt style={{ height: '1.2rem' }} /></a>
            <button class="navbar-toggler offcanvas-nav-btn" type="button">
              <i class="bi bi-list"></i>
            </button>
            <div class="offcanvas offcanvas-start offcanvas-nav" style={{ width: '20rem' }}>
              <div class="offcanvas-header">
                <a href="/" class="text-inverse"><img src="assets/images/logo/logo.png" alt style={{ height: '1.2rem' }} /></a>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div class="offcanvas-body pt-0 align-items-center">
                <ul class="navbar-nav mx-auto align-items-lg-center">
                  <li class="nav-item">
                    <Nav.Link as={Link} to="/framework" class="dropdown-item">
                      Framework
                    </Nav.Link>
                  </li>
                  <li class="nav-item">
                    <Nav.Link as={Link} to="/webparts" class="dropdown-item">
                      WebParts
                    </Nav.Link>
                  </li>
                  <li class="nav-item">
                    <Nav.Link as={Link} to="/price" class="dropdown-item">
                      Precios
                    </Nav.Link>
                  </li>
                  <li class="nav-item">
                    <Nav.Link as={Link} to="/docs" class="dropdown-item">
                      Documentación
                    </Nav.Link>
                  </li>
                </ul>
                <div class="mt-3 mt-lg-0 d-flex align-items-center">
                  <a href="https://apps.sven.pe" class="btn btn-light mx-2">Login</a>
                  <a href="https://apps.sven.pe/Home/CreateAccount" class="btn btn-primary">Resitrarse</a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>



    </div>
  );
}

export default Header;