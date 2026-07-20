import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm sticky-top py-2">
      <div className="container">

        {/* Logo */}
        <Link className="navbar-brand fw-bold fs-3 text-primary" to="/">
          🎉 EventEase
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbar">

          <ul className="navbar-nav mx-auto">

            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/event">
                Events
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/vendor">
                Vendors
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/service">
                Services
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/About">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/Contact">
                Contact
              </Link>
            </li>

          </ul>

          {/* Right Side */}
          <div className="d-flex align-items-center gap-3">

            <FaSearch
              size={18}
              style={{ cursor: "pointer" }}
            />

            <Link
              to="/Login"
              className="btn btn-outline-primary px-4"
            >
              Login
            </Link>

            <Link
              to="/Register"
              className="btn btn-primary px-4"
            >
              Register
            </Link>

          </div>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;