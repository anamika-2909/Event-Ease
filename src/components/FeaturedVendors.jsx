import {
  FaStar,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

const vendors = [
  {
    name: "Royal Event Decor",
    city: "Ahmedabad",
    rating: "4.9",
    price: "₹15,000 onwards",
  },
  {
    name: "Dream Wedding Planner",
    city: "Surat",
    rating: "4.8",
    price: "₹25,000 onwards",
  },
  {
    name: "Birthday Magic",
    city: "Vadodara",
    rating: "4.7",
    price: "₹10,000 onwards",
  },
];

const FeaturedVendors = () => {
  return (
    <section className="py-5">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="fw-bold">Featured Vendors</h2>
          <p className="text-muted">
            Discover our top-rated event service providers.
          </p>
        </div>

        <div className="row g-4">

          {vendors.map((vendor, index) => (
            <div className="col-lg-4" key={index}>

              <div className="card border-0 shadow-sm vendor-card">

                <div className="vendor-placeholder">
                  Vendor Image
                </div>

                <div className="card-body">

                  <h4>{vendor.name}</h4>

                  <div className="d-flex justify-content-between mt-3">

                    <span>
                      <FaStar className="text-warning me-1" />
                      {vendor.rating}
                    </span>

                    <span>
                      <FaMapMarkerAlt className="text-danger me-1" />
                      {vendor.city}
                    </span>

                  </div>

                  <p className="mt-3 fw-bold text-primary">
                    {vendor.price}
                  </p>

                  <p className="text-success">
                    <FaCheckCircle className="me-2" />
                    Verified Vendor
                  </p>

                  <button className="btn btn-primary w-100">
                    View Details
                    <FaArrowRight className="ms-2" />
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default FeaturedVendors;