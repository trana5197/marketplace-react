import axios from "axios";
import { useEffect, useState } from "react";

import classes from "./ListFunction.module.css";
import ListFunctionPartProduct from "./ListFunctionPartProduct";

const ListFunctionProduct = (props) => {
  const [data, setData] = useState("");

  useEffect(() => {
    axios.get(props.url).then((res) => {
      setData(res.data.data);
    });
  }, [props.url]);

  // console.log(products);

  return (
    <div className={classes.container}>
      {data &&
        data.map((data) => {
          return (
            <ListFunctionPartProduct
              type={props.type}
              data={data}
              key={data.id}
            />
          );
        })}
    </div>
  );
};

export default ListFunctionProduct;
