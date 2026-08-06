import { useEffect, useState } from "react";
import axiosInstance from "../service/axiosInstance";

const Vendors = () => {
  const [vendors, setVendors] = useState([]);

  const getVendors = async () => {
    try {
      const res = await axiosInstance.get("/vendor/all-vendors");
      setVendors(res.data.vendors);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getVendors();
  }, []);

  return (
    <div className="container-fluid">

      <div className="card shadow">

        <div className="card-header bg-primary text-white">
          <h3 className="mb-0">Manage Vendors</h3>
        </div>

        <div className="card-body">

          <table className="table table-bordered table-hover">

            <thead className="table-dark">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>

              {vendors.map((vendor) => (

                <tr key={vendor._id}>

                  <td>{vendor.fullName}</td>

                  <td>{vendor.email}</td>

                  <td>{vendor.phone}</td>

                  <td>
                    <span
                      className={`badge ${
                        vendor.status === "Approved"
                          ? "bg-success"
                          : vendor.status === "Pending"
                          ? "bg-warning text-dark"
                          : "bg-danger"
                      }`}
                    >
                      {vendor.status}
                    </span>
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
};

export default Vendors;