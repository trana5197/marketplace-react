// import BuyButton from "../../../reusable/Button/BuyButton";
import axios from "axios";

import classes from "./Products.module.css";
import { useEffect, useState } from "react";
// import AuthContext from "../../../store/auth-context";
// import Input from "../../../reusable/Input/Input";
import Product from "./Product";

const Products = () => {
  // const authCtx = useContext(AuthContext);

  const [products, setProducts] = useState("");

  useEffect(() => {
    axios.get("api/get-products").then((res) => {
      setProducts(res.data.data);
    });
  }, []);

  return (
    <div className={classes.products}>
      {products &&
        products.map((product) => {
          return <Product product={product} key={product.id} />;
        })}
    </div>
  );
};

export default Products;
