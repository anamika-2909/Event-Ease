import React, { useState } from "react";

const AddService = () => {
  const [service, setService] = useState({
    serviceName: "",
    category: "",
    description: "",
    image: "",
    status: "Active",
  });

  const handleChange = (e) => {
    setService({ ...service, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(service);
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">

          <div className="card shadow border-0 rounded-4">

            <div className="card-header bg-primary text-white text-center py-3">
              <h3>Add New Service</h3>
            </div>

            <div className="card-body p-4">

              <form onSubmit={handleSubmit}>

                <div className="mb-3">
                  <label className="form-label">Service Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="serviceName"
                    value={service.serviceName}
                    onChange={handleChange}
                    placeholder="Enter Service Name"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Category</label>
                  <select
                    className="form-select"
                    name="category"
                    value={service.category}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Category</option>
                    <option>Wedding</option>
                    <option>Birthday</option>
                    <option>Baby Shower</option>
                    <option>Anniversary</option>
                    <option>Corporate</option>
                    <option>Photography</option>
                    <option>Catering</option>
                    <option>Decoration</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <textarea
                    className="form-control"
                    rows="4"
                    name="description"
                    value={service.description}
                    onChange={handleChange}
                    placeholder="Enter Service Description"
                  ></textarea>
                </div>

                <div className="mb-3">
                  <label className="form-label">Image URL</label>
                  <input
                    type="text"
                    className="form-control"
                    name="image"
                    value={service.image}
                    onChange={handleChange}
                    placeholder="Enter Image URL"
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label">Status</label>
                  <select
                    className="form-select"
                    name="status"
                    value={service.status}
                    onChange={handleChange}
                  >
                    <option>Active</option>
                    <option>Inactive</option>
                  </select>
                </div>

                <div className="d-grid">
                  <button className="btn btn-primary btn-lg">
                    Add Service
                  </button>
                </div>

              </form>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default AddService;