import { FaEdit, FaTrash } from "react-icons/fa";

const ManageEvent = () => {
  const events = [
    {
      id: 1,
      image: "https://via.placeholder.com/60",
      name: "Royal Wedding",
      category: "Wedding",
      location: "Ahmedabad",
      price: "₹50,000",
      status: "Active",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/60",
      name: "Birthday Bash",
      category: "Birthday",
      location: "Surat",
      price: "₹15,000",
      status: "Inactive",
    },
  ];

  return (
    <div className="container-fluid">

      <div className="card shadow-sm border-0">

        <div className="card-header bg-success text-white d-flex justify-content-between align-items-center">
          <h4 className="mb-0">Manage Events</h4>

          <input
            type="text"
            className="form-control w-25"
            placeholder="Search Event..."
          />
        </div>

        <div className="card-body table-responsive">

          <table className="table table-hover align-middle">

            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Event Name</th>
                <th>Category</th>
                <th>Location</th>
                <th>Price</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              {events.map((event, index) => (
                <tr key={event.id}>

                  <td>{index + 1}</td>

                  <td>
                    <img
                      src={event.image}
                      alt={event.name}
                      width="60"
                      height="60"
                      className="rounded"
                    />
                  </td>

                  <td>{event.name}</td>

                  <td>{event.category}</td>

                  <td>{event.location}</td>

                  <td>{event.price}</td>

                  <td>
                    <span
                      className={`badge ${
                        event.status === "Active"
                          ? "bg-success"
                          : "bg-danger"
                      }`}
                    >
                      {event.status}
                    </span>
                  </td>

                  <td>
                    <button className="btn btn-warning btn-sm me-2">
                      <FaEdit />
                    </button>

                    <button className="btn btn-danger btn-sm">
                      <FaTrash />
                    </button>
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

export default ManageEvent;