import { useEffect, useState } from "react";
import axiosInstance from "../../service/axiosInstance";

const ManageCategory = () => {
  const [categories, setCategories] = useState([]);

  const [form, setForm] = useState({
    categoryName: "",
    status: "Active",
  });

  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
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

  useEffect(() => {
    getCategories();
  }, []);

  const handleEdit = (category) => {
    setEditId(category._id);

    setForm({
      categoryName: category.categoryName,
      status: category.status,
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const updateCategory = async (e) => {
    e.preventDefault();

    try {
      const res = await axiosInstance.put(
        `/category/update-category/${editId}`,
        form
      );

      alert(res.data.message);

      setEditId(null);

      setForm({
        categoryName: "",
        status: "Active",
      });

      getCategories();
    } catch (error) {
      console.log(error);
      alert(error.response?.data?.message);
    }
  };

  const deleteCategory = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this category?"
    );

    if (!confirmDelete) return;

    try {
      const res = await axiosInstance.delete(
        `/category/delete-category/${id}`
      );

      alert(res.data.message);

      getCategories();
    } catch (error) {
      console.log(error);
      alert(error.response?.data?.message);
    }
  };
    return (
    <div className="card shadow-sm border-0">

      <div className="card-header bg-success text-white">
        <h4 className="mb-0">Manage Categories</h4>
      </div>

      <div className="card-body">

        {editId && (
          <div className="card mb-4 border-warning">
            <div className="card-header bg-warning">
              <h5 className="mb-0">Edit Category</h5>
            </div>

            <div className="card-body">

              <form onSubmit={updateCategory}>

                <div className="mb-3">
                  <label className="form-label">
                    Category Name
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    name="categoryName"
                    value={form.categoryName}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">
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

                <button
                  type="submit"
                  className="btn btn-success me-2"
                >
                  Update Category
                </button>

                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => {
                    setEditId(null);

                    setForm({
                      categoryName: "",
                      status: "Active",
                    });
                  }}
                >
                  Cancel
                </button>

              </form>

            </div>
          </div>
        )}

        <table className="table table-bordered table-hover">

          <thead>
            <tr>
              <th>#</th>
              <th>Category Name</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {categories.length > 0 ? (
              categories.map((category, index) => (
                <tr key={category._id}>

                  <td>{index + 1}</td>

                  <td>{category.categoryName}</td>

                  <td>{category.status}</td>

                  <td>

                    <button
                      className="btn btn-warning btn-sm me-2"
                      onClick={() => handleEdit(category)}
                    >
                      Edit
                    </button>

                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => deleteCategory(category._id)}
                    >
                      Delete
                    </button>

                  </td>

                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center">
                  No Categories Found
                </td>
              </tr>
            )}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default ManageCategory;