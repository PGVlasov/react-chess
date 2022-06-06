import { Navbar, Container, Offcanvas, Nav } from "react-bootstrap";

export const NavMenu = () => {
  return (
    <Navbar bg="light" expand={false}>
      <Container fluid>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="start"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="/">Main Page</Nav.Link>
              <Nav.Link href="/about">About Page</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
        <Navbar.Brand href="/">Chess Online</Navbar.Brand>
      </Container>
    </Navbar>
  );
};
