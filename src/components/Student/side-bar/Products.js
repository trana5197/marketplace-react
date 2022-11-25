import BuyButton from "../../../reusable/Button/BuyButton";
import axios from "axios";

import classes from "./Products.module.css";
import { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState("");

  useEffect(() => {
    axios.get("api/get-products").then((res) => {
      setProducts(res.data.data);
    });
  }, []);

  return (
    <form className={classes.products}>
      {products &&
        products.map((product) => {
          return (
            <div className={classes.product} key={product.id}>
              <div className={classes["product-desc"]}>
                <p className={classes["product-name"]}>{product.name}</p>
                <p
                  className={classes["product-price"]}
                >{`$ ${product.price}`}</p>
              </div>
              <div className={classes.btn}>
                <BuyButton btnType="buy">BUY</BuyButton>
              </div>
            </div>
          );
        })}
    </form>
  );
};

export default Products;
