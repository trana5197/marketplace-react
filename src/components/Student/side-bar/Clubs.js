import JoinButton from "../../../reusable/Button/JoinButton";

import classes from "./Clubs.module.css";

const DUMMY_CLUBS = [
  {
    id: "cl1",
    name: "Science Club",
  },
  {
    id: "cl2",
    name: "Anime Club",
  },
  {
    id: "cl3",
    name: "Basketball Club",
  },
  {
    id: "cl4",
    name: "Football Club",
  },
];

const Clubs = () => {
  return (
    <form className={classes.clubs}>
      {DUMMY_CLUBS.map((club) => {
        return (
          <div className={classes.club} key={club.id}>
            <div className={classes["club-desc"]}>
              <p className={classes["club-name"]}>{club.name}</p>
            </div>
            <div className={classes.btn}>
              <JoinButton btnType="buy">JOIN</JoinButton>
            </div>
          </div>
        );
      })}
    </form>
  );
};

export default Clubs;
