import { useEffect, useState } from "react";
import axiosInstance from "../../service/axiosInstance";

const ManageEvent = () => {

  const [events, setEvents] = useState([]);
  const [categories, setCategories] = useState([]);
  const [editId, setEditId] = useState(null);

  const [form, setForm] = useState({
    eventName: "",
    category: "",
    location: "",
    price: "",
    description: "",
    status: "Active",
    image: null,
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleImage = (e) => {
    setForm({
      ...form,
      image: e.target.files[0],
    });
  };

  const getCategories = async () => {
    try {
      const res = await axiosInstance.get("/category/get-category");
      setCategories(res.data.categories);
    } catch (error) {
      console.log(error);
    }
  };

  const getEvents = async () => {
    try {
      const res = await axiosInstance.get("/event/get-events");
      setEvents(res.data.events);
    } catch (error) {
      console.log(error);
    }
  };

 
  const handleEdit = (event) => {
    setEditId(event._id);

    setForm({
      eventName: event.eventName,
      category: event.category._id,
      location: event.location,
      price: event.price,
      description: event.description,
      status: event.status,
      image: null,
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const updateEvent = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("eventName", form.eventName);
      formData.append("category", form.category);
      formData.append("location", form.location);
      formData.append("price", form.price);
      formData.append("description", form.description);
      formData.append("status", form.status);

      if (form.image) {
        formData.append("image", form.image);
      }

      const res = await axiosInstance.put(
        `/event/update-event/${editId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert(res.data.message);

      setEditId(null);

      setForm({
        eventName: "",
        category: "",
        location: "",
        price: "",
        description: "",
        status: "Active",
        image: null,
      });

      getEvents();

    } catch (error) {
      console.log(error);
      alert(error.response?.data?.message);
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
    getCategories();
  }, []);

  return (
    <div className="container-fluid">

      {editId && (
        <div className="card shadow-sm border-0 mb-4">

          <div className="card-header bg-warning">
            <h4 className="mb-0">Edit Event</h4>
          </div>

          <div className="card-body">

            <form onSubmit={updateEvent}>

              <div className="row">

                <div className="col-md-6 mb-3">
                  <label className="form-label">Event Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="eventName"
                    value={form.eventName}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Category</label>

                  <select
                    className="form-select"
                    name="category"
                    value={form.category}
                    onChange={handleChange}
                  >
                    <option value="">Select Category</option>

                    {categories.map((cat) => (
                      <option key={cat._id} value={cat._id}>
                        {cat.categoryName}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Location</label>
                  <input
                    type="text"
                    className="form-control"
                    name="location"
                    value={form.location}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Price</label>
                  <input
                    type="number"
                    className="form-control"
                    name="price"
                    value={form.price}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Image</label>
                  <input
                    type="file"
                    className="form-control"
                    onChange={handleImage}
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Status</label>

                  <select
                    className="form-select"
                    name="status"
                    value={form.status}
                    onChange={handleChange}
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>

                <div className="col-12 mb-3">
                  <label className="form-label">Description</label>

                  <textarea
                    className="form-control"
                    rows="4"
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                  />
                </div>

              </div>

              <button className="btn btn-success me-2">
                Update Event
              </button>

              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => {
                  setEditId(null);

                  setForm({
                    eventName: "",
                    category: "",
                    location: "",
                    price: "",
                    description: "",
                    status: "Active",
                    image: null,
                  });
                }}
              >
                Cancel
              </button>

            </form>

          </div>

        </div>
      )}

      <div className="card shadow-sm border-0">

        <div className="card-header bg-success text-white">
          <h4 className="mb-0">Manage Events</h4>
        </div>

        <div className="card-body">

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

              {events.length > 0 ? (
                events.map((event, index) => (
                  <tr key={event._id}>

                    <td>{index + 1}</td>

                    <td>
                      <img
                        src={`http://localhost:5000/uploads/${event.image}`}
                        alt={event.eventName}
                        width="70"
                        height="60"
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
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="text-center">
                    No Events Found
                  </td>
                </tr>
              )}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
};

export default ManageEvent;