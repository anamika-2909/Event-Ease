import { Outlet } from "react-router-dom";
import AdminSidebar from "../admin/AdminSidebar";
import AdminNavbar from "../admin/AdminNavbar";



const AdminLayout = () => {
  return (
    <div className="admin-layout d-flex">
      <AdminSidebar />      
      <div className="admin-main flex-grow-1">
        <AdminNavbar />
        <div className="admin-content p-4">
          <Outlet />
        </div>

      </div>

    </div>
  );
};

export default AdminLayout;