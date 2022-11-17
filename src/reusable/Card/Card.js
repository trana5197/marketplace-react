import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={classes.card}>
      <img className={classes["card-img"]} src={props.image} alt={props.alt} />
      <div className={classes["card-text"]}>
        <p className={classes["card-subheading"]}>{props.subheading}</p>
        <p className={classes["card-description"]}>{props.desc}</p>
      </div>
    </div>
  );
};

export default Card;
