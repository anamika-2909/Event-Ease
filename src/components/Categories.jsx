import {
  FaBirthdayCake,
  FaArrowRight,
  FaStar,
} from "react-icons/fa";

const Categories = ({ categories }) => {
  return (
    <section className="py-5 bg-light">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="fw-bold">Explore Event Categories</h2>
          <p className="text-muted">
            Choose your event and connect with trusted vendors.
          </p>
        </div>

        <div className="row g-4">
          {categories.map((item) => (
            <div className="col-md-4" key={item._id}>
              <div className="card border-0 shadow-sm text-center p-4 h-100">

                <FaBirthdayCake size={40} className="text-primary mx-auto" />

                <h4 className="mt-3">
                  {item.categoryName}
                </h4>

                <p className="text-muted">
                  <FaStar className="text-warning me-1" />
                  {item.status}
                </p>

                <button className="btn btn-outline-primary">
                  Explore <FaArrowRight className="ms-2" />
                </button>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Categories;