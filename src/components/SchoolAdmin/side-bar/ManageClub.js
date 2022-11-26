import { useEffect, useState } from "react";
import JoinButton from "../../../reusable/Button/JoinButton";
import AddClub from "../../../reusable/function-buttons/AddClub";

import Clubs from "../../Student/side-bar/Clubs";

import classes from "./ManageBusinessOwner.module.css";

const ManageClub = () => {
  const [btnFunction, setBtnFunction] = useState("");

  useEffect(() => {
    setBtnFunction(<Clubs url="api/get-clubs" type="business-owner" />);
  }, []);

  const listProductHandler = () => {
    setBtnFunction(<Clubs url="api/get-clubs" type="DELETE" />);
  };

  const addClubHandler = () => {
    setBtnFunction(<AddClub />);
  };

  return (
    <div>
      <div className={classes.btns}>
        <button className="btn" onClick={listProductHandler}>
          List
        </button>
        <JoinButton onClick={addClubHandler} type="button">
          Add Clubs
        </JoinButton>
      </div>
      <div className={classes.function}>{btnFunction}</div>
    </div>
  );
};

export default ManageClub;
