import { NavDropdown, Badge } from 'react-bootstrap';
//import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useAuth } from "../../context/auth";
import { useNavigate } from "react-router-dom";
import Search from "../forms/Search";
import useCategory from "../../hooks/useCategory";
import { useCart } from "../../context/cart";
import logo from '../../images/logo-removebg-preview.png';
//import { Badge } from "antd";

export default function Menu() {
  // context
  const [auth, setAuth] = useAuth();
  const [cart, setCart] = useCart();
  // hooks
  const categories = useCategory();
  const navigate = useNavigate();

  const logout = () => {
    setAuth({ ...auth, user: null, token: "" });
    localStorage.removeItem("auth");
    navigate("/");
  };

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Logo" style={{ width: '100px' }} /> {/* Set the size as needed */}
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
                data-bs-target="#navbarNav" aria-controls="navbarNav" 
                aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/shop">Products</Link>
            </li>
            <li className="nav-item">
              <NavDropdown title="CATEGORIES" id="basic-nav-dropdown">
              <Link to="/categories">
                <NavDropdown.Item>All Categories</NavDropdown.Item>
              </Link>
              {categories?.map((c) => (
                <Link key={c._id} to={`/category/${c.slug}`}>
                  <NavDropdown.Item>{c.name}</NavDropdown.Item>
                </Link>
              ))}
              </NavDropdown>
            </li>
            <li className="nav-item">
              <Search />
            </li>
            {!auth?.user ? (
            <>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">
                REGISTER
              </Link>
            </li>
            </>
          ) : (
            <NavDropdown title={auth?.user?.name?.toUpperCase()} id="basic-nav-dropdown">
              <Link to={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"}`}>
                <NavDropdown.Item>Dashboard</NavDropdown.Item>
              </Link>
              <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
            </NavDropdown>
          )}
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                <Badge pill bg="secondary">
                  {cart?.length >= 1 ? cart.length : 0}
                </Badge>{' '}
                CART
              </Link>
            </li>
          </ul>
        </div>
        </div>
      </nav>

      {/* <Navbar bg="light" expand="lg" sticky="top" className="shadow-sm mb-2">
        <Nav className="me-auto">
          <NavLink to="/">
            <Nav.Link>HOME</Nav.Link>
          </NavLink>

          <NavLink to="/shop">
            <Nav.Link>SHOP</Nav.Link>
          </NavLink>

          <NavDropdown title="CATEGORIES" id="basic-nav-dropdown">
            <NavLink to="/categories">
              <NavDropdown.Item>All Categories</NavDropdown.Item>
            </NavLink>
            {categories?.map((c) => (
              <NavLink key={c._id} to={`/category/${c.slug}`}>
                <NavDropdown.Item>{c.name}</NavDropdown.Item>
              </NavLink>
            ))}
          </NavDropdown>

          <NavLink to="/cart">
            <Nav.Link>
              <Badge pill bg="secondary">
                {cart?.length >= 1 ? cart.length : 0}
              </Badge>{' '}
              CART
            </Nav.Link>
          </NavLink>

          <Search />

          {!auth?.user ? (
            <>
              <NavLink to="/login">
                <Nav.Link>LOGIN</Nav.Link>
              </NavLink>
              <NavLink to="/register">
                REGISTER
              </NavLink>
            </>
          ) : (
            <NavDropdown title={auth?.user?.name?.toUpperCase()} id="basic-nav-dropdown">
              <NavLink to={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"}`}>
                <NavDropdown.Item>Dashboard</NavDropdown.Item>
              </NavLink>
              <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
            </NavDropdown>
          )}
        </Nav>
      </Navbar> */}
    </>
  );
}
