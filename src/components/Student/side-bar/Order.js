// import { useState } from "react";
import classes from "./Orders.module.css";

const Order = (props) => {
  // const [total, setTotal] = useState({ currentAmt: 0, total: 0 });

  // setTotal({
  //   currentAmt: +(props.order.quantity * props.order.price),
  //   total: +(total.total + total.currentAmt),
  // });

  // props.total(total.total);

  return (
    <div className={classes.order}>
      <div className={classes.desc}>
        <p>
          {`${props.order.name}`} <span>{`(Qty:${props.order.quantity})`}</span>
        </p>
      </div>
      <div className={classes.price}>
        <p>{`$ ${props.order.price}`}</p>
      </div>
    </div>
  );
};

export default Order;
