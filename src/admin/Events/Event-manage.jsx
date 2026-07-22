import { useEffect, useState } from "react";
import axiosInstance from "../../service/axiosInstance";

const ManageEvent = () => {

  const [events, setEvents] = useState([]);

  const getEvents = async () => {
    try {
      const res = await axiosInstance.get("/event/get-events");
      setEvents(res.data.events);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteEvent = async (id) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this event?"
    );

    if (!confirmDelete) return;

    try {

      const res = await axiosInstance.delete(
        `/event/delete-event/${id}`
      );

      alert(res.data.message);

      getEvents();

    } catch (error) {
      console.log(error);
      alert(error.response?.data?.message);
    }

  };

  useEffect(() => {
    getEvents();
  }, []);


  return (
    <table className="table table-bordered table-hover">

      <thead>
        <tr>
          <th>#</th>
          <th>Image</th>
          <th>Event</th>
          <th>Category</th>
          <th>Location</th>
          <th>Price</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>

        {events.map((event, index) => (

          <tr key={event._id}>

            <td>{index + 1}</td>

            <td>
              <img
                src={`http://localhost:5000/uploads/${event.image}`}
                width="70"
                height="60"
                alt=""
              />
            </td>

            <td>{event.eventName}</td>

            <td>{event.category?.categoryName}</td>

            <td>{event.location}</td>

            <td>₹ {event.price}</td>

            <td>{event.status}</td>

            <td>

              <button
                className="btn btn-warning btn-sm me-2"
                onClick={() => handleEdit(event)}
              >
                Edit
              </button>

              <button
                className="btn btn-danger btn-sm"
                onClick={() => deleteEvent(event._id)}
              >
                Delete
              </button>

            </td>

          </tr>

        ))}

      </tbody>

    </table>
  );
};

export default ManageEvent;