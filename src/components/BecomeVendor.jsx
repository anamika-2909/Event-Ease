import { FaStore, FaArrowRight } from "react-icons/fa";

const BecomeVendor = () => {
  return (
    <section className="vendor-section py-5">
      <div className="container">

        <div className="vendor-box text-center">

          <FaStore
            size={60}
            className="text-white mb-4"
          />

          <h2 className="fw-bold text-white">
            Grow Your Event Business
          </h2>

          <p className="text-white mt-3">
            Join EventEase as a Vendor and connect with
            thousands of customers looking for trusted
            event services.
          </p>

          <div className="mt-4">

            <button className="btn btn-light btn-lg me-3">
              Become a Vendor
              <FaArrowRight className="ms-2"/>
            </button>

            <button className="btn btn-outline-light btn-lg">
              Learn More
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

export default BecomeVendor;