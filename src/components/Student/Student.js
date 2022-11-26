import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HomeStudent from "./HomeStudent";
import ManageClubStudent from "./side-bar/ManageClubStudent";
import Orders from "./side-bar/Orders";
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
    setDashboardRight(<ManageClubStudent />);
  };

  const ordersHandler = (event) => {
    event.preventDefault();
    setDashboardRight(<Orders />);
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
                className={`${classes["side-nav-link"]} ${classes.orders}`}
                to="#"
                onClick={ordersHandler}
              >
                <span className={classes.order}>Orders</span>
              </Link>
            </li>
          </ul>
        </div>
        {dashboardRight}
      </div>
    </section>
  );
};

export default Student;
