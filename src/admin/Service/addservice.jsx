import React, { useState } from "react";
import { useEffect } from "react";
import axiosInstance from "../../service/axiosInstance";

const AddService = () => {
   const [categories, setCategories] = useState([]);

  const [service, setService] = useState({
    serviceName: "",
    category: "",
    price: "",
    description: "",
    image: null,
    status: "Active",
  });

    const getCategories = async () => {
        try {
            const res = await axiosInstance.get("/category/get-category");
            setCategories(res.data.categories);
        } catch (error) {
            console.log(error);
        }
    };
    const handleChange = (e) => {
        setService({ ...service, [e.target.name]: e.target.value });
    };

    const handleImage = (e) => {
        setService({
            ...service,
            image: e.target.files[0],
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData();

            formData.append("serviceName", service.serviceName);
            formData.append("category", service.category);
            formData.append("price", service.price);
            formData.append("description", service.description);
            formData.append("status", service.status);
            formData.append("image", service.image);

            const res = await axiosInstance.post(
                "/service/add-service",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            alert(res.data.message);

            setService({
                serviceName: "",
                category: "",
                price: "",
                description: "",
                image: null,
                status: "Active",
            });

        } catch (error) {
            console.log(error);
            alert(error.response?.data?.message);
        }
    };

    useEffect(() => {
        getCategories();
    }, []);
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

                                        {categories.map((cat) => (
                                            <option key={cat._id} value={cat._id}>
                                                {cat.categoryName}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Price</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        name="price"
                                        value={service.price}
                                        onChange={handleChange}
                                        placeholder="Enter Price"
                                        required
                                    />
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
                                        type="file"
                                        className="form-control"
                                        onChange={handleImage}
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