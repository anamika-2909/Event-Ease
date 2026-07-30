import { useEffect, useState } from "react";
import axiosInstance from "../service/axiosInstance";

const MyServices = () => {

  const [services, setServices] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));

  const getServices = async () => {
    try {

      const res = await axiosInstance.get(
        `/service/vendor/${user._id}`
      );

      setServices(res.data.services);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getServices();
  }, []);

  return (
    <div className="container-fluid">

      <h3 className="mb-4">
        My Services
      </h3>

      <table className="table table-bordered">

        <thead className="table-dark">
          <tr>
            <th>Image</th>
            <th>Service</th>
            <th>Category</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>

          {services.map((service) => (
            <tr key={service._id}>

              <td>
                <img
                  src={`http://localhost:5000/uploads/${service.image}`}
                  width="80"
                  alt=""
                />
              </td>

              <td>{service.serviceName}</td>

              <td>{service.category?.categoryName}</td>

              <td>₹ {service.price}</td>

              <td>{service.status}</td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
};

export default MyServices;