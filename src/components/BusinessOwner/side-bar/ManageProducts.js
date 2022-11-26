import { useEffect, useState } from "react";
import JoinButton from "../../../reusable/Button/JoinButton";
import AddFunction from "../../../reusable/function-buttons/AddFunction";
// import ListFunction from "../../../reusable/function-buttons/ListFunction";
import ListFunctionProduct from "../../../reusable/function-buttons/ListFunctionProduct";

import classes from "./ManageProducts.module.css";

const ManageProducts = () => {
  const [btnFunction, setBtnFunction] = useState("");

  useEffect(() => {
    setBtnFunction(
      <ListFunctionProduct url="api/get-products" type="products" />
    );
  }, []);

  const listProductHandler = () => {
    setBtnFunction(
      <ListFunctionProduct url="api/get-products" type="products" />
    );
  };

  const addProductHandler = () => {
    setBtnFunction(<AddFunction />);
  };

  return (
    <div>
      <div className={classes.btns}>
        <button className="btn" onClick={listProductHandler}>
          List
        </button>
        <JoinButton onClick={addProductHandler} type="button">
          Add Products
        </JoinButton>
      </div>
      <div className={classes.function}>{btnFunction}</div>
    </div>
  );
};

export default ManageProducts;
