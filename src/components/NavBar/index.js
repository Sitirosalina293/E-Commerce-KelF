import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../features/userRedux';
import { Container, Nav, Navbar } from 'react-bootstrap';

const NavBar = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.currentUser);
  const cart = useSelector((state)=>state.cart)
  console.log(cart)

  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };
  
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/" className='fw-bold'><h3 className='fw-bold'>Bukapedia</h3></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="toggle" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            {user?.email === 'admin@bukapedia.com' ? (
              <>
              <Nav.Link href="/admin">Admin</Nav.Link>
              <Nav.Link href="/sales-report">Sales Report</Nav.Link>
              </>
            ) : null}
          </Nav>
          {user === null ? (
            <div>
              <Nav.Link href="/login">Login</Nav.Link>
            </div>
          ):(
            <div className="d-flex my-2">
              {user?.email === 'admin@bukapedia.com' ? (
                <Nav.Link href="" onClick={handleLogout} >Logout</Nav.Link>
              ) : (
                <Nav>
                  <Nav.Link href="/cart">Cart</Nav.Link>
                  <Nav.Link href="" onClick={handleLogout} >Logout</Nav.Link>
                </Nav>
              )}
            </div>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
