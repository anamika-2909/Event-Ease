import { useEffect, useState } from "react";
import axiosInstance from "../service/axiosInstance";

const VendorBooking = () => {
  const [bookings, setBookings] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));

  const getBookings = async () => {
    try {
      const res = await axiosInstance.get(
        `/booking/vendor/${user._id}/bookings`
      );

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
      await axiosInstance.put(`/booking/booking/${id}/status`, {
        status,
      });

      alert("Status Updated Successfully");

      getBookings();
    } catch (error) {
      console.log(error);
      alert("Status Update Failed");
    }
  };

  return (
    <div className="container-fluid">

      <div className="card shadow border-0">

        <div className="card-header bg-primary text-white">
          <h4 className="mb-0">Vendor Bookings</h4>
        </div>

        <div className="card-body">

          {bookings.length > 0 ? (

            <table className="table table-bordered table-hover">

              <thead className="table-dark">
                <tr>
                  <th>Customer</th>
                  <th>Email</th>
                  <th>Event</th>
                  <th>Booking Date</th>
                  <th>Guests</th>
                  <th>Price</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>

                {bookings.map((booking) => (
                  <tr key={booking._id}>

                    <td>{booking.user?.fullName}</td>

                    <td>{booking.user?.email}</td>

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
                        className="btn btn-danger btn-sm"
                        onClick={() =>
                          updateStatus(
                            booking._id,
                            "Rejected"
                          )
                        }
                      >
                        Reject
                      </button>

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

export default VendorBooking;