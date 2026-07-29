import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosInstance from "../service/axiosInstance";

const EventDetails = () => {

  const { id } = useParams();

  const [event, setEvent] = useState(null);

  const getEvent = async () => {
    try {
      const res = await axiosInstance.get(`/event/get-event/${id}`);
      setEvent(res.data.event);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEvent();
  }, []);

  if (!event) {
    return (
      <div className="container py-5 text-center">
        <h4>Loading...</h4>
      </div>
    );
  }
  return (
    <div className="container py-5">

      <div className="card shadow border-0">

        <div className="row g-0">

          {/* Image */}

          <div className="col-lg-6">
            <img
              src={`http://localhost:5000/uploads/${event.image}`}
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
                <strong>Category :</strong> {event.category?.categoryName}
              </p>

              <p>
                <strong>Vendor :</strong> {event.vendor?.fullName}
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

                <Link
                  to={`/booking/${event._id}`}
                  className="btn btn-primary me-3"
                >
                  Book Now
                </Link>

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