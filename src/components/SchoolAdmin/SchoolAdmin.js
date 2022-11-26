import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HomeSchoolAdmin from "./HomeSchoolAdmin";

import classes from "./SchoolAdmin.module.css";
import ManageBusinessOwner from "./side-bar/ManageBusinessOwner";
import ManageClub from "./side-bar/ManageClub";
import ManageStudents from "./side-bar/ManageStudents";

const SchoolAdmin = (props) => {
  const [dashboardRight, setDashboardRight] = useState("");

  useEffect(() => {
    setDashboardRight(
      <HomeSchoolAdmin
        firstName={props.firstName}
        lastName={props.lastName}
        profile={props.profile}
        email={props.email}
      />
    );
  }, [props.firstName, props.lastName, props.profile, props.email]);

  const manageStudentHandler = (event) => {
    event.preventDefault();
    setDashboardRight(<ManageStudents />);
  };

  const manageBusinessOwnerHandler = (event) => {
    event.preventDefault();
    setDashboardRight(<ManageBusinessOwner />);
  };

  const manageClubHandler = (event) => {
    event.preventDefault();
    setDashboardRight(<ManageClub />);
  };

  const postHandler = (event) => {
    event.preventDefault();
  };

  const reportHandler = (event) => {
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
                to="/manage-student"
                onClick={manageStudentHandler}
              >
                Manage Student
              </Link>
            </li>
            <li>
              <Link
                className={classes["side-nav-link"]}
                to="/manage-business-owner"
                onClick={manageBusinessOwnerHandler}
              >
                Manage BusinessOwner
              </Link>
            </li>
            <li>
              <Link
                className={classes["side-nav-link"]}
                to="/club"
                onClick={manageClubHandler}
              >
                Manage Clubs
              </Link>
            </li>
            <li>
              <Link
                className={classes["side-nav-link"]}
                to="#"
                onClick={postHandler}
              >
                Posts
              </Link>
            </li>
            <li>
              <Link
                className={classes["side-nav-link"]}
                to="#"
                onClick={reportHandler}
              >
                Reports
              </Link>
            </li>
          </ul>
        </div>

        {dashboardRight}
      </div>
    </section>
  );
};

export default SchoolAdmin;
