import { useContext, useState } from "react";
import AuthContext from "../../store/auth-context";

import axios from "axios";

import Button from "../Button/Button";
import Input from "../Input/Input";

const AddFunction = () => {
  const authCtx = useContext(AuthContext);
  const [enteredProductName, setEnteredProductName] = useState("");
  const [enteredProductPrice, setEnteredProductPrice] = useState("");

  const productNameChangeHandler = (event) => {
    setEnteredProductName(event.target.value);
  };

  const productPriceChangeHandler = (event) => {
    setEnteredProductPrice(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const newProduct = {
      name: enteredProductName,
      price: enteredProductPrice,
      email: authCtx.email,
    };

    axios.post("/api/create-product", newProduct).then((res) => {
      if (res.data.status === 200) {
        console.log(res.data);
      } else {
        console.log("error");
      }
    });

    console.log(newProduct);
    setEnteredProductName("");
    setEnteredProductPrice("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <Input
        id="name"
        label="Product Name"
        type="text"
        placeholder="Product Name"
        onChange={productNameChangeHandler}
        value={enteredProductName}
      />
      <Input
        id="price"
        label="Product Price"
        type="text"
        placeholder="Product Price"
        onChange={productPriceChangeHandler}
        value={enteredProductPrice}
      />
      <div>
        <Button type="submit">ADD PRODUCT</Button>
      </div>
    </form>
  );
};

export default AddFunction;
