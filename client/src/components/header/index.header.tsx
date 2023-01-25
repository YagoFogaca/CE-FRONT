import * as C from './style.header';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

export function Header() {
  const userAdmin = localStorage.getItem('role');
  return (
    <C.HeadersBootstrap>
      <Navbar collapseOnSelect expand="xxl" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <C.ImgS src="/logo.png" alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="flex-end">
              <Link className="nav-link" to="/homepage">
                Home
              </Link>
              <Link className="nav-link" to="/controle-estoque">
                Controle
              </Link>
              <NavDropdown title="Usuarios" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
                {userAdmin ? (
                  <NavDropdown.Item>
                    <Link className="dropdown-item" to="#">
                      Ver todos usuarios
                    </Link>
                  </NavDropdown.Item>
                ) : (
                  <></>
                )}

                <NavDropdown.Item>
                  <Link className="dropdown-item" to="#">
                    Editar perfil
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link className="dropdown-item" to="#">
                    Sair
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </C.HeadersBootstrap>
  );
}
