import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-light text-center py-4 mt-5" style={{
      position: 'fixed',
    bottom: '0',
    left: '0',
    padding: '1rem 0',
    zIndex: '1000'
    }}>
      <Container>
        <p>&copy; {new Date().getFullYear()} Sven. Todos los derechos reservados. info@sven.pe</p>
      </Container>
    </footer>
  );
}

export default Footer;