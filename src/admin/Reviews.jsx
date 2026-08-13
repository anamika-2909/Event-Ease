import { useEffect, useState } from "react";
import axiosInstance from "../service/axiosInstance";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const getReviews = async () => {
    try {
      const res = await axiosInstance.get("/review/reviews");
      setReviews(res.data.reviews);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getReviews();
  }, []);

  const deleteReview = async (id) => {
    if (!window.confirm("Delete this review?")) return;

    try {
      const res = await axiosInstance.delete(`/review/review/${id}`);

      alert(res.data.message);

      getReviews();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container-fluid">

      <div className="card shadow">

        <div className="card-header bg-primary text-white">
          <h3 className="mb-0">Manage Reviews</h3>
        </div>

        <div className="card-body">

          <table className="table table-bordered table-hover">

            <thead className="table-dark">
              <tr>
                <th>Customer</th>
                <th>Event</th>
                <th>Rating</th>
                <th>Comment</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              {reviews.map((review) => (

                <tr key={review._id}>

                  <td>{review.user?.fullName}</td>

                  <td>{review.event?.eventName}</td>

                  <td>
                    ⭐ {review.rating}/5
                  </td>

                  <td>{review.comment}</td>

                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => deleteReview(review._id)}
                    >
                      Delete
                    </button>
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
};

export default Reviews;