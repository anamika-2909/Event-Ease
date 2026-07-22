import {
  FaGift,
  FaArrowRight,
} from "react-icons/fa";

const Services = ({ services }) => {
  return (
    <section className="py-5">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="fw-bold">Popular Services</h2>
          <p className="text-muted">
            Everything you need for your perfect event.
          </p>
        </div>

        <div className="row g-4">

          {services.length > 0 ? (
            services.map((service) => (
              <div className="col-md-3" key={service._id}>
                <div className="card border-0 shadow-sm text-center p-4 service-card h-100">

                  {service.image ? (
                    <img
                      src={`http://localhost:5000/uploads/${service.image}`}
                      alt={service.serviceName}
                      className="img-fluid rounded mb-3"
                      style={{ height: "180px", objectFit: "cover" }}
                    />
                  ) : (
                    <FaGift size={40} className="text-primary mx-auto mb-3" />
                  )}

                  <h5>{service.serviceName}</h5>

                  <p className="text-muted">
                    ₹ {service.price}
                  </p>

                  <button className="btn btn-outline-primary mt-2">
                    Explore
                    <FaArrowRight className="ms-2" />
                  </button>

                </div>
              </div>
            ))
          ) : (
            <div className="text-center">
              <h5>No Services Found</h5>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};

export default Services;