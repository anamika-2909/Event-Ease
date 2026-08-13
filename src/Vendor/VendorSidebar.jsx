import { Link } from "react-router-dom";
import {
  FaTachometerAlt,
  FaCalendarAlt,
  FaServicestack,
  FaClipboardList,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";

const VendorSidebar = () => {
  return (
    <div
      className="bg-dark text-white p-3"
      style={{ width: "250px", minHeight: "100vh" }}
    >
      <h3 className="text-center mb-4">Vendor Panel</h3>

      <ul className="nav flex-column">

        <li className="nav-item mb-2">
          <Link className="nav-link text-white" to="/Vendor/Dashboard">
            <FaTachometerAlt className="me-2" />
            Dashboard
          </Link>
        </li>

        <li className="nav-item mb-2">
          <Link className="nav-link text-white" to="/vendor/MyEvents">
            <FaCalendarAlt className="me-2" />
            My Events
          </Link>
        </li>

        <li className="nav-item mb-2">
          <Link className="nav-link text-white" to="/vendor/MyServices">
            <FaServicestack className="me-2" />
            My Services
          </Link>
        </li>

        <li className="nav-item mb-2">
          <Link className="nav-link text-white" to="/vendor/VendorMyBookings">
            <FaClipboardList className="me-2" />
            My Bookings
          </Link>

        </li>
        <li>
          <Link to="/vendor/AddEvent" className="nav-link text-white">
            Add Event
          </Link>
        </li>


        <li className="nav-item mb-2">

          <Link className="nav-link text-white" to="/vendor/Profile">
            <FaUser className="me-2" />
            Profile
          </Link>
        </li>

        <li className="nav-item mt-4">
          <button className="btn btn-danger w-100">
            <FaSignOutAlt className="me-2" />
            Logout
          </button>
        </li>

      </ul>
    </div>
  );
};

export default VendorSidebar;
