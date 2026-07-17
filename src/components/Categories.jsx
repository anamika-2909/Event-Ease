import {
  FaBirthdayCake,
  FaRing,
  FaHeart,
  FaBaby,
  FaBuilding,
  FaGlassCheers,
  FaArrowRight,
  FaStar,
} from "react-icons/fa";

const categories = [
  {
    title: "Birthday",
    vendors: "120+ Verified Vendors",
    icon: <FaBirthdayCake size={40} className="text-primary" />,
  },
  {
    title: "Wedding",
    vendors: " 80+ Vendors",
    icon: <FaRing size={40} className="text-primary" />,
  },
  {
    title: "Anniversary",
    vendors: "65+ Vendors",
    icon: <FaHeart size={40} className="text-primary" />,
  },
  {
    title: "Baby Shower",
    vendors: " 50+ Vendors",
    icon: <FaBaby size={40} className="text-primary" />,
  },
  {
    title: "Corporate",
    vendors: " 90+ Vendors",
    icon: <FaBuilding size={40} className="text-primary" />,
  },
  {
    title: "Engagement",
    vendors: " 70+ Vendors",
    icon: <FaGlassCheers size={40} className="text-primary" />,
  },
];

const Categories = () => {
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
          {categories.map((item, index) => (
            <div className="col-md-4" key={index}>
              <div className="card border-0 shadow-sm text-center p-4 h-100 category-card">
                <div>{item.icon}</div>
                <h4 className="mt-3">{item.title}</h4>
                <p className="text-muted">
                   <FaStar className="text-warning me-1" />{item.vendors}</p>

                <button className="btn btn-outline-primary">
                  Explore <FaArrowRight className="ms-2"/>
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