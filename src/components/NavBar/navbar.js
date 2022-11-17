import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../features/userRedux";
import { Container, Nav, Navbar, OffcanvasBody, OffcanvasHeader } from "react-bootstrap";
import { CartFill } from "react-bootstrap-icons";
import Badge from "react-bootstrap/Badge";
import { Bukapedia } from "../../assets";

const NavBar = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.currentUser);
  const cart = useSelector((state) => state.cart);

  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="white"
      variant="light"
      className="shadow sticky-top"
    >
      <Container>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="toggle"
        />
        <Navbar.Brand href="/" className="fw-bold">
          <img
            src={Bukapedia}
            alt="logo"
            width="100%"
            height="30"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Offcanvas style={{ width:'30%' }} id="responsive-navbar-nav">
          <OffcanvasHeader className="fw-bold h3 ms-2 ">Bukapedia</OffcanvasHeader>
          <OffcanvasBody className="ms-2">
            <Nav className="me-auto">
              <Nav.Link
                href="/"
                className="fw-bold"
                style={
                  window.location.pathname === "/" ? { color: "#012657" } : null
                }
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="/jewelery"
                className="fw-bold"
                style={
                  window.location.pathname === "/jewelery" ? { color: "#012657" } : null
                }
              >
                Jewelery
              </Nav.Link>
              <Nav.Link
                href="/manclothes"
                className="fw-bold"
                style={
                  window.location.pathname === "/manclothes" ? { color: "#012657" } : null
                }
              >
                Men's Clothing
              </Nav.Link>
              <Nav.Link
                href="/womenclothes"
                className="fw-bold"
                style={
                  window.location.pathname === "//womenclothes" ? { color: "#012657" } : null
                }
              >
                Women's Clothing
              </Nav.Link>
              <Nav.Link
                href="/electronics"
                className="fw-bold"
                style={
                  window.location.pathname === "/electronics" ? { color: "#012657" } : null
                }
              >
                Electronics
              </Nav.Link>
              {user?.email === "admin@bukapedia.com" ? (
                <>
                  <Nav.Link
                    href="/admin"
                    className="fw-bold"
                    style={
                      window.location.pathname === "/admin"
                        ? { color: "#012657" }
                        : null
                    }
                  >
                    Admin
                  </Nav.Link>
                  <Nav.Link href="/sales-report" className="fw-bold"
                    style={
                      window.location.pathname === "/sales-report" ? { color: "#012657" } : null
                    }
                  >
                    Sales Report
                  </Nav.Link>
                </>
              ) : null}
            
            </Nav>
          </OffcanvasBody>
        </Navbar.Offcanvas>
          {user === null ? (
            <div>
              <Nav.Link href="/login" className="fw-bold">
                Login
              </Nav.Link>
            </div>
          ) : (
            <div className="d-flex my-2">
              {user?.email === "admin@bukapedia.com" ? (
                <Nav.Link href="" onClick={handleLogout} className="fw-bold">
                  Logout
                </Nav.Link>
              ) : (
                <>
                  <Nav.Link href="/cart" className="fw-bold me-4">
                    <CartFill style={{ fontSize: "18px" }} />
                    {cart.quantity === 0 ? (
                      ""
                    ) : (
                      <Badge
                        bg="danger"
                        style={{ fontSize: "7px", position: "absolute" }}
                      >
                        {cart.quantity}
                      </Badge>
                    )}
                  </Nav.Link>
                  <Nav.Link href="" onClick={handleLogout} className="fw-bold">
                    Logout
                  </Nav.Link>
                </>
              )}
            </div>
          )}
      </Container>
    </Navbar>
  );
};

export default NavBar;
