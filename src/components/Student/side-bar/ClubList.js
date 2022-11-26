import axios from "axios";
import { useContext } from "react";
import BuyButton from "../../../reusable/Button/BuyButton";
import JoinButton from "../../../reusable/Button/JoinButton";
import AuthContext from "../../../store/auth-context";
import classes from "./Clubs.module.css";

const ClubList = (props) => {
  const authCtx = useContext(AuthContext);

  const deleteSubmitHandler = (event) => {
    event.preventDefault();

    axios.delete(`/api/del-club/${props.club.id}`).then((res) => {
      if (res.data.status === 200) {
        console.log(res.data);
      } else {
        console.log("error");
      }
    });
  };

  const joinSubmitHandler = (event) => {
    event.preventDefault();
    axios
      .post(`/api/create-club`, { name: props.club.name, email: authCtx.email })
      .then((res) => {
        if (res.data.status === 200) {
          console.log(res.data);
        } else {
          console.log("error");
        }
      });
  };

  return (
    <form className={classes.club}>
      <div className={classes["club-desc"]}>
        <p className={classes["club-name"]}>{props.club.name}</p>
        <p className={classes["club-email"]}>{props.club.email}</p>
      </div>
      <div className={classes.btn}>
        {props.type === "DELETE" ? (
          <BuyButton btnType="buy" onClick={deleteSubmitHandler}>
            {props.type}
          </BuyButton>
        ) : (
          <JoinButton btnType="join" onClick={joinSubmitHandler}>
            {props.type}
          </JoinButton>
        )}
      </div>
    </form>
  );
};

export default ClubList;
