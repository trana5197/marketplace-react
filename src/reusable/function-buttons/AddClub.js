import axios from "axios";
import { useContext, useState } from "react";
import AuthContext from "../../store/auth-context";
import Button from "../Button/Button";
import Input from "../Input/Input";

const AddClub = () => {
  const authCtx = useContext(AuthContext);
  const [enteredClubName, setEnteredClubName] = useState("");

  const clubNameChangeHandler = (event) => {
    setEnteredClubName(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const newProduct = {
      name: enteredClubName,
      email: authCtx.email,
    };

    axios.post("/api/create-club", newProduct).then((res) => {
      if (res.data.status === 200) {
        console.log(res.data);
      } else {
        console.log("error");
      }
    });

    console.log(newProduct);
    setEnteredClubName("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <Input
        id="name"
        label="Club Name"
        type="text"
        placeholder="Club Name"
        onChange={clubNameChangeHandler}
        value={enteredClubName}
      />
      <div>
        <Button type="submit">ADD CLUB</Button>
      </div>
    </form>
  );
};

export default AddClub;
