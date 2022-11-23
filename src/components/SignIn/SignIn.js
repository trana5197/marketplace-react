import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import useInput from "../../hook/use-input";

import Button from "../../reusable/Button/Button";
import Input from "../../reusable/Input/Input";

import AuthContext from "../../store/auth-context";
import axios from "axios";

import classes from "./SignIn.module.css";

const SignIn = () => {
  const authCtx = useContext(AuthContext);

  const navigate = useNavigate();

  const {
    enteredValue: enteredEmail,
    valueIsValid: emailIsValid,
    valueIsInvalid: emailIsInvalid,
    onChangeHandler: emailChangeHandler,
    onBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput((value) => value.includes("@"));

  const {
    enteredValue: enteredPassword,
    valueIsValid: passwordIsValid,
    valueIsInvalid: passwordIsInvalid,
    onChangeHandler: passwordChangeHandler,
    onBlurHandler: passwordBlurHandler,
    reset: passwordReset,
  } = useInput((value) => value.length > 6);

  let formIsValid = false;

  if (emailIsValid && passwordIsValid) {
    formIsValid = true;
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    const checkUser = {
      email: enteredEmail,
      password: enteredPassword,
    };

    axios.get("/sanctum/csrf-cookie").then(() => {
      axios.post("/api/sign-in", checkUser).then((res) => {
        if (res.data.status === 200) {
          console.log(res.data);
          // console.log(res.data.token);
          // console.log(res.data.profile);
          authCtx.signIn(res.data.token);
          authCtx.setFirstName(res.data.firstName);
          authCtx.setLastName(res.data.lastName);
          authCtx.setEmail(res.data.email);
          authCtx.setProfile(res.data.profile);
          // console.log(authCtx.profile);
          navigate("/", { replace: true });
        } else {
          console.log("error");
        }
      });
    });

    // console.log(checkUser);

    emailReset();
    passwordReset();
  };

  return (
    <div className="form-box">
      <form
        className={`classes.form ${classes["login-container"]}`}
        onSubmit={onSubmitHandler}
        noValidate
      >
        <h1
          className={`heading-primary ${classes["heading-primary-add"]} border-bottom`}
        >
          Sign In
        </h1>

        <Input
          id="email"
          label="Email Id"
          type="email"
          value={enteredEmail}
          onChange={emailChangeHandler}
          placeholder="me@example.com"
          onBlur={emailBlurHandler}
        />

        {emailIsInvalid && (
          <p className={classes.invalid}>Please enter a valid email address</p>
        )}

        <Input
          id="password"
          label="Password"
          type="password"
          value={enteredPassword}
          onChange={passwordChangeHandler}
          placeholder="Password"
          onBlur={passwordBlurHandler}
        />

        {passwordIsInvalid && (
          <p className={classes.invalid}>
            Password must be greater than 6 characters
          </p>
        )}

        <Button type="Submit" disabled={!formIsValid}>
          Sign in
        </Button>
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
