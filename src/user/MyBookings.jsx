import { useEffect, useState } from "react";
import axiosInstance from "../service/axiosInstance";

const MyBookings = () => {
    const [bookings, setBookings] = useState([]);

    const userId = localStorage.getItem("userId");

    const getBookings = async () => {
        try {
            const res = await axiosInstance.get(
                `/booking/user/${userId}/bookings`
            );

            setBookings(res.data.bookings);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getBookings();
    }, []);

    return (
        <div className="container py-5">
            <div className="card shadow border-0">

                <div className="card-header bg-primary text-white">
                    <h4 className="mb-0">My Bookings</h4>
                </div>

                <div className="card-body">

                    {bookings.length > 0 ? (

                        <table className="table table-bordered table-hover">

                            <thead className="table-dark">
                                <tr>
                                    <th>Image</th>
                                    <th>Event</th>
                                    <th>Booking Date</th>
                                    <th>Guests</th>
                                    <th>Price</th>
                                    <th>Status</th>
                                </tr>
                            </thead>

                            <tbody>

                                {bookings.map((booking) => (
                                    <tr key={booking._id}>

                                        <td>
                                            <img
                                                src={`http://localhost:5000/uploads/${booking.event?.image}`}
                                                alt={booking.event?.eventName}
                                                width="80"
                                                height="60"
                                                style={{ objectFit: "cover" }}
                                            />
                                        </td>

                                        <td>{booking.event?.eventName}</td>

                                        <td>
                                            {new Date(
                                                booking.bookingDate
                                            ).toLocaleDateString()}
                                        </td>

                                        <td>{booking.guests}</td>

                                        <td>₹ {booking.event?.price}</td>

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

                    ) : (

                        <div className="text-center">
                            <h5>No Bookings Found</h5>
                        </div>

                    )}

                </div>

            </div>
        </div>
    );
};

export default MyBookings;