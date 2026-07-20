import React from 'react'

const AdminNavbar = () => {
  return (
    <nav
      className="navbar navbar-light bg-white shadow-sm"
      style={{
        marginLeft: "250px",
        position: "fixed",
        width: "calc(100% - 250px)",
        zIndex: 1000,
      }}
    >
      <div className="container-fluid">
        <h5 className="mb-0">Admin Dashboard</h5>

        <span className="fw-bold">
          Welcome Admin 👋
        </span>
      </div>
    </nav>
  );
};

export default AdminNavbar;