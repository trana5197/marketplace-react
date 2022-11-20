import { useState } from "react";
import { Link } from "react-router-dom";
import useInput from "../../hook/use-input";

import Button from "../../reusable/Button/Button";
import Input from "../../reusable/Input/Input";

import classes from "./CreateAccount.module.css";

const CreateAccount = () => {
  const [enteredProfile, setEnteredProfile] = useState("");
  const profileIsValid = enteredProfile !== "";

  const {
    enteredValue: enteredFirstName,
    valueIsValid: firstNameIsValid,
    valueIsInvalid: firstNameIsInvalid,
    onChangeHandler: firstNameChangeHandler,
    onBlurHandler: firstNameBlurHandler,
    reset: firstNameIsReset,
  } = useInput((value) => {
    return value.trim().length !== 0;
  });

  const {
    enteredValue: enteredLastName,
    valueIsValid: lastNameIsValid,
    valueIsInvalid: lastNameIsInvalid,
    onChangeHandler: lastNameChangeHandler,
    onBlurHandler: lastNameBlurHandler,
    reset: lastNameIsReset,
  } = useInput((value) => {
    return value.trim().length !== 0;
  });

  const {
    enteredValue: enteredEmail,
    valueIsValid: emailIsValid,
    valueIsInvalid: emailIsInvalid,
    onChangeHandler: emailChangeHandler,
    onBlurHandler: emailBlurHandler,
    reset: emailIsReset,
  } = useInput((value) => {
    return value.includes("@");
  });

  const {
    enteredValue: enteredPassword,
    valueIsValid: passwordIsValid,
    valueIsInvalid: passwordIsInvalid,
    onChangeHandler: passwordChangeHandler,
    onBlurHandler: passwordBlurHandler,
    reset: passwordIsReset,
  } = useInput((value) => {
    return value.length > 6;
  });

  const profileChangeHandler = (event) => {
    setEnteredProfile(event.target.value);
  };

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

  const submitHandler = (event) => {
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

    console.log(newUser);

    firstNameIsReset();
    lastNameIsReset();
    emailIsReset();
    passwordIsReset();
    setEnteredProfile("");
  };

  return (
    <div className="form-box">
      <form
        className={`classes.form ${classes["create-container"]}`}
        onSubmit={submitHandler}
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
        >
          <option value="" defaultValue>
            Please choose one
          </option>
          <option value="student">Student</option>
          <option value="business-owner">Business Owner</option>
          <option value="school-admin">School Admin</option>
          <option value="super-admin">Super Admin</option>
        </select>
        <Button type="submit">Create Account</Button>
        <Link to="/" className={classes["btn--cancel"]}>
          Cancel
        </Link>
      </form>
    </div>
  );
};

export default CreateAccount;
