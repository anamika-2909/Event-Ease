import {
  FaMapMarkerAlt,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

const FeaturedVendors = ({ events }) => {
  return (
    <section className="py-5">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="fw-bold">Featured Events</h2>
          <p className="text-muted">
            Explore the latest events added by our admin.
          </p>
        </div>

        <div className="row g-4">

          {events.length > 0 ? (
            events.map((event) => (
              <div className="col-lg-4" key={event._id}>

                <div className="card border-0 shadow-sm">

                  <img
                    src={`http://localhost:5000/uploads/${event.image}`}
                    alt={event.eventName}
                    className="card-img-top"
                    style={{ height: "220px", objectFit: "cover" }}
                  />

                  <div className="card-body">

                    <h4>{event.eventName}</h4>

                    <div className="d-flex justify-content-between mt-3">

                      <span>
                        <FaMapMarkerAlt className="text-danger me-1" />
                        {event.location}
                      </span>

                      <span>
                        {event.category?.categoryName}
                      </span>

                    </div>

                    <p className="mt-3 fw-bold text-primary">
                      ₹ {event.price}
                    </p>

                    <p className="text-success">
                      <FaCheckCircle className="me-2" />
                      {event.status}
                    </p>

                    <button className="btn btn-primary w-100">
                      View Details
                      <FaArrowRight className="ms-2" />
                    </button>

                  </div>

                </div>

              </div>
            ))
          ) : (
            <div className="text-center">
              <h5>No Events Found</h5>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};

export default FeaturedVendors;