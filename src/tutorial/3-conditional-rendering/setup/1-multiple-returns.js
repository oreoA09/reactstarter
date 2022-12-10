import React, { useState, useEffect } from "react";
import loadingImg from "./loadingGif.gif";
import errImg from "./errGif.gif";


const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturns = () => {
  const [user, setUser] = useState("admin user");
  const [loading, setLoading] = useState(true);
  const [hadErr, setHasErr] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.status >= 200 && response.status <= 299) {
          return response.json();
        } else {
          setLoading(false);
          setHasErr(true);
          throw new Error(response.statusText);
        }
      })
      .then((user) => {
        // console.log(user)
        const { login } = user;
        setUser(login);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  if(loading){
    return <div><img src={loadingImg} className='gifImg'/></div>
  }

  if(hadErr){
    return <div><img src={errImg} className='gifImg'/></div>
  }

  return <div><h2>{user}</h2></div>;
};

export default MultipleReturns;
