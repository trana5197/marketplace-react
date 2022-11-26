import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HomeBusinessOwner from "./HomeBusinessOwner";
import ManageProducts from "./side-bar/ManageProducts";

import classes from "./BusinessOwner.module.css";

const BusinessOwner = (props) => {
  const [dashboardRight, setDashboardRight] = useState("");
  // const navigate = useNavigate();

  useEffect(() => {
    setDashboardRight(
      <HomeBusinessOwner
        firstName={props.firstName}
        lastName={props.lastName}
        profile={props.profile}
        email={props.email}
      />
    );
  }, [props.firstName, props.lastName, props.profile, props.email]);

  const manageProductsHandler = (event) => {
    event.preventDefault();
    setDashboardRight(<ManageProducts />);

    // navigate("/products", { replace: true });
  };

  const manageChatHandler = (event) => {
    event.preventDefault();
  };

  return (
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
                to="/manageProduct"
                onClick={manageProductsHandler}
              >
                Manage Products
              </Link>
            </li>
            <li>
              <Link
                className={classes["side-nav-link"]}
                to="/chat"
                onClick={manageChatHandler}
              >
                Chat
              </Link>
            </li>
          </ul>
        </div>
        {dashboardRight}
      </div>
    </section>
  );
};

export default BusinessOwner;
