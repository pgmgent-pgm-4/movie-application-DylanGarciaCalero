import React, { useCallback } from "react";
import { withRouter } from "react-router";
import { firebase } from "../firebase/firebaseConfig";
import "../Css/register.scss"

import Nav from "../Components/Nav";

const Signup = ({ history }) => {
  const handleSignUp = useCallback(async e => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    try {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  }, [history]);

  return (
    <div>
        <Nav/>
        <div className="signup__container">
            <h1>Sign up</h1>
            <form className="signup__form" onSubmit={handleSignUp}>
                <label htmlFor="email"> Email </label>
                <input name="email" type="email" placeholder="Email" />
                <label htmlFor="password"> Password </label>
                <input name="password" type="password" placeholder="Password" />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    </div>
  );
};

export default withRouter(Signup);