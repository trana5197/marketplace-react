import { useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";

const AddFunction = () => {
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
      productName: enteredProductName,
      productPrice: enteredProductPrice,
    };

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
