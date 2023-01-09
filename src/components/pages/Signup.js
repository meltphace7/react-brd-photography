import React from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import classes from "./Signup.module.css";
import ModalMessage from "../notifications/ModalMessage";
// import hostURL from "../../hosturl";
import useValidation from "../../hooks/use-validation";

const Signup = () => {
  // Validating user input with custom hook - useValidation()
  const {
    enteredValue: firstName,
    valueIsValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    valueBlurHandler: firstNameBlurHandler,
    reset: firstNameReset,
  } = useValidation((value) => value.trim() !== "" && isNaN(+value));

  const {
    enteredValue: lastName,
    valueIsValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    valueBlurHandler: lastNameBlurHandler,
    reset: lastNameReset,
  } = useValidation((value) => value.trim() !== "" && isNaN(+value));

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
  } = useValidation((value) => value.trim() !== "" && value.length > 5);

  const [isMessage, setIsMessage] = useState(false);
  const [isErrorMessage, setIsErrorMessage] = useState(false);
  const [message, setMessage] = useState("");
  const history = useHistory();

  const firstNameClasses = firstNameHasError
    ? `${classes["signup-input"]} ${classes["invalid"]}`
    : classes["signup-input"];

  const lastNameClasses = lastNameHasError
    ? `${classes["signup-input"]} ${classes["invalid"]}`
    : classes["signup-input"];

  const emailClasses = emailHasError
    ? `${classes["signup-input"]} ${classes["invalid"]}`
    : classes["signup-input"];

  const passwordClasses = passwordHasError
    ? `${classes["signup-input"]} ${classes["invalid"]}`
    : classes["signup-input"];

  let formIsValid = false;

  if (firstNameIsValid && lastNameIsValid && emailIsValid && passwordIsValid) {
    formIsValid = true;
  }

  const signupHandler = async (event) => {
    event.preventDefault();

    if (!formIsValid) {
      setIsMessage(true);
      setIsErrorMessage(true);
      setMessage("Form info is invalid!");
      return;
    }

    const signupData = {
      firstName,
      lastName,
      email,
      password,
    };
    try {
      const response = await fetch(
        `http://localhost:8080/auth/signup`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(signupData),
        }
      );
      if (!response.ok || response.status === 422) {
        throw new Error("Validation Failed");
      }
      const resData = await response.json();
      console.log(resData);
      setIsMessage(true);
      setMessage("Account created succesfully!");
    } catch (err) {
      setIsMessage(true);
      setIsErrorMessage(true);
      setMessage(err.message);
      console.log(err);
    }
    // CLEAR INPUTS
    firstNameReset();
    lastNameReset();
    emailReset();
    passwordReset();
  };

  const closeModalHandler = () => {
    if (!isErrorMessage) {
      setIsMessage(false);
      setMessage("");
      history.push("/login");
    } else {
      setIsMessage(false);
      setIsErrorMessage(false);
      setMessage("");
    }
  };

  return (
    <div className={classes.background}>
      <div className={classes["form-body"]}>
        <form className={classes["signup-form"]} onSubmit={signupHandler}>
          <h1 className={classes["form-title"]}>Sign up</h1>
          {firstNameHasError && <p>Please enter a valid name!</p>}
          <input
            className={firstNameClasses}
            placeholder="First Name"
            type="text"
            id="firstName"
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            value={firstName}
          />
          {lastNameHasError && <p>Please enter a valid name!</p>}
          <input
            className={lastNameClasses}
            placeholder="Last Name"
            type="text"
            id="lastName"
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={lastName}
          />
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
          <button type="submit">Sign Up!</button>
        </form>
        {isMessage && (
          <ModalMessage onCloseModal={closeModalHandler} message={message} />
        )}
      </div>
    </div>
  );
};

export default Signup;
