import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button className={classes.btn} type={props.type} disabled={props.disabled}>
      {props.children}
    </button>
  );
};

export default Button;
