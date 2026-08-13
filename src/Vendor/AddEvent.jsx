import React, { useEffect, useState } from "react";
import axiosInstance from "../../service/axiosInstance";

const AddEventVendor = () => {

  const [categories, setCategories] = useState([]);

  const [event, setEvent] = useState({
    eventName: "",
    category: "",
    location: "",
    price: "",
    description: "",
    image: null,
  });

  const handleChange = (e) => {
    setEvent({
      ...event,
      [e.target.name]: e.target.value,
    });
  };

  const handleImage = (e) => {
    setEvent({
      ...event,
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const user = JSON.parse(localStorage.getItem("user"));

      if (!user?._id) {
        alert("Please login again");
        return;
      }

      const formData = new FormData();

      formData.append("eventName", event.eventName);
      formData.append("category", event.category);
      formData.append("location", event.location);
      formData.append("price", event.price);
      formData.append("description", event.description);
      formData.append("vendor", user._id);

      if (event.image) {
        formData.append("image", event.image);
      }

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
        image: null,
      });

    } catch (error) {

      console.log(error);

      alert(
        error.response?.data?.message ||
        "Something went wrong"
      );
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

          <div className="alert alert-info">
            Your event will be sent to admin for approval.
          </div>

          <form onSubmit={handleSubmit}>

            <div className="row">

              {/* Event Name */}

              <div className="col-md-6 mb-3">

                <label className="form-label">
                  Event Name
                </label>

                <input
                  type="text"
                  className="form-control"
                  name="eventName"
                  value={event.eventName}
                  onChange={handleChange}
                  placeholder="Enter Event Name"
                  required
                />

              </div>

              {/* Category */}

              <div className="col-md-6 mb-3">

                <label className="form-label">
                  Category
                </label>

                <select
                  className="form-select"
                  name="category"
                  value={event.category}
                  onChange={handleChange}
                  required
                >

                  <option value="">
                    Select Category
                  </option>

                  {categories.map((cat) => (

                    <option
                      key={cat._id}
                      value={cat._id}
                    >
                      {cat.categoryName}
                    </option>

                  ))}

                </select>

              </div>

              {/* Location */}

              <div className="col-md-6 mb-3">

                <label className="form-label">
                  Location
                </label>

                <input
                  type="text"
                  className="form-control"
                  name="location"
                  value={event.location}
                  onChange={handleChange}
                  placeholder="Enter Location"
                  required
                />

              </div>

              {/* Price */}

              <div className="col-md-6 mb-3">

                <label className="form-label">
                  Price
                </label>

                <input
                  type="number"
                  className="form-control"
                  name="price"
                  value={event.price}
                  onChange={handleChange}
                  placeholder="Enter Price"
                  required
                />

              </div>

              {/* Image */}

              <div className="col-md-6 mb-3">

                <label className="form-label">
                  Event Image
                </label>

                <input
                  type="file"
                  className="form-control"
                  onChange={handleImage}
                  accept="image/*"
                />

              </div>

              {/* Description */}

              <div className="col-12 mb-3">

                <label className="form-label">
                  Description
                </label>

                <textarea
                  className="form-control"
                  rows="4"
                  name="description"
                  value={event.description}
                  onChange={handleChange}
                  placeholder="Enter Event Description"
                  required
                />

              </div>

            </div>

            <button
              type="submit"
              className="btn btn-primary"
            >
              Add Event
            </button>

          </form>

        </div>

      </div>

    </div>
  );
};

export default AddEventVendor;