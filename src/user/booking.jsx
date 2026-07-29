import { useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../service/axiosInstance";

const Booking = () => {
  const { id } = useParams();

  const [form, setForm] = useState({
    bookingDate: "",
    guests: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // User ID login pachi localStorage mathi levano
      const user = localStorage.getItem("userId");

      const res = await axiosInstance.post("/booking/add-booking", {
        user,
        event: id,
        bookingDate: form.bookingDate,
        guests: form.guests,
        message: form.message,
      });

      alert(res.data.message);

      setForm({
        bookingDate: "",
        guests: "",
        message: "",
      });

    } catch (error) {
      console.log(error);
      alert(error.response?.data?.message || "Booking Failed");
    }
  };

  return (
    <div className="container py-5">
      <div className="card shadow border-0">
        <div className="card-header bg-primary text-white">
          <h4 className="mb-0">Book Event</h4>
        </div>

        <div className="card-body">
          <form onSubmit={handleSubmit}>

            <div className="mb-3">
              <label className="form-label">Booking Date</label>
              <input
                type="date"
                className="form-control"
                name="bookingDate"
                value={form.bookingDate}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Guests</label>
              <input
                type="number"
                className="form-control"
                name="guests"
                value={form.guests}
                onChange={handleChange}
                placeholder="Enter Number of Guests"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea
                className="form-control"
                rows="4"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Any Special Requirements"
              ></textarea>
            </div>

            <button className="btn btn-primary">
              Confirm Booking
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;