import axios from "axios";
import { useEffect, useState } from "react";
import ClubList from "./ClubList";

import classes from "./Clubs.module.css";

const Clubs = (props) => {
  const [data, setData] = useState("");

  useEffect(() => {
    if (props.urls) {
      axios.get(`${props.urls}/{data.id}`).then((res) => {
        setData(res.data.data);
        // console.log(res.data.data);
      });
    } else {
      axios.get(props.url).then((res) => {
        setData(res.data.data);
        // console.log(res.data.data);
      });
    }
  }, [props.urls, props.url]);

  return (
    <div className={classes.container}>
      {data &&
        data.map((data) => {
          return (
            <ClubList
              type={props.type}
              club={data}
              key={data.id}
              btnType="DELETE"
            />
          );
        })}
    </div>
  );
};

export default Clubs;
