import { Link } from "react-router-dom";
import Button from "../../reusable/Button/Button";
import Input from "../../reusable/Input/Input";

import classes from "./Forget.module.css";

const Forget = () => {
  return (
    <div className="form-box">
      <form className={`form ${classes["forget-container"]}`}>
        <h1 className="heading-secondary">Find your account</h1>
        <p className={classes["form-text"]}>Please enter your email address.</p>

        <Input
          id="email"
          name="Email Id"
          type="email"
          placeholder="me@example.com"
        />

        <Button type="submit">Verify</Button>

        <Link to="/sign-in" className={classes["btn--cancel"]}>
          Cancel
        </Link>
      </form>
    </div>
  );
};

export default Forget;
