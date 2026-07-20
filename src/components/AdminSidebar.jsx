import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaList,
  FaCalendarAlt,
  FaTools,
  FaUsers,
  FaStore,
  FaClipboardList,
  FaStar,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

const AdminSidebar = () => {
  return (
    <div
      className="bg-dark text-white vh-100 p-3"
      style={{ width: "250px" }}
    >
      <h3 className="text-center mb-4">EventEase</h3>

      <ul className="nav flex-column">

        <li className="nav-item mb-2">
          <NavLink
            to="/admin"
            className="nav-link text-white"
          >
            <FaHome className="me-2" />
            Dashboard
          </NavLink>
        </li>

        {/* Category */}

        <div className="accordion accordion-flush" id="sidebarAccordion">

          <div className="accordion-item bg-dark border-0">

            <h2 className="accordion-header">

              <button
                className="accordion-button collapsed bg-dark text-white shadow-none"
                data-bs-toggle="collapse"
                data-bs-target="#category"
              >
                <FaList className="me-2" />
                Categories
              </button>

            </h2>

            <div
              id="category"
              className="accordion-collapse collapse"
              data-bs-parent="#sidebarAccordion"
            >

              <div className="accordion-body p-0">

                <NavLink
                  to="/admin/add-category"
                  className="nav-link text-white ps-5"
                >
                  Add Category
                </NavLink>

                <NavLink
                  to="/admin/manage-category"
                  className="nav-link text-white ps-5"
                >
                  Manage Category
                </NavLink>

              </div>

            </div>

          </div>

          {/* Events */}

          <div className="accordion-item bg-dark border-0">

            <h2 className="accordion-header">

              <button
                className="accordion-button collapsed bg-dark text-white shadow-none"
                data-bs-toggle="collapse"
                data-bs-target="#event"
              >
                <FaCalendarAlt className="me-2" />
                Events
              </button>

            </h2>

            <div
              id="event"
              className="accordion-collapse collapse"
              data-bs-parent="#sidebarAccordion"
            >

              <div className="accordion-body p-0">

                <NavLink
                  to="/admin/add-event"
                  className="nav-link text-white ps-5"
                >
                  Add Event
                </NavLink>

                <NavLink
                  to="/admin/manage-event"
                  className="nav-link text-white ps-5"
                >
                  Manage Event
                </NavLink>

              </div>

            </div>

          </div>

          {/* Services */}

          <div className="accordion-item bg-dark border-0">

            <h2 className="accordion-header">

              <button
                className="accordion-button collapsed bg-dark text-white shadow-none"
                data-bs-toggle="collapse"
                data-bs-target="#service"
              >
                <FaTools className="me-2" />
                Services
              </button>

            </h2>

            <div
              id="service"
              className="accordion-collapse collapse"
              data-bs-parent="#sidebarAccordion"
            >

              <div className="accordion-body p-0">

                <NavLink
                  to="/admin/add-service"
                  className="nav-link text-white ps-5"
                >
                  Add Service
                </NavLink>

                <NavLink
                  to="/admin/manage-service"
                  className="nav-link text-white ps-5"
                >
                  Manage Service
                </NavLink>

              </div>

            </div>

          </div>

        </div>

        <li className="nav-item mt-2">
          <NavLink
            to="/admin/users"
            className="nav-link text-white"
          >
            <FaUsers className="me-2" />
            Users
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            to="/admin/vendors"
            className="nav-link text-white"
          >
            <FaStore className="me-2" />
            Vendors
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            to="/admin/bookings"
            className="nav-link text-white"
          >
            <FaClipboardList className="me-2" />
            Bookings
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            to="/admin/reviews"
            className="nav-link text-white"
          >
            <FaStar className="me-2" />
            Reviews
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            to="/admin/settings"
            className="nav-link text-white"
          >
            <FaCog className="me-2" />
            Settings
          </NavLink>
        </li>

        <li className="nav-item mt-3">
          <button className="btn btn-danger w-100">
            <FaSignOutAlt className="me-2" />
            Logout
          </button>
        </li>

      </ul>
    </div>
  );
};

export default AdminSidebar;