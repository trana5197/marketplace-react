import axios from "axios";
import { useContext, useEffect, useState } from "react";
import JoinButton from "../../../reusable/Button/JoinButton";
import AuthContext from "../../../store/auth-context";
import Order from "./Order";
import classes from "./Orders.module.css";

const Orders = () => {
  const authCtx = useContext(AuthContext);
  const [orders, setOrders] = useState("");

  useEffect(() => {
    axios.get(`api/get-orders/${authCtx.email}`).then((res) => {
      if (res.data.status === 200) {
        setOrders(res.data.data);
      } else {
        console.log("error");
      }
    });
  }, [authCtx.email]);

  return (
    <div>
      <div>
        <JoinButton>MY ORDERS</JoinButton>
      </div>
      <div className={classes.container}>
        {orders &&
          orders.map((order) => {
            return (
              <Order
                key={order.id}
                order={order}
                // total={totalAmountHandler}
              />
            );
          })}
        {/* <div className={classes.total}> */}
        {/* <p>Total Amount:</p> */}
        {/* <p>$ {total}</p> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Orders;
