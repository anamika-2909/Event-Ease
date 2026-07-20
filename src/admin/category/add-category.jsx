import { useState } from "react";

const AddCategory = () => {
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(category);

    setCategory("");
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
              placeholder="Enter Category Name"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>

          <button className="btn btn-primary">
            Add Category
          </button>

        </form>
      </div>
    </div>
  );
};

export default AddCategory;