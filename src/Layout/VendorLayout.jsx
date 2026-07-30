import { Outlet } from "react-router-dom";
import VendorSidebar from "../Vendor/VendorSidebar";


const VendorLayout = () => {
  return (
    <div className="d-flex">
      <VendorSidebar />

      <div className="flex-grow-1 p-4 bg-light" style={{ minHeight: "100vh" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default VendorLayout;