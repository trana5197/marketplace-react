import { Link } from "react-router-dom";

import Button from "../../reusable/Button/Button";
import Input from "../../reusable/Input/Input";

import classes from "./CreateAccount.module.css";

const CreateAccount = () => {
  return (
    <div className="form-box">
      <form className={`classes.form ${classes["create-container"]}`}>
        <div className={`${classes.heading} border-bottom`}>
          <h1 className="heading-primary">Create Account</h1>
          <p className="subheading">It's quick and easy.</p>
        </div>

        <Input
          id="first-name"
          name="First Name"
          type="text"
          placeholder="John"
        />
        <Input id="last-name" name="Last Name" type="text" placeholder="Doe" />
        <Input
          id="email"
          name="Email Id"
          type="email"
          placeholder="me@example.com"
        />
        <Input
          id="password"
          name="Password"
          type="password"
          placeholder="Password"
        />

        <label htmlFor="select-profile">Select your profile:</label>
        <select id="select-profile">
          <option value="">Please choose one</option>
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
