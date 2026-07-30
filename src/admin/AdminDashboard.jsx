import { useEffect } from "react";
import { useState } from "react";
import {
    FaUsers,
    FaStore,
    FaCalendarCheck,
    FaClipboardList,
} from "react-icons/fa";

const Dashboard = () => {
    const [dashboard, setDashboard] = useState({
        totalUsers: 0,
        totalVendors: 0,
        totalEvents: 0,
        totalBookings: 0,
        recentBookings: [],
    });

    const getDashboard = async () => {
        try {
            const res = await axiosInstance.get("/dashboard");
            setDashboard(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getDashboard();
    }, []);
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
                                <h2>{dashboard.totalUsers}</h2>
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
                                <h2>{dashboard.totalVendors}</h2>
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
                                <h2>{dashboard.totalEvents}</h2>

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
                                <h2>{dashboard.totalBookings}</h2>
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
                            {dashboard.recentBookings.map((booking, index) => (
                                <tr key={booking._id}>
                                    <td>{index + 1}</td>
                                    <td>{booking.user?.fullName}</td>
                                    <td>{booking.event?.eventName}</td>
                                    <td>{booking.event?.vendor?.fullName}</td>
                                    <td>
                                        <span
                                            className={`badge ${booking.status === "Approved"
                                                    ? "bg-success"
                                                    : booking.status === "Rejected"
                                                        ? "bg-danger"
                                                        : "bg-warning text-dark"
                                                }`}
                                        >
                                            {booking.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>

                    </table>

                </div>

            </div>

        </div>
    );
};

export default Dashboard;