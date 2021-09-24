import React from "react";
import users from "../../services/user";
import all from "./all";

const ProtectedRoute = ({ path, component: Component, render, ...rest }) => {
  return (
    <all.Route
      {...rest}
      render={(props) => {
        if (!users.getCurrentUser())
          return (
            <all.Redirect
              to={{
                pathname: "/",
                state: { from: props.location },
              }}
            />
          );
        return Component ? <Component {...props} /> : render(props);
      }}
    />
  );
};

export default ProtectedRoute;
