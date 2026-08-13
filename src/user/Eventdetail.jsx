import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosInstance from "../service/axiosInstance";

const EventDetails = () => {

  const { id } = useParams();

  const [event, setEvent] = useState(null);
  const [reviews, setReviews] = useState([]);

  const [review, setReview] = useState({
    rating: 5,
    comment: "",
  });

  const getEvent = async () => {
    try {
      const res = await axiosInstance.get(`/event/get-event/${id}`);
      setEvent(res.data.event);
    } catch (error) {
      console.log(error);
    }
  };

  const getReviews = async () => {
  try {
    const res = await axiosInstance.get(`/review/event/${id}`);
    setReviews(res.data.reviews);
  } catch (error) {
    console.log(error);
  }
};

const submitReview = async () => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));

    await axiosInstance.post("/review/add-review", {
      user: user._id,
      event: id,
      rating: review.rating,
      comment: review.comment,
    });

    alert("Review Added Successfully");

    setReview({
      rating: 5,
      comment: "",
    });

    getReviews();
  } catch (error) {
    console.log(error);
    alert(error.response?.data?.message);
  }
};

  useEffect(() => {
    getEvent();
    getReviews();
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

      <div className="card shadow mt-4">

  <div className="card-header bg-dark text-white">
    <h4>Reviews</h4>
  </div>

  <div className="card-body">

    <div className="mb-3">

      <label>Rating</label>

      <select
        className="form-select"
        value={review.rating}
        onChange={(e) =>
          setReview({
            ...review,
            rating: e.target.value,
          })
        }
      >
        <option value="5">⭐⭐⭐⭐⭐</option>
        <option value="4">⭐⭐⭐⭐</option>
        <option value="3">⭐⭐⭐</option>
        <option value="2">⭐⭐</option>
        <option value="1">⭐</option>
      </select>

    </div>

    <div className="mb-3">

      <textarea
        className="form-control"
        rows="3"
        placeholder="Write your review..."
        value={review.comment}
        onChange={(e) =>
          setReview({
            ...review,
            comment: e.target.value,
          })
        }
      />

    </div>

    <button
      className="btn btn-success"
      onClick={submitReview}
    >
      Submit Review
    </button>

    <hr />

    {reviews.map((item) => (

      <div key={item._id} className="border rounded p-3 mb-3">

        <h6>{item.user?.fullName}</h6>

        <p>⭐ {item.rating}/5</p>

        <p>{item.comment}</p>

      </div>

    ))}

  </div>

</div>

    </div>
  );
};

export default EventDetails;