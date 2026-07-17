import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-3">

      <div className="container">

        <div className="row">

          <div className="col-md-4">

            <h3 className="fw-bold">
              EventEase
            </h3>

            <p>
              Your one-stop platform for booking trusted
              event vendors and planning memorable events.
            </p>

          </div>

          <div className="col-md-2">

            <h5>Quick Links</h5>

            <ul className="list-unstyled">

              <li>Home</li>
              <li>Events</li>
              <li>Services</li>
              <li>Contact</li>

            </ul>

          </div>

          <div className="col-md-3">

            <h5>Contact</h5>

            <p>📍 Ahmedabad</p>
            <p>📞 +91 9876543210</p>
            <p>✉ info@eventease.com</p>

          </div>

          <div className="col-md-3">

            <h5>Follow Us</h5>

            <div className="fs-4 d-flex gap-3">

              <FaFacebookF/>
              <FaInstagram/>
              <FaTwitter/>
              <FaLinkedin/>

            </div>

          </div>

        </div>

        <hr/>

        <p className="text-center mb-0">
          © 2026 EventEase. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
};

export default Footer;