import React from "react";
import {
    FaBirthdayCake, FaHeart, FaBuilding, FaBaby, FaCamera, FaUtensils, FaGlassCheers, FaRing,
} from "react-icons/fa";
import WhyChooseUs from "../components/WhyChooseUs";
import Services from "../components/Services";

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
             <Services/>
            <WhyChooseUs/>
        </>
    );
};

export default Servicespage;