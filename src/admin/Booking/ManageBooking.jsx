import { useEffect, useState } from "react";
import axiosInstance from "../../service/axiosInstance";

const ManageBooking = () => {
  const [bookings, setBookings] = useState([]);

  const getBookings = async () => {
    try {
      const res = await axiosInstance.get("/booking/bookings");
      setBookings(res.data.bookings);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBookings();
  }, []);

  const updateStatus = async (id, status) => {
    try {
      const res = await axiosInstance.put(
        `/booking/booking/${id}/status`,
        { status }
      );

      alert(res.data.message);
      getBookings();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteBooking = async (id) => {
    if (!window.confirm("Delete this booking?")) return;

    try {
      const res = await axiosInstance.delete(
        `/booking/booking/${id}`
      );

      alert(res.data.message);
      getBookings();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container-fluid">

      <div className="card shadow border-0">

        <div className="card-header bg-primary text-white">
          <h4>Manage Bookings</h4>
        </div>

        <div className="card-body">

          <table className="table table-bordered table-hover">

            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Customer</th>
                <th>Email</th>
                <th>Event</th>
                <th>Location</th>
                <th>Price</th>
                <th>Date</th>
                <th>Guests</th>
                <th>Status</th>
                <th width="220">Action</th>
              </tr>
            </thead>

            <tbody>

              {bookings.map((booking, index) => (

                <tr key={booking._id}>

                  <td>{index + 1}</td>

                  <td>{booking.user?.fullName}</td>

                  <td>{booking.user?.email}</td>

                  <td>{booking.event?.eventName}</td>

                  <td>{booking.event?.location}</td>

                  <td>₹ {booking.event?.price}</td>

                  <td>
                    {new Date(
                      booking.bookingDate
                    ).toLocaleDateString()}
                  </td>

                  <td>{booking.guests}</td>

                  <td>
                    <span
                      className={`badge ${
                        booking.status === "Approved"
                          ? "bg-success"
                          : booking.status === "Rejected"
                          ? "bg-danger"
                          : "bg-warning text-dark"
                      }`}
                    >
                      {booking.status}
                    </span>
                  </td>

                  <td>

                    <button
                      className="btn btn-success btn-sm me-2"
                      onClick={() =>
                        updateStatus(
                          booking._id,
                          "Approved"
                        )
                      }
                    >
                      Approve
                    </button>

                    <button
                      className="btn btn-warning btn-sm me-2"
                      onClick={() =>
                        updateStatus(
                          booking._id,
                          "Rejected"
                        )
                      }
                    >
                      Reject
                    </button>

                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() =>
                        deleteBooking(booking._id)
                      }
                    >
                      Delete
                    </button>

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

export default ManageBooking;