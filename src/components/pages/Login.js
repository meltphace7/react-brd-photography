import classes from './Login.module.css'
import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth-slice";
import useValidation from "../../hooks/use-validation";
import hostURL from "../../hosturl";
import ModalMessage from '../notifications/ModalMessage'

const Login = () => {
  const [isMessage, setIsMessage] = useState(false);
  const [message, setMessage] = useState('')
  // Validating user input with custom hook - useValidation()
  const {
    enteredValue: email,
    valueIsValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useValidation((value) => value.trim() !== "" && value.includes("@"));

  const {
    enteredValue: password,
    valueIsValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    valueBlurHandler: passwordBlurHandler,
    reset: passwordReset,
  } = useValidation((value) => value.trim() !== "" && value.length > 4);

  const history = useHistory();
  const dispatch = useDispatch();

  let formIsValid = false;

  if (emailIsValid && passwordIsValid) {
    formIsValid = true;
  }

  const loginHandler = async (event) => {
    event.preventDefault();
    if (!formIsValid) {
      setIsMessage(true);
      setMessage("Your email or password is invalid!");
      return;
    }

    const userLoginInput = {
      email,
      password,
    };

    try {
      const response = await fetch(`${hostURL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userLoginInput),
      });
      if (!response.ok || response.status === 422) {
        throw new Error("Could not authenticate you!");
      }
      const resData = await response.json();

      // SAVE RETURNED AUTH TOKEN IN LOCAL STORAGE
      const isAdmin = resData.isAdmin;
      const token = resData.token;
      dispatch(authActions.login(resData.userName));
      if (isAdmin) {
        dispatch(authActions.adminLogin());
      }
      localStorage.setItem("token", token);
      localStorage.setItem("userId", resData.userId);
      const remainingMilliseconds = 60 * 60 * 1000;
      const expiryDate = new Date(new Date().getTime() + remainingMilliseconds);
      localStorage.setItem("expiryDate", expiryDate.toISOString());
      // AUTO LOGOUT ///
      setAutoLogout(remainingMilliseconds);
      ///////////
      history.push("/home");
    } catch (err) {
      setMessage(err.message);
      setIsMessage(true);
      console.log();
    }
    emailReset();
    passwordReset();
  };

    const logoutHandler = () => {
      dispatch(authActions.logout());
      localStorage.setItem("token", null);
      localStorage.setItem("userId", null);
      // localStorage.setItem("expiryDate", null);
      history.replace("/home");
    };

    const setAutoLogout = (milliseconds) => {
      setTimeout(() => {
        logoutHandler();
      }, milliseconds);
    };
  
  const closeModalHandler = () => {
    setMessage('');
    setIsMessage(false);
  }

  const emailClasses = emailHasError
    ? `${classes["login-input"]} ${classes["invalid"]}`
    : classes["login-input"];

  const passwordClasses = passwordHasError
    ? `${classes["login-input"]} ${classes["invalid"]}`
    : classes["login-input"];

  return (
    <div className={classes.background}>
      <div className={classes["form-body"]}>
        <form className={classes["login-form"]} onSubmit={loginHandler}>
          <h1>Login</h1>
          <Link className={classes["signup-link"]} to="/signup">
            Create Account
          </Link>
          {emailHasError && <p>Please enter a valid email!</p>}
          <input
            className={emailClasses}
            placeholder="Email"
            type="text"
            id="email"
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            value={email}
          />
          {passwordHasError && <p>Please enter a valid password!</p>}
          <input
            className={passwordClasses}
            placeholder="Password"
            type="password"
            id="password"
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
            value={password}
          />
          <button type="submit">Login</button>
          <Link className={classes["password-reset"]} to="reset-password">
            Forgot Your Password?
          </Link>
        </form>
      </div>
      {isMessage && <ModalMessage onCloseModal={closeModalHandler} message={message} />}
    </div>
  );
}

export default Login
