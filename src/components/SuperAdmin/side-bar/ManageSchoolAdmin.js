import { useEffect, useState } from "react";
import JoinButton from "../../../reusable/Button/JoinButton";
import ListFunction from "../../../reusable/function-buttons/ListFunction";
import CreateAccount from "../../CreateAccount/CreateAccount";

import classes from "./ManageSchoolAdmin.module.css";

const ManageSchoolAdmin = () => {
  const [btnFunction, setBtnFunction] = useState("");

  useEffect(() => {
    setBtnFunction(
      <ListFunction url="api/get-users/school-admin" type="school-admin" />
    );
  }, []);

  const listProductHandler = () => {
    setBtnFunction(
      <ListFunction url="api/get-users/school-admin" type="school-admin" />
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
          Add School Admin
        </JoinButton>
      </div>
      <div className={classes.function}>{btnFunction}</div>
    </div>
  );
};

export default ManageSchoolAdmin;
