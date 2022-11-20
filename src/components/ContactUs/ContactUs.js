import { Link } from "react-router-dom";
import Button from "../../reusable/Button/Button";
import Input from "../../reusable/Input/Input";
import classes from "./ContactUs.module.css";

const ContactUs = () => {
  return (
    <div className="form-box">
      <form className={`classes.form ${classes["contact-container"]}`}>
        <h1
          className={`heading-primary ${classes["heading-primary-add"]} border-bottom`}
        >
          Contact Us
        </h1>

        <Input
          id="fullName"
          label="Full Name"
          type="text"
          placeholder="John Doe"
        />

        <Input
          id="email"
          label="Email Id"
          type="email"
          placeholder="me@example.com"
        />

        <div>
          <label htmlFor="query">Query</label>
          <textarea
            id="query"
            type="text"
            placeholder="Query...."
            required
          ></textarea>
        </div>
        <Button type="submit">Submit</Button>
        <Link to="/" className={classes["btn--cancel"]}>
          Cancel
        </Link>
      </form>
    </div>
  );
};

export default ContactUs;
