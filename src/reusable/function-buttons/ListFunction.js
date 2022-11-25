import classes from "../../components/Student/side-bar/Products.module.css";
import BuyButton from "../Button/BuyButton";

const DUMMY_PRODUCTS = [
  {
    id: "pr1",
    name: "Atomic Habits",
    price: 27,
  },
  {
    id: "pr2",
    name: "Macbook",
    price: 1200,
  },
  {
    id: "pr3",
    name: "Iphone",
    price: 900,
  },
  {
    id: "pr4",
    name: "Bed Frame",
    price: 70,
  },
  {
    id: "pr5",
    name: "Filter",
    price: 15,
  },
];

const ListFunction = () => {
  return (
    <form className={classes.products}>
      {DUMMY_PRODUCTS.map((product) => {
        return (
          <div className={classes.product} key={product.id}>
            <div className={classes["product-desc"]}>
              <p className={classes["product-name"]}>{product.name}</p>
              <p className={classes["product-price"]}>{`$ ${product.price}`}</p>
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
