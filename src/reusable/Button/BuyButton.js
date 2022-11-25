import classes from "./BuyButton.module.css";

const BuyButton = (props) => {
  return (
    <button className={`btn ${classes.buy}`} type="submit">
      {props.children}
    </button>
  );
};

export default BuyButton;
