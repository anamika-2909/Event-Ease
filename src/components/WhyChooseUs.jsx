import {
  FaCheckCircle,
  FaCreditCard,
  FaHeadset,
  FaBolt,
} from "react-icons/fa";

const features = [
  {
    icon: <FaCheckCircle size={40} className="text-success" />,
    title: "Verified Vendors",
    desc: "Book trusted and verified event professionals.",
  },
  {
    icon: <FaCreditCard size={40} className="text-primary" />,
    title: "Secure Payments",
    desc: "100% safe and secure online payment process.",
  },
  {
    icon: <FaHeadset size={40} className="text-warning" />,
    title: "24/7 Support",
    desc: "Our support team is always ready to help you.",
  },
  {
    icon: <FaBolt size={40} className="text-danger" />,
    title: "Easy Booking",
    desc: "Book your dream event in just a few clicks.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="fw-bold">Why Choose EventEase?</h2>
          <p className="text-muted">
            We make event planning simple, secure, and stress-free.
          </p>
        </div>

        <div className="row g-4">

          {features.map((item, index) => (
            <div className="col-md-6 col-lg-3" key={index}>

              <div className="card border-0 shadow-sm p-4 text-center why-card h-100">

                <div className="mb-3">
                  {item.icon}
                </div>

                <h5 className="fw-bold">{item.title}</h5>

                <p className="text-muted">
                  {item.desc}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;