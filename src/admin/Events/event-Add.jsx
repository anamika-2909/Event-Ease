import { useEffect } from "react";
import { useState } from "react";
import axiosInstance from "../../service/axiosInstance";

const AddEvent = () => {
  const [categories, setCategories] = useState([]);
  const [event, setEvent] = useState({
    eventName: "",
    category: "",
    location: "",
    price: "",
    description: "",
    status: "Active",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent({ ...event, [name]: value });
  };

  const handleImage = (e) => {
    setEvent({ ...event, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("eventName", event.eventName);
      formData.append("category", event.category);
      formData.append("location", event.location);
      formData.append("price", event.price);
      formData.append("description", event.description);
      formData.append("status", event.status);
      formData.append("image", event.image);

      const res = await axiosInstance.post(
        "/event/add-event",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert(res.data.message);

      setEvent({
        eventName: "",
        category: "",
        location: "",
        price: "",
        description: "",
        status: "Active",
        image: null,
      });

    } catch (error) {
      console.log(error);
      alert(error.response?.data?.message);
    }
  };

  const getCategories = async () => {
    try {
      const res = await axiosInstance.get("/category/get-category");
      setCategories(res.data.categories);
    } catch (error) {
      console.log(error);
    }
  };

   useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="container-fluid">

      <div className="card shadow-sm border-0">

        <div className="card-header bg-primary text-white">
          <h4 className="mb-0">Add New Event</h4>
        </div>

        <div className="card-body">

          <form onSubmit={handleSubmit}>

            <div className="row">

              <div className="col-md-6 mb-3">
                <label className="form-label">Event Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="eventName"
                  value={event.eventName}
                  onChange={handleChange}
                  placeholder="Enter Event Name"
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Category</label>
                <select
                  className="form-select"
                  name="category"
                  value={event.category}
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
                  value={event.location}
                  onChange={handleChange}
                  placeholder="Enter Location"
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Price</label>
                <input
                  type="number"
                  className="form-control"
                  name="price"
                  value={event.price}
                  onChange={handleChange}
                  placeholder="Enter Price"
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Event Image</label>
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
                  value={event.status}
                  onChange={handleChange}
                >
                  <option>Active</option>
                  <option>Inactive</option>
                </select>
              </div>

              <div className="col-12 mb-3">
                <label className="form-label">Description</label>
                <textarea
                  className="form-control"
                  rows="4"
                  name="description"
                  value={event.description}
                  onChange={handleChange}
                  placeholder="Enter Event Description"
                ></textarea>
              </div>

            </div>

            <button className="btn btn-primary">
              Add Event
            </button>

          </form>

        </div>

      </div>

    </div>
  );
};

export default AddEvent;