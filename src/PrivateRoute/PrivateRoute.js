import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Cmp, ...rest }) => {
  const isauth = false;

  console.log(rest);
  return (
    <Route
      {...rest}
      render={(props) =>
        isauth ? <Cmp {...props} /> : <Redirect to={"/login"} />
      }
    />
  );
};

export default PrivateRoute;
