import * as C from './style.header';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export function Header() {
  return (
    <C.HeadersBootstrap>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <C.ImgS src="/logo.png" alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="flex-end">
              <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href="#pricing">Controle</Nav.Link>
              <NavDropdown title="Usuarios" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Ver todos usuarios
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Editar perfil
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Sair</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </C.HeadersBootstrap>
  );
}
