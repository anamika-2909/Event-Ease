import {
  FaBirthdayCake,
  FaCamera,
  FaUtensils,
  FaMusic,
  FaGift,
  FaVideo,
  FaMicrophone,
  FaArrowRight,
} from "react-icons/fa";

const services = [
  {
    title: "Decoration",
    icon: <FaGift size={40} className="text-primary" />,
  },
  {
    title: "Photography",
    icon: <FaCamera size={40} className="text-primary" />,
  },
  {
    title: "Catering",
    icon: <FaUtensils size={40} className="text-primary" />,
  },
  {
    title: "DJ & Music",
    icon: <FaMusic size={40} className="text-primary" />,
  },
  {
    title: "Cake",
    icon: <FaBirthdayCake size={40} className="text-primary" />,
  },
  {
    title: "Flower Decoration",
    icon: <FaGift size={40} className="text-primary" />,
  },
  {
    title: "Videography",
    icon: <FaVideo size={40} className="text-primary" />,
  },
  {
    title: "Anchor / Host",
    icon: <FaMicrophone size={40} className="text-primary" />,
  },
];

const Services = () => {
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

          {services.map((service, index) => (
            <div className="col-md-3" key={index}>
              <div className="card border-0 shadow-sm text-center p-4 service-card h-100 mb-3">

                {service.icon}

                <h5 className="mt-3 ">{service.title}</h5>

                <button className="btn btn-outline-primary mt-3">
                  Explore
                  <FaArrowRight className="ms-2" />
                </button>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Services;