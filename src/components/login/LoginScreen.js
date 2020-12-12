import React, { useContext } from "react";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";

export const LoginScreen = ({ history }) => {
  const { user, dispatch } = useContext(AuthContext);

  const handlerClick = () => {
    const lastPath = localStorage.getItem("lastPath") || "/";
    dispatch({
      type: types.login,
      payload: { name: "Jovaslink" },
    });
    history.replace(lastPath);
  };
  console.log(user);
  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />
      <button className="btn btn-primary" onClick={handlerClick}>
        Login
      </button>
    </div>
  );
};
