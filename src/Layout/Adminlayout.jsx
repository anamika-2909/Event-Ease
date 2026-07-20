import { Outlet } from "react-router-dom";
import AdminSidebar from "../components/AdminSidebar";
import AdminNavbar from "../components/AdminNavbar";
import "../css/admin.css";

const AdminLayout = () => {
  return (
    <div className="admin-layout d-flex">

      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <div className="admin-main flex-grow-1">

        {/* Top Navbar */}
        <AdminNavbar />

        {/* Page Content */}
        <div className="admin-content p-4">
          <Outlet />
        </div>

      </div>

    </div>
  );
};

export default AdminLayout;