import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEnvelope, FaLock } from "react-icons/fa";
import { useState } from "react";

const Login = () => {
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axiosInstance.post("/user/login", form);

            if (res.data.success) {
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("user", JSON.stringify(res.data.user));

                alert("Login Successfully");

                navigate("/");
            } else {
                alert(res.data.message);
            }
        } catch (err) {
            alert(err.response?.data?.message || "Login Failed");
        }
    };
    return (
        <section className="login-section">
            <div className="container">
                <div className="row justify-content-center align-items-center min-vh-100">

                    <div className="col-lg-10">

                        <div className="card shadow-lg border-0 overflow-hidden">

                            <div className="row g-0">

                                {/* Left Side */}

                                <div className="col-lg-6 login-left text-white">

                                    <h2 className="fw-bold mt-3">
                                        Welcome Back
                                    </h2>

                                    <p>
                                        Login to continue planning your dream events.
                                    </p>

                                    <div className="feature-list">

                                        <p>✔ Birthday Parties</p>

                                        <p>✔ Wedding Planning</p>

                                        <p>✔ Anniversary Celebration</p>

                                        <p>✔ Trusted Vendors</p>

                                    </div>
                                </div>
                                {/* Right Side */}
                                <div className="col-lg-6">
                                    <div className="p-5">
                                        <h2 className="fw-bold mb-2">
                                            Login
                                        </h2>
                                        <p className="text-muted mb-4">
                                            Login to your account
                                        </p>
                                        <form onSubmit={handleSubmit}>
                                            <div className="mb-3">
                                                <label>Email</label>
                                                <div className="input-group">
                                                    <span className="input-group-text">
                                                        <FaEnvelope />
                                                    </span>
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        placeholder="Enter Email"
                                                        name="email"
                                                        value={form.email}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                            {/* Password */}

                                            <div className="mb-3">

                                                <label>Password</label>

                                                <div className="input-group">

                                                    <span className="input-group-text">
                                                        <FaLock />
                                                    </span>

                                                    <input
                                                        type="password"
                                                        className="form-control"
                                                        placeholder="Enter Password"
                                                        name="password"
                                                        value={form.password}
                                                        onChange={handleChange}
                                                    />

                                                    <span
                                                        className="input-group-text"
                                                        style={{ cursor: "pointer" }}
                                                        onClick={() => setShowPassword(!showPassword)}
                                                    >
                                                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                                                    </span>
                                                </div>

                                            </div>

                                            <div className="d-flex justify-content-between mb-4">

                                                <div className="form-check">

                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id="remember"
                                                    />

                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="remember"
                                                    >
                                                        Remember Me
                                                    </label>

                                                </div>

                                                <Link
                                                    to="/forgot-password"
                                                    className="text-decoration-none"
                                                >
                                                    Forgot Password?
                                                </Link>

                                            </div>

                                            <button type="submit" className="btn btn-primary w-100 py-2">
                                                Login
                                            </button>

                                        </form>

                                        <p className="text-center mt-4">

                                            Don't have an account?{" "}

                                            <Link to="/register">
                                                Register
                                            </Link>

                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default Login;