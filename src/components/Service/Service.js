import Card from "../../reusable/Card/Card";

import classes from "./Service.module.css";

// import clubImage from "../../images/club.jpg";

const DUMMY_SERVICES = [
  {
    id: "ds1",
    image: null,
    alt: "Books in library",
    subheading: "Products",
    desc: "At marketplace, we provide services for buying and selling of products at an affordable prices.",
  },
  {
    id: "ds2",
    image: null,
    alt: "Books in library",
    subheading: "Clubs",
    desc: "Explore different types of societies and culture on campus.",
  },
  {
    id: "ds3",
    image: null,
    alt: "Books in library",
    subheading: "Posts",
    desc: "Post the information about various events happening around the campus.",
  },
  {
    id: "ds4",
    image: null,
    alt: "Books in library",
    subheading: "Advertisements",
    desc: "Grow your business on grounds by advertising your products to every user.",
  },
];

const Service = () => {
  return (
    <section className={classes["section-service"]}>
      <div className="center-text">
        <p className="subheading">One stop to get all school supplies</p>
        <h2 className="heading-primary">Services</h2>
      </div>

      <div
        className={`${classes["service-cards"]} grid grid--2-cols ${classes["grid-service"]}`}
      >
        {DUMMY_SERVICES.map((service) => {
          return (
            <Card
              key={service.id}
              // image={clubImage}
              alt={service.alt}
              subheading={service.subheading}
              desc={service.desc}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Service;
