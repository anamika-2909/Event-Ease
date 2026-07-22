import { Link } from "react-router-dom";

const EventDetails = () => {

  const event = {
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1200",
    eventName: "Royal Wedding",
    category: "Wedding",
    location: "Ahmedabad",
    price: "₹50,000",
    description:
      "Make your special day unforgettable with our premium wedding planning services. We provide decoration, catering, photography, music, and complete event management.",
    status: "Active",
  };

  return (
    <div className="container py-5">

      <div className="card shadow border-0">

        <div className="row g-0">

          {/* Image */}

          <div className="col-lg-6">
            <img
              src={event.image}
              alt={event.eventName}
              className="img-fluid w-100 h-100"
              style={{ objectFit: "cover" }}
            />
          </div>

          {/* Details */}

          <div className="col-lg-6">

            <div className="card-body p-4">

              <h2 className="fw-bold mb-3">
                {event.eventName}
              </h2>

              <p>
                <strong>Category :</strong> {event.category}
              </p>

              <p>
                <strong>Location :</strong> {event.location}
              </p>

              <p>
                <strong>Price :</strong> {event.price}
              </p>

              <p>
                <strong>Status :</strong>

                <span className="badge bg-success ms-2">
                  {event.status}
                </span>
              </p>

              <hr />

              <h5>Description</h5>

              <p className="text-muted">
                {event.description}
              </p>

              <div className="mt-4">

                <button className="btn btn-primary me-3">
                  Book Now
                </button>

                <Link to="/event" className="btn btn-outline-secondary">
                  Back
                </Link>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default EventDetails;