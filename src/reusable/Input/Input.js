import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={classes["lab-inp"]}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
        onBlur={props.onBlur}
        required
      />
    </div>
  );
};

export default Input;
