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
    title: "Anniversary",
    Image: anniversary,
  },
];

const Gallery = ({
  title = "Event Gallery",
  subtitle = "Take a look at some of our memorable events.",
}) => {
  return (
    <section className="py-5">
      <div className="container">

        {(title || subtitle) && (
          <div className="text-center mb-5">
            {title && <h2 className="fw-bold">{title}</h2>}
            {subtitle && (
              <p className="text-muted">{subtitle}</p>
            )}
          </div>
        )}

        <div className="row g-4">
          {gallery.map((item, index) => (
            <div className="col-md-4" key={index}>
              <div className="gallery-card">
                <img
                  src={item.Image}
                  alt={item.title}
                  className="img-fluid rounded"
                />

                <h5 className="fw-bold text-center mt-3">
                  {item.title}
                </h5>
                <p className="text-muted text-center">
                  Make your special day unforgettable.
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;