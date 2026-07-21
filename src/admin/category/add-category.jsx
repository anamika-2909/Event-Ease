import { useState } from "react";
import axiosInstance from "../../service/axiosInstance";

const AddCategory = () => {
  const [form, setForm] = useState({
    categoryName: "",
    status: "Active",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.categoryName.trim()) {
      return alert("Category Name is required");
    }

    try {
      const res = await axiosInstance.post(
        "/api/category/add-category",
        form
      );

      alert(res.data.message);

      setForm({
        categoryName: "",
        status: "Active",
      });
    } catch (err) {
      console.log(err.response?.data);
      alert(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="card shadow-sm border-0">
      <div className="card-header bg-primary text-white">
        <h4 className="mb-0">Add Category</h4>
      </div>

      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-semibold">
              Category Name
            </label>

            <input
              type="text"
              className="form-control"
              name="categoryName"
              placeholder="Enter Category Name"
              value={form.categoryName}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">
              Status
            </label>

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

          <button type="submit" className="btn btn-primary">
            Add Category
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCategory;