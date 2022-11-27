import classes from "./HomePage.module.css";

import { Fragment } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <Fragment>
      <section className={classes["section-hero"]}>
        <div className={classes.hero}>
          <div className={classes["hero-text-box"]}>
            <h1 className="heading-primary">Welcome to Marketplace</h1>
            <p className={classes["hero-text"]}>
              Facilitates buying and selling items with business and other
              students within university with one-click, while making safe and
              secure payments.{" "}
            </p>
            <Link
              to="/sign-in"
              className={`btn ${classes["btn--full"]} margin-right-sm`}
            >
              Sign In
            </Link>
            <Link
              to="/create-account"
              className={`btn ${classes["btn--outline"]}`}
            >
              Create Account
            </Link>
          </div>

          <img
            className={classes["hero-img"]}
            src="Img/hero.jpg"
            alt="students checking laptop"
          />
        </div>
      </section>

      <section className={`${classes["section-featured"]} container`}>
        <p className="subheading margin-bottom-md center-text">Trusted by</p>

        <div className={classes.featured}>
          <img src="Img/clg-1.png" alt="University of Texas at Dallas logo" />
          <img
            src="Img/clg-2.png"
            alt="University of Texas at Arlington logo"
          />
          <img src="Img/clg-3.png" alt="California State university logo" />
          <img src="Img/clg-4.png" alt="University of Texas logo" />
          <img src="Img/clg-5.png" alt="University of Huston logo" />
          <img
            src="Img/clg-6.png"
            alt="California State University Sacremento logo"
          />
        </div>
      </section>

      <section className={`${classes["section-how"]} container`}>
        <div className="heading">
          <p className="subheading">How it works</p>
          <h2 className="heading-secondary margin-bottom-md">
            Buy or Sell in 4 simple steps
          </h2>
        </div>

        <div className={`${classes["how-it-works"]} container`}>
          <div className="how-it-works-step">
            <p className={classes["step-number"]}>01</p>
            <h3 className="heading-tertiary">Sign Up</h3>
            <p className={classes["step-description"]}>
              Create your free account to use services of Marketplace.
            </p>
          </div>
          <div className="how-it-works-step">
            <p className={classes["step-number"]}>02</p>
            <h3 className="heading-tertiary">Services</h3>
            <p className={classes["step-description"]}>
              {" "}
              Advertise or shop for products.
            </p>
          </div>
          <div className="how-it-works-step">
            <p className={classes["step-number"]}>03</p>
            <h3 className="heading-tertiary">Payment</h3>
            <p className={classes["step-description"]}>
              Hassle-free payment service for the products.
            </p>
          </div>
          <div className="how-it-works-step">
            <p className={classes["step-number"]}>04</p>
            <h3 className="heading-tertiary">Build your network</h3>
            <p className={classes["step-description"]}>
              Grow your network by sharing your thoughts.
            </p>
          </div>
        </div>
      </section>

      <section className={`${classes["section-testimonial"]} container`}>
        <div className={classes.heading}>
          <p className="subheading">testimonials</p>
          <h2 className="heading-secondary margin-bottom-md">
            What our clients are saying!
          </h2>
        </div>

        <div className="container grid grid--2-cols">
          <figure className={classes.testimonial}>
            <img
              className={classes["testimonial-img"]}
              src="Img/customer1.jpg"
              alt="customer Dave Bryson"
            />
            <blockquote className={classes["testimonial-text"]}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi itaque harum voluptatum, dolor saepe accusantium.
            </blockquote>
            <p className={classes["testimonial-name"]}>&mdash; Dave Bryson</p>
          </figure>

          <figure className={classes.testimonial}>
            <img
              className={classes["testimonial-img"]}
              src="Img/customer2.jpg"
              alt="customer Dave Bryson"
            />
            <blockquote className={classes["testimonial-text"]}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi itaque harum voluptatum, dolor saepe accusantium.
            </blockquote>
            <p className={classes["testimonial-name"]}>&mdash; Dave Bryson</p>
          </figure>

          <figure className={classes.testimonial}>
            <img
              className={classes["testimonial-img"]}
              src="Img/customer3.jpg"
              alt="customer Dave Bryson"
            />
            <blockquote className={classes["testimonial-text"]}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi itaque harum voluptatum, dolor saepe accusantium.
            </blockquote>
            <p className={classes["testimonial-name"]}>&mdash; Dave Bryson</p>
          </figure>

          <figure className={classes.testimonial}>
            <img
              className={classes["testimonial-img"]}
              src="Img/customer4.jpg"
              alt="customer Dave Bryson"
            />
            <blockquote className={classes["testimonial-text"]}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi itaque harum voluptatum, dolor saepe accusantium.
            </blockquote>
            <p className={classes["testimonial-name"]}>&mdash; Dave Bryson</p>
          </figure>

          <figure className={classes.testimonial}>
            <img
              className={classes["testimonial-img"]}
              src="Img/customer5.jpg"
              alt="customer Dave Bryson"
            />
            <blockquote className={classes["testimonial-text"]}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi itaque harum voluptatum, dolor saepe accusantium.
            </blockquote>
            <p className={classes["testimonial-name"]}>&mdash; Dave Bryson</p>
          </figure>

          <figure className={classes.testimonial}>
            <img
              className={classes["testimonial-img"]}
              src="Img/customer6.jpg"
              alt="customer Dave Bryson"
            />
            <blockquote className={classes["testimonial-text"]}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi itaque harum voluptatum, dolor saepe accusantium.
            </blockquote>
            <p className={classes["testimonial-name"]}>&mdash; Dave Bryson</p>
          </figure>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
};

export default HomePage;
