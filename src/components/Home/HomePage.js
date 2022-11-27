import classes from "./HomePage.module.css";

import { Fragment } from "react";
import { Link } from "react-router-dom";
import heroImage from "../../images/hero.jpg";
import clg1 from "../../images/clg-1.png";
import clg2 from "../../images/clg-2.png";
import clg3 from "../../images/clg-3.png";
import clg4 from "../../images/clg-4.png";
import clg5 from "../../images/clg-5.png";
import clg6 from "../../images/clg-6.png";
import cm1 from "../../images/customer1.jpg";
import cm2 from "../../images/customer2.jpg";
import cm3 from "../../images/customer3.jpg";
import cm4 from "../../images/customer4.jpg";
import cm5 from "../../images/customer5.jpg";
import cm6 from "../../images/customer6.jpg";

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
            src={heroImage}
            alt="students checking laptop"
          />
        </div>
      </section>

      <section className={`${classes["section-featured"]} container`}>
        <p className="subheading margin-bottom-md center-text">Trusted by</p>

        <div className={classes.featured}>
          <img src={clg1} alt="University of Texas at Dallas logo" />
          <img src={clg2} alt="University of Texas at Arlington logo" />
          <img src={clg3} alt="California State university logo" />
          <img src={clg4} alt="University of Texas logo" />
          <img src={clg5} alt="University of Huston logo" />
          <img src={clg6} alt="California State University Sacremento logo" />
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
              src={cm1}
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
              src={cm2}
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
              src={cm3}
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
              src={cm4}
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
              src={cm5}
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
              src={cm6}
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
    </Fragment>
  );
};

export default HomePage;
