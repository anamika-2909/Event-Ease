import { FaArrowRight, FaPlayCircle } from "react-icons/fa";

const Hero = () => {
    return (
        <section className="hero">
            <div className="container">
                <div className="row align-items-center">

                    {/* Left Content */}
                    <div className="col-lg-6">

                        <span className="badge bg-primary px-3 py-2 rounded-pill mb-3">
                            ✨ Trusted Event Planning Platform
                        </span>

                        <h1 className="display-3 fw-bold mt-3">
                            Plan Your <span className="text-primary">Dream Celebration</span>
                        </h1>

                        <p className="lead text-secondary mt-4">
                            Book trusted vendors for Birthday, Wedding, Anniversary,
                            Baby Shower and every special celebration—all in one place.
                        </p>

                        <div className="mt-4 d-flex gap-3">
                            <button className="btn btn-primary btn-lg px-4">
                                Book Now <FaArrowRight className="ms-2" />
                            </button>

                            <button className="btn btn-outline-primary btn-lg px-4">
                                <FaPlayCircle className="me-2" />
                                Explore
                            </button>
                        </div>

                        <div className="row mt-5">

                            <div className="col-4">
                                <h3 className="fw-bold text-primary">500+</h3>
                                <p>Vendors</p>
                            </div>

                            <div className="col-4">
                                <h3 className="fw-bold text-primary">5K+</h3>
                                <p>Events</p>
                            </div>

                            <div className="col-4">
                                <h3 className="fw-bold text-primary">10K+</h3>
                                <p>Happy Clients</p>
                            </div>

                        </div>

                    </div>

                    {/* Right Image */}

                    <div className="col-lg-6 d-flex justify-content-center align-items-center">
                        <div
                            className="bg-light rounded-4 shadow"
                            style={{ width: "100%", height: "450px" }}
                        >
                            <h3 className="text-center mt-5">Hero Image</h3>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;