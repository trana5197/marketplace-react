import { useContext, useState } from "react";
import BuyButton from "../../../reusable/Button/BuyButton";
import Input from "../../../reusable/Input/Input";
import classes from "./Products.module.css";
import axios from "axios";
import AuthContext from "../../../store/auth-context";

const Product = (props) => {
  const [enteredAmount, setEnteredAmount] = useState("");
  const authCtx = useContext(AuthContext);

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const productFormHandler = (event) => {
    event.preventDefault();

    axios
      .post("/api/create-orders", {
        name: props.product.name,
        price: props.product.price,
        quantity: enteredAmount,
        email: authCtx.email,
      })
      .then((res) => {
        if (res.data.status === 200) {
          console.log(res.data);
        } else {
          console.log("error");
        }
      });

    setEnteredAmount("");
  };
  return (
    <form className={classes.product} onSubmit={productFormHandler}>
      <div className={classes["product-desc"]}>
        <p className={classes["product-name"]}>{props.product.name}</p>
        <p className={classes["product-price"]}>{`$ ${props.product.price}`}</p>
      </div>
      <div
        className={classes.btn}
        // onSubmit={addProductSubmitHandler}
      >
        <Input
          id="amount"
          type="number"
          placeholder="Amount"
          onChange={amountChangeHandler}
          value={enteredAmount}
        >
          Amount
        </Input>
        <BuyButton btnType="buy">BUY</BuyButton>
      </div>
    </form>
  );
};

export default Product;
