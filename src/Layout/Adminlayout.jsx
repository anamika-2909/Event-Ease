import { Outlet } from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar";
import AdminSidebar from "../components/AdminSidebar";

const AdminLayout = () => {
  return (
    <div className="container-fluid p-0">
      <div className="row g-0">

        {/* Sidebar */}
        <div className="col-auto">
          <AdminSidebar />
        </div>

        {/* Main Content */}
        <div className="col">
          <AdminNavbar />

          <div className="p-4 bg-light" style={{ minHeight: "100vh" }}>
            <Outlet />
          </div>
        </div>

      </div>
    </div>
  );
};

export default AdminLayout;