import { useEffect, useState } from "react";
import axiosInstance from "../service/axiosInstance";


const Users = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const res = await axiosInstance.get("/user/users");
      setUsers(res.data.users);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const approveVendor = async (id) => {
    try {
      const res = await axiosInstance.put(`/user/approve/${id}`);
      alert(res.data.message);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  const rejectVendor = async (id) => {
    try {
      const res = await axiosInstance.put(`/user/reject/${id}`);
      alert(res.data.message);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (id) => {
    if (!window.confirm("Are you sure you want to delete this user?")) {
      return;
    }

    try {
      const res = await axiosInstance.delete(`/user/delete/${id}`);
      alert(res.data.message);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container-fluid">

      <div className="card shadow">

        <div className="card-header bg-primary text-white">
          <h3 className="mb-0">Manage Users</h3>
        </div>

        <div className="card-body">

          <table className="table table-bordered table-hover">

            <thead className="table-dark">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th width="250">Action</th>
              </tr>
            </thead>

            <tbody>

              {users.map((user) => (
                <tr key={user._id}>

                  <td>{user.fullName}</td>

                  <td>{user.email}</td>

                  <td>
                    <span
                      className={`badge ${
                        user.role === "vendor"
                          ? "bg-warning text-dark"
                          : "bg-info"
                      }`}
                    >
                      {user.role}
                    </span>
                  </td>

                  <td>
                    <span
                      className={`badge ${
                        user.status === "Approved"
                          ? "bg-success"
                          : user.status === "Rejected"
                          ? "bg-danger"
                          : "bg-secondary"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>

                  <td>

                    {user.role === "vendor" &&
                      user.status === "Pending" && (
                        <>
                          <button
                            className="btn btn-success btn-sm me-2"
                            onClick={() => approveVendor(user._id)}
                          >
                            Approve
                          </button>

                          <button
                            className="btn btn-warning btn-sm me-2"
                            onClick={() => rejectVendor(user._id)}
                          >
                            Reject
                          </button>
                        </>
                      )}

                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => deleteUser(user._id)}
                    >
                      Delete
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

export default Users;