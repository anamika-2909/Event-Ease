import React from 'react'
import axiosInstance from '../../service/axiosInstance';
import { useState } from 'react';
import { useEffect } from 'react';


const Manageservice = () => {
    const [services, setServices] = useState([]);
const [categories, setCategories] = useState([]);
const [editId, setEditId] = useState(null);


    const [form, setForm] = useState({
  serviceName: "",
  category: "",
  price: "",
  description: "",
  status: "Active",
  image: null,
});

const getServices = async () => {
  try {
    const res = await axiosInstance.get("/service/get-services");
    setServices(res.data.services);
  } catch (error) {
    console.log(error);
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

const deleteService = async (id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this service?"
  );

  if (!confirmDelete) return;

  try {
    const res = await axiosInstance.delete(
      `/service/delete-service/${id}`
    );

    alert(res.data.message);

    getServices();
  } catch (error) {
    console.log(error);
    alert(error.response?.data?.message);
  }
};

const handleEdit = (service) => {
  setEditId(service._id);

  setForm({
    serviceName: service.serviceName,
    category: service.category._id,
    price: service.price,
    description: service.description,
    status: service.status,
    image: null,
  });

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const handleUpdate = async (e) => {
  e.preventDefault();

  try {
    const formData = new FormData();

    formData.append("serviceName", form.serviceName);
    formData.append("category", form.category);
    formData.append("price", form.price);
    formData.append("description", form.description);
    formData.append("status", form.status);

    if (form.image) {
      formData.append("image", form.image);
    }

    const res = await axiosInstance.put(
      `/service/update-service/${editId}`,
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
      serviceName: "",
      category: "",
      price: "",
      description: "",
      status: "Active",
      image: null,
    });

    getServices();

  } catch (error) {
    console.log(error);
    alert(error.response?.data?.message);
  }
};
useEffect(() => {
  getServices();
  getCategories();
}, []);
  return (
   <>
  {editId && (
  <div className="card shadow-sm border-0 mb-4">
    <div className="card-header bg-warning text-dark">
      <h4 className="mb-0">Edit Service</h4>
    </div>

    <div className="card-body">
      <form onSubmit={handleUpdate}>
        <div className="row">

          <div className="col-md-6 mb-3">
            <label className="form-label">Service Name</label>
            <input
              type="text"
              className="form-control"
              name="serviceName"
              value={form.serviceName}
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
          Update Service
        </button>

        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => setEditId(null)}
        >
          Cancel
        </button>
      </form>
    </div>
  </div>
)}

<table className="table table-bordered table-hover">

  <thead className="table-dark">
    <tr>
      <th>#</th>
      <th>Image</th>
      <th>Service Name</th>
      <th>Category</th>
      <th>Price</th>
      <th>Description</th>
      <th>Status</th>
      <th>Action</th>
    </tr>
  </thead>

  <tbody>
    {services.length > 0 ? (
      services.map((service, index) => (
        <tr key={service._id}>
          <td>{index + 1}</td>

          <td>
            <img
              src={`http://localhost:5000/uploads/${service.image}`}
              width="70"
              height="60"
              alt={service.serviceName}
            />
          </td>

          <td>{service.serviceName}</td>

          <td>{service.category?.categoryName}</td>

          <td>₹ {service.price}</td>

          <td>{service.description}</td>

          <td>{service.status}</td>

          <td>
            <button
              className="btn btn-warning btn-sm me-2"
              onClick={() => handleEdit(service)}
            >
              Edit
            </button>

            <button
              className="btn btn-danger btn-sm"
              onClick={() => deleteService(service._id)}
            >
              Delete
            </button>
          </td>
        </tr>
      ))
    ) : (
      <tr>
        <td colSpan="8" className="text-center">
          No Services Found
        </td>
      </tr>
    )}
  </tbody>

</table>
   </>
  )
}

export default Manageservice