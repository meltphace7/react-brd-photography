import React, { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import classes from "./Contact.module.css";
import Modal from "../Modal";
// https://formspree.io/f/xgedjreb

const Contact = () => {
  const [state, handleSubmit] = useForm("contactForm");
  const [modalIsShown, setModalIsShown] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      setModalIsShown(true);
    }
  }, [state.succeeded]);

  const okHandler = function () {
    setModalIsShown(false);
  };

  const successMessage = (
    <Modal>
      <h2 className={classes["success-message"]}>Message Sent Succesfully!</h2>
      <button className={classes["ok-button"]} onClick={okHandler}>
        OK
      </button>
    </Modal>
  );

  return (
    <div className={classes.contact}>
      <h1>CONTACT</h1>
      <p>brock.dallman@gmail.com</p>

      <form onSubmit={handleSubmit} className={classes.form} id="contact-form">
        <div className={classes.form__group}>
          <label htmlFor="firstName">First Name</label>
          <input
            className={classes["form__input--first-name"]}
            type="text"
            id="firstName"
            name="firstName"
            required
          />
        </div>
        <div className={classes.form__group}>
          <label htmlFor="lastName">Last Name</label>
          <input
            className={classes["form__input--last-name"]}
            type="text"
            id="lastName"
            name="lastName"
            required
          />
        </div>
        <div className={classes.form__group}>
          <label htmlFor="email">Email Address</label>
          <input
            className={classes["form__input--email"]}
            type="email"
            id="email"
            name="email"
            required
          />
        </div>

        <div className={classes.form__group}>
          <label htmlFor="subject">Subject</label>
          <input
            className={classes["form__input--subject"]}
            type="text"
            id="subject"
            name="subject"
            required
          />
        </div>
        <div className={classes.form__group}>
          <label htmlFor="message">Message</label>
          <textarea
            className={classes.form__message}
            type="text"
            name="message"
            id="message"
            required
          />
        </div>
        <ValidationError field="email" prefix="Email" errors={state.errors} />
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
      {modalIsShown && successMessage}
      {/* {successMessage} */}
    </div>
  );
};

export default Contact;
