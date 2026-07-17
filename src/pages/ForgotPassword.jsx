import { Link } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";

const ForgotPassword = () => {
  return (
    <section className="forgot-section">
      <div className="container">
        <div className="row justify-content-center align-items-center min-vh-100">

          <div className="col-md-6 col-lg-5">

            <div className="card shadow border-0 p-5 forgot-card">

              <div className="text-center mb-4">

                <h2 className="fw-bold">
                  Forgot Password?
                </h2>

                <p className="text-muted">
                  Enter your registered email address and we'll send you a password reset link.
                </p>

              </div>

              <form>

                <label className="form-label">
                  Email Address
                </label>

                <div className="input-group mb-4">

                  <span className="input-group-text">
                    <FaEnvelope />
                  </span>

                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                  />

                </div>

                <button className="btn btn-primary w-100 py-2">
                  Send Reset Link
                </button>

              </form>

              <div className="text-center mt-4">

                <Link
                  to="/login"
                  className="text-decoration-none"
                >
                  ← Back to Login
                </Link>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;