import { useEffect, useState } from "react";
import axiosInstance from "../service/axiosInstance";

const MyEvents = () => {
  const [events, setEvents] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));

  const getEvents = async () => {
    try {
      const res = await axiosInstance.get(`/event/vendor/${user._id}`);
      setEvents(res.data.events);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <div className="container-fluid">
      <h3 className="mb-4">My Events</h3>

      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Image</th>
            <th>Event</th>
            <th>Category</th>
            <th>Location</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {events.map((event) => (
            <tr key={event._id}>
              <td>
                <img
                  src={`http://localhost:5000/uploads/${event.image}`}
                  width="80"
                  alt=""
                />
              </td>

              <td>{event.eventName}</td>
              <td>{event.category?.categoryName}</td>
              <td>{event.location}</td>
              <td>₹ {event.price}</td>
              <td>{event.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyEvents;