import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ManageBusinessOwner from "../SchoolAdmin/side-bar/ManageBusinessOwner";
import ManageStudents from "../SchoolAdmin/side-bar/ManageStudents";
import HomeSuperAdmin from "./HomeSuperAdmin";
import ManageSchoolAdmin from "./side-bar/ManageSchoolAdmin";

import classes from "./SuperAdmin.module.css";

const SuperAdmin = (props) => {
  const [dashboardRight, setDashboardRight] = useState("");

  useEffect(() => {
    setDashboardRight(
      <HomeSuperAdmin
        firstName={props.firstName}
        lastName={props.lastName}
        profile={props.profile}
        email={props.email}
      />
    );
  }, [props.firstName, props.lastName, props.profile, props.email]);

  const manageSchoolAdminHandler = (event) => {
    event.preventDefault();
    setDashboardRight(<ManageSchoolAdmin />);
  };

  const manageStudentHandler = (event) => {
    event.preventDefault();
    setDashboardRight(<ManageStudents />);
  };

  const manageBusinessOwnerHandler = (event) => {
    event.preventDefault();
    setDashboardRight(<ManageBusinessOwner />);
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
                to="/product"
                onClick={manageSchoolAdminHandler}
              >
                Manage School Admins
              </Link>
            </li>
            <li>
              <Link
                className={classes["side-nav-link"]}
                to="club"
                onClick={manageStudentHandler}
              >
                Manage Students
              </Link>
            </li>
            <li>
              <Link
                className={classes["side-nav-link"]}
                to="#"
                onClick={manageBusinessOwnerHandler}
              >
                Manage Business Owners
              </Link>
            </li>
          </ul>
        </div>
        {dashboardRight}
      </div>
    </section>
  );
};

export default SuperAdmin;
