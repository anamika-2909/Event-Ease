import { useEffect, useState } from "react";
import axiosInstance from "../service/axiosInstance";

const VendorProfile = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    const [passwordForm, setPasswordForm] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
    });

    const [form, setForm] = useState({
        fullName: "",
        email: "",
        phone: "",
    });

    const getProfile = async () => {
        try {
            const res = await axiosInstance.get(`/auth/profile/${user._id}`);

            setForm({
                fullName: res.data.user.fullName,
                email: res.data.user.email,
                phone: res.data.user.phone || "",
            });
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getProfile();
    }, []);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const updateProfile = async (e) => {
        e.preventDefault();

        try {
            const res = await axiosInstance.put(
                `/auth/profile/${user._id}`,
                form
            );

            alert(res.data.message);

            localStorage.setItem("user", JSON.stringify(res.data.user));

            getProfile();
        } catch (error) {
            console.log(error);
            alert("Profile Update Failed");
        }
    };

    const changePassword = async (e) => {
        e.preventDefault();

        try {
            const res = await axiosInstance.put(
                `/auth/change-password/${user._id}`,
                passwordForm
            );

            alert(res.data.message);

            setPasswordForm({
                currentPassword: "",
                newPassword: "",
                confirmPassword: "",
            });

        } catch (error) {
            alert(error.response?.data?.message || "Password Change Failed");
        }
    };
    return (
        <div className="container-fluid">

            <div className="card shadow border-0">

                <div className="card-header bg-primary text-white">
                    <h4 className="mb-0">Vendor Profile</h4>
                </div>

                <div className="card-body">

                    <form onSubmit={updateProfile}>

                        <div className="mb-3">
                            <label>Full Name</label>

                            <input
                                type="text"
                                name="fullName"
                                className="form-control"
                                value={form.fullName}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mb-3">
                            <label>Email</label>

                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                value={form.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mb-3">
                            <label>Phone</label>

                            <input
                                type="text"
                                name="phone"
                                className="form-control"
                                value={form.phone}
                                onChange={handleChange}
                            />
                        </div>

                        <button className="btn btn-primary">
                            Update Profile
                        </button>

                    </form>

                </div>
            </div>

             <div className="card shadow border-0 mt-4">

                    <div className="card-header bg-dark text-white">
                        <h4>Change Password</h4>
                    </div>

                    <div className="card-body">

                        <form onSubmit={changePassword}>

                            <div className="mb-3">
                                <label>Current Password</label>

                                <input
                                    type="password"
                                    className="form-control"
                                    value={passwordForm.currentPassword}
                                    onChange={(e) =>
                                        setPasswordForm({
                                            ...passwordForm,
                                            currentPassword: e.target.value,
                                        })
                                    }
                                />
                            </div>

                            <div className="mb-3">
                                <label>New Password</label>

                                <input
                                    type="password"
                                    className="form-control"
                                    value={passwordForm.newPassword}
                                    onChange={(e) =>
                                        setPasswordForm({
                                            ...passwordForm,
                                            newPassword: e.target.value,
                                        })
                                    }
                                />
                            </div>

                            <div className="mb-3">
                                <label>Confirm Password</label>

                                <input
                                    type="password"
                                    className="form-control"
                                    value={passwordForm.confirmPassword}
                                    onChange={(e) =>
                                        setPasswordForm({
                                            ...passwordForm,
                                            confirmPassword: e.target.value,
                                        })
                                    }
                                />
                            </div>

                            <button className="btn btn-success">
                                Change Password
                            </button>

                        </form>

                    </div>

                </div>

        </div>
    );
};

export default VendorProfile;