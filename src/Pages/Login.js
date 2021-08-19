import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import { firebase } from "../firebase/firebaseConfig.js";
import { AuthContext } from "../firebase/Auth";
import "../Css/register.scss"

import Nav from "../Components/Nav.js";

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async e => {
      e.preventDefault();
      const { email, password } = e.target.elements;
      try {
        await firebase
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div>
        <Nav/>
        <div className="login__container">
            <h1>Sign in</h1>
            <form className="login__form" onSubmit={handleLogin}>
                <label htmlFor="email"> Email </label>
                <input name="email" type="email" placeholder="Email" />
                
                <label htmlFor="password"> Password </label>
                <input name="password" type="password" placeholder="Password" />

                <button type="submit">Log in</button>
            </form>
        </div>
    </div>
  );
};

export default withRouter(Login);