const AdminNavbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login"); // અથવા "/" જો login page home પર હોય
  };
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm px-4">
      <div className="container-fluid">

        <h5 className="mb-0 fw-bold">
          Admin Dashboard
        </h5>

        <div className="ms-auto d-flex align-items-center">

          <span className="me-3 fw-semibold">
            Welcome Admin 👋
          </span>

          <button
            className="btn btn-danger w-100"
            onClick={handleLogout}
          >
            <FaSignOutAlt className="me-2" />
            Logout
          </button>

        </div>

      </div>
    </nav>
  );
};

export default AdminNavbar;