import classes from "./HomeBusinessOwner.module.css";

const HomeBusinessOwner = (props) => {
  return (
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
  );
};

export default HomeBusinessOwner;
