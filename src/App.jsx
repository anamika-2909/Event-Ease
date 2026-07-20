import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Layout from "./Layout/layout";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Servicespage from "./pages/service";
import Event from "./pages/event";
import Vendor from "./Vendor/vendor";
import Dashboard from "./admin/AdminDashboard";
import AdminLayout from "./Layout/Adminlayout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/service" element={<Servicespage />} />
          <Route path="/event" element={<Event />} />
          <Route path="/vendor" element={<Vendor />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
        </Route>


      </Routes>

      <Routes path="/admin" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />

        {/* <Route path="add-category" element={<AddCategory />} />
        <Route path="manage-category" element={<ManageCategory />} />
        <Route path="add-event" element={<AddEvent />} />
        <Route path="manage-event" element={<ManageEvent />} />
        <Route path="add-service" element={<AddService />} />
        <Route path="manage-service" element={<ManageService />} />
        <Route path="users" element={<ManageUsers />} />
        <Route path="vendors" element={<ManageVendors />} />
        <Route path="bookings" element={<ManageBookings />} />
        <Route path="reviews" element={<ManageReviews />} /> */}
      </Routes>

    </BrowserRouter>
  );
};

export default App;