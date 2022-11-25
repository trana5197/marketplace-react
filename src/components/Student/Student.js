import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HomeStudent from "./HomeStudent";
import Clubs from "./side-bar/Clubs";
import Products from "./side-bar/Products";

import classes from "./Student.module.css";

const Student = (props) => {
  const [dashboardRight, setDashboardRight] = useState("");

  useEffect(() => {
    setDashboardRight(
      <HomeStudent
        firstName={props.firstName}
        lastName={props.lastName}
        profile={props.profile}
        email={props.email}
      />
    );
  }, [props.firstName, props.lastName, props.profile, props.email]);

  const productsHandler = (event) => {
    event.preventDefault();
    setDashboardRight(<Products />);

    // navigate("/products", { replace: true });
  };

  const clubsHandler = (event) => {
    event.preventDefault();

    setDashboardRight(<Clubs />);
  };

  const ordersHandler = (event) => {
    event.preventDefault();
  };

  const postHandler = (event) => {
    event.preventDefault();
  };

  return (
    // <section className="section-student">
    <section>
      <div
        className={`${classes.dashboard} grid ${classes["grid--2-cols--profile"]}`}
      >
        <div className={classes["side-bar"]}>
          <h2 className="heading-tertiary">Dashboard</h2>
          <ul className={classes["side-nav-list"]}>
            <li>
              <Link
                className={classes["side-nav-link"]}
                to="/product"
                onClick={productsHandler}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                className={classes["side-nav-link"]}
                to="club"
                onClick={clubsHandler}
              >
                Clubs
              </Link>
            </li>
            <li>
              <Link
                className={classes["side-nav-link"]}
                to="#"
                onClick={ordersHandler}
              >
                Orders
              </Link>
            </li>
            <li>
              <Link
                className={classes["side-nav-link"]}
                to="#"
                onClick={postHandler}
              >
                Post
              </Link>
            </li>
            {/* <li>
              <Link
                className={classes["side-nav-link"]}
                to="/advertisement"
                onClick={advertisementHandler}
              >
                Advertisement
              </Link>
            </li> */}
          </ul>
        </div>
        {dashboardRight}
      </div>
    </section>
  );
};

export default Student;
