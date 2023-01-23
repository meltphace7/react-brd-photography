import classes from './Login.module.css'
import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth-slice";
import useValidation from "../../hooks/use-validation";
import hostURL from "../../hosturl";

const Login = () => {
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

  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  let formIsValid = false;

  if (emailIsValid && passwordIsValid) {
    formIsValid = true;
  }

  const loginHandler = async (event) => {
    console.log('click')
    event.preventDefault();
    if (!formIsValid) {
      setIsError(true);
      setErrorMessage("Your email or password is invalid!");
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
      console.log(resData);
      const isAdmin = resData.isAdmin;
      const token = resData.token;
      dispatch(authActions.login(resData.userName));
      if (isAdmin) {
        dispatch(authActions.adminLogin());
      }
      console.log('logged-in');
      localStorage.setItem("token", token);
      localStorage.setItem("userId", resData.userId);
      const remainingMilliseconds = 60 * 60 * 1000;
      const expiryDate = new Date(new Date().getTime() + remainingMilliseconds);
      localStorage.setItem("expiryDate", expiryDate.toISOString());
      // AUTO LOGOUT ///
      setAutoLogout(remainingMilliseconds);
      ///////////
      //   props.onLogin();
      history.push("/home");
    } catch (err) {
      setErrorMessage(err.message);
      setIsError(true);
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
      console.log("AUTO LOG TIMER STARTED");
      setTimeout(() => {
        logoutHandler();
        console.log("AUTO LOG OUT");
      }, milliseconds);
    };

  const emailClasses = emailHasError
    ? `${classes["login-input"]} ${classes["invalid"]}`
    : classes["login-input"];

  const passwordClasses = passwordHasError
    ? `${classes["login-input"]} ${classes["invalid"]}`
    : classes["login-input"];

//   const closeModalHandler = () => {
//     setIsError(false);
//   };
  return (
    <div className={classes.background}>
      <div className={classes["form-body"]}>
        <form className={classes["login-form"]} onSubmit={loginHandler}>
          <h1>Login</h1>
          <Link to='/signup'>Create Account</Link>
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
        {/* {isError && (
          <ModalMessage
            message={errorMessage}
            onCloseModal={closeModalHandler}
          />
        )} */}
      </div>
    </div>
  );
}

export default Login
