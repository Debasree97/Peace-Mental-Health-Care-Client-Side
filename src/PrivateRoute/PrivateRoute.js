import { CircularProgress } from "@mui/material";
import {
  Route,
  Redirect,
} from "react-router-dom";
import useFirebase from "../hooks/useFirebase";

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useFirebase();
    if (isLoading) {
      return <CircularProgress />;
    }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user?.displayName ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/signup",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
