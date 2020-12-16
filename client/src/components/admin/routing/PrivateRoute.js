import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

const PrivateRoute = ({ component: Component, ...rest }) => {
  //const state = useSelector(state => state.auth);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  return (
    <Route
      {...rest}
      render={(props) =>
        user && user.role != "customer" ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export default PrivateRoute;
