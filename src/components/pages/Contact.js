import React, { useState } from 'react'
import { useForm, ValidationError } from "@formspree/react";
import classes from './Contact.module.css'

const Contact = () => {
  const [state, handleSubmit] = useForm("mwkypwln");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }


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
            required
          />
        </div>
        <div className={classes.form__group}>
          <label htmlFor="lastName">Last Name</label>
          <input
            className={classes["form__input--last-name"]}
            type="text"
            id="lastName"
            required
          />
        </div>
        <div className={classes.form__group}>
          <label htmlFor="email">Email Address</label>
          <input
            className={classes["form__input--email"]}
            type="email"
            id="email"
            required
          />
        </div>

        <div className={classes.form__group}>
          <label htmlFor="subject">Subject</label>
          <input
            className={classes["form__input--subject"]}
            type="text"
            id="subject"
            required
          />
        </div>
        <div className={classes.form__group}>
          <label htmlFor="message">Message</label>
          <textarea
            className={classes.form__message}
            type="text"
            id="message"
            required
          />
        </div>
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact
