import axios from "axios";

import BuyButton from "../Button/BuyButton";
import { Fragment, useEffect, useState } from "react";

import classes from "./ListFunction.module.css";

const ListFunction = (props) => {
  const [data, setData] = useState("");

  useEffect(() => {
    axios.get(props.url).then((res) => {
      setData(res.data.data);
    });
  }, [props.url]);

  // console.log(products);

  return (
    <form className={classes.container}>
      {data &&
        data.map((data) => {
          return (
            <div className={classes.data} key={data.id}>
              <div className={classes["data-desc"]}>
                {props.type === "products" ? (
                  <Fragment>
                    <p className={classes["data-name"]}>{data.name}</p>
                    <p className={classes["data-price"]}>{`$ ${data.price}`}</p>
                  </Fragment>
                ) : (
                  <Fragment>
                    <p
                      className={classes["data-name"]}
                    >{`${data.firstName} ${data.lastName}`}</p>
                    <p className={classes["data-email"]}>{data.email}</p>
                    <p className={classes["data-profile"]}>{data.profile}</p>
                  </Fragment>
                )}
              </div>
              <div className={classes.btn}>
                <BuyButton btnType="buy">DELETE</BuyButton>
              </div>
            </div>
          );
        })}
    </form>
  );
};

export default ListFunction;
