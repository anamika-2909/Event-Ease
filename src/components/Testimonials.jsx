import { FaStar, FaQuoteLeft, FaUserCircle } from "react-icons/fa";

const reviews = [
  {
    name: "Priya Patel",
    city: "Ahmedabad",
    review:
      "Amazing decoration and excellent service. Everything was perfectly managed.",
  },
  {
    name: "Rahul Shah",
    city: "Surat",
    review:
      "Very professional team. Booking process was easy and smooth.",
  },
  {
    name: "Neha Joshi",
    city: "Vadodara",
    review:
      "Best event management platform. Highly recommended for family events.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="fw-bold">What Our Customers Say</h2>
          <p className="text-muted">
            Trusted by thousands of happy customers.
          </p>
        </div>

        <div className="row g-4">

          {reviews.map((item, index) => (
            <div className="col-lg-4" key={index}>

              <div className="card border-0 shadow-sm p-4 testimonial-card h-100">

                <FaQuoteLeft
                  className="text-primary mb-3"
                  size={30}
                />

                <p className="text-muted">
                  {item.review}
                </p>

                <div className="text-warning mb-3">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>

                <div className="d-flex align-items-center">

                  <FaUserCircle
                    size={50}
                    className="text-secondary"
                  />

                  <div className="ms-3">
                    <h6 className="mb-0">
                      {item.name}
                    </h6>

                    <small className="text-muted">
                      {item.city}
                    </small>
                  </div>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Testimonials;