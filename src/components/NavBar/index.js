import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../features/userRedux';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { CartFill } from 'react-bootstrap-icons';
import Badge from 'react-bootstrap/Badge';

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
    <Navbar collapseOnSelect expand="lg" bg="white" variant="light" className='shadow'>
      <Container>
        <Navbar.Brand href="/" className='fw-bold'><h3 className='fw-bold'>Bukapedia</h3></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="toggle" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className='fw-bold'>Home</Nav.Link>
            {user?.email === 'admin@bukapedia.com' ? (
              <>
              <Nav.Link href="/admin" className='fw-bold'>Admin</Nav.Link>
              <Nav.Link href="/sales-report" className='fw-bold'>Sales Report</Nav.Link>
              </>
            ) : null}
          </Nav>
          {user === null ? (
            <div>
              <Nav.Link href="/login" className='fw-bold'>Login</Nav.Link>
            </div>
          ):(
            <div className="d-flex my-2">
              {user?.email === 'admin@bukapedia.com' ? (
                <Nav.Link href="" onClick={handleLogout} className='fw-bold' >Logout</Nav.Link>
              ) : (
                <Nav>
                  <Nav.Link href="/cart" className='fw-bold me-3'>
                    <CartFill style={{ fontSize: "23px"}}/>
                    {cart.quantity===0 ? '' : (
                    <Badge bg="danger" style={{ fontSize: "9px",position:"absolute", }}>{cart.quantity}</Badge>)}
                  </Nav.Link>
                  <Nav.Link href="" onClick={handleLogout} className='fw-bold' >Logout</Nav.Link>
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
