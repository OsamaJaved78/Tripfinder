import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { login, register, socialLogin } from "../api/api";

export const AuthContext = React.createContext();

const fakeUserData = {
  id: 1,
  name: "Jhon Doe",
  avatar:
    "http://s3.amazonaws.com/redqteam.com/isomorphic-reloaded-image/profilepic.png",
  roles: ["USER", "ADMIN"],
};

const AuthProvider = (props) => {
  let history = useHistory();
  const [loggedIn, setLoggedIn] = useState(true);//filhal maine true krdya ha login ke lye
  const [name, setName] = useState("");
  const [conditions, setConditions] = useState("");
  const [user, setUser] = useState({});
  const [message, setmessage] = useState("");
  const [error, setError] = useState(null);

  const signIn = (params) => {
    login(params)
      .then((res) => {
        const Token = res.data.access_token;
        window.localStorage.setItem("Token", Token);
        // console.log(Token, "toooooo");
        setError(null);
        if (res.status === 401) {
          console.log("401 error");
        }
        setUser(fakeUserData);
        setLoggedIn(true);
        history.push(`/`);
      })
      .catch((err) => {
        setError(err.response.data.message);
        const errorM = err.response.data.message;
      });
  };
  const socialSignIn = (params) => {
    socialLogin(params)
      .then((res) => {
        const Token = res.data.access_token;
        window.localStorage.setItem("Token", Token);
        setError(null);
        if (res.status === 401) {
          console.log("401 error");
        }
        setUser(fakeUserData);
        setLoggedIn(true);
        history.push(`/`);
      })
      .catch((err) => {
        setError(err.response.data.message);
        const errorM = err.response.data.message;
      });
  };

  const signUp = (params) => {
    console.log(params);
    register(params)
      .then((res) => {
        if (res.status === 401) {
          console.log("401 error");
        }
        console.log(params.email, "sign up form Props");
        setUser(fakeUserData);
        setLoggedIn(true);
        history.push({
          pathname: `/`,
          state: {
            email: params.email,
            first_name: params.firstname,
            last_name: params.lastname,
            password: params.password,
          },
        });
      })
      .catch((err) => {
        const errorM = err.response.data.message;
        console.log(err.response.data.message);
        alert(errorM);
      });
  };
  const logOut = () => {
    window.localStorage.removeItem("Token");
    setUser(null);
    setLoggedIn(false);
    history.push("/sign-in");
  };

  return (
    <AuthContext.Provider
      value={{
        loggedIn,
        logOut,
        signIn,
        signUp,
        user,
      }}
    >
      <>{props.children}</>
    </AuthContext.Provider>
  );
};

export default AuthProvider;
