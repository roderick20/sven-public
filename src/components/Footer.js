import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-light text-center py-4 mt-5">
      <Container>
        <p>&copy; {new Date().getFullYear()} Sven. Todos los derechos reservados. info@sven.pe</p>
      </Container>
    </footer>
  );
}

export default Footer;