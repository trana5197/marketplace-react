import { Link } from "react-router-dom";
import useInput from "../../hook/use-input";
import Button from "../../reusable/Button/Button";
import Input from "../../reusable/Input/Input";
import classes from "./ContactUs.module.css";

const ContactUs = () => {
  const {
    enteredValue: enteredFullName,
    valueIsValid: fullNameIsValid,
    valueIsInvalid: fullNameIsInvalid,
    onChangeHandler: fullNameChangeHandler,
    onBlurHandler: fullNameBlurHandler,
    reset: fullNameReset,
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
    enteredValue: enteredQuery,
    valueIsValid: queryIsValid,
    valueIsInvalid: queryIsInvalid,
    onChangeHandler: queryChangeHandler,
    onBlurHandler: queryBlurHandler,
    reset: queryReset,
  } = useInput((value) => value.trim().length !== 0);

  let formIsValid = false;

  if (fullNameIsValid && emailIsValid && queryIsValid) {
    formIsValid = true;
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    const query = {
      fullName: enteredFullName,
      email: enteredEmail,
      query: enteredQuery,
    };

    console.log(query);

    fullNameReset();
    emailReset();
    queryReset();
  };

  return (
    <div className="form-box">
      <form
        className={`classes.form ${classes["contact-container"]}`}
        onSubmit={onSubmitHandler}
        noValidate
      >
        <h1
          className={`heading-primary ${classes["heading-primary-add"]} border-bottom`}
        >
          Contact Us
        </h1>

        <Input
          id="fullName"
          label="Full Name"
          type="text"
          value={enteredFullName}
          onChange={fullNameChangeHandler}
          placeholder="John Doe"
          onBlur={fullNameBlurHandler}
        />
        {fullNameIsInvalid && (
          <p className={classes.invalid}>First name cannot be empty</p>
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

        <div>
          <label htmlFor="query">Query</label>
          <textarea
            id="query"
            type="text"
            value={enteredQuery}
            onChange={queryChangeHandler}
            placeholder="Query...."
            onBlur={queryBlurHandler}
            required
          ></textarea>
        </div>
        {queryIsInvalid && (
          <p className={classes.invalid}>Query cannot be empty</p>
        )}

        <Button type="submit" disabled={!formIsValid}>
          Submit
        </Button>
        <Link to="/" className={classes["btn--cancel"]}>
          Cancel
        </Link>
      </form>
    </div>
  );
};

export default ContactUs;
