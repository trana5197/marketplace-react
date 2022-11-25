import classes from "./BuyButton.module.css";

const JoinButton = (props) => {
  return (
    <button
      className={`btn ${classes.join}`}
      type={props.type}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default JoinButton;
