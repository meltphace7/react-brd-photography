import React, { useState } from 'react'
import { useForm } from "@formspree/react";
import classes from './Contact.module.css'

const Contact = () => {
  //https://formspree.io/f/mwkypwln
  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState("");
  // const [email, setEmail] = useState("");
  // const [subject, setSubject] = useState("");
  // const [message, setMessage] = useState("");

  const [state, handleSubmit] = useForm("contact-form");
  if (state.succeeded) {
    return <div>Thank you for signing up!</div>;
  }

  // const form = document.getElementById("my-form");
  // const formStatus = document.querySelector(".form-status");

  // async function handleSubmit(event) {
  //   event.preventDefault();
  //   const status = document.getElementById("my-form-status");
  //   const data = new FormData(event.target);
  //   fetch(event.target.action, {
  //     method: form.method,
  //     body: data,
  //     headers: {
  //       Accept: "application/json",
  //     },
  //   })
  //     .then((response) => {
  //       formStatus.classList.remove("form-status-error");
  //       formStatus.classList.add("form-status-success");
  //       status.innerHTML = "Message Sent Succesfully!";
  //       form.reset();
  //     })
  //     .catch((error) => {
  //       formStatus.classList.remove("form-status-success");
  //       formStatus.classList.add("form-status-error");
  //       status.innerHTML = "Oops! There was a problem submitting your form";
  //     });
  // }

  // form.addEventListener("submit", handleSubmit);

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
