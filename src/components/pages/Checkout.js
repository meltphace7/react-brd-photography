import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import classes from "./Checkout.module.css";
import ModalMessage from "../notifications/ModalMessage";
import { useHistory } from "react-router-dom";
import hostURL from "../../hosturl";
import useValidation from "../../hooks/use-validation";

const Checkout = (props) => {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
    const isAuth = useSelector((state) => state.auth.isAuth);
    console.log('hostURL', hostURL)

  const USERCART = cart;
  console.log("USERs CArt", USERCART);
  console.log(cart);
  console.log(isAuth);
  // Validating user input with custom hook - useValidation()

  ////// USER CONTACT INFO //////////
  const {
    enteredValue: email,
    valueIsValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useValidation((value) => value.trim() !== "" && value.includes("@"));

  const {
    enteredValue: phoneNumber,
    valueIsValid: phoneNumberIsValid,
    hasError: phoneNumberHasError,
    valueChangeHandler: phoneNumberChangeHandler,
    valueBlurHandler: phoneNumberBlurHandler,
    reset: phoneNumberReset,
  } = useValidation(
    (value) => value.trim() !== "" && value.length > 9 && !isNaN(+value)
  );

  ///////// USER BILLING INFO ///////////////
  const {
    enteredValue: country,
    valueIsValid: countryIsValid,
    hasError: countryHasError,
    valueChangeHandler: countryChangeHandler,
    valueBlurHandler: countryBlurHandler,
    reset: countryReset,
  } = useValidation((value) => value.trim() !== "" && isNaN(+value));

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
    enteredValue: streetAddress,
    valueIsValid: streetAddressIsValid,
    hasError: streetAddressHasError,
    valueChangeHandler: streetAddressChangeHandler,
    valueBlurHandler: streetAddressBlurHandler,
    reset: streetAddressReset,
  } = useValidation((value) => value.trim() !== "");

  const {
    enteredValue: city,
    valueIsValid: cityIsValid,
    hasError: cityHasError,
    valueChangeHandler: cityChangeHandler,
    valueBlurHandler: cityBlurHandler,
    reset: cityReset,
  } = useValidation((value) => value.trim() !== "" && isNaN(+value));

  const {
    enteredValue: state,
    valueIsValid: stateIsValid,
    hasError: stateHasError,
    valueChangeHandler: stateChangeHandler,
    valueBlurHandler: stateBlurHandler,
    reset: stateReset,
  } = useValidation((value) => value.trim() !== "" && isNaN(+value));

  const {
    enteredValue: postalCode,
    valueIsValid: postalCodeIsValid,
    hasError: postalCodeHasError,
    valueChangeHandler: postalCodeChangeHandler,
    valueBlurHandler: postalCodeBlurHandler,
    reset: postalCodeReset,
  } = useValidation(
    (value) => value.trim() !== "" && value.length > 4 && !isNaN(+value)
  );

  ///////// USER SHIPPING INFO ///////////////
  const {
    enteredValue: countryShipping,
    valueIsValid: countryShippingIsValid,
    hasError: countryShippingHasError,
    valueChangeHandler: countryShippingChangeHandler,
    valueBlurHandler: countryShippingBlurHandler,
    reset: countryShippingReset,
  } = useValidation((value) => value.trim() !== "" && isNaN(+value));

  const {
    enteredValue: firstNameShipping,
    valueIsValid: firstNameShippingIsValid,
    hasError: firstNameShippingHasError,
    valueChangeHandler: firstNameShippingChangeHandler,
    valueBlurHandler: firstNameShippingBlurHandler,
    reset: firstNameShippingReset,
  } = useValidation((value) => value.trim() !== "" && isNaN(+value));

  const {
    enteredValue: lastNameShipping,
    valueIsValid: lastNameShippingIsValid,
    hasError: lastNameShippingHasError,
    valueChangeHandler: lastNameShippingChangeHandler,
    valueBlurHandler: lastNameShippingBlurHandler,
    reset: lastNameShippingReset,
  } = useValidation((value) => value.trim() !== "" && isNaN(+value));

  const {
    enteredValue: streetAddressShipping,
    valueIsValid: streetAddressShippingIsValid,
    hasError: streetAddressShippingHasError,
    valueChangeHandler: streetAddressShippingChangeHandler,
    valueBlurHandler: streetAddressShippingBlurHandler,
    reset: streetAddressShippingReset,
  } = useValidation((value) => value.trim() !== "");

  const {
    enteredValue: cityShipping,
    valueIsValid: cityShippingIsValid,
    hasError: cityShippingHasError,
    valueChangeHandler: cityShippingChangeHandler,
    valueBlurHandler: cityShippingBlurHandler,
    reset: cityShippingReset,
  } = useValidation((value) => value.trim() !== "" && isNaN(+value));

  const {
    enteredValue: stateShipping,
    valueIsValid: stateShippingIsValid,
    hasError: stateShippingHasError,
    valueChangeHandler: stateShippingChangeHandler,
    valueBlurHandler: stateShippingBlurHandler,
    reset: stateShippingReset,
  } = useValidation((value) => value.trim() !== "" && isNaN(+value));

  const {
    enteredValue: postalCodeShipping,
    valueIsValid: postalCodeShippingIsValid,
    hasError: postalCodeShippingHasError,
    valueChangeHandler: postalCodeShippingChangeHandler,
    valueBlurHandler: postalCodeShippingBlurHandler,
    reset: postalCodeShippingReset,
  } = useValidation(
    (value) => value.trim() !== "" && value.length > 4 && !isNaN(+value)
  );

  const history = useHistory();

  const [isMessage, setIsMessage] = useState(false);
  const [message, setMessage] = useState("");
  const [messageIsError, setMessageIsError] = useState(false);
  const [isShippingSame, setIsShippingSame] = useState(true);

  const isShippingSameChangeHandler = (e) => {
    setIsShippingSame((prevState) => !prevState);
  };

  let formIsValid = false;

  if (
    (emailIsValid &&
      phoneNumberIsValid &&
      countryIsValid &&
      firstNameIsValid &&
      lastNameIsValid &&
      streetAddressIsValid &&
      cityIsValid &&
      stateIsValid &&
      postalCodeIsValid &&
      isShippingSame) ||
    (countryIsValid &&
      firstNameIsValid &&
      lastNameIsValid &&
      streetAddressIsValid &&
      cityIsValid &&
      stateIsValid &&
      postalCodeIsValid &&
      countryShippingIsValid &&
      firstNameShippingIsValid &&
      lastNameShippingIsValid &&
      streetAddressShippingIsValid &&
      cityShippingIsValid &&
      stateShippingIsValid &&
      postalCodeShippingIsValid)
  ) {
    formIsValid = true;
  }

  const submitOrderHandler = async (e) => {
    e.preventDefault();
    if (!formIsValid) {
      setMessageIsError(true);
      setIsMessage(true);
      setMessage("Please fill out form with valid info!");
      return;
    }

    const billingData = {
      email,
      phoneNumber,
      country,
      firstName,
      lastName,
      streetAddress,
      city,
      state,
      postalCode,
    };

    let shippingData;
    if (isShippingSame) {
      shippingData = {
        country,
        firstName,
        lastName,
        streetAddress,
        city,
        state,
        postalCode,
      };
    } else {
      shippingData = {
        country: countryShipping,
        firstName: firstNameShipping,
        lastName: lastNameShipping,
        streetAddress: streetAddressShipping,
        city: cityShipping,
        state: stateShipping,
        postalCode: postalCodeShipping,
      };
    }

    let orderData;
    let fetchURL;
    let headers;
    if (isAuth) {
      fetchURL = `${hostURL}/shop/submit-order`;
      headers = {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      };
      orderData = {
        billingData,
        shippingData,
      };
    } else {
      fetchURL = `${hostURL}/shop/submit-order-no-account`;
      headers = {
        "Content-Type": "application/json",
      };
      const userCart = cart;
      orderData = {
        billingData,
        shippingData,
        userCart,
      };
    }

    console.log("fetchURL ", fetchURL);
    console.log("headers ", headers);
    console.log("orderData ", orderData);

    try {
      const response = await fetch(fetchURL, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(orderData),
      });
      if (!response.ok) {
        throw new Error("Order could not be placed!");
      }
      const resData = await response.json();
      console.log(resData);
      props.onSubmitOrder();
      if (!isAuth) {
        dispatch(cartActions.clearCart());
      }
    } catch (err) {
      console.log(err);
    }

    emailReset();
    phoneNumberReset();
    countryReset();
    firstNameReset();
    lastNameReset();
    streetAddressReset();
    cityReset();
    stateReset();
    postalCodeReset();
    countryShippingReset();
    firstNameShippingReset();
    lastNameShippingReset();
    streetAddressShippingReset();
    cityShippingReset();
    stateShippingReset();
    postalCodeShippingReset();

    setIsMessage(true);
    setMessage("Your order has been submitted!  Thank You!");
  };

  const closeModalHandler = () => {
    if (!messageIsError) {
      setIsMessage(false);
      setMessage("");
      history.push("/home");
    } else {
      setMessageIsError(false);
      setIsMessage(false);
      setMessage("");
    }
  };

  ///// USER CONTACT INFO CLASSES ////////

  const emailClasses = emailHasError
    ? `${classes["input-group"]} ${classes["invalid"]}`
    : classes["input-group"];

  const phoneNumberClasses = phoneNumberHasError
    ? `${classes["input-group"]} ${classes["invalid"]}`
    : classes["input-group"];

  ///// USER BILLING INFO CLASSES ////////

  const countryClasses = countryHasError
    ? `${classes["input-group"]} ${classes["invalid"]}`
    : classes["input-group"];

  const firstNameClasses = firstNameHasError
    ? `${classes["input-group"]} ${classes["invalid"]}`
    : classes["input-group"];

  const lastNameClasses = lastNameHasError
    ? `${classes["input-group"]} ${classes["invalid"]}`
    : classes["input-group"];

  const streetAddressClasses = streetAddressHasError
    ? `${classes["input-group"]} ${classes["invalid"]}`
    : classes["input-group"];

  const cityClasses = cityHasError
    ? `${classes["input-group"]} ${classes["invalid"]}`
    : classes["input-group"];

  const stateClasses = stateHasError
    ? `${classes["input-group"]} ${classes["invalid"]}`
    : classes["input-group"];

  const postalCodeClasses = postalCodeHasError
    ? `${classes["input-group"]} ${classes["invalid"]}`
    : classes["input-group"];

  ///// USER SHIPPING INFO CLASSES ////////

  const countryShippingClasses = countryShippingHasError
    ? `${classes["input-group"]} ${classes["invalid"]}`
    : classes["input-group"];

  const firstNameShippingClasses = firstNameShippingHasError
    ? `${classes["input-group"]} ${classes["invalid"]}`
    : classes["input-group"];

  const lastNameShippingClasses = lastNameShippingHasError
    ? `${classes["input-group"]} ${classes["invalid"]}`
    : classes["input-group"];

  const streetAddressShippingClasses = streetAddressShippingHasError
    ? `${classes["input-group"]} ${classes["invalid"]}`
    : classes["input-group"];

  const cityShippingClasses = cityShippingHasError
    ? `${classes["input-group"]} ${classes["invalid"]}`
    : classes["input-group"];

  const stateShippingClasses = stateShippingHasError
    ? `${classes["input-group"]} ${classes["invalid"]}`
    : classes["input-group"];

  const postalCodeShippingClasses = postalCodeShippingHasError
    ? `${classes["input-group"]} ${classes["invalid"]}`
    : classes["input-group"];

  return (
    <div className={classes.background}>
      <div className={classes["background-overlay"]}>
        <form
          onSubmit={submitOrderHandler}
          className={classes["checkout-form"]}
        >
          <p>Contact Information</p>
          <div className={emailClasses}>
            {emailHasError && <p>Please enter a valid email!</p>}
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
              value={email}
            />
          </div>
          <div className={phoneNumberClasses}>
            {phoneNumberHasError && <p>Please enter a valid email!</p>}
            <label htmlFor="phone-number">Phone Number</label>
            <input
              type="text"
              id="phone-number"
              onChange={phoneNumberChangeHandler}
              onBlur={phoneNumberBlurHandler}
              value={phoneNumber}
            />
          </div>
          <p>Billing Address</p>
          <div className={countryClasses}>
            {countryHasError && <p>Please enter a valid country!</p>}
            <label htmlFor="country">Country</label>
            <input
              type="text"
              id="country"
              onChange={countryChangeHandler}
              onBlur={countryBlurHandler}
              value={country}
            />
          </div>
          <div className={classes["input-row"]}>
            <div className={firstNameClasses}>
              {firstNameHasError && <p>Please enter a valid name!</p>}
              <label htmlFor="first-name">First Name</label>
              <input
                type="text"
                id="first-name"
                onChange={firstNameChangeHandler}
                onBlur={firstNameBlurHandler}
                value={firstName}
              />
            </div>

            <div className={lastNameClasses}>
              {lastNameHasError && <p>Please enter a valid name!</p>}
              <label htmlFor="last-name">Last Name</label>
              <input
                type="text"
                id="last-name"
                onChange={lastNameChangeHandler}
                onBlur={lastNameBlurHandler}
                value={lastName}
              />
            </div>
          </div>
          <div className={streetAddressClasses}>
            {streetAddressHasError && <p>Please enter a valid address!</p>}
            <label htmlFor="street-address">Street Address</label>
            <input
              type="text"
              id="street-address"
              onChange={streetAddressChangeHandler}
              onBlur={streetAddressBlurHandler}
              value={streetAddress}
            />
          </div>
          <div className={classes["input-row"]}>
            <div className={cityClasses}>
              {cityHasError && <p>Please enter a valid city!</p>}
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                onChange={cityChangeHandler}
                onBlur={cityBlurHandler}
                value={city}
              />
            </div>
            <div className={stateClasses}>
              {stateHasError && <p>Please enter a valid city!</p>}
              <label htmlFor="state">State</label>
              <input
                type="text"
                id="state"
                onChange={stateChangeHandler}
                onBlur={stateBlurHandler}
                value={state}
              />
            </div>
          </div>
          <div className={postalCodeClasses}>
            {postalCodeHasError && <p>Please enter a valid postal code!</p>}
            <label htmlFor="postal-code">Postal Code</label>
            <input
              type="text"
              id="postal-code"
              onChange={postalCodeChangeHandler}
              onBlur={postalCodeBlurHandler}
              value={postalCode}
            />
          </div>
          <div className={classes["input-group-checkbox"]}>
            <label htmlFor="billing">Is Shipping same as Billing?</label>
            <input
              type="checkbox"
              id="billing"
              onChange={isShippingSameChangeHandler}
              checked={isShippingSame}
            />
          </div>
          {!isShippingSame && (
            <div className={classes["billing-fields"]}>
              <p>Shipping Address</p>
              <div className={countryShippingClasses}>
                {countryShippingHasError && (
                  <p>Please enter a valid country!</p>
                )}
                <label htmlFor="country">Country</label>
                <input
                  type="text"
                  id="country"
                  onChange={countryShippingChangeHandler}
                  onBlur={countryShippingBlurHandler}
                  value={countryShipping}
                />
              </div>
              <div className={classes["input-row"]}>
                <div className={firstNameShippingClasses}>
                  {firstNameShippingHasError && (
                    <p>Please enter a valid name!</p>
                  )}
                  <label htmlFor="first-name">First Name</label>
                  <input
                    type="text"
                    id="first-name"
                    onChange={firstNameShippingChangeHandler}
                    onBlur={firstNameShippingBlurHandler}
                    value={firstNameShipping}
                  />
                </div>

                <div className={lastNameShippingClasses}>
                  {lastNameShippingHasError && (
                    <p>Please enter a valid name!</p>
                  )}
                  <label htmlFor="last-name">Last Name</label>
                  <input
                    type="text"
                    id="last-name"
                    onChange={lastNameShippingChangeHandler}
                    onBlur={lastNameShippingBlurHandler}
                    value={lastNameShipping}
                  />
                </div>
              </div>
              <div className={streetAddressShippingClasses}>
                {streetAddressShippingHasError && (
                  <p>Please enter a valid address!</p>
                )}
                <label htmlFor="street-address">Street Address</label>
                <input
                  type="text"
                  id="street-address"
                  onChange={streetAddressShippingChangeHandler}
                  onBlur={streetAddressShippingBlurHandler}
                  value={streetAddressShipping}
                />
              </div>
              <div className={classes["input-row"]}>
                <div className={cityShippingClasses}>
                  {cityShippingHasError && <p>Please enter a valid city!</p>}
                  <label htmlFor="city">City</label>
                  <input
                    type="text"
                    id="city"
                    onChange={cityShippingChangeHandler}
                    onBlur={cityShippingBlurHandler}
                    value={cityShipping}
                  />
                </div>
                <div className={stateShippingClasses}>
                  {stateShippingHasError && <p>Please enter a valid state!</p>}
                  <label htmlFor="state">State</label>
                  <input
                    type="text"
                    id="state"
                    onChange={stateShippingChangeHandler}
                    onBlur={stateShippingBlurHandler}
                    value={stateShipping}
                  />
                </div>
              </div>
              <div className={postalCodeShippingClasses}>
                {postalCodeShippingHasError && (
                  <p>Please enter a valid postal code!</p>
                )}
                <label htmlFor="postal-code">Postal Code</label>
                <input
                  type="text"
                  id="postal-code"
                  onChange={postalCodeShippingChangeHandler}
                  onBlur={postalCodeShippingBlurHandler}
                  value={postalCodeShipping}
                />
              </div>
            </div>
          )}
          <button type="submit">SUBMIT</button>
        </form>
        {isMessage && (
          <ModalMessage message={message} onCloseModal={closeModalHandler} />
        )}
      </div>
    </div>
  );
};

export default Checkout;
