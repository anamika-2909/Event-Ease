import { Link } from "react-router-dom";

const Register = () => {
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

              <form>

                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Confirm password"
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

                <button className="btn btn-primary w-100">
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