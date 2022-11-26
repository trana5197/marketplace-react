import Clubs from "./Clubs";
import classes from "../../SchoolAdmin/side-bar/ManageBusinessOwner.module.css";
import { useEffect, useState } from "react";
// import JoinButton from "../../../reusable/Button/JoinButton";

const ManageClubStudent = () => {
  const [btnFunction, setBtnFunction] = useState("");

  useEffect(() => {
    setBtnFunction(<Clubs url="api/get-clubs" type="JOIN" />);
  }, []);

  const listProductHandler = () => {
    setBtnFunction(<Clubs url="api/get-clubs" type="JOIN" />);
  };

  // const myClubHandler = () => {
  //   setBtnFunction(<Clubs urls="api/get-clubs" type="JOINED" />);
  // };

  return (
    <div>
      <div className={classes.btns}>
        <button className="btn" onClick={listProductHandler}>
          List
        </button>
        {/* <JoinButton onClick={myClubHandler} type="button">
          My Clubs
        </JoinButton> */}
      </div>
      <div className={classes.function}>{btnFunction}</div>
    </div>
  );
};

export default ManageClubStudent;
