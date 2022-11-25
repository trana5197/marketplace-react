import { useEffect, useState } from "react";
import JoinButton from "../../../reusable/Button/JoinButton";
import ListFunction from "../../../reusable/function-buttons/ListFunction";
import CreateAccount from "../../CreateAccount/CreateAccount";

import classes from "./ManageBusinessOwner.module.css";

const ManageBusinessOwner = () => {
  const [btnFunction, setBtnFunction] = useState("");

  useEffect(() => {
    setBtnFunction(
      <ListFunction url="api/get-users/business-owner" type="students" />
    );
  }, []);

  const listProductHandler = () => {
    setBtnFunction(
      <ListFunction url="api/get-users/business-owner" type="students" />
    );
  };

  const addStudentHandler = () => {
    setBtnFunction(<CreateAccount />);
  };

  return (
    <div>
      <div className={classes.btns}>
        <button className="btn" onClick={listProductHandler}>
          List
        </button>
        <JoinButton onClick={addStudentHandler} type="button">
          Add Business Owner
        </JoinButton>
      </div>
      <div className={classes.function}>{btnFunction}</div>
    </div>
  );
};

export default ManageBusinessOwner;
