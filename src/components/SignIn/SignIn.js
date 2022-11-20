import { Link } from "react-router-dom";
import Button from "../../reusable/Button/Button";
import Input from "../../reusable/Input/Input";

import classes from "./SignIn.module.css";

const SignIn = () => {
  return (
    <div className="form-box">
      <form className={`classes.form ${classes["login-container"]}`}>
        <h1
          className={`heading-primary ${classes["heading-primary-add"]} border-bottom`}
        >
          Sign In
        </h1>

        <Input
          id="email"
          label="Email Id"
          type="email"
          placeholder="me@example.com"
        />

        <Input
          id="password"
          label="Password"
          type="password"
          placeholder="Password"
        />

        <Button type="Submit">Sign in</Button>
        <Link className={classes["btn-forget"]} to="forget">
          Forget password?
        </Link>
        <Link className={classes["btn-link"]} to="/create-account">
          Create Account
        </Link>
      </form>
    </div>
  );
};

export default SignIn;
