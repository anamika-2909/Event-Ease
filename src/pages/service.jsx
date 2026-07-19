import React from "react";
import {
    FaBirthdayCake, FaHeart, FaBuilding, FaBaby, FaCamera, FaUtensils, FaGlassCheers, FaRing,
    FaSearch, FaUserTie, FaCalendarCheck
} from "react-icons/fa";
import WhyChooseUs from "../components/WhyChooseUs";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";

const Servicespage = () => {
    const services = [
        { icon: <FaBirthdayCake />, title: "Birthday Party" },
        { icon: <FaRing />, title: "Wedding Planning" },
        { icon: <FaBuilding />, title: "Corporate Event" },
        { icon: <FaBaby />, title: "Baby Shower" },
        { icon: <FaHeart />, title: "Engagement" },
        { icon: <FaCamera />, title: "Photography" },
        { icon: <FaUtensils />, title: "Catering" },
        { icon: <FaGlassCheers />, title: "Anniversary" },
    ];
    return (
        <>
            <section className="services-hero d-flex align-items-center justify-content-center text-center">
                <div className="container text-white">
                    <h1 className="display-4 fw-bold">Our Event Services</h1>
                    <p className="lead">
                        We provide complete event planning services to make your celebration
                        unforgettable.
                    </p>
                    <button className="btn btn-primary btn-lg mt-4">
                        Explore Services
                    </button>
                </div>
            </section>
            <Services />
            <WhyChooseUs />

            <section className="container py-5">
                <div className="text-center mb-5">
                    <h2 className="fw-bold">How It Works</h2>
                    <p className="text-muted">
                        Plan your event in just four simple steps.
                    </p>
                </div>

                <div className="row text-center">
                    <div className="col-md-3">
                        <FaSearch size={40} className="text-primary mb-3" />
                        <h5>Choose Service</h5>
                        <p>Select the event service you need.</p>
                    </div>

                    <div className="col-md-3">
                        <FaUserTie size={40} className="text-primary mb-3" />
                        <h5>Select Vendor</h5>
                        <p>Browse and choose a trusted vendor.</p>
                    </div>

                    <div className="col-md-3">
                        <FaCalendarCheck size={40} className="text-primary mb-3" />
                        <h5>Book Event</h5>
                        <p>Confirm your booking in a few clicks.</p>
                    </div>

                    <div className="col-md-3">
                        <FaGlassCheers size={40} className="text-primary mb-3" />
                        <h5>Celebrate</h5>
                        <p>Enjoy your special day without stress.</p>
                    </div>
                </div>
            </section>
            <Testimonials />

            <section className="container-fluid bg-primary text-white py-5">
                <div className="container text-center">
                    <h2 className="fw-bold mb-3">
                        Ready to Plan Your Dream Event?
                    </h2>

                    <p className="mb-4">
                        Let EventEase turn your special moments into unforgettable memories.
                    </p>

                    <button className="btn btn-light btn-lg px-4">
                        Book Now
                    </button>
                </div>
            </section>
        </>
    );
};

export default Servicespage;