import axios from "axios";
import { Fragment } from "react";
import BuyButton from "../Button/BuyButton";
import classes from "./ListFunction.module.css";

const ListFunctionPartProduct = (props) => {
  const deleteSubmitHandler = (event) => {
    event.preventDefault();

    axios.delete(`/api/del-product/${props.data.id}`).then((res) => {
      if (res.data.status === 200) {
        console.log(res.data);
      } else {
        console.log("error");
      }
    });
  };

  return (
    <form className={classes.data} onSubmit={deleteSubmitHandler}>
      <div className={classes["data-desc"]}>
        {props.type === "products" ? (
          <Fragment>
            <p className={classes["data-name"]}>{props.data.name}</p>
            <p className={classes["data-price"]}>{`$ ${props.data.price}`}</p>
          </Fragment>
        ) : (
          <Fragment>
            <p
              className={classes["data-name"]}
            >{`${props.data.firstName} ${props.data.lastName}`}</p>
            <p className={classes["data-email"]}>{props.data.email}</p>
            <p className={classes["data-profile"]}>{props.data.profile}</p>
          </Fragment>
        )}
      </div>
      <div className={classes.btn}>
        <BuyButton btnType="buy">DELETE</BuyButton>
      </div>
    </form>
  );
};

export default ListFunctionPartProduct;
