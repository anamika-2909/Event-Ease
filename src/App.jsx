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
import Event from "./user/event";
import Vendor from "./Vendor/vendor";
import Dashboard from "./admin/AdminDashboard";
import AdminLayout from "./Layout/Adminlayout";
import AddCategory from "./admin/category/add-category";
import ManageCategory from "./admin/category/manage-category";
import AddEvent from "./admin/Events/event-Add";
import ManageEvent from "./admin/Events/Event-manage";
import AddService from "./admin/Service/addservice";
import Manageservice from "./admin/Service/manageservice";
import EventDetails from "./user/Eventdetail";
import Booking from "./user/Booking";
import MyBookings from "./user/MyBookings";
import ManageBooking from "./admin/Booking/ManageBooking";
import VendorLayout from "./Layout/VendorLayout";
import VendorDashboard from "./Vendor/Dashboard";
import MyServices from "./Vendor/MyServices";
import MyEvents from "./Vendor/MyEvents";
import VendorBooking from "./Vendor/VendorMyBookings";
import VendorProfile from "./Vendor/VendorProfile";
import Users from "./admin/user";
import Vendors from "./admin/Vendors";
import Reviews from "./admin/Reviews";
import AddEventVendor from "./Vendor/AddEvent";





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
          <Route path="/Eventdetail/:id" element={<EventDetails />} />
          <Route path="/vendor" element={<Vendor />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/booking/:id" element={<Booking />} />
          <Route path="/my-bookings" element={<MyBookings />} />
        </Route>

        {/* Admin Layout */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="add-category" element={<AddCategory />} />
          <Route path="manage-category" element={<ManageCategory />} />
          <Route path="add-event" element={<AddEvent />} />
          <Route path="manage-event" element={<ManageEvent />} />
          <Route path="add-service" element={<AddService />} />
          <Route path="manage-service" element={<Manageservice />} />
          <Route path="manage-booking" element={<ManageBooking />} />
          <Route path="user" element={<Users />} />
          <Route path="vendors" element={<Vendors />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>

        {/* Vendor Layout */}
        <Route path="/vendor" element={<VendorLayout />}>
          <Route path="Dashboard" element={<VendorDashboard />} />
          <Route path="MyEvents" element={<MyEvents />} />
          <Route path="VendorMyBookings" element={<VendorBooking />} />
          <Route path="MyServices" element={<MyServices />} />
          <Route path="Profile" element={<VendorProfile />} />
          <Route path="AddEvent" element={<AddEventVendor />} />

        </Route>

      </Routes>

      {/* <Routes path="/admin" element={<AdminLayout />}>
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
      {/* </Routes> */}



    </BrowserRouter>
  );
};

export default App;