import {
    FaUsers,
    FaStore,
    FaCalendarCheck,
    FaClipboardList,
} from "react-icons/fa";

const Dashboard = () => {
    return (
        <div className="container-fluid">

            {/* Heading */}
            <div className="mb-4">
                <h2 className="fw-bold">Admin Dashboard</h2>
                <p className="text-muted">
                    Welcome Back, Admin 👋
                </p>
            </div>

            {/* Cards */}
            <div className="row g-4">

                <div className="col-lg-3 col-md-6">
                    <div className="card shadow border-0">
                        <div className="card-body d-flex justify-content-between align-items-center">
                            <div>
                                <h6>Total Users</h6>
                                <h2>150</h2>
                            </div>

                            <FaUsers size={40} className="text-primary" />
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6">
                    <div className="card shadow border-0">
                        <div className="card-body d-flex justify-content-between align-items-center">
                            <div>
                                <h6>Total Vendors</h6>
                                <h2>45</h2>
                            </div>

                            <FaStore size={40} className="text-success" />
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6">
                    <div className="card shadow border-0">
                        <div className="card-body d-flex justify-content-between align-items-center">
                            <div>
                                <h6>Total Events</h6>
                                <h2>75</h2>
                            </div>

                            <FaCalendarCheck size={40} className="text-warning" />
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6">
                    <div className="card shadow border-0">
                        <div className="card-body d-flex justify-content-between align-items-center">
                            <div>
                                <h6>Total Bookings</h6>
                                <h2>320</h2>
                            </div>

                            <FaClipboardList size={40} className="text-danger" />
                        </div>
                    </div>
                </div>

            </div>

            {/* Recent Bookings */}
            <div className="card mt-5 shadow border-0">

                <div className="card-header bg-white">
                    <h5 className="mb-0">
                        Recent Bookings
                    </h5>
                </div>

                <div className="card-body">

                    <table className="table table-hover">

                        <thead>

                            <tr>
                                <th>#</th>
                                <th>Customer</th>
                                <th>Event</th>
                                <th>Vendor</th>
                                <th>Status</th>
                            </tr>

                        </thead>

                        <tbody>

                            <tr>
                                <td>1</td>
                                <td>Anamika</td>
                                <td>Wedding</td>
                                <td>Royal Events</td>
                                <td>
                                    <span className="badge bg-success">
                                        Confirmed
                                    </span>
                                </td>
                            </tr>

                            <tr>
                                <td>2</td>
                                <td>Rahul</td>
                                <td>Birthday</td>
                                <td>Dream Decor</td>
                                <td>
                                    <span className="badge bg-warning text-dark">
                                        Pending
                                    </span>
                                </td>
                            </tr>

                            <tr>
                                <td>3</td>
                                <td>Priya</td>
                                <td>Corporate</td>
                                <td>Elite Planner</td>
                                <td>
                                    <span className="badge bg-danger">
                                        Cancelled
                                    </span>
                                </td>
                            </tr>

                        </tbody>

                    </table>

                </div>

            </div>

        </div>
    );
};

export default Dashboard;