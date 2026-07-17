import { FaImage } from "react-icons/fa";
import wedding from "../assets/images/wedding.jpg";
import birthday from "../assets/images/Birthday.jpg";
import decoration from "../assets/images/Decoration.jpg";
import corporate from "../assets/images/corporate.avif";
import babyShower from "../assets/images/babyshower.avif";
import anniversary from "../assets/images/Annivarsary.jpg";

const gallery = [
  {
    title: "Wedding",
   Image: wedding,
  },
  {
    title: "Birthday",
   Image: birthday,

  },
  {
    title: "Decoration",
     Image: decoration,
  },
  {
    title: "Corporate",
     Image: corporate,
  },
   {
    title: "Baby Shower",
     Image: babyShower,
  },
   {
    title:  "Anniversary",
    Image: anniversary,
  },
];

const Gallery = () => {
  return (
    <section className="py-5">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="fw-bold">Event Gallery</h2>
          <p className="text-muted">
            Take a look at some of our memorable events.
          </p>
        </div>

        <div className="row g-4">

          {gallery.map((item, index) => (
            <div className="col-md-4" key={index}>

              <div className="gallery-card">

                <div className="gallery-placeholder">

                  <img className="image-fluid" src={item.Image} alt="image" />
                  {/* <FaImage size={45} /> */}

                  <h5 className="mt-3">
                    {item.title}
                  </h5>
                  

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Gallery;