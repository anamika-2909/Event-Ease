import { useEffect, useState,useNavigate  } from "react";
import axiosInstance from "../../service/axiosInstance";

const ManageCategory = () => {
    
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  const getCategories = async () => {
    try {
      const res = await axiosInstance.get("/category/get-category");
      setCategories(res.data.categories);
    } catch (error) {
      console.log(error);
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

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="card shadow-sm border-0">
      <div className="card-header bg-success text-white">
        <h4 className="mb-0">Manage Categories</h4>
      </div>

      <div className="card-body">
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
                    <button className="btn btn-warning btn-sm me-2"
                     onClick={() => navigate(`/edit-category/${category._id}`)}>
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