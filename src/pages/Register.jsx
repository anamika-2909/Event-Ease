import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate} from "react-router-dom";
import axiosInstance from "../service/axiosInstance";

const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    role: "customer",
  });
 const handleSubmit = async (e) => {
  e.preventDefault();

  if (form.password !== form.confirmPassword) {
    return alert("Passwords do not match");
  }

  try {
    const res = await axiosInstance.post("/api/register", {
      fullName: form.name,
      email: form.email,
      password: form.password,
      role: form.role,
    });

    alert(res.data.message);

    navigate("/login");
  } catch (err) {
    console.log(err.response?.data);

    alert(err.response?.data?.message || "Registration Failed");
  }
};
  return (
    <section className="register-section py-5">
      <div className="container">
        <div className="row justify-content-center">

          <div className="col-lg-6">

            <div className="card shadow border-0 p-4 register-card">

              <h2 className="text-center fw-bold">
                Create Account
              </h2>

              <p className="text-center text-muted mb-4">
                Join EventEase Today
              </p>

              <form onSubmit={handleSubmit}>

                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your full name"
                    onChange={(e) => { setForm({ ...form, name: e.target.value }) }}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    onChange={(e) => { setForm({ ...form, email: e.target.value }) }}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Enter your phone number"
                    onChange={(e) => { setForm({ ...form, phone: e.target.value }) }}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                    onChange={(e) => { setForm({ ...form, password: e.target.value }) }}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Confirm password"
                    onChange={(e) => { setForm({ ...form, confirmPassword: e.target.value }) }}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-bold">
                    Account Type
                  </label>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="role"
                      id="customer"
                      defaultChecked
                      onChange={(e) => { setForm({ ...form, role: e.target.value }) }}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="customer"
                    >
                      Customer
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="role"
                      id="vendor"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="vendor"
                    >
                      Vendor / Service Provider
                    </label>
                  </div>

                </div>

                <div className="form-check mb-4">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="terms"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="terms"
                  >
                    I agree to Terms & Conditions
                  </label>
                </div>

                <button className="btn btn-primary w-100"
                type="submit">
                  Create Account
                </button>

              </form>

              <p className="text-center mt-4">
                Already have an account?{" "}
                <Link to="/login">
                  Login
                </Link>
              </p>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Register;