import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={classes["lab-inp"]}>
      <label htmlFor={props.id}>{props.name}</label>
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        required
      />
    </div>
  );
};

export default Input;
