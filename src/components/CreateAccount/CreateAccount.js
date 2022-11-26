import { Link } from "react-router-dom";
import useInput from "../../hook/use-input";
import axios from "axios";

import Button from "../../reusable/Button/Button";
import Input from "../../reusable/Input/Input";

import classes from "./CreateAccount.module.css";

const CreateAccount = () => {
  const {
    enteredValue: enteredProfile,
    valueIsValid: profileIsValid,
    valueIsInvalid: profileIsInvalid,
    onChangeHandler: profileChangeHandler,
    onBlurHandler: profileBlurHandler,
    reset: profileReset,
  } = useInput((value) => value !== "");

  const {
    enteredValue: enteredFirstName,
    valueIsValid: firstNameIsValid,
    valueIsInvalid: firstNameIsInvalid,
    onChangeHandler: firstNameChangeHandler,
    onBlurHandler: firstNameBlurHandler,
    reset: firstNameReset,
  } = useInput((value) => value.trim().length !== 0);

  const {
    enteredValue: enteredLastName,
    valueIsValid: lastNameIsValid,
    valueIsInvalid: lastNameIsInvalid,
    onChangeHandler: lastNameChangeHandler,
    onBlurHandler: lastNameBlurHandler,
    reset: lastNameReset,
  } = useInput((value) => value.trim().length !== 0);

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

  if (
    firstNameIsValid &&
    lastNameIsValid &&
    emailIsValid &&
    passwordIsValid &&
    profileIsValid
  ) {
    formIsValid = true;
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    // console.log(firstNameIsInvalid);

    if (!formIsValid) {
      return;
    }

    const newUser = {
      firstName: enteredFirstName,
      lastName: enteredLastName,
      email: enteredEmail,
      password: enteredPassword,
      profile: enteredProfile,
    };

    axios.get("/sanctum/csrf-cookie").then(() => {
      axios.post("/api/create-account", newUser).then((res) => {
        if (res.data.status === 200) {
          console.log(res.data);
        } else {
          console.log("error");
        }
      });
    });

    // console.log(newUser);

    firstNameReset();
    lastNameReset();
    emailReset();
    passwordReset();
    profileReset();
  };

  return (
    <div className="form-box">
      <form
        className={`classes.form ${classes["create-container"]}`}
        onSubmit={onSubmitHandler}
        noValidate
      >
        <div className={`${classes.heading} border-bottom`}>
          <h1 className="heading-primary">Create Account</h1>
          <p className="subheading">It's quick and easy.</p>
        </div>

        <Input
          id="first-name"
          label="First Name"
          type="text"
          value={enteredFirstName}
          onChange={firstNameChangeHandler}
          placeholder="John"
          onBlur={firstNameBlurHandler}
        />
        {firstNameIsInvalid && (
          <p className={classes.invalid}>First name cannot be empty</p>
        )}

        <Input
          id="last-name"
          label="Last Name"
          type="text"
          value={enteredLastName}
          onChange={lastNameChangeHandler}
          placeholder="Doe"
          onBlur={lastNameBlurHandler}
        />
        {lastNameIsInvalid && (
          <p className={classes.invalid}>Last name cannot be empty</p>
        )}

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

        <label htmlFor="select-profile">Select your profile:</label>
        <select
          id="select-profile"
          value={enteredProfile}
          onChange={profileChangeHandler}
          onBlur={profileBlurHandler}
        >
          <option value="" defaultValue>
            Please choose one
          </option>
          <option value="student">Student</option>
          <option value="business-owner">Business Owner</option>
          {/* <option value="school-admin">School Admin</option>
          <option value="super-admin">Super Admin</option> */}
        </select>
        {profileIsInvalid && (
          <p className={classes.invalid}>Please select a valid profile</p>
        )}

        {/* <Button type="submit"> */}
        <Button type="submit" disabled={!formIsValid}>
          Create Account
        </Button>

        <Link to="/" className={classes["btn--cancel"]}>
          Cancel
        </Link>
      </form>
    </div>
  );
};

export default CreateAccount;
