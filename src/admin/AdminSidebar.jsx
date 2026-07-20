import React from 'react'

const AdminSidebar = () => {
    return (
        <div
            style={{
                width: "250px",
                height: "100vh",
                background: "#212529",
                color: "#fff",
                position: "fixed",
                left: 0,
                top: 0,
                padding: "20px",
            }}
        >
            <h3>EventEase</h3>
            <hr />

            <p>Dashboard</p>
            <p>Categories</p>
            <p>Events</p>
            <p>Services</p>
            <p>Users</p>
            <p>Vendors</p>
            <p>Bookings</p>
            <p>Reviews</p>
        </div>
    );
};


export default AdminSidebar