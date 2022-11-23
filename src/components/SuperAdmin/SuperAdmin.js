import { Link } from "react-router-dom";
import classes from "./SuperAdmin.module.css";

const SuperAdmin = (props) => {
  return (
    <section>
      <div
        className={`${classes.dashboard} grid ${classes["grid--2-cols--profile"]}`}
      >
        <div className={classes["side-bar"]}>
          <h2 className="heading-tertiary">Dashboard</h2>
          <ul className={classes["side-nav-list"]}>
            <li>
              <Link className={classes["side-nav-link"]} to="/product">
                Manage School Admins
              </Link>
            </li>
            <li>
              <Link className={classes["side-nav-link"]} to="club">
                Manage Students
              </Link>
            </li>
            <li>
              <Link className={classes["side-nav-link"]} to="#">
                Manage Business Owners
              </Link>
            </li>
            <li>
              <Link className={classes["side-nav-link"]} to="#">
                Chat
              </Link>
            </li>
          </ul>
        </div>

        <div className={classes["dashboard-right"]}>
          <div className={classes.profile}>
            <img
              className={`${classes["profile-img"]} border-bottom`}
              src=""
              alt="A person"
            />
            <div className={`${classes["profile-desc"]} border-top`}>
              <p
                className={classes["profile-name"]}
              >{`${props.firstName} ${props.lastName}`}</p>
              <p className={classes["profile-role"]}>Role: {props.profile}</p>
              <p className={classes["profile-email"]}>{props.email}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuperAdmin;
