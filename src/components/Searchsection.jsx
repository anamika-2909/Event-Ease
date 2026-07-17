import { FaSearch, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const SearchSection = () => {
  return (
    <section className="search-section">
      <div className="container">
        <div className="search-box shadow-lg">

          <div className="row align-items-center">

            <div className="col-lg-3">
              <label className="form-label fw-semibold">
                Event Type
              </label>

              <select className="form-select">
                <option>Birthday</option>
                <option>Wedding</option>
                <option>Anniversary</option>
                <option>Baby Shower</option>
                <option>Corporate</option>
              </select>
            </div>

            <div className="col-lg-3">
              <label className="form-label fw-semibold">
                Location
              </label>

              <div className="input-group">
                <span className="input-group-text">
                  <FaMapMarkerAlt />
                </span>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter City"
                />
              </div>
            </div>

            <div className="col-lg-3">
              <label className="form-label fw-semibold">
                Event Date
              </label>

              <div className="input-group">
                <span className="input-group-text">
                  <FaCalendarAlt />
                </span>

                <input
                  type="date"
                  className="form-control"
                />
              </div>
            </div>

            <div className="col-lg-3 text-center">
              <button className="btn btn-primary search-btn w-100 mt-4">
                <FaSearch className="me-2" />
                Search
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default SearchSection;